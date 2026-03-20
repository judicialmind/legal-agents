'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const SKIP_DIRS = new Set([
  '.git',
  'node_modules',
  '.github',
]);

const SKIP_FILES = new Set([
  'package-lock.json',
]);

const PATTERNS = [
  { name: 'npm_token', re: /npm_[A-Za-z0-9]{20,}/g },
  { name: 'github_pat', re: /ghp_[A-Za-z0-9]{20,}/g },
  { name: 'aws_access_key', re: /AKIA[0-9A-Z]{16}/g },
  { name: 'private_key', re: /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/g },
];

function walk(dir, out) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    const rel = path.relative(ROOT, abs);

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(abs, out);
      continue;
    }

    if (SKIP_FILES.has(entry.name)) continue;
    out.push({ abs, rel });
  }
}

function main() {
  const files = [];
  walk(ROOT, files);

  const findings = [];

  for (const file of files) {
    const buf = fs.readFileSync(file.abs);

    // Skip likely binary files.
    if (buf.includes(0)) continue;

    const text = buf.toString('utf8');
    const lines = text.split(/\r?\n/);

    lines.forEach((line, idx) => {
      for (const pattern of PATTERNS) {
        const matches = line.match(pattern.re);
        if (matches) {
          findings.push({
            file: file.rel,
            line: idx + 1,
            pattern: pattern.name,
            match: matches[0],
          });
        }
      }
    });
  }

  if (findings.length > 0) {
    console.error('Secret scan failed. Potential credentials found:');
    for (const f of findings) {
      console.error(`- ${f.file}:${f.line} [${f.pattern}] ${f.match}`);
    }
    process.exit(1);
  }

  console.log('Secret scan passed. No known credential patterns found.');
}

main();
