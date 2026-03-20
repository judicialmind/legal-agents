# The Legal Agency — Agent Roster

> An open-source, multi-agent framework for AI-native legal practice.
> 30 specialized agents across 3 divisions.

---

## Division 1 — Practice Verticals (12 Agents)

| # | Agent | Emoji | File | Specialty |
|---|-------|-------|------|-----------|
| 1 | Corporate M&A Counsel | 🏢 | [corporate-ma.md](practice-verticals/corporate-ma.md) | M&A transactions, due diligence, entity formation, HSR compliance |
| 2 | Litigation Strategist | ⚔️ | [litigation.md](practice-verticals/litigation.md) | Civil litigation, motions, discovery, trial prep |
| 3 | IP Counsel | 💡 | [intellectual-property.md](practice-verticals/intellectual-property.md) | Patents, trademarks, copyrights, trade secrets |
| 4 | Real Estate Counsel | 🏠 | [real-estate.md](practice-verticals/real-estate.md) | Property transactions, leases, title review, land use |
| 5 | Employment & Labor Counsel | 👔 | [employment-labor.md](practice-verticals/employment-labor.md) | Workplace compliance, policies, discrimination, wage & hour |
| 6 | Tax Law Advisor | 🧮 | [tax-law.md](practice-verticals/tax-law.md) | Tax planning, compliance, IRS disputes, entity structuring |
| 7 | Immigration Counsel | 🌍 | [immigration.md](practice-verticals/immigration.md) | Visas, work authorization, I-9 compliance, naturalization |
| 8 | Criminal Defense Strategist | 🛡️ | [criminal-defense.md](practice-verticals/criminal-defense.md) | Defense representation, motions to suppress, sentencing, appeals |
| 9 | Family Law Advocate | 👨‍👩‍👧‍👦 | [family-law.md](practice-verticals/family-law.md) | Divorce, custody, support, adoption, prenuptial agreements |
| 10 | Bankruptcy Counsel | 📉 | [bankruptcy.md](practice-verticals/bankruptcy.md) | Chapter 7/11/13, creditor rights, reorganization plans |
| 11 | Healthcare Law Counsel | 🏥 | [healthcare-law.md](practice-verticals/healthcare-law.md) | HIPAA, Stark Law, Anti-Kickback, compliance programs |
| 12 | Environmental Law Counsel | 🌿 | [environmental-law.md](practice-verticals/environmental-law.md) | EPA compliance, permits, CERCLA, remediation |

---

## Division 2 — Functional Domains (10 Agents)

| # | Agent | Emoji | File | Specialty |
|---|-------|-------|------|-----------|
| 13 | Legal Research Agent | 🔬 | [legal-research.md](functional-domains/legal-research.md) | Case law research, citation verification, IRAC memoranda |
| 14 | Contract Lifecycle Manager | 📄 | [contract-lifecycle.md](functional-domains/contract-lifecycle.md) | Contract drafting, review, risk analysis, obligation tracking |
| 15 | E-Discovery Specialist | 💾 | [e-discovery.md](functional-domains/e-discovery.md) | ESI management, document review, TAR, privilege logging |
| 16 | Due Diligence Analyst | 🔍 | [due-diligence.md](functional-domains/due-diligence.md) | Corporate DD investigations, risk scoring, gap analysis |
| 17 | Compliance Tracking Officer | ✅ | [compliance-tracking.md](functional-domains/compliance-tracking.md) | Obligation mapping, audit readiness, regulatory change monitoring |
| 18 | Case Management Coordinator | 📂 | [case-management.md](functional-domains/case-management.md) | Docketing, calendaring, task management, status dashboards |
| 19 | Client Intake Specialist | 🤝 | [client-intake.md](functional-domains/client-intake.md) | Intake interviews, conflict checks, engagement letters |
| 20 | Legal Analytics Engineer | 📊 | [legal-analytics.md](functional-domains/legal-analytics.md) | Litigation analytics, judge profiles, settlement modeling |
| 21 | Billing & Operations Manager | 💰 | [billing-operations.md](functional-domains/billing-operations.md) | Time entry, invoicing, LEDES/UTBMS, budget tracking |
| 22 | Document Drafting Specialist | ✍️ | [document-drafting.md](functional-domains/document-drafting.md) | Legal document drafting, citation formatting, style enforcement |

---

## Division 3 — Jurisdictions & Specialties (8 Agents)

| # | Agent | Emoji | File | Specialty |
|---|-------|-------|------|-----------|
| 23 | U.S. Federal Courts Specialist | 🏛️ | [us-federal-courts.md](jurisdictions-specialties/us-federal-courts.md) | FRCP, jurisdiction analysis, local rules, circuit splits |
| 24 | India Legal Specialist | 🇮🇳 | [india-legal.md](jurisdictions-specialties/india-legal.md) | Indian constitutional law, writ petitions, tribunal practice |
| 25 | UK & Commonwealth Legal Specialist | 🇬🇧 | [uk-commonwealth.md](jurisdictions-specialties/uk-commonwealth.md) | English common law, CPR procedure, OSCOLA, Commonwealth |
| 26 | International Arbitration Counsel | ⚖️ | [international-arbitration.md](jurisdictions-specialties/international-arbitration.md) | ICC/LCIA/SIAC/ICSID arbitration, New York Convention |
| 27 | Regulatory Compliance Specialist | 📜 | [regulatory-compliance.md](jurisdictions-specialties/regulatory-compliance.md) | Multi-sector regulatory analysis, rulemaking, enforcement |
| 28 | Court Filings Specialist | 📑 | [court-filings.md](jurisdictions-specialties/court-filings.md) | E-filing compliance, CM/ECF, deadline computation, formatting |
| 29 | Deposition Preparation Specialist | 🎤 | [deposition-prep.md](jurisdictions-specialties/deposition-prep.md) | Witness prep, cross-examination outlines, depo summaries |
| 30 | Brief Writing Specialist | 📝 | [brief-writing.md](jurisdictions-specialties/brief-writing.md) | Appellate briefs, persuasive writing, standards of review |

---

## Architecture

Each agent file follows a unified standard built on two core design principles:

- **3-Level Progressive Disclosure** — agents activate on trigger keywords, apply domain-specific methodology, and reference authoritative sources
- **Personality-driven agent definitions** — YAML frontmatter with structured identity, workflows, deliverables, and guardrails

### Agent File Structure

```
---
YAML Frontmatter (name, category, emoji, vibe, services, version, tools)
---

# Agent Name
[Introduction paragraph]

## 🧠 Identity & Personality Traits
## 🎯 Core Mission & Workflows
  - Mission
  - Workflow Integration (3-Level Progressive Disclosure)
  - Standard Operating Procedure (SOP)
## 📋 Technical Deliverables & Examples
  - 3-4 deliverables with formatted examples
## 🎯 Success Metrics & Guardrails
  - Success Metrics
  - Guardrails (Zero Hallucination Tolerance)
```

### Zero Hallucination Guarantee

Every agent enforces strict guardrails:
- No fabricated citations, case law, statutes, or rule numbers
- No speculative legal advice without documented basis
- All legal references grounded in verifiable sources
- Clear disclosure when AI-generated content requires attorney verification

---

**Version**: 1.0.0
**License**: Open Source
