# The Legal Agency

> An open-source, multi-agent framework for AI-native legal practice.

The Legal Agency is a collection of **30 specialized AI agent definitions** organized across 3 divisions, designed to power a comprehensive AI-native legal firm. Each agent is a self-contained markdown file with structured identity, workflows, deliverables, and guardrails — ready for integration into any multi-agent orchestration platform.

---

## Project Structure

```
legal agents/
├── README.md
├── ROSTER.md                          # Master index of all 30 agents
│
├── practice-verticals/                # Division 1 — Core legal practice areas
│   ├── corporate-ma.md
│   ├── litigation.md
│   ├── intellectual-property.md
│   ├── real-estate.md
│   ├── employment-labor.md
│   ├── tax-law.md
│   ├── immigration.md
│   ├── criminal-defense.md
│   ├── family-law.md
│   ├── bankruptcy.md
│   ├── healthcare-law.md
│   └── environmental-law.md
│
├── functional-domains/                # Division 2 — Cross-cutting legal operations
│   ├── legal-research.md
│   ├── contract-lifecycle.md
│   ├── e-discovery.md
│   ├── due-diligence.md
│   ├── compliance-tracking.md
│   ├── case-management.md
│   ├── client-intake.md
│   ├── legal-analytics.md
│   ├── billing-operations.md
│   └── document-drafting.md
│
└── jurisdictions-specialties/         # Division 3 — Jurisdiction-specific & specialist skills
    ├── us-federal-courts.md
    ├── india-legal.md
    ├── uk-commonwealth.md
    ├── international-arbitration.md
    ├── regulatory-compliance.md
    ├── court-filings.md
    ├── deposition-prep.md
    └── brief-writing.md
```

---

## Divisions

### Division 1 — Practice Verticals (12 Agents)

Domain-specific agents covering the core areas of legal practice. Each agent embodies a senior specialist in its field with deep knowledge of applicable statutes, regulations, and case law.

| Agent | File | Specialty |
|-------|------|-----------|
| 🏢 Corporate M&A Counsel | `practice-verticals/corporate-ma.md` | M&A transactions, due diligence, entity formation |
| ⚔️ Litigation Strategist | `practice-verticals/litigation.md` | Civil litigation, motions, discovery, trial prep |
| 💡 IP Counsel | `practice-verticals/intellectual-property.md` | Patents, trademarks, copyrights, trade secrets |
| 🏠 Real Estate Counsel | `practice-verticals/real-estate.md` | Property transactions, leases, title review |
| 👔 Employment & Labor Counsel | `practice-verticals/employment-labor.md` | Workplace compliance, policies, disputes |
| 🧮 Tax Law Advisor | `practice-verticals/tax-law.md` | Tax planning, compliance, IRS disputes |
| 🌍 Immigration Counsel | `practice-verticals/immigration.md` | Visas, work authorization, I-9 compliance |
| 🛡️ Criminal Defense Strategist | `practice-verticals/criminal-defense.md` | Defense representation, motions, sentencing |
| 👨‍👩‍👧‍👦 Family Law Advocate | `practice-verticals/family-law.md` | Divorce, custody, support, adoption |
| 📉 Bankruptcy Counsel | `practice-verticals/bankruptcy.md` | Chapter 7/11/13, creditor rights, reorganization |
| 🏥 Healthcare Law Counsel | `practice-verticals/healthcare-law.md` | HIPAA, Stark Law, Anti-Kickback, compliance |
| 🌿 Environmental Law Counsel | `practice-verticals/environmental-law.md` | EPA compliance, permits, CERCLA, remediation |

### Division 2 — Functional Domains (10 Agents)

Cross-cutting operational agents that support any practice area with specialized workflows for research, document management, billing, analytics, and more.

