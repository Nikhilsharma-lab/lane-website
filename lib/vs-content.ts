/**
 * Comparative positioning copy for /vs/* pages.
 *
 * Voice rules (see LANE-WEBSITE.md §6):
 *  - noun-first, < 22 words per line
 *  - no banned verbs (empower/unleash/supercharge/transform/revolutionize/leverage/unlock/elevate)
 *  - no hatchet jobs — acknowledge where the competitor is legitimately the right call
 *  - no fabricated numbers, screenshots, or customer claims
 *
 * Tri-state for feature rows:
 *   'full'    = ships in V1, is a first-class concern
 *   'partial' = possible via plugin, workaround, or limited scope
 *   'none'    = intentionally absent (annotate why) or simply doesn't exist
 */

export type CellState = 'full' | 'partial' | 'none'

export interface FeatureRow {
  /** Row label — what we're comparing. Keep short. */
  capability: string
  /** The competitor's state + one-line qualifier. */
  competitor: { state: CellState; note: string }
  /** Lane's state + one-line qualifier. Use 'none' honestly when it's roadmap or intentional. */
  lane: { state: CellState; note: string }
}

export interface VsContent {
  /** URL slug — also the competitor's lowercase name. */
  slug: 'jira' | 'linear' | 'notion'
  /** Display name of the competitor. */
  competitor: string
  /** Short eyebrow tag shown above hero. */
  eyebrow: string
  /** Hero headline — two lines, noun-first, ends with lime period. */
  headline: { line1: string; line2: string }
  /** Manifesto subhead — the one-sentence frame for the whole page. */
  subhead: string
  /** The verdict card at top — "here's when each one is right." Honest upfront. */
  verdict: {
    pickCompetitor: string
    pickLane: string
  }
  /** "When {competitor} is the right call" body — ~140 words, specific, no hatchet. */
  competitorRightWhen: string[]
  /** "When Lane is the right call" body — ~140 words, earned, tied to manifesto. */
  laneRightWhen: string[]
  /** Feature matrix rows. ~10–12. Tri-state with per-cell notes. */
  matrix: FeatureRow[]
  /** Per-page comparison FAQs. 3–5 entries. Voice matches homepage FAQ. */
  faqs: Array<{ q: string; a: string }>
  /** SEO meta. */
  meta: {
    title: string
    description: string
  }
  /** OG image headline override — kept short for 1200×630. */
  ogHeadline: string
}

/* ════════════════════════════════════════════════════════════════════ */
/*                                JIRA                                  */
/* ════════════════════════════════════════════════════════════════════ */

