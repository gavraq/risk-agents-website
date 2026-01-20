import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Context Management - Risk Agents',
  description: 'Risk Taxonomy and Context Graph: Two complementary approaches to capturing institutional knowledge. The 3 C\'s methodology for AI-powered risk intelligence.',
};

export default function ContextManagementPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">Innovation #1</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Context Management
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Two complementary approaches to capturing what AI needs to reason effectively: the official structure and the actual process.
          </p>
        </div>
      </section>

      {/* Why Context Matters */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Context Matters
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Large Language Models are powerful but stateless—they lack inherent knowledge of your bank&apos;s specifics, policies, and data. The real challenge isn&apos;t AI capability. It&apos;s ensuring AI has access to the right information when needed.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-3">Without Context</h3>
              <ul className="text-secondary text-sm space-y-2">
                <li>• Generic responses miss your specifics</li>
                <li>• Hallucinations fill knowledge gaps</li>
                <li>• Frameworks cannot be properly applied</li>
                <li>• Institutional knowledge remains locked in heads</li>
              </ul>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-3">With Context Engineering</h3>
              <ul className="text-secondary text-sm space-y-2">
                <li>• Agents understand your policies and limits</li>
                <li>• Responses grounded in actual data</li>
                <li>• Methodologies consistently applied</li>
                <li>• Institutional knowledge preserved and accessible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            The Gap Everyone Knows
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Every organisation runs on two versions of reality. The <strong className="text-white">Official Record</strong> is what IT systems capture: forms filled, workflows completed, approvals logged. It&apos;s clean, structured, and utterly incomplete.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            The <strong className="text-white">Actual Process</strong> is how decisions really get made: conversations, context, reasoning, judgment. It&apos;s messy, distributed, and almost entirely uncaptured. It lives in people&apos;s heads, email threads, and meeting rooms.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            We&apos;ve spent decades building infrastructure for the Official Record. The Actual Process? It barely exists in any system. Now we want AI to help us make decisions—and we&apos;ve given it nothing to reason from.
          </p>
        </div>
      </section>

      {/* Two Approaches */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Two Approaches, Both Required
          </h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            Neither approach alone is sufficient. Together they provide the complete context AI needs to reason effectively.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Risk Taxonomy */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Risk Taxonomy</h3>
              <p className="text-muted uppercase text-sm tracking-wide mb-4">The Map</p>
              <p className="text-secondary leading-relaxed mb-6">
                The traditional perspective: policies, procedures, processes, controls. Essential in regulated industries because you&apos;re expected to have documented, auditable frameworks.
              </p>
              <p className="text-secondary leading-relaxed mb-6">
                A taxonomy provides the human-understandable structure that gives AI guardrails. It defines what entities exist, how they relate, what governance applies.
              </p>
              <Link
                href="/platform/context-management/risk-taxonomy"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                Explore Risk Taxonomy &rarr;
              </Link>
            </div>

            {/* Context Graph */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Context Graph</h3>
              <p className="text-muted uppercase text-sm tracking-wide mb-4">How People Navigate the Map</p>
              <p className="text-secondary leading-relaxed mb-6">
                A new perspective: real business processes emerge from actual decisions made through conversations outside core systems. The &quot;real&quot; process that codified systems fail to capture.
              </p>
              <p className="text-secondary leading-relaxed mb-6">
                When AI agents work through problems, they trace paths through organisational knowledge. Those traces become data—the context graph learns how your organisation <em>actually</em> works.
              </p>
              <Link
                href="/platform/context-management/context-graph"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                Explore Context Graph &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Key Insight */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)] mb-8">
            <p className="text-xl text-white italic leading-relaxed">
              &quot;The taxonomy is the map; the context graph captures how people actually navigate that map.&quot;
            </p>
          </div>
          <p className="text-lg text-secondary leading-relaxed">
            Without the taxonomy, you get chaos. Without the context graph, you get the same rigid systems we have today. The combination gives you structure <em>and</em> learning—guardrails <em>and</em> intelligence.
          </p>
        </div>
      </section>

      {/* The 3 C's - Bringing It Together */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            The 3 C&apos;s: Bringing It Together
          </h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            A systematic methodology that leverages both Risk Taxonomy and Context Graph to build and maintain AI agent context.
          </p>

          <div className="space-y-8">
            {/* Capture */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Capture</h3>
                  <p className="text-muted uppercase text-sm tracking-wide mb-4">Gather Information — Far More Than Before</p>
                  <p className="text-secondary leading-relaxed mb-4">
                    Traditional capture focused on structured data and formal documents. Context Management requires capturing significantly more: meeting transcripts, Slack discussions, email threads, voice notes—the &quot;event clock&quot; that records not just what happened, but why.
                  </p>
                  <p className="text-secondary leading-relaxed">
                    This expanded capture feeds the <strong className="text-white">Context Graph</strong>. Every conversation, every decision rationale, every informal discussion becomes data that AI can reason from. The institutional memory that usually walks out the door? Now it&apos;s captured.
                  </p>
                </div>
              </div>
            </div>

            {/* Curate */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Curate</h3>
                  <p className="text-muted uppercase text-sm tracking-wide mb-4">Organize Knowledge — Using the Taxonomy</p>
                  <p className="text-secondary leading-relaxed mb-4">
                    Raw captured information is noise without structure. The <strong className="text-white">Risk Taxonomy</strong> provides the organizing framework: tagging information to policies, mapping discussions to governance forums, linking decisions to the processes they affect.
                  </p>
                  <p className="text-secondary leading-relaxed">
                    This is where the two approaches connect. Captured context is curated against the taxonomy—ensuring every piece of information is findable, traceable, and properly governed. The taxonomy provides guardrails; the context graph provides intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* Consult */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Consult</h3>
                  <p className="text-muted uppercase text-sm tracking-wide mb-4">Deliver Insights — Expanding Your Vision</p>
                  <p className="text-secondary leading-relaxed mb-4">
                    With both taxonomy structure and context graph depth, AI agents can deliver insights that were previously impossible. Not just &quot;what does the policy say?&quot; but &quot;how have similar situations been handled, and why?&quot;
                  </p>
                  <p className="text-secondary leading-relaxed">
                    This is where you <strong className="text-white">expand the boundaries of your vision</strong>. The context graph becomes a world model—enabling not just retrieval of what happened, but simulation of &quot;what if?&quot; You can reason from precedent, even when the people who set that precedent have long since left.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why This Matters for AI
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            The institutional memory that usually walks out the door when experienced staff retire? It becomes infrastructure. The reasoning behind past decisions? Available to inform future ones.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            This is what enables 10X, 100X amplification. Not AI replacing human judgment, but AI equipped with the accumulated wisdom of how your organisation actually makes decisions—within its actual constraints, culture, and risk appetite.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            Over time, context graphs become something more powerful: <strong className="text-white">world models</strong>. The organisation can simulate &quot;what if?&quot;—not just retrieve &quot;what was.&quot; That&apos;s the difference between a chatbot and a trusted risk advisor.
          </p>
        </div>
      </section>

      {/* Innovation Progression */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            Context Management → Skills → Patterns → Goal Alignment
          </h3>
          <p className="text-secondary text-sm mb-8">
            Context provides the foundation. Skills provide capabilities. Patterns orchestrate workflows. Goal Alignment ensures everything connects to strategic outcomes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/platform/skills"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Skills &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
