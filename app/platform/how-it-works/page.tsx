import Navigation from '../../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'How It Works: 3 C\'s Methodology - Risk Agents',
  description: 'Learn how Risk Agents transforms risk management through the 3 C\'s: Capture, Curate, and Consult. From data collection to actionable insights.',
};

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="badge-ai">How It Works</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
            The <span className="text-gradient-blue">3 C&apos;s</span> Methodology
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            A proven approach to risk management intelligence: Capture information, Curate knowledge, Consult with insights.
          </p>
        </div>
      </section>

      {/* 3 C's Overview */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/30">
              <div className="text-5xl mb-4">📥</div>
              <div className="badge-ai mb-4">1. CAPTURE</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">Gather Information</h3>
              <p className="text-slate-300">
                Collect data from meetings, documents, voice, APIs, and unstructured sources. Transform raw information into structured inputs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl p-8 border border-amber-500/30">
              <div className="text-5xl mb-4">🗂️</div>
              <div className="badge-risk mb-4">2. CURATE</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">Organize Knowledge</h3>
              <p className="text-slate-300">
                Structure, validate, enrich, and categorize information. Apply risk taxonomy for consistent knowledge management.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl p-8 border border-emerald-500/30">
              <div className="text-5xl mb-4">💡</div>
              <div className="badge-success mb-4">3. CONSULT</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">Deliver Insights</h3>
              <p className="text-slate-300">
                Analyze, recommend, model scenarios, and generate reports. Transform knowledge into actionable decisions.
              </p>
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-slate-50 mb-6 text-center">Complete Workflow</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center">
                <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/50 mb-2">
                  <div className="font-bold text-blue-400">CAPTURE</div>
                  <div className="text-xs text-slate-400 mt-2">Raw Data</div>
                </div>
              </div>

              <div className="text-slate-500 text-2xl">→</div>

              <div className="flex-1 text-center">
                <div className="bg-amber-500/20 rounded-xl p-4 border border-amber-500/50 mb-2">
                  <div className="font-bold text-amber-400">CURATE</div>
                  <div className="text-xs text-slate-400 mt-2">Structured Knowledge</div>
                </div>
              </div>

              <div className="text-slate-500 text-2xl">→</div>

              <div className="flex-1 text-center">
                <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-500/50 mb-2">
                  <div className="font-bold text-emerald-400">CONSULT</div>
                  <div className="text-xs text-slate-400 mt-2">Actionable Insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPTURE Details */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="badge-ai mb-4">CAPTURE</div>
            <h2 className="text-4xl font-bold text-slate-50 mb-4">Information Gathering</h2>
            <p className="text-slate-300 text-lg">
              The first C focuses on collecting information from various sources and transforming it into usable formats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Data Sources</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-blue-400">📝</div>
                  <div>
                    <div className="font-semibold text-slate-50">Meeting Minutes</div>
                    <div className="text-sm text-slate-400">AI-powered transcription and action item extraction</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-blue-400">📄</div>
                  <div>
                    <div className="font-semibold text-slate-50">Documents</div>
                    <div className="text-sm text-slate-400">PDF, Word, Excel processing with intelligent parsing</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-blue-400">🎤</div>
                  <div>
                    <div className="font-semibold text-slate-50">Voice Input</div>
                    <div className="text-sm text-slate-400">Speech-to-text with context understanding</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-blue-400">🔌</div>
                  <div>
                    <div className="font-semibold text-slate-50">Bank APIs</div>
                    <div className="text-sm text-slate-400">Real-time data feeds from core banking systems</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Capture Skills</h3>
              <div className="space-y-2 font-mono text-sm text-slate-300">
                <div>• meeting-minutes.skill</div>
                <div>• document-processing.skill</div>
                <div>• voice-transcription.skill</div>
                <div>• data-extraction.skill</div>
                <div>• interview-capture.skill</div>
                <div>• email-parsing.skill</div>
                <div>• api-integration.skill</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h4 className="font-bold text-slate-50 mb-2">Example: Meeting Capture</h4>
            <p className="text-slate-300 text-sm mb-3">
              Risk committee meeting → AI transcription → Extract action items → Identify risk themes → Structure with taxonomy tags → Ready for curation
            </p>
            <div className="text-blue-400 text-xs">Duration: 2-3 minutes per hour of meeting</div>
          </div>
        </div>
      </section>

      {/* CURATE Details */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="badge-risk mb-4">CURATE</div>
            <h2 className="text-4xl font-bold text-slate-50 mb-4">Knowledge Organization</h2>
            <p className="text-slate-300 text-lg">
              The second C transforms raw information into structured, validated, and enriched knowledge ready for analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Curation Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-amber-400">🏗️</div>
                  <div>
                    <div className="font-semibold text-slate-50">Structuring</div>
                    <div className="text-sm text-slate-400">Apply templates, formats, and frameworks</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-amber-400">✅</div>
                  <div>
                    <div className="font-semibold text-slate-50">Validation</div>
                    <div className="text-sm text-slate-400">Check completeness, accuracy, consistency</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-amber-400">🏷️</div>
                  <div>
                    <div className="font-semibold text-slate-50">Categorization</div>
                    <div className="text-sm text-slate-400">Apply risk taxonomy for consistent organization</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-amber-400">💎</div>
                  <div>
                    <div className="font-semibold text-slate-50">Enrichment</div>
                    <div className="text-sm text-slate-400">Add context, links, regulatory references</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Curate Skills</h3>
              <div className="space-y-2 font-mono text-sm text-slate-300">
                <div>• requirements-structuring.skill</div>
                <div>• taxonomy-tagging.skill</div>
                <div>• gap-analysis.skill</div>
                <div>• data-validation.skill</div>
                <div>• knowledge-enrichment.skill</div>
                <div>• cross-reference.skill</div>
                <div>• version-control.skill</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
            <h4 className="font-bold text-slate-50 mb-2">Risk Taxonomy Integration</h4>
            <p className="text-slate-300 text-sm mb-3">
              All curated knowledge is automatically tagged with risk taxonomy categories (Credit, Market, Operational, etc.) enabling powerful search and consistent organization.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="badge-ai text-xs">Credit Risk</span>
              <span className="badge-risk text-xs">Market Risk</span>
              <span className="badge-success text-xs">Operational Risk</span>
              <span className="badge-ai text-xs">Regulatory</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULT Details */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="badge-success mb-4">CONSULT</div>
            <h2 className="text-4xl font-bold text-slate-50 mb-4">Insight Generation</h2>
            <p className="text-slate-300 text-lg">
              The final C applies expertise to curated knowledge, delivering analysis, recommendations, and actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Consultation Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-emerald-400">📊</div>
                  <div>
                    <div className="font-semibold text-slate-50">Framework Analysis</div>
                    <div className="text-sm text-slate-400">Apply 30+ years of risk frameworks</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-emerald-400">💡</div>
                  <div>
                    <div className="font-semibold text-slate-50">Recommendations</div>
                    <div className="text-sm text-slate-400">Context-aware, actionable guidance</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-emerald-400">🎯</div>
                  <div>
                    <div className="font-semibold text-slate-50">Scenario Modeling</div>
                    <div className="text-sm text-slate-400">What-if analysis and stress testing</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-emerald-400">📋</div>
                  <div>
                    <div className="font-semibold text-slate-50">Report Generation</div>
                    <div className="text-sm text-slate-400">Board packs, executive summaries, presentations</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Consult Skills</h3>
              <div className="space-y-2 font-mono text-sm text-slate-300">
                <div>• framework-analysis.skill</div>
                <div>• recommendation-generation.skill</div>
                <div>• scenario-modeling.skill</div>
                <div>• report-generation.skill</div>
                <div>• board-presentation.skill</div>
                <div>• regulatory-guidance.skill</div>
                <div>• implementation-roadmap.skill</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
            <h4 className="font-bold text-slate-50 mb-2">Example: Credit Risk Consultation</h4>
            <p className="text-slate-300 text-sm mb-3">
              Question: &quot;Is 42% SME concentration a problem?&quot; → Apply concentration framework → Compare to limits → Analyze trends → Calculate stress scenarios → Generate recommendations → Create board presentation
            </p>
            <div className="text-emerald-400 text-xs">Output: Comprehensive risk assessment with HIGH confidence rating</div>
          </div>
        </div>
      </section>

      {/* Integration with Skills & Patterns */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-8 text-center">
            3 C&apos;s + Skills + Patterns = Complete Solution
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 mb-8">
            <p className="text-slate-300 text-lg mb-6">
              The 3 C&apos;s methodology provides the structural framework. Skills are the modular capabilities within each C. Patterns combine skills across all 3 C&apos;s for end-to-end workflows.
            </p>

            <div className="bg-slate-900 rounded-xl p-6">
              <div className="font-mono text-sm space-y-4 text-slate-300">
                <div>
                  <div className="text-blue-400 mb-2">Pattern: board-risk-report</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">CAPTURE:</span> portfolio-data-extraction.skill</div>
                    <div><span className="text-amber-400">CURATE:</span> data-validation.skill → taxonomy-tagging.skill</div>
                    <div><span className="text-emerald-400">CONSULT:</span> trend-analysis.skill → framework-analysis.skill → board-presentation.skill</div>
                  </div>
                </div>
                <div className="text-xs text-slate-500 pt-2 border-t border-slate-700">
                  Result: Complete board pack in 6 minutes vs 2 days manually
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/platform/skills" className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors text-center">
              <div className="text-3xl mb-2">🧩</div>
              <div className="font-bold text-slate-50 mb-1">Skills</div>
              <div className="text-sm text-slate-400">Modular capabilities</div>
            </Link>

            <Link href="/platform/patterns" className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-500 transition-colors text-center">
              <div className="text-3xl mb-2">🔄</div>
              <div className="font-bold text-slate-50 mb-1">Patterns</div>
              <div className="text-sm text-slate-400">Proven workflows</div>
            </Link>

            <Link href="/platform/reporting" className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-500 transition-colors text-center">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-bold text-slate-50 mb-1">Natural Language</div>
              <div className="text-sm text-slate-400">Query interface</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            See the 3 C&apos;s in Action
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Explore how Risk Agents applies this methodology across 9 risk domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/domains" className="btn-primary">
              Explore Risk Domains
            </Link>
            <Link href="/platform" className="btn-secondary">
              Back to Platform Overview
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
