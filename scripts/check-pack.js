'use strict';

const { execSync } = require('child_process');

const FORBIDDEN_SUBSTRINGS = [
  '.env',
  '.pem',
  '.key',
  '.p12',
  '.git/',
  '.github/',
  'node_modules/',
  'scripts/',
];

function main() {
  const out = execSync('npm pack --dry-run --json', { encoding: 'utf8' });
  const parsed = JSON.parse(out);
  const files = (parsed[0] && parsed[0].files ? parsed[0].files : []).map((f) => f.path);

  const bad = files.filter((name) => {
    return FORBIDDEN_SUBSTRINGS.some((needle) => name.includes(needle));
  });

  if (bad.length > 0) {
    console.error('Pack check failed. Forbidden files detected in npm tarball:');
    for (const f of bad) {
      console.error(`- ${f}`);
    }
    process.exit(1);
  }

  console.log('Pack check passed. Published tarball contains only expected artifacts.');
}

main();
