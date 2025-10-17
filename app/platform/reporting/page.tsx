import Navigation from '../../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Natural Language Reporting - Risk Agents',
  description: 'Replace 50+ standard reports with natural language queries. Ask questions and get instant answers instead of generating unused reports.',
};

export default function NaturalLanguageReporting() {
  const queryExamples = [
    {
      type: 'Exposure Query',
      query: 'Show me top 10 credit exposures by counterparty',
      response: 'Instant structured response with top 10 list, exposure amounts, risk ratings, and trend indicators',
      duration: '3.2s'
    },
    {
      type: 'What-If Query',
      query: 'What is my PV01 exposure at Global Market level and how would this change if XYZ Bank defaulted on their IR swaps?',
      response: 'Current PV01 calculation + scenario impact analysis + recommendations',
      duration: '8.7s'
    },
    {
      type: 'Compliance Query',
      query: 'Are we compliant with Basel III leverage ratio requirements?',
      response: 'Current ratio vs requirement, trend analysis, breach alerts if applicable',
      duration: '4.1s'
    },
    {
      type: 'Trend Query',
      query: 'How has our VaR changed over the last quarter and what are the main drivers?',
      response: 'Trend visualization + driver analysis + contributing factors breakdown',
      duration: '5.8s'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="badge-success">Natural Language Reporting</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
            Replace 50+ Reports with <span className="text-gradient-blue">Ad-Hoc Queries</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Stop generating unused reports. Ask questions and get instant answers. Query your risk data like talking to your Chief Risk Officer.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">The Report Proliferation Problem</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Approach */}
            <div className="bg-red-500/5 border-2 border-red-500/30 rounded-2xl p-8">
              <div className="text-red-400 font-bold text-sm mb-4">❌ TRADITIONAL RISK REPORTING</div>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <div className="font-bold text-slate-50">50+ Standard Reports</div>
                    <div className="text-sm text-slate-400">Generated daily/weekly/monthly</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">📉</div>
                  <div>
                    <div className="font-bold text-slate-50">60% Go Unused</div>
                    <div className="text-sm text-slate-400">Recipients don&apos;t read or act on them</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <div className="font-bold text-slate-50">Rigid Formats</div>
                    <div className="text-sm text-slate-400">Can&apos;t answer ad-hoc questions</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">⏱️</div>
                  <div>
                    <div className="font-bold text-slate-50">High Maintenance</div>
                    <div className="text-sm text-slate-400">Constant updates, fixes, explanations</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">📈</div>
                  <div>
                    <div className="font-bold text-slate-50">Report Accumulation</div>
                    <div className="text-sm text-slate-400">Every event = new report, never removed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Agents Approach */}
            <div className="bg-emerald-500/5 border-2 border-emerald-500/30 rounded-2xl p-8">
              <div className="text-emerald-400 font-bold text-sm mb-4">✅ RISK AGENTS APPROACH</div>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💬</div>
                  <div>
                    <div className="font-bold text-slate-50">Natural Language Queries</div>
                    <div className="text-sm text-slate-400">Ask questions in plain English</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <div className="font-bold text-slate-50">Instant Answers</div>
                    <div className="text-sm text-slate-400">Results in seconds, not hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <div className="font-bold text-slate-50">100% Relevant</div>
                    <div className="text-sm text-slate-400">Only generate what you actually need</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔄</div>
                  <div>
                    <div className="font-bold text-slate-50">Zero Maintenance</div>
                    <div className="text-sm text-slate-400">No reports to update or fix</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <div className="font-bold text-slate-50">Flexible Analysis</div>
                    <div className="text-sm text-slate-400">What-if, drill-down, compare anything</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-slate-800 rounded-xl p-8 border border-slate-700 text-center">
            <div className="text-4xl font-bold text-slate-50 mb-2">70% Reduction</div>
            <p className="text-slate-300">in report maintenance time and effort</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">How It Works</h2>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="font-bold text-slate-50 mb-1">Ask Your Question</h3>
                  <p className="text-slate-300 text-sm">Type your query in natural language - no special syntax required</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="font-bold text-slate-50 mb-1">Intent Recognition</h3>
                  <p className="text-slate-300 text-sm">System parses query to understand what you&apos;re asking and which data/domains are needed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="font-bold text-slate-50 mb-1">Pattern Matching</h3>
                  <p className="text-slate-300 text-sm">Matches your query to relevant patterns (what-if, exposure, compliance, trend, etc.)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="font-bold text-slate-50 mb-1">Execute Skills</h3>
                  <p className="text-slate-300 text-sm">Invokes relevant skills to gather data, perform calculations, and generate insights</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <h3 className="font-bold text-slate-50 mb-1">Structured Response</h3>
                  <p className="text-slate-300 text-sm">Returns formatted answer with data, visualizations, and actionable recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Query Types */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Common Query Types</h2>

          <div className="space-y-6">
            {queryExamples.map((example, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
                <div className="flex items-start justify-between mb-4">
                  <div className="badge-ai text-xs">{example.type}</div>
                  <div className="text-slate-500 text-sm">~{example.duration}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-slate-500 mb-2">Query:</div>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-blue-400">
                    &quot;{example.query}&quot;
                  </div>
                </div>

                <div>
                  <div className="text-sm text-slate-500 mb-2">Response:</div>
                  <div className="text-slate-300 text-sm">{example.response}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-5 gap-4">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm font-bold text-slate-50">Exposure</div>
              <div className="text-xs text-slate-400">Top exposures, concentrations</div>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
              <div className="text-2xl mb-2">❓</div>
              <div className="text-sm font-bold text-slate-50">What-If</div>
              <div className="text-xs text-slate-400">Scenario analysis, stress tests</div>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
              <div className="text-2xl mb-2">✅</div>
              <div className="text-sm font-bold text-slate-50">Compliance</div>
              <div className="text-xs text-slate-400">Regulatory checks, ratios</div>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
              <div className="text-2xl mb-2">📈</div>
              <div className="text-sm font-bold text-slate-50">Trend</div>
              <div className="text-xs text-slate-400">Historical analysis, drivers</div>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center">
              <div className="text-2xl mb-2">🔍</div>
              <div className="text-sm font-bold text-slate-50">Drill-Down</div>
              <div className="text-xs text-slate-400">Detailed breakdowns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Query Library */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-8">Query Library & Shortcuts</h2>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-300 mb-6">
              Frequently used queries can be saved as shortcuts for even faster access:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900 rounded-lg p-4">
                <div className="text-sm font-bold text-slate-50 mb-2">💾 Saved Queries</div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Daily credit exposure check</li>
                  <li>• Weekly VaR trend</li>
                  <li>• Monthly compliance summary</li>
                  <li>• Quarterly portfolio review</li>
                </ul>
              </div>

              <div className="bg-slate-900 rounded-lg p-4">
                <div className="text-sm font-bold text-slate-50 mb-2">🔄 Shared Queries</div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Team queries library</li>
                  <li>• Organization templates</li>
                  <li>• Regulatory standard queries</li>
                  <li>• Best practice queries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Roadmap */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-8">Transition Roadmap</h2>

          <div className="space-y-4">
            <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-slate-50 mb-2">Phase 1: Parallel Operation</h3>
              <p className="text-slate-300 text-sm">
                Keep standard reports running while introducing natural language queries. Validate accuracy and build user confidence.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-amber-500">
              <h3 className="font-bold text-slate-50 mb-2">Phase 2: Report Reduction</h3>
              <p className="text-slate-300 text-sm">
                Identify unused or rarely accessed reports. Replace with equivalent queries. Start measuring time savings.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-emerald-500">
              <h3 className="font-bold text-slate-50 mb-2">Phase 3: Query-First Approach</h3>
              <p className="text-slate-300 text-sm">
                Natural language queries become the primary interface. Reports generated only when specifically needed. 70%+ reduction in report maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            Stop Generating. Start Asking.
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Transform your risk reporting from static reports to dynamic intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/platform/patterns" className="btn-secondary">
              ← Fabrix Patterns
            </Link>
            <Link href="/domains" className="btn-primary">
              Explore Risk Domains →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 Risk Agents. Built by <a href="https://www.gavinslater.com" className="text-blue-400 hover:text-blue-300 transition-colors">Gavin Slater</a></p>
        </div>
      </footer>
    </div>
  );
}
