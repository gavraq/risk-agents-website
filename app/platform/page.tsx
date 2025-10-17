import Navigation from '../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Platform Overview - Risk Agents',
  description: 'Discover the Risk Agents platform architecture built on Skills, Patterns, and 30 years of CRO expertise',
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
            A revolutionary AI-powered risk intelligence system built on three foundational innovations:
            Claude Skills Framework, Fabrix Pattern System, and GTD Horizons Alignment
          </p>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">
            Platform Architecture
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 mb-12">
            <div className="space-y-6 font-mono text-sm text-slate-300">
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="font-bold text-slate-50 mb-2">USER INTERFACE LAYER</div>
                <div>Web, API, Voice</div>
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

      {/* Core Innovations */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">
            Core Innovations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Skills Framework */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift">
              <div className="badge-ai mb-4">Skills Framework</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                Modular Capabilities
              </h3>
              <p className="text-slate-300 mb-6">
                100+ focused skills across 9 risk domains. Each skill is a reusable capability with progressive disclosure, clear instructions, and supporting resources.
              </p>
              <Link href="/platform/skills" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Fabrix Patterns */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift">
              <div className="badge-risk mb-4">Fabrix Patterns</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                Workflows That Evolve
              </h3>
              <p className="text-slate-300 mb-6">
                Composable patterns that combine skills into proven workflows. Track success rates, promote effective patterns, and continuously improve.
              </p>
              <Link href="/platform/patterns" className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* GTD Alignment */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift">
              <div className="badge-success mb-4">GTD Horizons</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                Goal Alignment
              </h3>
              <p className="text-slate-300 mb-6">
                Every action traces from daily tasks through projects and goals all the way to organizational principles and values using David Allen&apos;s GTD methodology.
              </p>
              <Link href="/platform/how-it-works" className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">
            Platform Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-3">Natural Language Reporting</h3>
              <p className="text-slate-300 mb-4">
                Replace 50+ standard reports with natural language queries. Ask questions and get instant answers instead of generating unused reports.
              </p>
              <Link href="/platform/reporting" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 text-sm">
                Explore Natural Language Reporting →
              </Link>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-3">Risk Taxonomy</h3>
              <p className="text-slate-300 mb-4">
                Structured knowledge management framework organizing all risk content across 9 domains with AI-powered auto-tagging and classification.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-3">Human-in-the-Loop</h3>
              <p className="text-slate-300 mb-4">
                AI augments judgment, doesn&apos;t replace it. Confidence scoring, human review gating, and transparent decision-making throughout.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-3">Vendor Agnostic</h3>
              <p className="text-slate-300 mb-4">
                API-first, plug-and-play architecture. Use any LLM (Claude, GPT, Gemini, open-source). Integrate with existing risk systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-12 text-center">
            Technology Stack
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-slate-50 mb-3">Core Platform</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Anthropic Agent SDK (Claude 4.5 Sonnet)</li>
                  <li>• MCP (Model Context Protocol) servers</li>
                  <li>• Vector DB (ChromaDB/Pinecone) for RAG</li>
                  <li>• FastAPI REST wrapper</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-50 mb-3">Security & Compliance</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• SOC 2 compliance</li>
                  <li>• End-to-end encryption</li>
                  <li>• Clean context windows per invocation</li>
                  <li>• Audit trail for all decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            Ready to Transform Risk Management?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Get early access to the Risk Agents platform and be among the first to experience the future of AI-powered risk intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#early-access" className="btn-primary">
              Get Early Access
            </a>
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
