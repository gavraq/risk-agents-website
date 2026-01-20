import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Patterns - Risk Agents',
  description: 'Composable workflows that learn and evolve. Track success, promote effective patterns, and continuously improve risk management processes.',
};

export default function PatternsPage() {
  const examplePatterns = [
    {
      name: 'concentration-assessment-full',
      category: 'Credit Risk Assessment',
      skills: 4,
      duration: '4m 32s',
      successRate: 87,
      uses: 143,
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

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">Innovation #3</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Patterns
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Composable workflows that learn and evolve. Patterns combine skills into proven sequences that improve through use.
          </p>
        </div>
      </section>

      {/* What are Patterns */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            What are Patterns?
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            A pattern is a composable workflow that combines multiple skills into a proven sequence. Unlike rigid procedures, patterns track what works and evolve based on actual usage and outcomes.
          </p>
          <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
            <div className="font-mono text-sm">
              <div className="text-white mb-4">Pattern: concentration-assessment-full</div>
              <div className="space-y-2 text-secondary pl-4">
                <div>├─ Step 1: concentration-analysis (skill)</div>
                <div>├─ Step 2: benchmark-comparison (skill)</div>
                <div>├─ Step 3: stress-testing (skill)</div>
                <div>└─ Step 4: powerpoint-generation (skill)</div>
              </div>
              <div className="mt-6 pt-4 border-t border-[rgb(45,45,45)] grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-muted">Success Rate:</span>
                  <span className="text-white ml-2">87%</span>
                  <span className="text-muted ml-2">(143 uses)</span>
                </div>
                <div>
                  <span className="text-muted">Avg Duration:</span>
                  <span className="text-secondary ml-2">4m 32s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Characteristics */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Key Characteristics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Proven Sequences</h3>
              <p className="text-secondary text-sm">Successful workflows validated through repeated use</p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Success Tracking</h3>
              <p className="text-secondary text-sm">Monitor performance, confidence, and usage metrics</p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Continuous Evolution</h3>
              <p className="text-secondary text-sm">Patterns improve based on feedback and outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Categories */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pattern Categories
          </h2>
          <p className="text-secondary mb-8">
            75+ patterns organized by use case
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Assessment Patterns */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <p className="text-muted uppercase text-sm tracking-wide mb-2">Assessment Patterns (20+)</p>
              <h3 className="text-xl font-bold text-white mb-3">Risk Assessments</h3>
              <p className="text-secondary text-sm mb-4">
                Complete assessment workflows combining analysis, benchmarking, and reporting
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• concentration-assessment-full</li>
                <li>• credit-quality-review</li>
                <li>• market-var-validation</li>
                <li>• operational-scenario-assessment</li>
                <li>• liquidity-stress-test-full</li>
              </ul>
            </div>

            {/* Implementation Patterns */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <p className="text-muted uppercase text-sm tracking-wide mb-2">Implementation Patterns (15+)</p>
              <h3 className="text-xl font-bold text-white mb-3">Framework Implementation</h3>
              <p className="text-secondary text-sm mb-4">
                End-to-end implementation roadmaps for regulatory frameworks
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• ifrs9-implementation-roadmap</li>
                <li>• basel-iii-compliance-program</li>
                <li>• frtb-migration-plan</li>
                <li>• climate-tcfd-implementation</li>
                <li>• model-risk-sr11-7-setup</li>
              </ul>
            </div>

            {/* Reporting Patterns */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <p className="text-muted uppercase text-sm tracking-wide mb-2">Reporting Patterns (10+)</p>
              <h3 className="text-xl font-bold text-white mb-3">Structured Reports</h3>
              <p className="text-secondary text-sm mb-4">
                Comprehensive reporting workflows from data to presentation
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• board-risk-report</li>
                <li>• regulatory-submission</li>
                <li>• quarterly-risk-review</li>
                <li>• executive-dashboard</li>
                <li>• audit-committee-pack</li>
              </ul>
            </div>

            {/* Query Patterns */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <p className="text-muted uppercase text-sm tracking-wide mb-2">Query Patterns (30+)</p>
              <h3 className="text-xl font-bold text-white mb-3">Natural Language Queries</h3>
              <p className="text-secondary text-sm mb-4">
                Ad-hoc analysis patterns for natural language reporting
              </p>
              <ul className="space-y-2 text-sm text-muted">
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
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pattern Evolution Lifecycle
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            Patterns aren&apos;t static. They evolve based on usage and success metrics.
          </p>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-5 border border-[rgb(45,45,45)] text-center">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">1. User Workflow</h3>
              <p className="text-xs text-muted">Perform manual workflow</p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-5 border border-[rgb(45,45,45)] text-center">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">2. Pattern Detected</h3>
              <p className="text-xs text-muted">System recognizes sequence</p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-5 border border-[rgb(45,45,45)] text-center">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">3. Save as Pattern</h3>
              <p className="text-xs text-muted">User saves workflow</p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-5 border border-[rgb(45,45,45)] text-center">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">4. Track Success</h3>
              <p className="text-xs text-muted">Monitor usage & outcomes</p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-5 border border-[rgb(45,45,45)] text-center">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">5. Promote</h3>
              <p className="text-xs text-muted">Recommend to others</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <p className="text-muted uppercase text-sm tracking-wide mb-2">Experimental</p>
              <p className="text-2xl font-bold text-white mb-1">&lt; 50 uses</p>
              <p className="text-secondary text-sm">Testing phase, gathering feedback</p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <p className="text-muted uppercase text-sm tracking-wide mb-2">Validated</p>
              <p className="text-2xl font-bold text-white mb-1">50-100 uses</p>
              <p className="text-secondary text-sm">Proven reliable, recommended</p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <p className="text-muted uppercase text-sm tracking-wide mb-2">Promoted</p>
              <p className="text-2xl font-bold text-white mb-1">100+ uses</p>
              <p className="text-secondary text-sm">Highly trusted, widely adopted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Patterns */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Example Patterns
          </h2>

          <div className="space-y-6">
            {examplePatterns.map((pattern) => (
              <div key={pattern.name} className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <p className="text-muted uppercase text-xs tracking-wide mb-2">{pattern.category}</p>
                    <h3 className="text-xl font-bold text-white mb-1 font-mono">{pattern.name}</h3>
                  </div>
                  <div className="flex gap-4 text-sm mt-4 md:mt-0">
                    <div>
                      <div className="text-muted text-xs">Success Rate</div>
                      <div className="font-bold text-white">{pattern.successRate}%</div>
                    </div>
                    <div>
                      <div className="text-muted text-xs">Uses</div>
                      <div className="text-secondary font-bold">{pattern.uses}</div>
                    </div>
                    <div>
                      <div className="text-muted text-xs">Duration</div>
                      <div className="text-secondary font-bold">{pattern.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-muted mb-2">Workflow ({pattern.skills} skills):</div>
                  <div className="space-y-1">
                    {pattern.steps.map((step, idx) => (
                      <div key={idx} className="text-sm text-secondary font-mono pl-4">
                        {idx + 1}. {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Pattern Creation */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Dynamic Pattern Creation
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Your workflows automatically become patterns. The system learns from how you work and suggests creating reusable patterns.
          </p>
          <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white mb-2">Example:</p>
                <p className="text-secondary text-sm mb-4">
                  You perform: Portfolio Analysis → Trend Analysis → Executive Summary → PowerPoint three times in a week.
                </p>
                <div className="bg-[rgb(22,22,22)] border border-[rgb(45,45,45)] rounded-lg p-4">
                  <p className="text-white text-sm font-bold mb-1">System Suggestion:</p>
                  <p className="text-secondary text-sm">
                    &quot;We noticed you frequently use this workflow. Would you like to save it as a pattern called &apos;quarterly-portfolio-review&apos;?&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Sharing */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
            <h2 className="text-2xl font-bold text-white mb-4">
              Share Patterns Across the Community
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Your successful patterns can benefit the entire community. Share methodology (not data) and benefit from patterns developed by other risk professionals.
            </p>
            <Link
              href="/skills-sharing"
              className="text-muted hover:text-secondary transition-colors text-sm inline-flex items-center gap-2"
            >
              Explore Skills Sharing &rarr;
            </Link>
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
              href="/platform/skills"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              &larr; Skills
            </Link>
            <Link
              href="/platform/goal-alignment"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Goal Alignment &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
