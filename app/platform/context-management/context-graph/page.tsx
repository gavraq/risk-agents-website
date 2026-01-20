import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Context Graph - Context Management - Risk Agents',
  description: 'Infrastructure for capturing decision traces and reasoning. Context graphs become organizational world models that enable AI to simulate futures, not just retrieve pasts.',
};

export default function ContextGraphPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/platform/context-management" className="text-muted hover:text-secondary transition-colors text-sm mb-4 inline-block">
            &larr; Back to Context Management
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Context Graph
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            How People Navigate the Map: Infrastructure for capturing the reasoning and decisions that traditional systems miss. The foundation for organizational intelligence that compounds.
          </p>
        </div>
      </section>

      {/* The Two Clocks Problem */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            The Two Clocks Problem
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Every system runs on two clocks. The <strong className="text-white">state clock</strong> tells you what&apos;s true right now—the current value, the final decision, the approved configuration. The <strong className="text-white">event clock</strong> tells you how it became true—the discussions, the reasoning, the trade-offs considered.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            We&apos;ve built trillion-dollar infrastructure for the state clock. Your CRM stores the deal value, not the negotiation. Your risk system stores &quot;approved,&quot; not the reasoning. Your policy documents show current state, not the debates that shaped them.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            The event clock barely exists. It lives in people&apos;s heads, email threads, meeting rooms that weren&apos;t recorded. When experienced staff leave, the event clock walks out the door with them.
          </p>
        </div>
      </section>

      {/* Why This Matters for AI */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why This Matters for AI
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            This made sense when humans were the reasoning layer. Organizational knowledge was distributed across human heads, reconstructed on demand through conversation. But now we want AI to help us make decisions—and we&apos;ve given it nothing to reason from.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            We&apos;re asking models to exercise judgment without access to precedent. It&apos;s like training a lawyer on verdicts without case law.
          </p>

          <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
            <h3 className="text-xl font-bold text-white mb-4">Examples of Missing Context</h3>
            <ul className="text-secondary space-y-4">
              <li>
                <strong className="text-white">The limit says $50M.</strong> It used to say $25M. Why was it increased? The approval log shows who—the reasoning is gone.
              </li>
              <li>
                <strong className="text-white">The model says &quot;validated.&quot;</strong> Doesn&apos;t capture that validation passed only after adjusting three assumptions that were debated for weeks.
              </li>
              <li>
                <strong className="text-white">The exception was approved.</strong> Doesn&apos;t show that similar exceptions were denied last quarter, or why this one was different.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Agents as Informed Walkers */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Agents as Informed Walkers
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Every organisation is different. Every system has unique structure. You can&apos;t standardize &quot;how decisions work&quot; any more than you can standardize &quot;how companies work.&quot; So how do you capture the event clock for systems you can&apos;t fully see or fully schema?
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            The answer: agents that navigate these systems by definition.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            When an AI agent works through a problem—investigating an issue, preparing an analysis, supporting a decision—it traces a path through organisational knowledge. It touches systems, reads data, considers context. That trajectory is a trace through state space.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            Unlike random exploration, agent trajectories are <strong className="text-white">problem-directed</strong>. The agent goes where the problem takes it, and problems reveal what actually matters. Accumulate thousands of these trajectories and you get a learned representation of how the organisation actually functions—discovered through use, not specified upfront.
          </p>
        </div>
      </section>

      {/* The Economic Elegance */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            The Economic Elegance
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Here&apos;s what makes context graphs different from traditional knowledge management: the agents aren&apos;t building the graph—they&apos;re solving problems worth paying for. The context graph is the exhaust.
          </p>

          <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
            <h3 className="text-xl font-bold text-white mb-6 text-center">The Virtuous Cycle</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <p className="text-secondary">Better context makes agents more capable</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <p className="text-secondary">Capable agents get deployed more</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <p className="text-secondary">Deployment generates trajectories</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <p className="text-secondary">Trajectories build richer context</p>
              </div>
            </div>
            <p className="text-muted text-sm mt-6 text-center">
              Intelligence compounds. Every problem solved makes the next problem easier.
            </p>
          </div>
        </div>
      </section>

      {/* World Models */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            From Graph to World Model
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            A context graph with enough accumulated structure becomes something more powerful: a <strong className="text-white">world model</strong> for organisational dynamics.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            World models encode how environments work. In robotics, they capture physics—how objects fall, how forces propagate. In organisations, they capture decision dynamics—how exceptions get approved, how escalations propagate, what happens when you combine this risk appetite with that market condition.
          </p>

          <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)] my-8">
            <p className="text-xl text-white italic leading-relaxed text-center">
              &quot;The model is the engine. The context graph is the world model that makes the engine useful.&quot;
            </p>
          </div>

          <p className="text-lg text-secondary leading-relaxed mb-6">
            State tells you what&apos;s true. The event clock—encoded in the context graph—tells you how the system <em>behaves</em>. And behaviour is what you need to simulate.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            Once you have a world model, you can ask &quot;what if?&quot; Not just retrieve what happened in similar situations, but simulate what would happen if you took this action. That&apos;s the difference between a search index and genuine organisational intelligence.
          </p>
        </div>
      </section>

      {/* The Experienced Employee Analogy */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            What Experienced Employees Have
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Think about what makes a 20-year veteran valuable. It&apos;s not different cognitive architecture—it&apos;s a better world model. They&apos;ve seen enough situations to simulate outcomes.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-3">New Hire</h3>
              <p className="text-secondary text-sm">
                Follows the documented process. Asks &quot;what does the policy say?&quot; Makes decisions based on explicit rules. Gets surprised by outcomes that seem obvious to others.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-3">Experienced Employee</h3>
              <p className="text-secondary text-sm">
                Knows how decisions actually unfold. Asks &quot;how have similar situations played out?&quot; Anticipates second-order effects. Sees patterns across seemingly unrelated events.
              </p>
            </div>
          </div>

          <p className="text-lg text-secondary leading-relaxed mt-8">
            The experienced employee isn&apos;t doing retrieval. They&apos;re doing inference over an internal model of system behaviour. &quot;If we approve this exception, three other teams will ask for the same thing next week.&quot; That&apos;s simulation, not memory.
          </p>
          <p className="text-lg text-secondary leading-relaxed mt-6">
            Context graphs make this institutional wisdom explicit and available to AI systems—and to new employees who haven&apos;t had decades to build their own mental models.
          </p>
        </div>
      </section>

      {/* Three Core Problems */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What Context Graphs Solve
          </h2>

          <div className="space-y-6">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-3">The Two Clocks Problem</h3>
              <p className="text-secondary">
                We&apos;ve built infrastructure for state and almost nothing for reasoning. Context graphs reconstruct the event clock—capturing not just what decisions were made, but why.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-3">Schema Discovery</h3>
              <p className="text-secondary">
                You can&apos;t predefine organisational ontology—it&apos;s too dynamic and context-dependent. Agent trajectories discover structure through problem-directed traversal. The schema emerges from use, not upfront specification.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-3">Simulation, Not Just Retrieval</h3>
              <p className="text-secondary">
                Context graphs that accumulate enough structure become simulators. They encode organisational dynamics—decision patterns, state propagation, entity interactions. If you can ask &quot;what if?&quot; and get useful answers, you&apos;ve built something real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Unlock */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            The Real Unlock
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            The path to transformative AI in risk management isn&apos;t just better models. It&apos;s better infrastructure for making deployed intelligence accumulate.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Organisations that build context graphs will have something qualitatively different: not agents that complete tasks, but <strong className="text-white">organisational intelligence that compounds</strong>. Intelligence that simulates futures, not just retrieves pasts. That reasons from learned world models rather than starting from scratch every time.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            The institutional memory that usually walks out the door when experienced staff retire? It becomes infrastructure. The reasoning behind past decisions? Available to inform future ones. That&apos;s the difference between a chatbot and a trusted risk advisor.
          </p>
        </div>
      </section>

      {/* Connection to Taxonomy */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            The Map and the Navigator
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            The context graph doesn&apos;t operate in isolation. It works within the Risk Taxonomy—the structured map of policies, processes, and controls that provides guardrails. The taxonomy is the map; the context graph captures how people actually navigate that map.
          </p>
          <Link
            href="/platform/context-management/risk-taxonomy"
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore Risk Taxonomy &rarr;
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              href="/platform/context-management/risk-taxonomy"
              className="text-muted hover:text-secondary transition-colors"
            >
              &larr; Risk Taxonomy
            </Link>
            <Link
              href="/platform/context-management"
              className="text-muted hover:text-secondary transition-colors"
            >
              Back to Context Management &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
