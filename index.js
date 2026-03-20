'use strict';

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Division directories (relative to package root)
// ---------------------------------------------------------------------------
const DIVISIONS = {
  'practice-verticals': 'practice-verticals',
  'functional-domains': 'functional-domains',
  'jurisdictions-specialties': 'jurisdictions-specialties',
};

// ---------------------------------------------------------------------------
// YAML frontmatter parser (zero dependencies)
// ---------------------------------------------------------------------------
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  let currentKey = null;
  let listBuffer = null;

  for (const line of match[1].split('\n')) {
    // list item
    const listItem = line.match(/^\s+-\s+(.+)/);
    if (listItem && currentKey) {
      if (!listBuffer) listBuffer = [];
      listBuffer.push(listItem[1].trim());
      continue;
    }

    // flush previous list
    if (listBuffer && currentKey) {
      meta[currentKey] = listBuffer;
      listBuffer = null;
    }

    // key: value
    const kv = line.match(/^(\w[\w-]*):\s*(.*)/);
    if (kv) {
      currentKey = kv[1];
      const val = kv[2].trim().replace(/^["']|["']$/g, '');
      if (val === '') {
        // value will come as list items
      } else {
        meta[currentKey] = val;
      }
    }
  }

  // flush trailing list
  if (listBuffer && currentKey) {
    meta[currentKey] = listBuffer;
  }

  const bodyStart = raw.indexOf('---', 3);
  const body = bodyStart !== -1 ? raw.slice(bodyStart + 3).trim() : '';

  return { meta, body };
}

// ---------------------------------------------------------------------------
// Internal: load a single .md agent file → structured object
// ---------------------------------------------------------------------------
function loadAgentFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { meta, body } = parseFrontmatter(raw);

  return {
    id: path.basename(filePath, '.md'),
    file: path.relative(path.join(__dirname), filePath),
    name: meta.name || null,
    category: meta.category || null,
    emoji: meta.emoji || null,
    vibe: meta.vibe || null,
    services: meta.services || [],
    version: meta.version || null,
    tools: meta.tools || [],
    body,
    raw,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Get a single agent by its file-slug (e.g. "corporate-ma", "legal-research").
 * Searches across all divisions.
 */
function getAgent(slug) {
  for (const dir of Object.values(DIVISIONS)) {
    const filePath = path.join(__dirname, dir, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      return loadAgentFile(filePath);
    }
  }
  return null;
}

/**
 * List agents, optionally filtered by division.
 * @param {Object}  [options]
 * @param {string}  [options.division] - "practice-verticals" | "functional-domains" | "jurisdictions-specialties"
 * @param {string}  [options.category] - Same values as division (matches YAML `category` field)
 * @returns {Array}
 */
function listAgents(options) {
  const opts = options || {};
  const dirs = opts.division
    ? { [opts.division]: DIVISIONS[opts.division] }
    : DIVISIONS;

  const agents = [];

  for (const dir of Object.values(dirs)) {
    const absDir = path.join(__dirname, dir);
    if (!fs.existsSync(absDir)) continue;

    const files = fs.readdirSync(absDir).filter((f) => f.endsWith('.md'));
    for (const file of files) {
      const agent = loadAgentFile(path.join(absDir, file));

      if (opts.category && agent.category !== opts.category) continue;

      agents.push(agent);
    }
  }

  return agents;
}

/**
 * Return the list of available division names.
 */
function listDivisions() {
  return Object.keys(DIVISIONS);
}

/**
 * Search agents by keyword across name, vibe, and services.
 * @param {string} keyword - case-insensitive search term
 * @returns {Array}
 */
function searchAgents(keyword) {
  const term = keyword.toLowerCase();
  return listAgents().filter((agent) => {
    const haystack = [
      agent.name,
      agent.vibe,
      ...(agent.services || []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return haystack.includes(term);
  });
}

module.exports = {
  getAgent,
  listAgents,
  listDivisions,
  searchAgents,
};
