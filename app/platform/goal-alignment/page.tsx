import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Goal Alignment - Risk Agents',
  description: 'Connect daily risk tasks to strategic outcomes using David Allen\'s Getting Things Done methodology.',
};

export default function GoalAlignmentPage() {
  const horizons = [
    {
      level: '50,000 ft',
      name: 'Purpose & Principles',
      description: 'Why your risk function exists',
      examples: ['Protect shareholder value', 'Enable sustainable growth', 'Maintain regulatory standing'],
      riskExample: 'Risk appetite statement and core principles'
    },
    {
      level: '40,000 ft',
      name: 'Vision',
      description: '3-5 year picture of success',
      examples: ['Best-in-class risk culture', 'Fully integrated risk views', 'Predictive capabilities'],
      riskExample: 'Target operating model for risk function'
    },
    {
      level: '30,000 ft',
      name: 'Goals',
      description: '1-2 year objectives',
      examples: ['Reduce credit losses 15%', 'Pass regulatory exam', 'Launch new product safely'],
      riskExample: 'Annual risk strategy and key initiatives'
    },
    {
      level: '20,000 ft',
      name: 'Areas of Focus',
      description: 'Key responsibilities to maintain',
      examples: ['Credit portfolio quality', 'Regulatory compliance', 'Model performance'],
      riskExample: 'Risk domain responsibilities and KRIs'
    },
    {
      level: '10,000 ft',
      name: 'Projects',
      description: 'Multi-step outcomes',
      examples: ['IFRS 9 model refresh', 'Climate stress test', 'Board pack automation'],
      riskExample: 'Current risk initiatives and programmes'
    },
    {
      level: 'Ground',
      name: 'Actions',
      description: 'Next physical actions',
      examples: ['Review PD model output', 'Call regulator', 'Update concentration limits'],
      riskExample: 'Today\'s tasks and immediate priorities'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">Innovation #4</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Goal Alignment
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Connect every risk task to strategic outcomes using David Allen&apos;s Horizons of Focus from the GTD methodology.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                The Alignment Problem
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                Risk teams are busy. Incredibly busy. But activity doesn&apos;t equal progress. Without clear line-of-sight from daily tasks to strategic goals, effort gets scattered.
              </p>
              <div className="space-y-3 text-secondary">
                <div className="flex items-start gap-3">
                  <span className="text-muted mt-1">✗</span>
                  <span>Teams work hard but struggle to show strategic impact</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-muted mt-1">✗</span>
                  <span>Firefighting crowds out important but not urgent work</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-muted mt-1">✗</span>
                  <span>Projects drift without clear connection to outcomes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-muted mt-1">✗</span>
                  <span>Board asks &quot;what value does risk add?&quot;</span>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">With GTD Alignment</h3>
              <div className="space-y-3 text-secondary">
                <div className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Every task traces back to strategic objectives</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Priorities are clear at every level</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Progress is visible and measurable</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Strategic value is demonstrable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizons of Focus */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Horizons of Focus
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              David Allen&apos;s GTD methodology organises commitments across six horizons—from ground-level actions to purpose
            </p>
          </div>

          <div className="space-y-4">
            {horizons.map((horizon, index) => (
              <div
                key={horizon.level}
                className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 md:w-48">
                    <div className="px-3 py-1 rounded-full text-sm font-bold bg-[rgb(45,45,45)] text-white whitespace-nowrap">
                      {horizon.level}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{horizon.name}</h3>
                    <p className="text-muted text-sm mb-2">{horizon.description}</p>
                    <div className="text-muted text-xs">
                      <span className="text-secondary">Risk example:</span> {horizon.riskExample}
                    </div>
                  </div>
                  <div className="md:w-64 text-sm text-muted">
                    {horizon.examples.map((ex, i) => (
                      <span key={i} className="inline-block mr-2 mb-1 px-2 py-0.5 bg-[rgb(45,45,45)] rounded text-xs">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                {index < horizons.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <svg className="w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works in Risk Agents */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How It Works in Risk Agents
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Every pattern and skill knows its place in the hierarchy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">Pattern Alignment</h3>
              <div className="space-y-4">
                <p className="text-secondary text-sm">
                  Each pattern is tagged with the horizons it serves:
                </p>
                <div className="bg-[rgb(28,28,28)] rounded-lg p-4 font-mono text-sm">
                  <div className="text-white">concentration-assessment.pattern</div>
                  <div className="mt-2 text-muted">
                    <div>horizons:</div>
                    <div className="pl-4">- 30k: &quot;Reduce credit losses 15%&quot;</div>
                    <div className="pl-4">- 20k: &quot;Credit portfolio quality&quot;</div>
                    <div className="pl-4">- 10k: &quot;Q2 concentration review&quot;</div>
                  </div>
                </div>
                <p className="text-muted text-sm">
                  When you run the pattern, you see exactly how it contributes to strategic goals.
                </p>
              </div>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">Progress Tracking</h3>
              <div className="space-y-4">
                <p className="text-secondary text-sm">
                  Track progress at every horizon:
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted">30k: Credit loss reduction</span>
                      <span className="text-white">42%</span>
                    </div>
                    <div className="h-2 bg-[rgb(45,45,45)] rounded-full">
                      <div className="h-2 bg-white rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted">20k: Portfolio quality score</span>
                      <span className="text-white">78%</span>
                    </div>
                    <div className="h-2 bg-[rgb(45,45,45)] rounded-full">
                      <div className="h-2 bg-white rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted">10k: Q2 concentration review</span>
                      <span className="text-white">65%</span>
                    </div>
                    <div className="h-2 bg-[rgb(45,45,45)] rounded-full">
                      <div className="h-2 bg-white rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Review */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              The Weekly Review
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              GTD&apos;s most powerful practice, built into the platform
            </p>
          </div>

          <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
            <p className="text-secondary mb-6">
              Risk Agents prompts a weekly review that walks through each horizon:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-white">Ground Level Clear</h4>
                  <p className="text-muted text-sm">Are all action items captured? Anything slipping?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-white">Project Review</h4>
                  <p className="text-muted text-sm">What&apos;s the status of each initiative? Next actions defined?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-white">Areas of Focus</h4>
                  <p className="text-muted text-sm">Any KRIs breaching? Responsibilities being neglected?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-white">Goals Check</h4>
                  <p className="text-muted text-sm">Progress against annual objectives? Adjustments needed?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                <div>
                  <h4 className="font-semibold text-white">Vision & Purpose</h4>
                  <p className="text-muted text-sm">Still aligned with strategic direction? Any shifts needed?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why This Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Strategic Clarity</h3>
              <p className="text-muted text-sm">
                Everyone understands how their work contributes to goals
              </p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Better Prioritisation</h3>
              <p className="text-muted text-sm">
                When everything connects, trade-offs become clear
              </p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Demonstrable Value</h3>
              <p className="text-muted text-sm">
                Show the board exactly what risk delivers
              </p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Reduced Stress</h3>
              <p className="text-muted text-sm">
                Confidence that nothing important is falling through
              </p>
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/platform/patterns"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              &larr; Patterns
            </Link>
            <Link
              href="/platform/context-management"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Back to Start &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
