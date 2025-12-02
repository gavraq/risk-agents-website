import Navigation from '../../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'GTD Goal Alignment - Risk Agents',
  description: 'Connect daily risk tasks to strategic outcomes using David Allen\'s Getting Things Done methodology.',
};

export default function GoalAlignment() {
  const horizons = [
    {
      level: '50,000 ft',
      name: 'Purpose & Principles',
      description: 'Why your risk function exists',
      examples: ['Protect shareholder value', 'Enable sustainable growth', 'Maintain regulatory standing'],
      color: 'purple',
      riskExample: 'Risk appetite statement and core principles'
    },
    {
      level: '40,000 ft',
      name: 'Vision',
      description: '3-5 year picture of success',
      examples: ['Best-in-class risk culture', 'Fully integrated risk views', 'Predictive capabilities'],
      color: 'indigo',
      riskExample: 'Target operating model for risk function'
    },
    {
      level: '30,000 ft',
      name: 'Goals',
      description: '1-2 year objectives',
      examples: ['Reduce credit losses 15%', 'Pass regulatory exam', 'Launch new product safely'],
      color: 'blue',
      riskExample: 'Annual risk strategy and key initiatives'
    },
    {
      level: '20,000 ft',
      name: 'Areas of Focus',
      description: 'Key responsibilities to maintain',
      examples: ['Credit portfolio quality', 'Regulatory compliance', 'Model performance'],
      color: 'cyan',
      riskExample: 'Risk domain responsibilities and KRIs'
    },
    {
      level: '10,000 ft',
      name: 'Projects',
      description: 'Multi-step outcomes',
      examples: ['IFRS 9 model refresh', 'Climate stress test', 'Board pack automation'],
      color: 'emerald',
      riskExample: 'Current risk initiatives and programmes'
    },
    {
      level: 'Ground',
      name: 'Actions',
      description: 'Next physical actions',
      examples: ['Review PD model output', 'Call regulator', 'Update concentration limits'],
      color: 'amber',
      riskExample: 'Today\'s tasks and immediate priorities'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="badge-success">Innovation #3</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
            GTD <span className="text-gradient-blue">Goal Alignment</span>
          </h1>
          <p className="text-xl text-slate-300 mb-4 max-w-3xl mx-auto">
            Connect every risk task to strategic outcomes using David Allen&apos;s Horizons of Focus.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Based on the Getting Things Done (GTD) methodology
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                The Alignment Problem
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Risk teams are busy. Incredibly busy. But activity doesn&apos;t equal progress. Without clear line-of-sight from daily tasks to strategic goals, effort gets scattered.
              </p>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Teams work hard but struggle to show strategic impact</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Firefighting crowds out important but not urgent work</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Projects drift without clear connection to outcomes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Board asks &quot;what value does risk add?&quot;</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-emerald-900/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">With GTD Alignment</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Every task traces back to strategic objectives</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Priorities are clear at every level</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Progress is visible and measurable</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Strategic value is demonstrable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizons of Focus */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Horizons of Focus
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              David Allen&apos;s GTD methodology organises commitments across six horizons—from ground-level actions to purpose
            </p>
          </div>

          <div className="space-y-4">
            {horizons.map((horizon, index) => (
              <div
                key={horizon.level}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 md:w-48">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold bg-${horizon.color}-900/30 text-${horizon.color}-400 whitespace-nowrap`}>
                      {horizon.level}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-50 mb-1">{horizon.name}</h3>
                    <p className="text-slate-400 text-sm mb-2">{horizon.description}</p>
                    <div className="text-slate-500 text-xs">
                      <span className="text-slate-400">Risk example:</span> {horizon.riskExample}
                    </div>
                  </div>
                  <div className="md:w-64 text-sm text-slate-400">
                    {horizon.examples.map((ex, i) => (
                      <span key={i} className="inline-block mr-2 mb-1 px-2 py-0.5 bg-slate-700/50 rounded text-xs">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                {index < horizons.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              How It Works in Risk Agents
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every pattern and skill knows its place in the hierarchy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-6">Pattern Alignment</h3>
              <div className="space-y-4">
                <p className="text-slate-300 text-sm">
                  Each pattern is tagged with the horizons it serves:
                </p>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-blue-400">concentration-assessment.pattern</div>
                  <div className="mt-2 text-slate-400">
                    <div>horizons:</div>
                    <div className="pl-4">- 30k: &quot;Reduce credit losses 15%&quot;</div>
                    <div className="pl-4">- 20k: &quot;Credit portfolio quality&quot;</div>
                    <div className="pl-4">- 10k: &quot;Q2 concentration review&quot;</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">
                  When you run the pattern, you see exactly how it contributes to strategic goals.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-6">Progress Tracking</h3>
              <div className="space-y-4">
                <p className="text-slate-300 text-sm">
                  Track progress at every horizon:
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">30k: Credit loss reduction</span>
                      <span className="text-emerald-400">42%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full">
                      <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">20k: Portfolio quality score</span>
                      <span className="text-blue-400">78%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">10k: Q2 concentration review</span>
                      <span className="text-amber-400">65%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full">
                      <div className="h-2 bg-amber-500 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Review */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              The Weekly Review
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              GTD&apos;s most powerful practice, built into the platform
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-300 mb-6">
              Risk Agents prompts a weekly review that walks through each horizon:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-slate-200">Ground Level Clear</h4>
                  <p className="text-slate-400 text-sm">Are all action items captured? Anything slipping?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-slate-200">Project Review</h4>
                  <p className="text-slate-400 text-sm">What&apos;s the status of each initiative? Next actions defined?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-slate-200">Areas of Focus</h4>
                  <p className="text-slate-400 text-sm">Any KRIs breaching? Responsibilities being neglected?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-slate-200">Goals Check</h4>
                  <p className="text-slate-400 text-sm">Progress against annual objectives? Adjustments needed?</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-400 font-bold flex-shrink-0">5</div>
                <div>
                  <h4 className="font-semibold text-slate-200">Vision & Purpose</h4>
                  <p className="text-slate-400 text-sm">Still aligned with strategic direction? Any shifts needed?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Why This Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center card-lift">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Strategic Clarity</h3>
              <p className="text-slate-400 text-sm">
                Everyone understands how their work contributes to goals
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center card-lift">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Better Prioritisation</h3>
              <p className="text-slate-400 text-sm">
                When everything connects, trade-offs become clear
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center card-lift">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Demonstrable Value</h3>
              <p className="text-slate-400 text-sm">
                Show the board exactly what risk delivers
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center card-lift">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Reduced Stress</h3>
              <p className="text-slate-400 text-sm">
                Confidence that nothing important is falling through
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            Three Innovations Working Together
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Skills provide capabilities. Patterns orchestrate workflows. GTD Goal Alignment ensures everything connects to outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/platform/skills" className="btn-secondary">
              ← Skills Framework
            </Link>
            <Link href="/platform/patterns" className="btn-primary">
              Fabrix Patterns →
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