| Agent | File | Specialty |
|-------|------|-----------|
| 🔬 Legal Research Agent | `functional-domains/legal-research.md` | Case law research, citation verification, IRAC memoranda |
| 📄 Contract Lifecycle Manager | `functional-domains/contract-lifecycle.md` | Contract drafting, review, risk analysis |
| 💾 E-Discovery Specialist | `functional-domains/e-discovery.md` | ESI management, document review, TAR |
| 🔍 Due Diligence Analyst | `functional-domains/due-diligence.md` | Corporate DD investigations, risk scoring |
| ✅ Compliance Tracking Officer | `functional-domains/compliance-tracking.md` | Obligation mapping, audit readiness |
| 📂 Case Management Coordinator | `functional-domains/case-management.md` | Docketing, calendaring, task management |
| 🤝 Client Intake Specialist | `functional-domains/client-intake.md` | Intake interviews, conflict checks |
| 📊 Legal Analytics Engineer | `functional-domains/legal-analytics.md` | Litigation analytics, judge profiles |
| 💰 Billing & Operations Manager | `functional-domains/billing-operations.md` | Time entry, invoicing, LEDES/UTBMS |
| ✍️ Document Drafting Specialist | `functional-domains/document-drafting.md` | Legal document drafting, citation formatting |

### Division 3 — Jurisdictions & Specialties (8 Agents)

Jurisdiction-specific experts and specialist skill agents for procedural tasks that cut across practice areas.

| Agent | File | Specialty |
|-------|------|-----------|
| 🏛️ U.S. Federal Courts Specialist | `jurisdictions-specialties/us-federal-courts.md` | FRCP, jurisdiction analysis, local rules |
| 🇮🇳 India Legal Specialist | `jurisdictions-specialties/india-legal.md` | Indian constitutional law, writ petitions |
| 🇬🇧 UK & Commonwealth Specialist | `jurisdictions-specialties/uk-commonwealth.md` | English common law, CPR procedure |
| ⚖️ International Arbitration Counsel | `jurisdictions-specialties/international-arbitration.md` | ICC/LCIA/SIAC/ICSID arbitration |
| 📜 Regulatory Compliance Specialist | `jurisdictions-specialties/regulatory-compliance.md` | Multi-sector regulatory analysis |
| 📑 Court Filings Specialist | `jurisdictions-specialties/court-filings.md` | E-filing compliance, CM/ECF |
| 🎤 Deposition Preparation Specialist | `jurisdictions-specialties/deposition-prep.md` | Witness prep, cross-examination |
| 📝 Brief Writing Specialist | `jurisdictions-specialties/brief-writing.md` | Appellate briefs, persuasive writing |

---

## Agent File Format

Every agent definition file follows a consistent structure:

```
---
YAML Frontmatter
  name, category, emoji, vibe, services, version, tools
---

# Agent Name
Introduction paragraph

## 🧠 Identity & Personality Traits
## 🎯 Core Mission & Workflows
  - Mission statement
  - 3-Level Progressive Disclosure (Trigger → Skill Body → References)
  - Standard Operating Procedure (SOP)
## 📋 Technical Deliverables & Examples
  - 3–4 concrete deliverables with formatted templates
## 🎯 Success Metrics & Guardrails
  - Measurable success criteria
  - Zero Hallucination Tolerance rules
```

### Key Design Principles

- **3-Level Progressive Disclosure**: Agents activate on trigger keywords (Level 1), apply domain-specific methodology (Level 2), and reference authoritative sources (Level 3) — minimizing token usage while maximizing depth
- **Concrete Deliverables**: Every agent includes structured templates with realistic examples (tables, checklists, formatted documents) — not abstract descriptions
- **Zero Hallucination Guardrails**: Each agent explicitly forbids fabrication of citations, rule numbers, case law, financial figures, and other domain-specific data points

---

## Usage

These agent definitions are platform-agnostic markdown files. They can be used with:

- **Multi-agent orchestration frameworks** — load agent files as system prompts for specialized LLM instances
- **Copilot / VS Code agent mode** — use as `.agent.md` files for custom agent personas
- **RAG pipelines** — index agent deliverable templates as retrieval targets for document generation
- **Prompt libraries** — reference individual SOPs and deliverable templates as structured prompts

---

## License

Open Source — see project license for details.
