import type { Metadata } from 'next'
import { Header } from '@/components/marketing/header'
import { Footer, FooterBar } from '@/components/marketing/footer'
import { WireframeCell } from '@/components/marketing/wireframe-cell'
import { ArticleLayout } from '@/components/blog/article-layout'
import { getPost } from '@/lib/blog-content'

const post = getPost('designops-maturity-model')!


export const metadata: Metadata = {
  title: `${post.title} | Lane`,
  description: post.description,
  alternates: { canonical: 'https://lane.so/blog/designops-maturity-model' },
  openGraph: {
    type: 'article',
    url: 'https://lane.so/blog/designops-maturity-model',
    title: post.title,
    description: post.description,
    publishedTime: post.publishDate,
  },
  twitter: {
    card: 'summary_large_image',
    title: post.title,
    description: post.description,
  },
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <ArticleLayout post={post}>
        <p>
          Most design teams aren&rsquo;t broken. They&rsquo;re stuck at a stage they&rsquo;ve
          outgrown, with the tools they had when they were one stage smaller. The work
          changed shape and the operating model didn&rsquo;t. So the team works harder, the
          PM gets louder, the designer goes quiet, and the dashboard keeps reporting that
          everything is fine.
        </p>

        <p>
          What follows is a model we&rsquo;ve been building from twenty years of design leadership
          conversations &mdash; not a framework, a field guide. Five stages every design team
          passes through, the signs you&rsquo;re at each one, what breaks if you stay too long,
          and the move that actually unlocks the next stage. No certifications, no McKinsey
          deck. Just the pattern.
        </p>

        <p>
          Read it once. Find your team. Then decide whether the answer is a better tool, a
          different process, or a harder conversation with your VP.
        </p>

        <h2>Stage 0 &mdash; Chaos</h2>

        <p>
          Every request is a fire. Slack DMs route around any system that exists. The
          backlog is whatever the loudest PM mentioned in standup yesterday. Designers are
          measured on how fast they turn around mockups, and the only ritual is the weekly
          status meeting where everyone reads what they shipped from a tab they kept open.
        </p>

        <p>
          <strong>Signs you&rsquo;re here:</strong>{' '}the team has a Notion page called &ldquo;Design
          Requests&rdquo; that hasn&rsquo;t been updated in three weeks. The most senior designer
          is the one with the highest tolerance for being interrupted. Nobody can answer the
          question &ldquo;what is the team working on this week&rdquo; without opening four tabs.
        </p>

        <p>
          <strong>What breaks:</strong>{' '}the senior designer quits. They quit because every
          week looks the same as last week, except louder. The ones who stay learn to say no
          by going slow, which the org reads as &ldquo;design is a bottleneck.&rdquo;
        </p>

        <p>
          <strong>The unlock:</strong>{' '}a single human says no on behalf of the team. Usually
          a design lead, occasionally a designer who got promoted into it by accident. The
          job isn&rsquo;t process. The job is filtration.
        </p>

        <h2>Stage 1 &mdash; Survival (tribal triage)</h2>

        <p>
          Someone is now gating requests, but the gate exists in their head. There&rsquo;s a
          form, maybe, that nobody fills out. There&rsquo;s a Slack channel called
          <em> #design-requests</em> that the gatekeeper monitors. The team has roughly the
          right idea about priorities and roughly no documentation of how those priorities
          got set.
        </p>

        <p>
          <strong>Signs you&rsquo;re here:</strong>{' '}if the gatekeeper goes on vacation, the
          team reverts to Stage 0 inside three days. The phrase &ldquo;just send it to me
          and I&rsquo;ll figure out where it goes&rdquo; is said multiple times per week.
          Onboarding a new designer takes six weeks because the system is shadow-knowledge.
        </p>

        <p>
          <strong>What breaks:</strong>{' '}the gatekeeper burns out. They burn out because they
          spend forty hours a week on triage and zero hours on craft. Or they get promoted,
          and the person who replaces them doesn&rsquo;t have the relationships to make
          tribal triage work.
        </p>

        <p>
          <strong>The unlock:</strong>{' '}the rules come out of one person&rsquo;s head and into
          a shared surface. Doesn&rsquo;t have to be a tool yet. A wiki page titled &ldquo;how
          we accept work&rdquo; is enough. The point is that the gate is now legible.
        </p>

        <h2>Stage 2 &mdash; Process (the brittle workflow)</h2>

        <p>
          Now there&rsquo;s a real workflow. A request form. A triage column. A &ldquo;in
          design&rdquo; column. A handoff column. Probably built in Jira, Linear, Asana, or
          a Notion database that&rsquo;s started to look suspiciously like Jira. Status
          updates happen at standup. The team can answer &ldquo;what are we working on&rdquo;
          without opening four tabs.
        </p>

        <p>
          This stage feels like progress. It often is. It also has the longest plateau of
          any stage in the model, because once you have a workflow that mostly works, the
          incentive to change anything drops to almost zero.
        </p>

        <p>
          <strong>Signs you&rsquo;re here:</strong>{' '}the team uses an issue tracker for design
          work. The PM org is happy because they can see status. Designers are mostly
          unhappy because every status update feels like surveillance, and the workflow
          assumes design moves linearly from request to handoff &mdash; which it doesn&rsquo;t.
        </p>

        <p>
          <strong>What breaks:</strong>{' '}the gap between the workflow and the work itself
          gets wider every quarter. Designers start keeping a second, real backlog &mdash; in
          Figma comments, in their head, in a private Notion. The official tool becomes a
          performance for the PM org, and the actual work happens in a parallel universe.
          Velocity charts trend up while quality trends down and nobody can explain why.
        </p>

        <blockquote>
          A workflow that the team is performing for an audience is not a workflow. It&rsquo;s
          a theater. And theater has actors, not designers.
        </blockquote>

        <p>
          <strong>The unlock:</strong>{' '}the operating model has to start from the work, not
          from the reporting. This is the hardest stage to leave because leaving it means
          telling your VP that the dashboards they trust are misleading them. Most teams
          don&rsquo;t leave. They stay here for years.
        </p>

        <h2>Stage 3 &mdash; System (the operating model)</h2>

        <p>
          The team now has an operating model that survives turnover. The intake gate
          isn&rsquo;t a person, it&rsquo;s a rule: solution-specific requests get reframed as
          problem statements before they enter the queue, period. The workflow has stages
          that match how design actually moves &mdash; non-linear, with explicit loops back to
          earlier stages when the problem turns out to be different than the intake suggested.
        </p>

        <p>
          <strong>Signs you&rsquo;re here:</strong>{' '}a new designer onboards in a week, not
          six. The PM org has stopped asking &ldquo;when will it ship&rdquo; and started asking
          &ldquo;what problem are we actually solving.&rdquo; Status updates are written by
          the system, not by the designer, and they&rsquo;re short.
        </p>

        <p>
          <strong>What breaks:</strong>{' '}the system itself becomes invisible to the people
          using it, which is the point &mdash; but it also becomes invisible to the people who
          should be improving it. Without a feedback loop, even a great operating model
          ossifies. After eighteen months, the team is still running the system that worked
          for last year&rsquo;s problems, and the new problems are invisible.
        </p>

        <p>
          <strong>The unlock:</strong>{' '}outcomes have to feed back into the system itself.
          Not just &ldquo;did we ship&rdquo; &mdash; that&rsquo;s a status. <em>Did this ship
          actually change anything for the user?</em> If your operating model can&rsquo;t
          answer that question, you&rsquo;re still at Stage 3, and you&rsquo;re heading
          toward the same plateau Stage 2 had.
        </p>

        <h2>Stage 4 &mdash; Calibration</h2>

        <p>
          The rarest stage. The system measures its own outcomes and adjusts. PMs whose
          requests consistently led to measured wins get a higher trust score &mdash; not as
          surveillance, as calibration. PMs whose requests consistently led to ship-and-forget
          tickets with no outcome get reframed harder at intake. The team isn&rsquo;t reacting
          to dashboards; the dashboards are reacting to the team.
        </p>

        <p>
          <strong>Signs you&rsquo;re here:</strong>{' '}the designer reflection at the end of
          every Stream is read by the PM, not skipped. The phrase &ldquo;we shipped it but it
          didn&rsquo;t move the metric&rdquo; is something the team can say out loud without
          finger-pointing. Quarterly reviews start with what the team learned, not what the
          team shipped.
        </p>

        <p>
          <strong>What breaks here:</strong>{' '}nothing structural. What breaks here is people
          &mdash; specifically, the people who built the system. Designing the operating model
          for your team is the most senior work design leadership ever does, and once
          it&rsquo;s running, the founder of it gets bored. The system needs a steward, not
          a builder, and most builders are bad stewards. Plan for that.
        </p>

        <h2>How to use this model</h2>

        <p>
          There are two honest ways to use this. The first is diagnostic: read it once,
          decide where your team actually is (not where you tell investors it is), and write
          down the move that unlocks the next stage. Then go do that move and only that
          move. The biggest mistake teams make at this point is trying to skip stages.
          Stage 1 to Stage 3 in one quarter is impossible. The shape of the work has to
          change first.
        </p>

        <p>
          The second is selection: when you&rsquo;re evaluating tools, evaluate them against
          the stage you&rsquo;re moving <em>into</em>, not the stage you&rsquo;re currently
          in. A tool built for Stage 2 will hold your team there. A tool built for Stage 3
          will feel like overkill until the day it doesn&rsquo;t.
        </p>

        <p>
          We built Lane around Stages 3 and 4, because that&rsquo;s the gap nothing on the
          market addresses. Jira and Linear are excellent at Stage 2 and we won&rsquo;t
          pretend otherwise &mdash; if you&rsquo;re still climbing out of Chaos, start there.
          But if you&rsquo;ve been at Stage 2 for a year and the wider gap between the
          workflow and the work is starting to scare you, that&rsquo;s the signal. The next
          stage isn&rsquo;t a better dashboard. It&rsquo;s a different operating model.
        </p>

        <p>
          Surveillance produces performance. Support produces truth. The maturity model is
          the road from one to the other.
        </p>
      </ArticleLayout>
      <WireframeCell>
        <Footer />
      </WireframeCell>
      <FooterBar />
    </>
  )
}
