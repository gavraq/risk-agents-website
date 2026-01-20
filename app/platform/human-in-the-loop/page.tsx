import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
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
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">AI + Human Partnership</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Human-in-the-Loop
          </h1>
          <p className="text-2xl text-white mb-4">
            AI Augments, Humans Decide
          </p>
          <p className="text-xl text-secondary max-w-2xl">
            Not about replacement—about expanding what&apos;s possible. AI scans the vast universe of risk scenarios so humans can focus on what matters: judgment.
          </p>
        </div>
      </section>

      {/* The Scenario Space */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual: Scenario Space Diagram */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6 text-center">The Scenario Space</h3>

              {/* Concentric circles visualization */}
              <div className="relative h-80 flex items-center justify-center">
                {/* Outer circle - Universe of Scenarios */}
                <div className="absolute w-72 h-72 rounded-full border-2 border-dashed border-[rgb(100,100,100)] flex items-center justify-center">
                  <span className="absolute -top-8 text-xs text-muted font-semibold">Universe of Risk Scenarios</span>
                </div>

                {/* Middle circle - AI-Expanded Coverage */}
                <div className="absolute w-48 h-48 rounded-full bg-[rgb(45,45,45)] border border-[rgb(80,80,80)] flex items-center justify-center">
                  <span className="absolute -bottom-8 text-xs text-secondary">AI-Expanded Coverage</span>
                </div>

                {/* Inner circle - Human Capacity */}
                <div className="absolute w-20 h-20 rounded-full bg-white/10 border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-white text-center font-semibold px-1">Human Capacity</span>
                </div>
              </div>

              <p className="text-muted text-sm text-center mt-4">
                AI expands the area humans can meaningfully review
              </p>
            </div>

            {/* Explanation */}
            <div>
              <p className="text-muted uppercase text-xs tracking-wider mb-4">The Capacity Gap</p>
              <h2 className="text-3xl font-bold text-white mb-6">
                Most Risks Are Invisible Due to Capacity
              </h2>
              <p className="text-secondary mb-6">
                Risk management is fundamentally about anticipating future scenarios. The universe of potential futures—market combinations, counterparty failures, regulatory changes, operational breakdowns—is vastly larger than any human team can scan.
              </p>
              <p className="text-secondary mb-6">
                Most risks aren&apos;t ignored due to negligence. They&apos;re invisible because there simply isn&apos;t enough human capacity to review them all.
              </p>
              <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
                <div className="text-white font-semibold mb-2">The Hard Truth</div>
                <p className="text-muted text-sm">
                  A typical risk team can deeply analyze perhaps 50-100 scenarios per quarter. The space of &quot;extreme but plausible&quot; scenarios? Thousands. AI doesn&apos;t replace judgment—it expands what humans can see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stress Testing Example */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted uppercase text-xs tracking-wider mb-4">Real-World Example</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Stress Testing: The Scenario Design Problem
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Regulators expect banks to test against &quot;extreme but plausible&quot; scenarios. But what does that really look like in practice?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without AI */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="text-muted font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Today&apos;s Reality
              </div>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">•</span>
                  <span>Each scenario design takes <strong className="text-white">days of expert time</strong>—combining macro factors, translating to market moves, calibrating severity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">•</span>
                  <span>Banks typically run <strong className="text-white">10-20 scenarios</strong> for annual stress tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">•</span>
                  <span>The universe of plausible combinations is <strong className="text-white">thousands</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">•</span>
                  <span>Teams inevitably <strong className="text-white">recycle last year&apos;s scenarios</strong> with minor updates</span>
                </li>
              </ul>
            </div>

            {/* With AI */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                With AI Augmentation
              </div>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>AI generates <strong className="text-white">hundreds of candidate scenarios</strong> across macro combinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Screens for <strong className="text-white">plausibility and severity</strong>—flagging novel risk concentrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Surfaces scenarios that <strong className="text-white">humans would never have time to consider</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Risk experts <strong className="text-white">select and refine the most relevant</strong> for deep analysis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-secondary text-lg">
              AI generates and screens thousands. <strong className="text-white">Humans judge which matter.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What AI Expands */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted uppercase text-xs tracking-wider mb-4">AI Contribution</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              What AI Expands
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              AI dramatically increases the capacity for intelligent risk work across four dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Volume</h3>
              <p className="text-secondary text-sm">
                Monitor more positions, counterparties, and scenarios simultaneously. Review thousands where humans could review dozens.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Speed</h3>
              <p className="text-secondary text-sm">
                Real-time pattern detection versus end-of-day batch analysis. Surface emerging risks as they develop, not after the fact.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pattern Recognition</h3>
              <p className="text-secondary text-sm">
                Find correlations across larger datasets and longer histories. Detect relationships that would take humans weeks to uncover.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scenario Generation</h3>
              <p className="text-secondary text-sm">
                Explore more future possibilities and stress combinations. Generate candidate scenarios that would never occur to time-constrained humans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Humans Provide */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted uppercase text-xs tracking-wider mb-4">Irreplaceable Human Value</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              What Humans Provide
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Just as artistic &quot;taste&quot; cannot be replicated by AI, risk judgment requires capabilities that remain uniquely human
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="text-white font-bold text-lg mb-3">Risk Judgment</div>
              <p className="text-secondary text-sm">
                Weighing competing priorities under genuine uncertainty. Deciding when the model output doesn&apos;t feel right, even if the numbers look fine.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="text-white font-bold text-lg mb-3">Accountability</div>
              <p className="text-secondary text-sm">
                Final decisions require human ownership. Regulators expect a human to stand behind every material risk decision—and they should.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="text-white font-bold text-lg mb-3">Institutional Context</div>
              <p className="text-secondary text-sm">
                Understanding stakeholder dynamics, regulatory relationships, and organizational history that no model can capture.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="text-white font-bold text-lg mb-3">Strategic Trade-offs</div>
              <p className="text-secondary text-sm">
                Balancing risk appetite with business objectives. Making calls about which risks are worth taking for the right return.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)] md:col-span-2 lg:col-span-2">
              <div className="text-white font-bold text-lg mb-3">&quot;Knowing When Models Miss the Point&quot;</div>
              <p className="text-secondary text-sm">
                The equivalent of artistic taste in risk management. Recognizing when quantitative answers miss qualitative reality. Sensing when a scenario &quot;smells wrong&quot; even if the math checks out. This is accumulated wisdom that cannot be taught to a machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works in Practice */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted uppercase text-xs tracking-wider mb-4">Implementation</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              How It Works in Practice
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Concrete mechanisms that keep humans in control while leveraging AI capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[rgb(45,45,45)] rounded-lg p-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Confidence Scoring</h3>
              </div>
              <p className="text-secondary text-sm mb-4">
                Every AI output includes a confidence level. High confidence items can proceed with light review. Low confidence automatically triggers deeper human analysis.
              </p>
              <div className="bg-[rgb(35,35,35)] rounded-lg p-4 text-sm">
                <div className="flex justify-between text-muted mb-2">
                  <span>High confidence (&gt;90%)</span>
                  <span className="text-white">Light review</span>
                </div>
                <div className="flex justify-between text-muted mb-2">
                  <span>Medium (70-90%)</span>
                  <span className="text-secondary">Standard review</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Low (&lt;70%)</span>
                  <span className="text-muted">Deep analysis required</span>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[rgb(45,45,45)] rounded-lg p-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Review Gating</h3>
              </div>
              <p className="text-secondary text-sm mb-4">
                Certain decision types always require human approval, regardless of AI confidence. Material limit breaches, new product approvals, regulatory submissions—humans sign off.
              </p>
              <div className="bg-[rgb(35,35,35)] rounded-lg p-4 text-sm text-muted">
                <div className="mb-2">→ Limit exception requests</div>
                <div className="mb-2">→ New counterparty approvals</div>
                <div className="mb-2">→ Model change sign-offs</div>
                <div>→ Regulatory report submissions</div>
              </div>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[rgb(45,45,45)] rounded-lg p-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Audit Trails</h3>
              </div>
              <p className="text-secondary text-sm mb-4">
                Every AI recommendation and human decision is logged with full context. Complete traceability for regulatory examination or internal review.
              </p>
              <div className="bg-[rgb(35,35,35)] rounded-lg p-4 text-sm text-muted">
                What was recommended? What did the human decide? Why? All recorded.
              </div>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[rgb(45,45,45)] rounded-lg p-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Escalation Workflows</h3>
              </div>
              <p className="text-secondary text-sm mb-4">
                Automatic escalation when thresholds are breached or anomalies detected. The right humans are notified immediately—no buried alerts.
              </p>
              <div className="bg-[rgb(35,35,35)] rounded-lg p-4 text-sm text-muted">
                Threshold breach → Team lead → Risk officer → CRO (as severity warrants)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted uppercase text-xs tracking-wider mb-4">The Outcome</p>
          <h2 className="text-3xl font-bold text-white mb-8">
            Better Decisions, Not Just Faster Decisions
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)] text-left">
              <div className="text-white font-semibold mb-2">Broader Coverage</div>
              <p className="text-secondary text-sm">
                Review more scenarios, monitor more positions, detect more patterns—without adding headcount or burning out your team.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)] text-left">
              <div className="text-white font-semibold mb-2">Maintained Rigor</div>
              <p className="text-secondary text-sm">
                Human judgment applied where it matters most. AI handles volume; humans handle decisions that require wisdom.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)] text-left">
              <div className="text-white font-semibold mb-2">Focus on Judgment</div>
              <p className="text-secondary text-sm">
                Risk professionals spend time on analysis and decision-making, not data wrangling and report generation.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)] text-left">
              <div className="text-white font-semibold mb-2">Regulatory Defensibility</div>
              <p className="text-secondary text-sm">
                Humans remain accountable. Full audit trails. Clear decision ownership. Regulators see enhanced control, not abdication.
              </p>
            </div>
          </div>

          <p className="text-xl text-secondary mb-8">
            AI doesn&apos;t replace risk professionals. It makes them <span className="text-white font-semibold">more effective</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/platform" className="btn-primary">
              Explore the Platform
            </Link>
            <Link href="/members/founding" className="btn-secondary">
              Become a Founding Member
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