const jira: VsContent = {
  slug: 'jira',
  competitor: 'Jira',
  eyebrow: 'Lane vs Jira',
  headline: {
    line1: 'Jira runs sprints.',
    line2: 'Lane runs design',
  },
  subhead:
    'Jira was built for engineers shipping linear backlogs. Design work doesn\u2019t fit that shape, and forcing it there is why design teams burn out inside Jira.',
  verdict: {
    pickCompetitor:
      'Pick Jira if you need cross-squad dependency graphs, SOX-grade audit trails, or a PM org that already lives there.',
    pickLane:
      'Pick Lane if your design team keeps getting handed solutions instead of problems, and throughput charts aren\u2019t telling you anything true.',
  },
  competitorRightWhen: [
    'Jira is a serious tool and we\u2019re not going to pretend otherwise. If you\u2019re coordinating 20+ engineering squads with interlocking dependencies, Jira\u2019s hierarchy model (epics → stories → subtasks → linked issues) is genuinely the right shape for the job.',
    'If your company needs SOX, ISO 27001, or HIPAA audit trails tied to every status change, Jira\u2019s enterprise compliance story is years ahead of anything a V1 product can offer. Same for SSO/SCIM at Atlassian-scale rollouts.',
    'If your PMs already draft every spec in Jira and route approvals through Jira workflows, the switching cost alone can make "just keep using Jira" the honest answer.',
  ],
  laneRightWhen: [
    'The moment your design team starts describing Jira as "the place my work goes to die," the tool has stopped serving the work. Design doesn\u2019t move in straight lines from backlog to done — it loops, it backs up, it needs reframing. Jira has no idea what any of that means.',
    'Lane exists because the first problem in design isn\u2019t tracking — it\u2019s the intake. "Make the button bigger" is not a design problem. Lane\u2019s intake gate classifies requests before they become work, so your team never has to silently swallow a bad brief again.',
    'And the impact question — "did this ship actually change anything?" — has no home in Jira. It does in Lane. Every Design Stream ends at an outcome, not a closed ticket.',
  ],
  matrix: [
    {
      capability: 'Non-linear workflow stages',
      competitor: { state: 'none', note: 'Status fields can be renamed but the model is linear.' },
      lane: { state: 'full', note: 'Five scientific stages: Sense, Frame, Diverge, Converge, Ship.' },
    },
    {
      capability: 'AI intake gate for PM requests',
      competitor: { state: 'none', note: 'Any request that fits the form template becomes a ticket.' },
      lane: { state: 'full', note: 'Classifies problem-framed vs solution-specific before work starts.' },
    },
    {
      capability: 'Figma-native handoff',
      competitor: { state: 'partial', note: 'Marketplace plugin, not a core integration.' },
      lane: { state: 'full', note: 'First-class Figma OAuth. Designers stay in Figma.' },
    },
    {
      capability: 'Outcome measurement after ship',
      competitor: { state: 'none', note: 'Closed = done. Nothing measures what changed for users.' },
      lane: { state: 'full', note: 'Every Stream ends at a measured outcome, not a status.' },
    },
    {
      capability: 'Story points & velocity charts',
      competitor: { state: 'full', note: 'Deeply integrated — Agile reporting is a headline feature.' },
      lane: { state: 'none', note: 'Intentionally absent. Design throughput isn\u2019t velocity.' },
    },
    {
      capability: 'Individual activity tracking',
      competitor: { state: 'full', note: 'Per-assignee dashboards, last-active, time-in-status.' },
      lane: { state: 'none', note: 'Intentionally absent. Surveillance produces performance, not truth.' },
    },
    {
      capability: 'Cross-squad dependency graphs',
      competitor: { state: 'full', note: 'Epics, linked issues, portfolio-level roadmaps.' },
      lane: { state: 'none', note: 'Different model. Streams are scoped to design impact.' },
    },
    {
      capability: 'SOX / ISO 27001 / HIPAA audit trails',
      competitor: { state: 'full', note: 'Enterprise-grade, years of compliance certifications.' },
      lane: { state: 'partial', note: 'Audit log in V1. Formal certifications on the roadmap.' },
    },
    {
      capability: 'PM weekly digest (read-only)',
      competitor: { state: 'partial', note: 'Email subscriptions exist but surface noise, not summary.' },
      lane: { state: 'full', note: 'AI-written digest: shipped, blocked, escalations. No dashboards.' },
    },
    {
      capability: 'Data export on cancel',
      competitor: { state: 'full', note: 'JSON/CSV export across all projects.' },
      lane: { state: 'full', note: 'Full JSON + CSV. Thirty-day grace period. No hostage data.' },
    },
    {
      capability: 'Slack integration',
      competitor: { state: 'full', note: 'Deep two-way sync, comment mirroring, notification firehose.' },
      lane: { state: 'none', note: 'V2 only, opt-in, summary-only. Firehoses are the enemy.' },
    },
    {
      capability: 'SSO / SCIM',
      competitor: { state: 'full', note: 'Atlassian Access, every IdP, enterprise-grade.' },
      lane: { state: 'partial', note: 'SSO at launch. SCIM provisioning on the roadmap.' },
    },
  ],
  faqs: [
    {
      q: 'Can I migrate my Jira project into Lane?',
      a: 'Not automatically, and honestly we\u2019re not rushing to build that importer. Jira epics and stories don\u2019t map cleanly onto Design Streams \u2014 the shape is wrong. Most teams use the beta as a fresh start for their design workflow and leave engineering work in Jira where it belongs. If you want a CSV dump of your design-tagged tickets, we\u2019ll help you hand-sort them into Streams during onboarding.',
    },
    {
      q: 'Does Lane replace Jira for the whole company?',
      a: 'No. Lane replaces Jira for design work, not for engineering squads, PM roadmaps, or cross-functional program management. We expect most Lane customers to keep Jira running for engineering. The two tools link at the ship stage \u2014 Streams reference Jira tickets, not the other way around.',
    },
    {
      q: 'Why not just use a Jira plugin for design?',
      a: 'We tried. Every team we talked to had already tried. The problem isn\u2019t missing features \u2014 it\u2019s that Jira\u2019s core data model assumes work moves forward in a straight line. Design work loops. No plugin fixes a mismatched shape.',
    },
    {
      q: 'Is Lane cheaper than Jira?',
      a: 'Probably, but that\u2019s not the pitch. Lane is $29 per designer per month \u2014 designers only, no math on PM or engineering seats. Jira\u2019s published list price is lower per seat but applied across the whole org. Do the math on your own team; we\u2019re not going to fake a savings calculator.',
    },
    {
      q: 'What about Jira\u2019s reporting \u2014 velocity, burndown, sprint health?',
      a: 'Lane doesn\u2019t ship any of that and won\u2019t. Design throughput isn\u2019t velocity, and a burndown chart measured against design work is a lie told in public. If your leadership needs those charts to feel safe, Jira is still the right tool for them \u2014 run Lane alongside it.',
    },
  ],
  meta: {
    title: 'Lane vs Jira — Why design teams outgrow Jira | Lane',
    description:
      'Jira runs sprints. Lane runs design. An honest comparison: when Jira is the right call, when Lane is, and a tri-state feature matrix across twelve capabilities.',
  },
  ogHeadline: 'Jira runs sprints.\nLane runs design.',
}

