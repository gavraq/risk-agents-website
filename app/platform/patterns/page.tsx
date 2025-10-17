import Navigation from '../../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Fabrix Patterns - Risk Agents',
  description: 'Composable workflows that learn and evolve. Track success, promote effective patterns, and continuously improve risk management processes.',
};

export default function FabrixPatterns() {
  const examplePatterns = [
    {
      name: 'concentration-assessment-full',
      category: 'Credit Risk Assessment',
      skills: 4,
      duration: '4m 32s',
      successRate: 87,
      uses: 143,
      confidence: 'HIGH',
      steps: [
        'concentration-analysis (skill)',
        'benchmark-comparison (skill)',
        'stress-testing (skill)',
        'powerpoint-generation (skill)'
      ]
    },
    {
      name: 'board-risk-report',
      category: 'Reporting',
      skills: 5,
      duration: '6m 15s',
      successRate: 92,
      uses: 128,
      confidence: 'HIGH',
      steps: [
        'portfolio-analysis (skill)',
        'trend-analysis (skill)',
        'regulatory-summary (skill)',
        'executive-summary (skill)',
        'powerpoint-generation (skill)'
      ]
    },
    {
      name: 'what-if-scenario',
      category: 'Scenario Analysis',
      skills: 3,
      duration: '3m 45s',
      successRate: 84,
      uses: 117,
      confidence: 'MEDIUM',
      steps: [
        'scenario-modeling (skill)',
        'impact-calculation (skill)',
        'report-generation (skill)'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="badge-risk">Fabrix Patterns</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
            Workflows That <span className="text-gradient-amber">Learn and Evolve</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Patterns are combinations of skills that form proven workflows. We track what works, promote successful patterns, and continuously improve based on real usage.
          </p>
          <div className="inline-block">
            <span className="led-indicator led-on mr-2"></span>
            <span className="text-slate-400 text-sm">Phase 3 Feature - Coming Month 7+</span>
          </div>
        </div>
      </section>

      {/* What are Patterns */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-8">What are Patterns?</h2>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 mb-8">
            <p className="text-slate-300 text-lg mb-6">
              A pattern is a composable workflow that combines multiple skills into a proven sequence:
            </p>

            <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm">
              <div className="text-amber-400 mb-4">Pattern: concentration-assessment-full</div>
              <div className="space-y-2 text-slate-300 pl-4">
                <div>├─ Step 1: <span className="text-blue-400">concentration-analysis</span> (skill)</div>
                <div>├─ Step 2: <span className="text-blue-400">benchmark-comparison</span> (skill)</div>
                <div>├─ Step 3: <span className="text-blue-400">stress-testing</span> (skill)</div>
                <div>└─ Step 4: <span className="text-blue-400">powerpoint-generation</span> (skill)</div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500">Success Rate:</span>
                  <span className="text-emerald-400 ml-2">87%</span>
                  <span className="text-slate-500 ml-2">(143 uses)</span>
                </div>
                <div>
                  <span className="text-slate-500">Avg Duration:</span>
                  <span className="text-slate-300 ml-2">4m 32s</span>
                </div>
                <div>
                  <span className="text-slate-500">Confidence:</span>
                  <span className="text-emerald-400 ml-2">HIGH</span>
                </div>
                <div>
                  <span className="text-slate-500">Last Updated:</span>
                  <span className="text-slate-300 ml-2">2025-10-15</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Proven Sequences</h3>
              <p className="text-slate-300 text-sm">Successful workflows validated through repeated use</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Success Tracking</h3>
              <p className="text-slate-300 text-sm">Monitor performance, confidence, and usage metrics</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Continuous Evolution</h3>
              <p className="text-slate-300 text-sm">Patterns improve based on feedback and outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Categories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Pattern Categories</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Assessment Patterns */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="badge-ai mb-4">Assessment Patterns (20+)</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Risk Assessments</h3>
              <p className="text-slate-300 text-sm mb-4">
                Complete assessment workflows combining analysis, benchmarking, and reporting
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• concentration-assessment-full</li>
                <li>• credit-quality-review</li>
                <li>• market-var-validation</li>
                <li>• operational-scenario-assessment</li>
                <li>• liquidity-stress-test-full</li>
              </ul>
            </div>

            {/* Implementation Patterns */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="badge-risk mb-4">Implementation Patterns (15+)</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Framework Implementation</h3>
              <p className="text-slate-300 text-sm mb-4">
                End-to-end implementation roadmaps for regulatory frameworks
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• ifrs9-implementation-roadmap</li>
                <li>• basel-iii-compliance-program</li>
                <li>• frtb-migration-plan</li>
                <li>• climate-tcfd-implementation</li>
                <li>• model-risk-sr11-7-setup</li>
              </ul>
            </div>

            {/* Reporting Patterns */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="badge-success mb-4">Reporting Patterns (10+)</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Structured Reports</h3>
              <p className="text-slate-300 text-sm mb-4">
                Comprehensive reporting workflows from data to presentation
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• board-risk-report</li>
                <li>• regulatory-submission</li>
                <li>• quarterly-risk-review</li>
                <li>• executive-dashboard</li>
                <li>• audit-committee-pack</li>
              </ul>
            </div>

            {/* Query Patterns */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="badge-ai mb-4">Query Patterns (30+)</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Natural Language Queries</h3>
              <p className="text-slate-300 text-sm mb-4">
                Ad-hoc analysis patterns for natural language reporting
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• exposure-drill-down</li>
                <li>• what-if-analysis</li>
                <li>• compliance-check</li>
                <li>• trend-comparison</li>
                <li>• peer-benchmark</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Evolution */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-8">Pattern Evolution Lifecycle</h2>
          <p className="text-slate-300 text-lg mb-12">
            Patterns aren&apos;t static. They evolve based on usage and success metrics.
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">👤</div>
              <h3 className="text-sm font-bold text-slate-50 mb-2">1. User Workflow</h3>
              <p className="text-xs text-slate-400">Perform manual workflow</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-sm font-bold text-slate-50 mb-2">2. Pattern Detected</h3>
              <p className="text-xs text-slate-400">System recognizes sequence</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">💾</div>
              <h3 className="text-sm font-bold text-slate-50 mb-2">3. Save as Pattern</h3>
              <p className="text-xs text-slate-400">User saves workflow</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-sm font-bold text-slate-50 mb-2">4. Track Success</h3>
              <p className="text-xs text-slate-400">Monitor usage & outcomes</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-sm font-bold text-slate-50 mb-2">5. Promote</h3>
              <p className="text-xs text-slate-400">Recommend to others</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-amber-500/30">
              <div className="text-amber-400 font-bold mb-2">Experimental</div>
              <div className="text-2xl font-bold text-slate-50 mb-1">&lt; 50 uses</div>
              <p className="text-slate-400 text-sm">Testing phase, gathering feedback</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-blue-500/30">
              <div className="text-blue-400 font-bold mb-2">Validated</div>
              <div className="text-2xl font-bold text-slate-50 mb-1">50-100 uses</div>
              <p className="text-slate-400 text-sm">Proven reliable, recommended</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-emerald-500/30">
              <div className="text-emerald-400 font-bold mb-2">Promoted</div>
              <div className="text-2xl font-bold text-slate-50 mb-1">100+ uses</div>
              <p className="text-slate-400 text-sm">Highly trusted, widely adopted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Patterns */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-12">Example Patterns</h2>

          <div className="space-y-6">
            {examplePatterns.map((pattern) => (
              <div key={pattern.name} className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <div className="badge-ai mb-2 text-xs">{pattern.category}</div>
                    <h3 className="text-xl font-bold text-slate-50 mb-1 font-mono">{pattern.name}</h3>
                  </div>
                  <div className="flex gap-4 text-sm mt-4 md:mt-0">
                    <div>
                      <div className="text-slate-500 text-xs">Success Rate</div>
                      <div className={`font-bold ${pattern.successRate >= 90 ? 'text-emerald-400' : pattern.successRate >= 80 ? 'text-blue-400' : 'text-amber-400'}`}>
                        {pattern.successRate}%
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Uses</div>
                      <div className="text-slate-300 font-bold">{pattern.uses}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">Duration</div>
                      <div className="text-slate-300 font-bold">{pattern.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-slate-500 mb-2">Workflow ({pattern.skills} skills):</div>
                  <div className="space-y-1">
                    {pattern.steps.map((step, idx) => (
                      <div key={idx} className="text-sm text-slate-300 font-mono pl-4">
                        {idx + 1}. {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <span className={`px-2 py-1 rounded ${
                    pattern.confidence === 'HIGH' ? 'bg-emerald-500/20 text-emerald-400' :
                    pattern.confidence === 'MEDIUM' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {pattern.confidence} Confidence
                  </span>
                  <span className="text-slate-500">
                    Last used: 2 hours ago
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Pattern Creation */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-8">Dynamic Pattern Creation</h2>
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-300 text-lg mb-6">
              Your workflows automatically become patterns. The system learns from how you work and suggests creating reusable patterns.
            </p>

            <div className="bg-slate-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-2xl">💡</div>
                <div>
                  <div className="font-bold text-slate-50 mb-2">Example:</div>
                  <p className="text-slate-300 text-sm mb-4">
                    You perform: Portfolio Analysis → Trend Analysis → Executive Summary → PowerPoint three times in a week.
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <div className="text-blue-400 text-sm font-bold mb-1">💬 System Suggestion:</div>
                    <p className="text-slate-300 text-sm">
                      &quot;We noticed you frequently use this workflow. Would you like to save it as a pattern called &apos;quarterly-portfolio-review&apos;?&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            Skills → Patterns → Transformation
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Individual skills are powerful. Patterns make them transformative. Evolution makes them unstoppable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/platform/skills" className="btn-secondary">
              ← Back to Skills
            </Link>
            <Link href="/platform/reporting" className="btn-primary">
              Natural Language Reporting →
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
