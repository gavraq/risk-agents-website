import Navigation from '../../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Skills Framework - Risk Agents',
  description: '100+ modular risk capabilities organized across 9 domains. Skills are the building blocks of the Risk Agents platform.',
};

export default function SkillsFramework() {
  const domainSkills = [
    {
      domain: 'Credit Risk',
      color: 'blue',
      skills: ['concentration-analysis', 'ifrs9-ecl-calculation', 'model-validation', 'early-warning-indicators', 'portfolio-analysis', 'credit-scoring', 'counterparty-assessment', 'collateral-valuation']
    },
    {
      domain: 'Market Risk',
      color: 'purple',
      skills: ['var-calculation', 'stress-testing', 'frtb-compliance', 'hedge-effectiveness', 'sensitivity-analysis', 'backtesting', 'scenario-modeling']
    },
    {
      domain: 'Operational Risk',
      color: 'amber',
      skills: ['loss-event-analysis', 'rcsa-assessment', 'scenario-analysis', 'kri-monitoring', 'control-testing', 'issue-management']
    },
    {
      domain: 'Liquidity Risk',
      color: 'cyan',
      skills: ['lcr-calculation', 'nsfr-monitoring', 'funding-gap-analysis', 'stress-testing', 'contingency-planning', 'intraday-monitoring']
    },
    {
      domain: 'Model Risk',
      color: 'pink',
      skills: ['model-validation', 'sr-11-7-compliance', 'backtesting', 'sensitivity-analysis', 'benchmark-testing', 'documentation-review', 'model-inventory', 'governance-assessment']
    },
    {
      domain: 'Climate Risk',
      color: 'emerald',
      skills: ['tcfd-reporting', 'scenario-analysis', 'transition-risk', 'physical-risk', 'portfolio-carbon', 'green-taxonomy']
    },
    {
      domain: 'Regulatory Risk',
      color: 'red',
      skills: ['regulatory-change-tracking', 'basel-compliance', 'crd-assessment', 'regulatory-reporting', 'rulebook-analysis', 'remediation-planning']
    },
    {
      domain: 'Strategic Risk',
      color: 'indigo',
      skills: ['ma-risk-assessment', 'digital-transformation-risk', 'geopolitical-analysis', 'competitor-analysis', 'business-model-risk', 'reputation-risk']
    },
    {
      domain: 'Risk Change',
      color: 'violet',
      skills: ['meeting-minutes', 'requirements-structuring', 'stakeholder-analysis', 'impact-assessment', 'gap-analysis', 'roadmap-planning', 'change-communication', 'tom-design', 'governance-structuring', 'training-assessment']
    }
  ];

  const captureCurateConsult = [
    {
      category: 'CAPTURE',
      color: 'blue',
      description: 'Gathering information from various sources',
      skills: ['meeting-minutes', 'document-processing', 'voice-transcription', 'data-extraction', 'interview-capture']
    },
    {
      category: 'CURATE',
      color: 'amber',
      description: 'Structuring and organizing information',
      skills: ['requirements-structuring', 'taxonomy-tagging', 'gap-analysis', 'data-validation', 'knowledge-enrichment']
    },
    {
      category: 'CONSULT',
      color: 'green',
      description: 'Analysis and recommendations',
      skills: ['framework-analysis', 'recommendation-generation', 'scenario-modeling', 'report-generation', 'board-presentation']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="badge-ai">Skills Framework</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
            100+ Modular <span className="text-gradient-blue">Risk Capabilities</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Skills are the building blocks. Each skill is a focused capability that does one thing exceptionally well. Combine them to tackle any risk challenge.
          </p>
        </div>
      </section>

      {/* What are Skills */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-8">What are Skills?</h2>
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-300 text-lg mb-6">
              A skill is a modular, reusable capability packaged with:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-slate-50">Progressive Disclosure</span>
                  <p className="text-slate-400 text-sm">Load only what&apos;s needed to keep context windows clean</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-slate-50">Clear Instructions</span>
                  <p className="text-slate-400 text-sm">Step-by-step guidance for consistent execution</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-slate-50">Supporting Resources</span>
                  <p className="text-slate-400 text-sm">Frameworks, regulatory references, examples</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-slate-50">Optional Code/Calculations</span>
                  <p className="text-slate-400 text-sm">Reusable logic for complex computations</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-900 rounded-lg">
              <div className="text-sm font-mono text-slate-300">
                <div className="text-blue-400">Example: concentration-analysis.skill</div>
                <div className="mt-2 pl-4 border-l-2 border-slate-700">
                  <div>├─ metadata (name, description, domain)</div>
                  <div>├─ instructions/ (step-by-step process)</div>
                  <div>├─ resources/ (concentration framework)</div>
                  <div>└─ code/ (calculation engine)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">Skill Categories</h2>
          <p className="text-slate-300 text-lg mb-12">
            Skills are organized into domain-specific and cross-domain capabilities
          </p>

          {/* Domain Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-50 mb-6">Domain-Specific Skills (72 skills)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domainSkills.map((item) => (
                <div key={item.domain} className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
                  <div className="badge-ai mb-3 text-xs">{item.domain}</div>
                  <div className="text-sm text-slate-400 mb-2">{item.skills.length} skills</div>
                  <div className="space-y-1">
                    {item.skills.slice(0, 4).map((skill) => (
                      <div key={skill} className="text-xs text-slate-300 font-mono">• {skill}</div>
                    ))}
                    {item.skills.length > 4 && (
                      <div className="text-xs text-slate-500">+ {item.skills.length - 4} more...</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3 C's Skills */}
          <div>
            <h3 className="text-2xl font-bold text-slate-50 mb-6">3 C&apos;s Methodology Skills (15 skills)</h3>
            <p className="text-slate-400 mb-6">
              These skills power our <Link href="/platform/context-engineering" className="text-blue-400 hover:text-blue-300">Context Engineering</Link> approach—the foundation for effective AI-assisted risk work.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {captureCurateConsult.map((item) => (
                <div key={item.category} className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
                  <div className={`badge-${item.color === 'blue' ? 'ai' : item.color === 'amber' ? 'risk' : 'success'} mb-3`}>
                    {item.category}
                  </div>
                  <p className="text-slate-300 text-sm mb-4">{item.description}</p>
                  <div className="space-y-1">
                    {item.skills.map((skill) => (
                      <div key={skill} className="text-xs text-slate-300 font-mono">• {skill}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Skills Compose */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-8">How Skills Compose</h2>
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-300 mb-6">
              Skills can use other skills and are used by patterns, creating a powerful composition model:
            </p>
            <div className="font-mono text-sm space-y-2 text-slate-300">
              <div className="text-blue-400">concentration-analysis.skill</div>
              <div className="pl-4">
                <div>├─ <span className="text-emerald-400">Uses:</span> calculation-engine.skill</div>
                <div>├─ <span className="text-emerald-400">Uses:</span> regulatory-search.skill</div>
                <div>└─ <span className="text-amber-400">Used by:</span> concentration-assessment-full.pattern</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Skills */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-8">Built-in Skills (Leveraging Claude)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-xl mb-2">📊</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">PowerPoint Generation</h3>
              <p className="text-slate-300 text-sm">Create professional presentations from analysis results</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-xl mb-2">📈</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Excel Analytics</h3>
              <p className="text-slate-300 text-sm">Generate Excel reports with charts and pivot tables</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-xl mb-2">📄</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">PDF Reports</h3>
              <p className="text-slate-300 text-sm">Export formatted PDF documents for distribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Sharing */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 rounded-2xl p-8 border border-emerald-900/30 text-center">
            <h2 className="text-2xl font-bold text-slate-50 mb-4">
              Share Skills Across the Community
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Skills are designed for sharing. Contribute your non-proprietary methodologies to the community, and benefit from skills developed by risk professionals across the industry.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-emerald-400 font-semibold mb-2">What You Share</div>
                <p className="text-slate-400 text-sm">Methodology, frameworks, best practices—the &quot;how&quot; of risk analysis</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-blue-400 font-semibold mb-2">What Stays Private</div>
                <p className="text-slate-400 text-sm">Your data, parameters, thresholds, and proprietary configurations</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-amber-400 font-semibold mb-2">What You Gain</div>
                <p className="text-slate-400 text-sm">Access to 100+ skills refined by the collective expertise of the community</p>
              </div>
            </div>
            <Link href="/skills-sharing" className="btn-secondary">
              Learn About Skills Sharing →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            Skills + Patterns + GTD = Powerful Workflows
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Individual skills are powerful. Combined into patterns and aligned with your goals, they become transformative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/platform/patterns" className="btn-primary">
              Explore Fabrix Patterns
            </Link>
            <Link href="/platform/goal-alignment" className="btn-secondary">
              GTD Goal Alignment
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
