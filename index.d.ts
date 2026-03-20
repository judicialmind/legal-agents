export interface Agent {
  /** File slug, e.g. "corporate-ma" */
  id: string;
  /** Relative path from package root */
  file: string;
  /** Display name from YAML frontmatter */
  name: string | null;
  /** Division / category slug */
  category: string | null;
  /** Emoji icon */
  emoji: string | null;
  /** One-line personality description */
  vibe: string | null;
  /** List of services the agent provides */
  services: string[];
  /** Semver version */
  version: string | null;
  /** Allowed tool names */
  tools: string[];
  /** Markdown body (everything after frontmatter) */
  body: string;
  /** Full raw file content */
  raw: string;
}

export interface ListOptions {
  /** Filter by division directory name */
  division?: 'practice-verticals' | 'functional-domains' | 'jurisdictions-specialties';
  /** Filter by YAML category field */
  category?: 'practice-verticals' | 'functional-domains' | 'jurisdictions-specialties';
}

/**
 * Get a single agent by its file-slug (e.g. "corporate-ma", "legal-research").
 * Searches across all divisions.
 */
export function getAgent(slug: string): Agent | null;

/**
 * List agents, optionally filtered by division or category.
 */
export function listAgents(options?: ListOptions): Agent[];

/**
 * Return the list of available division names.
 */
export function listDivisions(): string[];

/**
 * Search agents by keyword across name, vibe, and services (case-insensitive).
 */
export function searchAgents(keyword: string): Agent[];
