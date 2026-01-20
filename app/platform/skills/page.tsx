import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Skills - Risk Agents',
  description: '100+ modular risk capabilities organized across 9 domains. Skills are the building blocks of the Risk Agents platform.',
};

export default function SkillsPage() {
  const domainSkills = [
    {
      domain: 'Credit Risk',
      skills: ['concentration-analysis', 'ifrs9-ecl-calculation', 'model-validation', 'early-warning-indicators', 'portfolio-analysis', 'credit-scoring', 'counterparty-assessment', 'collateral-valuation']
    },
    {
      domain: 'Market Risk',
      skills: ['var-calculation', 'stress-testing', 'frtb-compliance', 'hedge-effectiveness', 'sensitivity-analysis', 'backtesting', 'scenario-modeling']
    },
    {
      domain: 'Operational Risk',
      skills: ['loss-event-analysis', 'rcsa-assessment', 'scenario-analysis', 'kri-monitoring', 'control-testing', 'issue-management']
    },
    {
      domain: 'Liquidity Risk',
      skills: ['lcr-calculation', 'nsfr-monitoring', 'funding-gap-analysis', 'stress-testing', 'contingency-planning', 'intraday-monitoring']
    },
    {
      domain: 'Model Risk',
      skills: ['model-validation', 'sr-11-7-compliance', 'backtesting', 'sensitivity-analysis', 'benchmark-testing', 'documentation-review', 'model-inventory', 'governance-assessment']
    },
    {
      domain: 'Climate Risk',
      skills: ['tcfd-reporting', 'scenario-analysis', 'transition-risk', 'physical-risk', 'portfolio-carbon', 'green-taxonomy']
    },
    {
      domain: 'Regulatory Risk',
      skills: ['regulatory-change-tracking', 'basel-compliance', 'crd-assessment', 'regulatory-reporting', 'rulebook-analysis', 'remediation-planning']
    },
    {
      domain: 'Strategic Risk',
      skills: ['ma-risk-assessment', 'digital-transformation-risk', 'geopolitical-analysis', 'competitor-analysis', 'business-model-risk', 'reputation-risk']
    },
    {
      domain: 'Risk Change',
      skills: ['meeting-minutes', 'requirements-structuring', 'stakeholder-analysis', 'impact-assessment', 'gap-analysis', 'roadmap-planning', 'change-communication', 'tom-design', 'governance-structuring', 'training-assessment']
    }
  ];

  const captureCurateConsult = [
    {
      category: 'CAPTURE',
      description: 'Gathering information from various sources',
      skills: ['meeting-minutes', 'document-processing', 'voice-transcription', 'data-extraction', 'interview-capture']
    },
    {
      category: 'CURATE',
      description: 'Structuring and organizing information',
      skills: ['requirements-structuring', 'taxonomy-tagging', 'gap-analysis', 'data-validation', 'knowledge-enrichment']
    },
    {
      category: 'CONSULT',
      description: 'Analysis and recommendations',
      skills: ['framework-analysis', 'recommendation-generation', 'scenario-modeling', 'report-generation', 'board-presentation']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">Innovation #2</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Skills
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            100+ modular risk capabilities. Each skill does one thing exceptionally well. Combine them to tackle any risk challenge.
          </p>
        </div>
      </section>

      {/* What are Skills */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            What are Skills?
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            A skill is a modular, reusable capability packaged with everything an AI agent needs to execute a specific task consistently and effectively.
          </p>
          <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
            <p className="text-secondary mb-4">Each skill includes:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-white mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-white">Progressive Disclosure</span>
                  <p className="text-muted text-sm">Load only what&apos;s needed to keep context windows clean</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-white">Clear Instructions</span>
                  <p className="text-muted text-sm">Step-by-step guidance for consistent execution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-white">Supporting Resources</span>
                  <p className="text-muted text-sm">Frameworks, regulatory references, examples</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-white">Optional Code/Calculations</span>
                  <p className="text-muted text-sm">Reusable logic for complex computations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Example */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Anatomy of a Skill
          </h2>
          <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
            <div className="font-mono text-sm text-secondary">
              <div className="text-white mb-3">concentration-analysis.skill</div>
              <div className="pl-4 border-l-2 border-[rgb(45,45,45)] space-y-1">
                <div>├─ metadata (name, description, domain)</div>
                <div>├─ instructions/ (step-by-step process)</div>
                <div>├─ resources/ (concentration framework)</div>
                <div>└─ code/ (calculation engine)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Skills */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Domain-Specific Skills
          </h2>
          <p className="text-secondary mb-8">
            72 skills organized across 9 risk domains
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainSkills.map((item) => (
              <div key={item.domain} className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
                <h3 className="text-lg font-bold text-white mb-2">{item.domain}</h3>
                <p className="text-muted text-sm mb-3">{item.skills.length} skills</p>
                <div className="space-y-1">
                  {item.skills.slice(0, 4).map((skill) => (
                    <div key={skill} className="text-xs text-secondary font-mono">• {skill}</div>
                  ))}
                  {item.skills.length > 4 && (
                    <div className="text-xs text-muted">+ {item.skills.length - 4} more...</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 C's Skills */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            3 C&apos;s Methodology Skills
          </h2>
          <p className="text-secondary mb-8">
            15 skills that power our <Link href="/platform/context-management" className="text-white hover:underline">Context Management</Link> approach
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {captureCurateConsult.map((item) => (
              <div key={item.category} className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
                <p className="text-muted uppercase text-sm tracking-wide mb-2">{item.category}</p>
                <p className="text-secondary text-sm mb-4">{item.description}</p>
                <div className="space-y-1">
                  {item.skills.map((skill) => (
                    <div key={skill} className="text-xs text-secondary font-mono">• {skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Skills Compose */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            How Skills Compose
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Skills can use other skills and are used by patterns, creating a powerful composition model.
          </p>
          <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
            <div className="font-mono text-sm space-y-2 text-secondary">
              <div className="text-white">concentration-analysis.skill</div>
              <div className="pl-4">
                <div>├─ <span className="text-secondary">Uses:</span> calculation-engine.skill</div>
                <div>├─ <span className="text-secondary">Uses:</span> regulatory-search.skill</div>
                <div>└─ <span className="text-muted">Used by:</span> concentration-assessment-full.pattern</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Skills */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Built-in Skills (Leveraging Claude)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">PowerPoint Generation</h3>
              <p className="text-secondary text-sm">Create professional presentations from analysis results</p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Excel Analytics</h3>
              <p className="text-secondary text-sm">Generate Excel reports with charts and pivot tables</p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">PDF Reports</h3>
              <p className="text-secondary text-sm">Export formatted PDF documents for distribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Sharing */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
            <h2 className="text-2xl font-bold text-white mb-4">
              Share Skills Across the Community
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Skills are designed for sharing. Contribute your non-proprietary methodologies to the community, and benefit from skills developed by risk professionals across the industry.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-white font-semibold text-sm mb-2">What You Share</p>
                <p className="text-muted text-sm">Methodology, frameworks, best practices</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-2">What Stays Private</p>
                <p className="text-muted text-sm">Your data, parameters, thresholds</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-2">What You Gain</p>
                <p className="text-muted text-sm">Access to 100+ community skills</p>
              </div>
            </div>
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
              href="/platform/context-management"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              &larr; Context Management
            </Link>
            <Link
              href="/platform/patterns"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Patterns &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
