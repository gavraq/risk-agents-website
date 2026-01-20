import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Platform Overview - Risk Agents',
  description: 'The Risk Agents platform: a new architecture for risk management that captures the Actual Process, not just the Official Record.',
};

export default function PlatformOverview() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">Platform</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Risk Agents Platform
          </h1>
          <p className="text-xl text-secondary max-w-2xl mb-6">
            An AI-powered risk intelligence system that captures the Actual Process—not just the Official Record. Built to amplify human capability, not replace it.
          </p>
          <p className="text-lg text-muted max-w-2xl">
            A risk analyst might review 50-100 scenarios per quarter—not because they&apos;re lazy, but because that&apos;s all the system allows. AI changes the equation: 10X or even 100X more than we can achieve today, with humans making the final decisions.
          </p>
        </div>
      </section>

      {/* Two Systems: Current + Agentic */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Two Systems, Working Together
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Agentic systems don&apos;t replace your core systems—they augment them, filling the gaps and expanding what&apos;s possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Core Systems */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Core Systems</h3>
              <p className="text-secondary text-sm mb-4">
                Your existing infrastructure: market risk engines, credit workflow systems, regulatory reporting tools. Deterministic, auditable, embedded in the organisation.
              </p>
              <ul className="space-y-2 text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Captures the <strong className="text-white">Official Record</strong>—forms, approvals, final decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Code is king—deterministic flows ensure auditability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Long IT change cycles mean business often runs ahead</span>
                </li>
              </ul>
            </div>

            {/* Agentic Systems */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Agentic Systems</h3>
              <p className="text-secondary text-sm mb-4">
                AI agents that run tools in a loop to achieve goals. They operate alongside core systems, capturing what those systems miss.
              </p>
              <ul className="space-y-2 text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Captures the <strong className="text-white">Actual Process</strong>—reasoning, context, discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Business owns the workflows—changes in days, not months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <span>Human-in-the-loop ensures accountability</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
            <p className="text-secondary text-center">
              <strong className="text-white">The key insight:</strong> Agentic systems make core systems more complete. They capture the discussions, research, and reasoning that happen <em>around</em> the formal process—and store it in context graphs that make AI actually useful.
            </p>
          </div>
        </div>
      </section>

      {/* The Platform Stack - Simplified 3 Layers */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              The New Stack
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              A simplified three-layer architecture that finally captures the Actual Process
            </p>
          </div>

          <div className="space-y-6">
            {/* Layer 1: Core Systems */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">Core Systems</h3>
                    <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Your existing infrastructure</span>
                  </div>
                  <p className="text-secondary text-sm mb-3">
                    Your existing infrastructure stays in place. Credit workflow tools, market risk engines, regulatory reporting, trade capture systems. These continue to provide the <strong className="text-white">Official Record</strong>—deterministic, auditable, unchanged. They&apos;re good at what they do.
                  </p>
                  <p className="text-muted text-xs">
                    <strong className="text-secondary">Risk Agents provides:</strong> Integration patterns and examples. <strong className="text-secondary">You build:</strong> Connections to your specific systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 2: Agentic Systems */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">Agentic Systems</h3>
                    <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">The new layer</span>
                  </div>
                  <p className="text-secondary text-sm mb-4">
                    This is the new layer that captures the <strong className="text-white">Actual Process</strong>. It comprises two parts:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-[rgb(22,22,22)] rounded-lg p-4 border border-[rgb(45,45,45)]">
                      <p className="text-white font-semibold text-sm mb-2">The Foundation</p>
                      <p className="text-muted text-xs mb-2">
                        The core agentic loop provided by Large Language Models—a general-purpose reasoning engine trained on the internet. On its own, nothing more than that.
                      </p>
                      <p className="text-muted text-xs">
                        <strong className="text-secondary">You purchase:</strong> LLM subscriptions from major labs (Anthropic, OpenAI, etc.)
                      </p>
                    </div>
                    <div className="bg-[rgb(22,22,22)] rounded-lg p-4 border border-[rgb(45,45,45)]">
                      <p className="text-white font-semibold text-sm mb-2">Skills & Patterns</p>
                      <p className="text-muted text-xs mb-2">
                        Composable building blocks of prompts and supporting code that provide specific business context. This is what transforms a generic reasoning engine into a specialist risk management tool.
                      </p>
                      <p className="text-muted text-xs">
                        <strong className="text-secondary">Risk Agents provides:</strong> Skills library and patterns. <strong className="text-secondary">You customise:</strong> Organisation-specific adaptations.
                      </p>
                    </div>
                  </div>

                  <p className="text-secondary text-sm">
                    <strong className="text-white">Critically, business owns these skills and updates them directly</strong>—changes happen in days, not months.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <Link href="/platform/skills" className="text-muted hover:text-secondary transition-colors text-xs">Explore Skills →</Link>
                    <Link href="/platform/patterns" className="text-muted hover:text-secondary transition-colors text-xs">Explore Patterns →</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Data Layer */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">Data Layer</h3>
                    <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Serves both layers above</span>
                  </div>
                  <p className="text-secondary text-sm mb-4">
                    This serves both Core Systems and Agentic Systems:
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 mb-4">
                    <div className="bg-[rgb(22,22,22)] rounded-lg p-3 border border-[rgb(45,45,45)]">
                      <p className="text-white font-semibold text-xs mb-1">Structured Data</p>
                      <p className="text-muted text-xs">Business facts with key attributes—trades, counterparties, transactions. Feeds both layers.</p>
                    </div>
                    <div className="bg-[rgb(22,22,22)] rounded-lg p-3 border border-[rgb(45,45,45)]">
                      <p className="text-white font-semibold text-xs mb-1">Unstructured Data</p>
                      <p className="text-muted text-xs">Meeting transcripts, Slack/Teams discussions, decision evidence, email threads. This is where the Actual Process lives.</p>
                    </div>
                    <div className="bg-[rgb(22,22,22)] rounded-lg p-3 border border-[rgb(45,45,45)]">
                      <p className="text-white font-semibold text-xs mb-1">Context Graphs</p>
                      <p className="text-muted text-xs">Accumulated reasoning and decision traces. Captures not just what decisions were made, but why, with what reasoning, under what circumstances.</p>
                    </div>
                  </div>
                  <p className="text-muted text-xs">
                    <strong className="text-secondary">You build:</strong> Your own data connections, context graphs from your decision traces. This is your competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked Examples */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Practical examples showing how the platform works for real risk management tasks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example 1: Credit Limit Request */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">MVP</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Credit Limit Request Workflow</h3>
              <p className="text-secondary text-sm mb-4">
                End-to-end credit approval using composable skills: Credit Request, Legal Review, Credit Analysis (with sub-skills for research, financial spreading, climate scorecard).
              </p>
              <p className="text-muted text-xs mb-3">
                <strong className="text-secondary">Skills built:</strong> Climate Scorecard Filler ✓
              </p>
              <p className="text-muted text-xs">
                <strong className="text-secondary">Skills in roadmap:</strong> Credit Request, Legal Review, Financial Spreading
              </p>
            </div>

            {/* Example 2: Stress Testing */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded">Built</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Market Risk Stress Testing</h3>
              <p className="text-secondary text-sm mb-4">
                AI-assisted scenario development following the annual stress testing cycle. Covers pillar stress and point-of-weakness scenarios across all asset classes.
              </p>
              <p className="text-muted text-xs">
                <strong className="text-secondary">Skills built:</strong> Stress Scenario Suggester ✓, Pillar Stress Generator ✓
              </p>
            </div>

            {/* Example 3: Regulatory Change */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded">Built</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Regulatory Change Management</h3>
              <p className="text-secondary text-sm mb-4">
                Continuous monitoring of regulatory changes with automatic impact assessment on the Risk Taxonomy. Updates skills when requirements change.
              </p>
              <p className="text-muted text-xs">
                <strong className="text-secondary">Built:</strong> Regulatory Risk Researcher agent ✓, Regulatory Change Assessor skill ✓
              </p>
            </div>

            {/* Example 4: Goal Setting */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Concept</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Goal Setting & Strategic Alignment</h3>
              <p className="text-secondary text-sm mb-4">
                Structured AI-guided goal review process. Replaces ad-hoc &quot;offsite slide deck&quot; approach with systematic assessment of status, gaps, and initiatives.
              </p>
              <p className="text-muted text-xs">
                <strong className="text-secondary">Planned:</strong> Horizons Reviewer skill (adapted for business), Weekly Review skill for monitoring
              </p>
            </div>

            {/* Example 5: Taxonomy Maintenance */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Concept</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Taxonomy & Documentation Maintenance</h3>
              <p className="text-secondary text-sm mb-4">
                AI excels at documentation—it doesn&apos;t tire of it. Specialist skills maintain consistency across risk disciplines and keep documentation current.
              </p>
              <p className="text-muted text-xs">
                <strong className="text-secondary">Planned:</strong> Policy-updater, procedure-writer, and layer-specific documentation skills
              </p>
            </div>

            {/* Example 6: Risk Oracle */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Concept</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Risk Oracle</h3>
              <p className="text-secondary text-sm mb-4">
                General Q&A across your risk documentation, guided by the taxonomy. Progressive disclosure means agents only load relevant context—efficient and accurate.
              </p>
              <p className="text-muted text-xs">
                <strong className="text-secondary">How it works:</strong> Taxonomy acts as a &quot;map&quot; for where to search, avoiding the need to load all documentation into memory.
              </p>
            </div>

            {/* Example 7: Natural Language Reporting */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-xs bg-yellow-900/50 text-yellow-400 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Natural Language Reporting</h3>
              <p className="text-secondary text-sm mb-4">
                Move from standardised templates to dynamic, natural language reports generated from underlying data. Ask questions, get answers with full context.
              </p>
              <Link href="/platform/reporting" className="text-muted hover:text-secondary transition-colors text-xs">
                Learn more about reporting →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Context Graph Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              The Power of Context Graphs
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Why decision traces matter more than data
            </p>
          </div>

          <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)] mb-8">
            <p className="text-xl text-white italic leading-relaxed text-center">
              &quot;The taxonomy is the map; the context graph captures how people actually navigate that map.&quot;
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">The Two Clocks Problem</h3>
              <p className="text-secondary text-sm mb-4">
                Every system has a <strong className="text-white">state clock</strong>—what&apos;s true right now—and an <strong className="text-white">event clock</strong>—what happened, in what order, with what reasoning.
              </p>
              <p className="text-muted text-sm">
                We&apos;ve built trillion-dollar infrastructure for the state clock. The event clock barely exists. That&apos;s the gap context graphs fill.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">From Retrieval to Simulation</h3>
              <p className="text-secondary text-sm mb-4">
                Over time, context graphs become <strong className="text-white">world models</strong>. The organisation can simulate &quot;what if?&quot;—not just retrieve &quot;what was.&quot;
              </p>
              <p className="text-muted text-sm">
                That&apos;s the difference between a chatbot and a trusted risk advisor. Simulation is the test of understanding.
              </p>
            </div>
          </div>

          <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
            <p className="text-secondary text-center text-sm">
              <strong className="text-white">The model is the engine. The context graph is the world model that makes the engine useful.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What You Get vs What You Build */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What You Get vs What You Build
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Risk Agents is a community, not just software. Here&apos;s the split.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">Risk Agents Provides</h3>
              <ul className="space-y-4 text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Baseline Policies & Frameworks</strong> — Meridien Global Bank templates you can adapt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Baseline Risk Taxonomy</strong> — L1-L7 structure with documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Skills Library</strong> — Climate scorecard, stress testing, regulatory change, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Patterns</strong> — Complete workflow combinations ready to deploy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Documentation Skills</strong> — Policy-updater, procedure-writer for taxonomy maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span><strong className="text-white">Community Collaboration</strong> — Share and improve skills across members</span>
                </li>
              </ul>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">You Build / Customise</h3>
              <ul className="space-y-4 text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">→</span>
                  <span><strong className="text-white">Organisation-specific Goals</strong> — Your objectives, your strategic priorities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">→</span>
                  <span><strong className="text-white">Taxonomy Overlays</strong> — Nuances specific to your business lines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">→</span>
                  <span><strong className="text-white">Core System Integrations</strong> — Connect to your existing infrastructure via APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">→</span>
                  <span><strong className="text-white">LLM Subscriptions</strong> — Purchase from Anthropic, OpenAI, or other providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">→</span>
                  <span><strong className="text-white">Your Data Connections</strong> — Structured data feeds from your systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">→</span>
                  <span><strong className="text-white">Your Context Graphs</strong> — Decision traces from your processes (your competitive advantage)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Progression */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            Context Management → Skills → Patterns → Goal Alignment
          </h3>
          <p className="text-secondary text-sm mb-8">
            Context provides the foundation. Skills provide capabilities. Patterns orchestrate workflows. Goal Alignment ensures everything connects to strategic outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/platform/context-management" className="btn-secondary text-sm">
              Context Management
            </Link>
            <Link href="/platform/skills" className="btn-secondary text-sm">
              Skills
            </Link>
            <Link href="/platform/patterns" className="btn-secondary text-sm">
              Patterns
            </Link>
            <Link href="/platform/goal-alignment" className="btn-secondary text-sm">
              Goal Alignment
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Infrastructure for the Actual Process?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Join as a founding member to help shape the platform and get early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/members/founding" className="btn-primary">
              Become a Founding Member
            </Link>
            <Link href="/platform/human-in-the-loop" className="btn-secondary">
              Explore Human-in-the-Loop
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