/* ════════════════════════════════════════════════════════════════════ */
/*                               LINEAR                                 */
/* ════════════════════════════════════════════════════════════════════ */

const linear: VsContent = {
  slug: 'linear',
  competitor: 'Linear',
  eyebrow: 'Lane vs Linear',
  headline: {
    line1: 'Linear ships issues.',
    line2: 'Lane ships design',
  },
  subhead:
    'Linear is the best issue tracker ever built. It\u2019s still an issue tracker. Design work isn\u2019t issues — it\u2019s a loop that starts before the ticket and ends after it closes.',
  verdict: {
    pickCompetitor:
      'Pick Linear if your team is engineering-led, your design work is downstream of specs, and cycle velocity is a metric you actually trust.',
    pickLane:
      'Pick Lane if your designers own the problem upstream, not just the execution, and velocity charts have stopped telling you anything true.',
  },
  competitorRightWhen: [
    'We like Linear. It\u2019s the cleanest issue tracker we\u2019ve ever used, and for frontend-heavy engineering teams shipping a clear backlog, it\u2019s probably the right tool. The keyboard-first interaction model alone sets a bar most SaaS won\u2019t clear.',
    'If your company is engineering-led — product reports to engineering, design sits downstream of specs, and the main question is "how fast are we shipping the work we already decided to do?" — Linear\u2019s cycle model is purpose-built for that shape.',
    'If your design team is two people embedded inside an engineering org and the real workflow happens in code review, Linear\u2019s lightweight scope is a feature, not a gap. Adding Lane on top would be overhead.',
  ],
  laneRightWhen: [
    'The line we draw is this: issue trackers assume the problem is already defined and the only question is execution velocity. That\u2019s not what design is. The hardest part of a designer\u2019s week is often the fifteen minutes spent reframing a PM request before it becomes work at all.',
    'Linear has no concept of that. A Linear issue starts the clock — Lane\u2019s intake gate stops it. "Make the button bigger" doesn\u2019t become a ticket in Lane; it becomes a conversation that ends in a real problem statement or gets sent back.',
    'And once the work ships, Linear closes the issue. Lane keeps the Stream open until an outcome is measured. That one difference is the whole point.',
  ],
  matrix: [
    {
      capability: 'Issue tracking speed & polish',
      competitor: { state: 'full', note: 'Best-in-class keyboard model, sub-100ms everything.' },
      lane: { state: 'none', note: 'Different tool, different shape. Streams aren\u2019t issues.' },
    },
    {
      capability: 'AI intake gate for PM requests',
      competitor: { state: 'none', note: 'Every filed issue becomes an issue. No upstream filter.' },
      lane: { state: 'full', note: 'Classifies problem-framed vs solution-specific before work starts.' },
    },
    {
      capability: 'Non-linear design stages',
      competitor: { state: 'none', note: 'Cycles are linear by design — that\u2019s the product.' },
      lane: { state: 'full', note: 'Five scientific stages. Loops back without penalty.' },
    },
    {
      capability: 'Figma-native handoff',
      competitor: { state: 'partial', note: 'Figma plugin exists. Not a first-class surface.' },
      lane: { state: 'full', note: 'Figma OAuth is a core integration, not an afterthought.' },
    },
    {
      capability: 'Outcome measurement after ship',
      competitor: { state: 'none', note: 'Issue closes, cycle ends. Nothing tracks what changed.' },
      lane: { state: 'full', note: 'Every Stream ends at a measured outcome, not a status.' },
    },
    {
      capability: 'Velocity charts & burndown',
      competitor: { state: 'full', note: 'Cycle velocity, throughput, estimates.' },
      lane: { state: 'none', note: 'Intentionally absent. Design throughput isn\u2019t velocity.' },
    },
    {
      capability: 'Individual activity tracking',
      competitor: { state: 'partial', note: 'Per-assignee views and triage queues.' },
      lane: { state: 'none', note: 'Intentionally absent. No per-designer dashboards, ever.' },
    },
    {
      capability: 'Engineering-facing handoff',
      competitor: { state: 'full', note: 'GitHub/GitLab integration, branch linking, PR sync.' },
      lane: { state: 'partial', note: 'Ship stage links to PRs. Engineering velocity is not our job.' },
    },
    {
      capability: 'PM weekly digest (read-only)',
      competitor: { state: 'partial', note: 'Inbox filtering, not a curated summary.' },
      lane: { state: 'full', note: 'AI-written digest: shipped, blocked, escalations.' },
    },
    {
      capability: 'Roadmap & portfolio views',
      competitor: { state: 'full', note: 'Initiatives, projects, roadmap timeline.' },
      lane: { state: 'partial', note: 'Stream-level view. No quarter-planning gantt chart.' },
    },
    {
      capability: 'Data export on cancel',
      competitor: { state: 'full', note: 'API + export, clean data model.' },
      lane: { state: 'full', note: 'Full JSON + CSV. Thirty-day grace period.' },
    },
    {
      capability: 'SSO / SCIM',
      competitor: { state: 'full', note: 'Full enterprise identity story.' },
      lane: { state: 'partial', note: 'SSO at launch. SCIM on the roadmap.' },
    },
  ],
  faqs: [
    {
      q: 'Can I migrate from Linear to Lane?',
      a: 'Partially. You can export your Linear issues as CSV and we\u2019ll help you fold the design-tagged ones into Streams during onboarding. But Linear issues and Lane Streams aren\u2019t the same object \u2014 a Stream starts before a ticket would exist and ends after it would close. Most teams treat Lane as a new surface rather than a port.',
    },
    {
      q: 'Does Lane replace Linear for engineering teams?',
      a: 'No, and we\u2019re not trying to. Linear is a genuinely great issue tracker and your engineers should keep using it. Lane sits upstream of Linear for design work \u2014 intake, framing, divergence \u2014 and references Linear tickets at the ship stage. The two tools do different jobs.',
    },
    {
      q: 'Why don\u2019t you just add design workflow features to Linear?',
      a: 'We can\u2019t \u2014 we don\u2019t work there. And even if we did, the answer would still be no. Linear\u2019s model is cycles of issues moving forward. Design work loops, stalls, gets reframed, and measures itself against outcomes months after a ticket would close. That\u2019s not a feature you bolt on; it\u2019s a different product.',
    },
    {
      q: 'Is Lane faster than Linear?',
      a: 'No. Linear is the fastest SaaS app we\u2019ve ever used and we\u2019re not going to out-keyboard them. Lane is as fast as it needs to be for thinking work, which is a different bar. If sub-100ms triage is load-bearing for your team, that\u2019s a real reason to stay on Linear.',
    },
    {
      q: 'Do I need to pick one \u2014 Linear or Lane?',
      a: 'No. The expected setup is designers live in Lane, engineers live in Linear, and the two connect at the Ship stage. Nobody has to learn both tools end-to-end.',
    },
  ],
  meta: {
    title: 'Lane vs Linear — When design teams need more than an issue tracker | Lane',
    description:
      'Linear ships issues. Lane ships design. An honest comparison: when Linear is the right tool, when Lane is, and where the two models actually diverge.',
  },
  ogHeadline: 'Linear ships issues.\nLane ships design.',
}

