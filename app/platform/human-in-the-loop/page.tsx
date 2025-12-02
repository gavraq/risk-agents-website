import Navigation from '../../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Human-in-the-Loop - Risk Agents',
  description: 'AI augments human judgment, it doesn\'t replace it. Understand how Risk Agents expands scenario coverage while keeping humans in control of decisions.',
};

export default function HumanInTheLoop() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="badge-ai">AI + Human Partnership</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
            Human-in-the-<span className="text-gradient-blue">Loop</span>
          </h1>
          <p className="text-2xl text-slate-200 mb-4">
            AI Augments, Humans Decide
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Not about replacement—about expanding what&apos;s possible. AI scans the vast universe of risk scenarios so humans can focus on what matters: judgment.
          </p>
        </div>
      </section>

      {/* The Scenario Space */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual: Scenario Space Diagram */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-6 text-center">The Scenario Space</h3>

              {/* Concentric circles visualization */}
              <div className="relative h-80 flex items-center justify-center">
                {/* Outer circle - Universe of Scenarios */}
                <div className="absolute w-72 h-72 rounded-full border-2 border-dashed border-blue-500/50 flex items-center justify-center">
                  <span className="absolute -top-8 text-xs text-blue-400 font-semibold">Universe of Risk Scenarios</span>
                </div>

                {/* Middle circle - AI-Expanded Coverage */}
                <div className="absolute w-48 h-48 rounded-full bg-blue-900/30 border border-blue-500/50 flex items-center justify-center">
                  <span className="absolute -bottom-8 text-xs text-blue-400">AI-Expanded Coverage</span>
                </div>

                {/* Inner circle - Human Capacity */}
                <div className="absolute w-20 h-20 rounded-full bg-amber-500/30 border-2 border-amber-500 flex items-center justify-center">
                  <span className="text-xs text-amber-400 text-center font-semibold px-1">Human Capacity</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm text-center mt-4">
                AI expands the area humans can meaningfully review
              </p>
            </div>

            {/* Explanation */}
            <div>
              <span className="badge-risk mb-6 inline-block">The Capacity Gap</span>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                Most Risks Are Invisible Due to Capacity
              </h2>
              <p className="text-slate-300 mb-6">
                Risk management is fundamentally about anticipating future scenarios. The universe of potential futures—market combinations, counterparty failures, regulatory changes, operational breakdowns—is vastly larger than any human team can scan.
              </p>
              <p className="text-slate-300 mb-6">
                Most risks aren&apos;t ignored due to negligence. They&apos;re invisible because there simply isn&apos;t enough human capacity to review them all.
              </p>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-amber-400 font-semibold mb-2">The Hard Truth</div>
                <p className="text-slate-400 text-sm">
                  A typical risk team can deeply analyze perhaps 50-100 scenarios per quarter. The space of &quot;extreme but plausible&quot; scenarios? Thousands. AI doesn&apos;t replace judgment—it expands what humans can see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stress Testing Example */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-success mb-6 inline-block">Real-World Example</span>
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Stress Testing: The Scenario Design Problem
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Regulators expect banks to test against &quot;extreme but plausible&quot; scenarios. But what does that really look like in practice?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without AI */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-red-900/30">
              <div className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                <span className="text-xl">⏳</span>
                Today&apos;s Reality
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Each scenario design takes <strong className="text-slate-100">days of expert time</strong>—combining macro factors, translating to market moves, calibrating severity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Banks typically run <strong className="text-slate-100">10-20 scenarios</strong> for annual stress tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>The universe of plausible combinations is <strong className="text-slate-100">thousands</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Teams inevitably <strong className="text-slate-100">recycle last year&apos;s scenarios</strong> with minor updates</span>
                </li>
              </ul>
            </div>

            {/* With AI */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-emerald-900/30">
              <div className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
                <span className="text-xl">🚀</span>
                With AI Augmentation
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>AI generates <strong className="text-slate-100">hundreds of candidate scenarios</strong> across macro combinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Screens for <strong className="text-slate-100">plausibility and severity</strong>—flagging novel risk concentrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Surfaces scenarios that <strong className="text-slate-100">humans would never have time to consider</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Risk experts <strong className="text-slate-100">select and refine the most relevant</strong> for deep analysis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-lg">
              AI generates and screens thousands. <strong className="text-slate-200">Humans judge which matter.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What AI Expands */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-ai mb-6 inline-block">AI Contribution</span>
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              What AI Expands
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              AI dramatically increases the capacity for intelligent risk work across four dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Volume</h3>
              <p className="text-slate-300 text-sm">
                Monitor more positions, counterparties, and scenarios simultaneously. Review thousands where humans could review dozens.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Speed</h3>
              <p className="text-slate-300 text-sm">
                Real-time pattern detection versus end-of-day batch analysis. Surface emerging risks as they develop, not after the fact.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Pattern Recognition</h3>
              <p className="text-slate-300 text-sm">
                Find correlations across larger datasets and longer histories. Detect relationships that would take humans weeks to uncover.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Scenario Generation</h3>
              <p className="text-slate-300 text-sm">
                Explore more future possibilities and stress combinations. Generate candidate scenarios that would never occur to time-constrained humans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Humans Provide */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-risk mb-6 inline-block">Irreplaceable Human Value</span>
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              What Humans Provide
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Just as artistic &quot;taste&quot; cannot be replicated by AI, risk judgment requires capabilities that remain uniquely human
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-900/20 to-slate-800 rounded-xl p-6 border border-amber-900/30">
              <div className="text-amber-400 font-bold text-lg mb-3">Risk Judgment</div>
              <p className="text-slate-300 text-sm">
                Weighing competing priorities under genuine uncertainty. Deciding when the model output doesn&apos;t feel right, even if the numbers look fine.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-slate-800 rounded-xl p-6 border border-blue-900/30">
              <div className="text-blue-400 font-bold text-lg mb-3">Accountability</div>
              <p className="text-slate-300 text-sm">
                Final decisions require human ownership. Regulators expect a human to stand behind every material risk decision—and they should.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/20 to-slate-800 rounded-xl p-6 border border-emerald-900/30">
              <div className="text-emerald-400 font-bold text-lg mb-3">Institutional Context</div>
              <p className="text-slate-300 text-sm">
                Understanding stakeholder dynamics, regulatory relationships, and organizational history that no model can capture.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-slate-800 rounded-xl p-6 border border-purple-900/30">
              <div className="text-purple-400 font-bold text-lg mb-3">Strategic Trade-offs</div>
              <p className="text-slate-300 text-sm">
                Balancing risk appetite with business objectives. Making calls about which risks are worth taking for the right return.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-900/20 to-slate-800 rounded-xl p-6 border border-rose-900/30 md:col-span-2 lg:col-span-2">
              <div className="text-rose-400 font-bold text-lg mb-3">&quot;Knowing When Models Miss the Point&quot;</div>
              <p className="text-slate-300 text-sm">
                The equivalent of artistic taste in risk management. Recognizing when quantitative answers miss qualitative reality. Sensing when a scenario &quot;smells wrong&quot; even if the math checks out. This is accumulated wisdom that cannot be taught to a machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works in Practice */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-success mb-6 inline-block">Implementation</span>
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              How It Works in Practice
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Concrete mechanisms that keep humans in control while leveraging AI capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <span className="text-blue-400 text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-slate-50">Confidence Scoring</h3>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Every AI output includes a confidence level. High confidence items can proceed with light review. Low confidence automatically triggers deeper human analysis.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 text-sm">
                <div className="flex justify-between text-slate-400 mb-2">
                  <span>High confidence (&gt;90%)</span>
                  <span className="text-emerald-400">Light review</span>
                </div>
                <div className="flex justify-between text-slate-400 mb-2">
                  <span>Medium (70-90%)</span>
                  <span className="text-amber-400">Standard review</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Low (&lt;70%)</span>
                  <span className="text-red-400">Deep analysis required</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-500/20 rounded-lg p-3">
                  <span className="text-amber-400 text-xl">🚦</span>
                </div>
                <h3 className="text-xl font-bold text-slate-50">Review Gating</h3>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Certain decision types always require human approval, regardless of AI confidence. Material limit breaches, new product approvals, regulatory submissions—humans sign off.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 text-sm text-slate-400">
                <div className="mb-2">→ Limit exception requests</div>
                <div className="mb-2">→ New counterparty approvals</div>
                <div className="mb-2">→ Model change sign-offs</div>
                <div>→ Regulatory report submissions</div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/20 rounded-lg p-3">
                  <span className="text-emerald-400 text-xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-slate-50">Audit Trails</h3>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Every AI recommendation and human decision is logged with full context. Complete traceability for regulatory examination or internal review.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 text-sm text-slate-400">
                What was recommended? What did the human decide? Why? All recorded.
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-500/20 rounded-lg p-3">
                  <span className="text-red-400 text-xl">🔔</span>
                </div>
                <h3 className="text-xl font-bold text-slate-50">Escalation Workflows</h3>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Automatic escalation when thresholds are breached or anomalies detected. The right humans are notified immediately—no buried alerts.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 text-sm text-slate-400">
                Threshold breach → Team lead → Risk officer → CRO (as severity warrants)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-ai mb-6 inline-block">The Outcome</span>
          <h2 className="text-3xl font-bold text-slate-50 mb-8">
            Better Decisions, Not Just Faster Decisions
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-left">
              <div className="text-emerald-400 font-semibold mb-2">Broader Coverage</div>
              <p className="text-slate-300 text-sm">
                Review more scenarios, monitor more positions, detect more patterns—without adding headcount or burning out your team.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-left">
              <div className="text-emerald-400 font-semibold mb-2">Maintained Rigor</div>
              <p className="text-slate-300 text-sm">
                Human judgment applied where it matters most. AI handles volume; humans handle decisions that require wisdom.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-left">
              <div className="text-emerald-400 font-semibold mb-2">Focus on Judgment</div>
              <p className="text-slate-300 text-sm">
                Risk professionals spend time on analysis and decision-making, not data wrangling and report generation.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-left">
              <div className="text-emerald-400 font-semibold mb-2">Regulatory Defensibility</div>
              <p className="text-slate-300 text-sm">
                Humans remain accountable. Full audit trails. Clear decision ownership. Regulators see enhanced control, not abdication.
              </p>
            </div>
          </div>

          <p className="text-xl text-slate-300 mb-8">
            AI doesn&apos;t replace risk professionals. It makes them <span className="text-gradient-blue font-semibold">more effective</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/platform" className="btn-primary">
              Explore the Platform
            </Link>
            <Link href="/skills-sharing/founding-members" className="btn-secondary">
              Become a Founding Member
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 Risk Agents. Built by <a href="https://www.gavinslater.com" className="text-blue-400 hover:text-blue-300 transition-colors">Gavin Slater</a></p>
          <p className="mt-2">30 Years of Chief Risk Officer Expertise, Delivered by AI</p>
        </div>
      </footer>
    </div>
  );
}
