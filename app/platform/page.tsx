import Navigation from '../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Platform Overview - Risk Agents',
  description: 'Discover the Risk Agents platform built on three innovations: Skills Framework, Fabrix Patterns, and GTD Goal Alignment.',
};

export default function PlatformOverview() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="badge-ai">Platform</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
            The Risk Agents <span className="text-gradient-blue">Platform</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            An AI-powered risk intelligence system built on three foundational innovations that make the difference between a chatbot and a trusted risk advisor that augments human decision-making.
          </p>
        </div>
      </section>

      {/* Three Innovations */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Three Innovations
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              What transforms generic AI into a domain expert
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Skills Framework */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-blue-900/30 card-lift">
              <div className="text-4xl mb-4">🧩</div>
              <div className="badge-ai mb-4">Innovation #1</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                Skills Framework
              </h3>
              <p className="text-slate-300 mb-6">
                100+ modular capabilities across 9 risk domains. Each skill is focused, tested, and shareable. Load only what you need.
              </p>
              <ul className="text-slate-400 text-sm space-y-2 mb-6">
                <li>• Progressive disclosure for clean context</li>
                <li>• Clear instructions and resources</li>
                <li>• Domain-specific expertise packaged</li>
              </ul>
              <Link href="/platform/skills" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2">
                Explore Skills
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Fabrix Patterns */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-amber-900/30 card-lift">
              <div className="text-4xl mb-4">🔄</div>
              <div className="badge-risk mb-4">Innovation #2</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                Fabrix Patterns
              </h3>
              <p className="text-slate-300 mb-6">
                Workflows that evolve. Patterns combine skills, track success rates, and improve over time. Not static automation—learning systems.
              </p>
              <ul className="text-slate-400 text-sm space-y-2 mb-6">
                <li>• Combine skills into proven workflows</li>
                <li>• Track success and promote what works</li>
                <li>• Share patterns across the community</li>
              </ul>
              <Link href="/platform/patterns" className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-2">
                Explore Patterns
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* GTD Alignment */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-emerald-900/30 card-lift">
              <div className="text-4xl mb-4">🎯</div>
              <div className="badge-success mb-4">Innovation #3</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                GTD Goal Alignment
              </h3>
              <p className="text-slate-300 mb-6">
                Connect daily tasks to strategic outcomes. David Allen&apos;s Horizons of Focus ensure nothing falls through and progress is visible.
              </p>
              <ul className="text-slate-400 text-sm space-y-2 mb-6">
                <li>• Ground level to 50,000 ft view</li>
                <li>• Every task traces to goals</li>
                <li>• Weekly review built in</li>
              </ul>
              <Link href="/platform/goal-alignment" className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2">
                Explore GTD
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Context Engineering */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-ai mb-6 inline-block">Foundation</span>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                Context Engineering
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                The three innovations sit on a foundation of Context Engineering—a structured Risk Taxonomy that organizes requirements, policies, processes, controls, models, and data into an interconnected knowledge pyramid that AI agents can navigate.
              </p>
              <p className="text-slate-300 mb-6">
                Built on the <strong className="text-slate-200">3 C&apos;s methodology</strong>: Capture information, Curate knowledge against the taxonomy, Consult with full context.
              </p>
              <Link href="/platform/context-engineering" className="btn-secondary">
                Learn About Context Engineering
              </Link>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center">
                    <span className="text-xl">📥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Capture</h4>
                    <p className="text-slate-400 text-sm">Gather from meetings, documents, APIs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-900/30 flex items-center justify-center">
                    <span className="text-xl">🗂️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Curate</h4>
                    <p className="text-slate-400 text-sm">Structure, validate, enrich with taxonomy</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-900/30 flex items-center justify-center">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Consult</h4>
                    <p className="text-slate-400 text-sm">Analyse, recommend, generate reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              What the platform delivers today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-3">Natural Language Reporting</h3>
              <p className="text-slate-300 mb-4">
                Ask questions in plain English, get instant answers. Replace 50+ standard reports with on-demand queries that actually get used.
              </p>
              <Link href="/platform/reporting" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 text-sm">
                Explore Natural Language Reporting →
              </Link>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-3">9 Risk Domains</h3>
              <p className="text-slate-300 mb-4">
                Specialised agents for Credit, Market, Operational, Liquidity, Model, Climate, Regulatory, Strategic, and Risk Change.
              </p>
              <Link href="/domains" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 text-sm">
                Explore Risk Domains →
              </Link>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-3">Human-in-the-Loop</h3>
              <p className="text-slate-300 mb-4">
                AI augments judgment, doesn&apos;t replace it. Confidence scoring, human review gating, and transparent decision-making throughout.
              </p>
              <Link href="/platform/human-in-the-loop" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 text-sm">
                Explore Human-in-the-Loop →
              </Link>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-3">Skills Sharing</h3>
              <p className="text-slate-300 mb-4">
                Join a community of risk professionals sharing methodology, not data. Benefit from industry-wide best practices.
              </p>
              <Link href="/skills-sharing" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 text-sm">
                Learn About Skills Sharing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Platform Roadmap
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              What we&apos;re building and where we&apos;re headed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-900/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-emerald-400 font-semibold">Available Now</span>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>• Skills Framework (100+ skills)</li>
                <li>• Fabrix Pattern System</li>
                <li>• GTD Goal Alignment</li>
                <li>• Context Engineering (3 C&apos;s)</li>
                <li>• Natural Language Queries</li>
                <li>• 9 Domain Agents</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-900/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-blue-400 font-semibold">In Development</span>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>• Skills Sharing Marketplace</li>
                <li>• Advanced Pattern Analytics</li>
                <li>• Regulatory Change Tracking</li>
                <li>• Multi-bank Benchmarking</li>
                <li>• Voice Interface</li>
                <li>• Mobile App</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                <span className="text-slate-400 font-semibold">On Roadmap</span>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>• Real-time Data Integration</li>
                <li>• Automated Model Validation</li>
                <li>• Predictive Risk Analytics</li>
                <li>• Multi-tenant Architecture</li>
                <li>• SOC 2 Certification</li>
                <li>• API Marketplace</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Roadmap priorities shaped by <Link href="/skills-sharing/founding-members" className="text-blue-400 hover:text-blue-300">founding members</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-50 mb-8 text-center">
            Platform Architecture
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="space-y-6 font-mono text-sm text-slate-300">
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="font-bold text-slate-50 mb-2">USER INTERFACE LAYER</div>
                <div>Web • API • Voice (roadmap)</div>
              </div>

              <div className="border-l-2 border-amber-500 pl-4">
                <div className="font-bold text-slate-50 mb-2">ORCHESTRATION LAYER</div>
                <div>Risk Intelligence Engine</div>
                <div className="text-xs mt-1">Intent recognition • Agent selection • Multi-domain coordination</div>
              </div>

              <div className="border-l-2 border-green-500 pl-4">
                <div className="font-bold text-slate-50 mb-2">SKILLS & PATTERNS LAYER</div>
                <div>100+ Modular Skills → Composable Patterns → Proven Workflows</div>
              </div>

              <div className="border-l-2 border-purple-500 pl-4">
                <div className="font-bold text-slate-50 mb-2">SPECIALIZED AGENTS LAYER</div>
                <div>9 Risk Domain Agents (Credit, Market, Operational, etc.)</div>
              </div>

              <div className="border-l-2 border-slate-500 pl-4">
                <div className="font-bold text-slate-50 mb-2">KNOWLEDGE LAYER</div>
                <div>Risk Taxonomy • GTD Horizons • Regulatory Library • Vector DB (RAG)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            Ready to Transform Risk Management?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join as a founding member to help shape the platform and get early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/skills-sharing/founding-members" className="btn-primary">
              Become a Founding Member
            </Link>
            <Link href="/domains" className="btn-secondary">
              Explore Risk Domains
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