/* ════════════════════════════════════════════════════════════════════ */
/*                                NOTION                                */
/* ════════════════════════════════════════════════════════════════════ */

const notion: VsContent = {
  slug: 'notion',
  competitor: 'Notion',
  eyebrow: 'Lane vs Notion',
  headline: {
    line1: 'Notion holds docs.',
    line2: 'Lane runs workflow',
  },
  subhead:
    'Notion is a brilliant document tool. Stretching it into a DesignOps workflow is where it starts to crack — every team ends up with the same Frankenstein database nobody trusts.',
  verdict: {
    pickCompetitor:
      'Pick Notion if your team treats the doc itself as the source of truth and status fields on a database are enough structure.',
    pickLane:
      'Pick Lane if you keep rebuilding the same "design request tracker" database every six months and it still doesn\u2019t hold.',
  },
  competitorRightWhen: [
    'Notion is legitimately the best document tool on the market, and we use it ourselves. For PRDs, design specs, research notes, and team wikis, it\u2019s not even close. Lane doesn\u2019t try to replace that — we expect teams on Lane to keep using Notion for docs.',
    'If your design team is small enough that the doc IS the workflow — one designer, one PM, one shared Notion page per initiative — adding structured workflow tooling is premature. Use Notion, ship work, come back when the seams show.',
    'If your company\u2019s culture runs on long-form written memos, Notion\u2019s writing surface is a cultural asset you\u2019d lose by moving. That\u2019s a real cost.',
  ],
  laneRightWhen: [
    'The crack shows up the moment your team tries to use Notion as a workflow system instead of a document. Every DesignOps lead we\u2019ve talked to has built the same thing at least once: a Notion database titled "Design Requests" with a status field, an owner field, a priority field, and a graveyard of stale rows nobody maintains.',
    'That\u2019s not Notion\u2019s fault. It\u2019s the wrong shape. Workflow needs stages with rules, intake gates that reject bad briefs, status that updates from real signals, and an outcome ledger at the end. Notion databases can simulate the first two and then stop.',
    'Lane ships the thing the Notion database was trying to become — structured where it needs to be, and out of your way everywhere else.',
  ],
  matrix: [
    {
      capability: 'Long-form docs & wikis',
      competitor: { state: 'full', note: 'Best-in-class editor. This is Notion\u2019s core job.' },
      lane: { state: 'none', note: 'Different tool. Keep Notion for docs. Link them in.' },
    },
    {
      capability: 'Structured workflow stages',
      competitor: { state: 'partial', note: 'Database status fields, no enforced state machine.' },
      lane: { state: 'full', note: 'Five scientific stages with transition rules and gates.' },
    },
    {
      capability: 'AI intake gate for PM requests',
      competitor: { state: 'none', note: 'Form submissions drop into a database row. No classification.' },
      lane: { state: 'full', note: 'Classifies problem-framed vs solution-specific before work starts.' },
    },
    {
      capability: 'Figma-native handoff',
      competitor: { state: 'partial', note: 'Figma embed shows a preview. Read-only.' },
      lane: { state: 'full', note: 'First-class Figma OAuth. Live context, not embeds.' },
    },
    {
      capability: 'Outcome measurement after ship',
      competitor: { state: 'none', note: 'A row marked "Done" is still just a row.' },
      lane: { state: 'full', note: 'Every Stream ends at a measured outcome, not a status.' },
    },
    {
      capability: 'PM weekly digest (read-only)',
      competitor: { state: 'none', note: 'Requires manual updates in a status page nobody reads.' },
      lane: { state: 'full', note: 'AI-written, auto-generated from Stream state.' },
    },
    {
      capability: 'Individual activity tracking',
      competitor: { state: 'partial', note: '"Last edited by" surfaces on every page.' },
      lane: { state: 'none', note: 'Intentionally absent. No per-designer dashboards, ever.' },
    },
    {
      capability: 'Template gallery & flexibility',
      competitor: { state: 'full', note: 'Thousands of community templates, infinite customization.' },
      lane: { state: 'partial', note: 'Opinionated defaults. Less flexible is a feature here.' },
    },
    {
      capability: 'Handoff intelligence',
      competitor: { state: 'none', note: 'Copy-paste a Figma link into a page.' },
      lane: { state: 'full', note: 'Figma frames → engineering context → PR links, automatic.' },
    },
    {
      capability: 'Slack integration',
      competitor: { state: 'full', note: 'Deep two-way notifications.' },
      lane: { state: 'none', note: 'V2 only, opt-in, summary-only. Firehoses are the enemy.' },
    },
    {
      capability: 'Data export on cancel',
      competitor: { state: 'full', note: 'Full Markdown/HTML/CSV export.' },
      lane: { state: 'full', note: 'Full JSON + CSV. Thirty-day grace period.' },
    },
    {
      capability: 'SSO / SCIM',
      competitor: { state: 'full', note: 'Enterprise plan.' },
      lane: { state: 'partial', note: 'SSO at launch. SCIM on the roadmap.' },
    },
  ],
  faqs: [
    {
      q: 'Do I have to stop using Notion if I move to Lane?',
      a: 'No \u2014 please don\u2019t. Keep Notion for PRDs, research notes, specs, and team wikis. Lane links out to Notion pages from inside a Stream. The teams who get the most out of Lane are the ones who stop trying to make Notion do workflow and let each tool do its job.',
    },
    {
      q: 'Can I import my Notion \u201cDesign Requests\u201d database into Lane?',
      a: 'Yes, via CSV export. We\u2019ll help you classify the rows during onboarding \u2014 most of them turn out to be either solution-specific requests that should have been pushed back on, or outcomes that never got measured. That triage is usually the most useful part of switching.',
    },
    {
      q: 'Why can\u2019t I just build this in Notion myself?',
      a: 'You can, and you have \u2014 every DesignOps lead we\u2019ve talked to has built it at least once. The problem isn\u2019t that Notion lacks the fields. It\u2019s that Notion databases can\u2019t enforce state machines, can\u2019t gate bad intake, and can\u2019t track outcomes after ship. The Frankenstein database works until it doesn\u2019t.',
    },
    {
      q: 'Is Lane another doc tool?',
      a: 'No. Lane is a workflow tool with just enough writing surface to hold briefs, problem statements, and decisions. For anything longer than a brief, you\u2019ll want Notion or Google Docs. We\u2019re deliberately not competing for the PRD surface.',
    },
    {
      q: 'What about Notion\u2019s AI features?',
      a: 'Notion AI is great at summarizing and writing inside documents. Lane\u2019s AI does something different \u2014 it classifies intake, drafts problem statements, and writes the weekly PM digest from Stream state. Same underlying model class, different job.',
    },
  ],
  meta: {
    title: 'Lane vs Notion — When docs stop being enough for design teams | Lane',
    description:
      'Notion holds docs. Lane runs workflow. An honest comparison: where Notion is the right home and where a real DesignOps workflow needs more than a database.',
  },
  ogHeadline: 'Notion holds docs.\nLane runs workflow.',
}

/* ════════════════════════════════════════════════════════════════════ */

export const vsContent: Record<'jira' | 'linear' | 'notion', VsContent> = {
  jira,
  linear,
  notion,
}

export const vsSlugs = ['jira', 'linear', 'notion'] as const
