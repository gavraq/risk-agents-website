import Navigation from '../components/Navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[60vh] circuit-pattern circuit-dots flex items-center justify-center px-6 py-24 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="badge-success">Our Story</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-6">
            <span className="text-gradient-amber">30 Years</span>
            <br />
            of Risk Operations Expertise
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Risk Agents is built on three decades of experience managing risk at the world&apos;s
            largest financial institutions—now delivered through AI
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

            <div>
              <div className="badge-ai mb-6 inline-block">Built By Experience</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
                From Banking&apos;s Risk Frontlines to AI Innovation
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Risk Agents was created by <strong className="text-slate-50">Gavin Slater</strong>,
                a Chief Operating Officer within Risk with 30 years of experience building and transforming risk functions at:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🏦</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-50">ICBC Standard Bank</h4>
                    <p className="text-slate-400 text-sm">Head of Risk Infrastructure (2021-Present)</p>
                    <p className="text-slate-400">Leading Risk Reporting team and Risk Change initiatives</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🏦</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-50">Barclays Bank</h4>
                    <p className="text-slate-400 text-sm">Global Head Market & Credit Risk Infrastructure (2008-2013)</p>
                    <p className="text-slate-400">Led team of ~300 people, harmonized risk management infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🏦</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-50">Deutsche Bank</h4>
                    <p className="text-slate-400 text-sm">COO Market Risk Management (2001-2008)</p>
                    <p className="text-slate-400">Managed all support activities for Market Risk Management function</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🏦</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-50">Nordea Bank</h4>
                    <p className="text-slate-400 text-sm">Head of Trading & Risk Programme (2016-2019)</p>
                    <p className="text-slate-400">Led cultural transformation of trading business</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/gavin-avatar.png"
                  alt="Gavin Slater"
                  width={128}
                  height={128}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-50 mb-4 text-center">
                Gavin Slater
              </h3>
              <p className="text-slate-300 text-center mb-6">
                Chief Operating Officer (Risk), Risk Agents Founder
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-slate-300">30 years building risk infrastructure & operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <span className="text-slate-300">Led teams of 300+ in risk transformation programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-slate-300">Head of Risk Infrastructure at ICBC Standard Bank</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-slate-300">Former COO Market Risk at Deutsche Bank</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <span className="text-slate-300">Specialist in target operating models & change delivery</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://www.gavinslater.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  Visit gavinslater.com →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Problem We&apos;re Solving */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-risk mb-4 inline-block">The Problem</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              Why Risk Management Needs Transformation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Current State Problems */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <span>❌</span> Traditional Risk Management
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong className="text-slate-50">Static Reports:</strong> 50+ monthly reports that are outdated the moment they&apos;re produced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong className="text-slate-50">Manual Processes:</strong> Weeks to answer ad-hoc questions, hundreds of Excel spreadsheets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong className="text-slate-50">Siloed Knowledge:</strong> Expertise locked in individuals&apos; heads, lost when they leave</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong className="text-slate-50">No Learning:</strong> Same mistakes repeated, no improvement in workflows over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong className="text-slate-50">Reactive:</strong> Always responding to events rather than preventing them</span>
                </li>
              </ul>
            </div>

            {/* Risk Agents Solution */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <span>✅</span> Risk Agents Approach
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong className="text-slate-50">Natural Language:</strong> Ask questions in plain English, get instant structured answers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong className="text-slate-50">Instant Analysis:</strong> Complex risk scenarios analyzed in seconds, not weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong className="text-slate-50">Captured Expertise:</strong> 30 years of CRO knowledge embedded in every skill</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong className="text-slate-50">Evolving Workflows:</strong> Patterns track success and improve automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong className="text-slate-50">Proactive:</strong> Identify emerging risks before they become problems</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Journey to Risk Agents */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-ai mb-4 inline-block">Our Journey</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              From Banking Risk to AI Innovation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              How 30 years of managing risk functions led to the creation of Risk Agents
            </p>
          </div>

          <div className="space-y-8">

            {/* Phase 1: Banking Experience */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex-grow">
                <h3 className="text-2xl font-bold text-slate-50 mb-3">
                  1995-2025: Banking Risk Management
                </h3>
                <p className="text-slate-300 mb-4">
                  Three decades managing risk at Barclays, Deutsche Bank, and ICBC Standard Bank.
                  Built and transformed complete risk functions covering credit, market, operational,
                  liquidity, model, and climate risk.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">Basel II/III/IV</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">IFRS 9</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">FRTB</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">CCAR/ICAAP</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">Climate Risk</span>
                </div>
              </div>
            </div>

            {/* Phase 2: The Realization */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center">
                  <span className="text-amber-400 font-bold">2</span>
                </div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex-grow">
                <h3 className="text-2xl font-bold text-slate-50 mb-3">
                  2023: The AI Transformation Begins
                </h3>
                <p className="text-slate-300 mb-4">
                  Watching the emergence of Large Language Models (LLMs) and realizing their potential
                  to transform risk management. Started experimenting with AI agents for risk analysis,
                  combining banking expertise with cutting-edge AI capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-500/20 rounded-full text-xs text-amber-300">LLM Adoption</span>
                  <span className="px-3 py-1 bg-amber-500/20 rounded-full text-xs text-amber-300">Agent Frameworks</span>
                  <span className="px-3 py-1 bg-amber-500/20 rounded-full text-xs text-amber-300">Risk + AI</span>
                </div>
              </div>
            </div>

            {/* Phase 3: Building Risk Agents */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center">
                  <span className="text-green-400 font-bold">3</span>
                </div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex-grow">
                <h3 className="text-2xl font-bold text-slate-50 mb-3">
                  2024-2025: Building Risk Agents
                </h3>
                <p className="text-slate-300 mb-4">
                  Development of the Risk Agents platform combining three innovations: <strong className="text-slate-50">Skills</strong> (modular
                  capabilities), <strong className="text-slate-50">Fabrix Patterns</strong> (composable workflows), and <strong className="text-slate-50">Natural Language</strong> (query-based
                  reporting). Turning 30 years of CRO expertise into AI-powered risk intelligence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-300">100+ Skills</span>
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-300">75+ Patterns</span>
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-300">Claude Integration</span>
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-300">Context Management</span>
                </div>
              </div>
            </div>

            {/* Phase 4: Coming 2026 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">4</span>
                </div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex-grow">
                <h3 className="text-2xl font-bold text-slate-50 mb-3">
                  2026: Launch & Beyond
                </h3>
                <p className="text-slate-300 mb-4">
                  Risk Agents launches to transform how financial institutions manage risk.
                  From day one, clients get access to 100+ skills, 75+ patterns, and 30 years
                  of CRO expertise—no multi-year implementations, no armies of consultants.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">Early Access Program</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">Beta Testing</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">General Availability</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-success mb-4 inline-block">Our Principles</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              What We Believe
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The core principles that guide Risk Agents development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Experience Over Hype
              </h3>
              <p className="text-slate-300">
                Risk Agents is built on 30 years of real banking experience, not theoretical
                frameworks. Every skill and pattern reflects what actually works in managing
                risk at global financial institutions.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Skills Over Monoliths
              </h3>
              <p className="text-slate-300">
                We believe in composable, modular capabilities rather than rigid, all-or-nothing
                systems. Skills combine into patterns, patterns solve problems, and the system
                evolves with usage.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Natural Language Over Training
              </h3>
              <p className="text-slate-300">
                Risk professionals should ask questions in plain English, not learn complex
                systems. The platform should adapt to users, not the other way around.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Evolution Over Perfection
              </h3>
              <p className="text-slate-300">
                Patterns that track success and improve over time beat static &ldquo;best practices.&rdquo;
                Risk Agents learns from every query, every pattern, every outcome.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Context Over Documents
              </h3>
              <p className="text-slate-300">
                Information should be captured, curated, and consulted—not buried in
                SharePoint. Every insight, every analysis, every piece of knowledge should
                be instantly accessible.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Orchestration Over Automation
              </h3>
              <p className="text-slate-300">
                AI should augment human expertise, not replace it. Risk Agents coordinates
                skills and patterns to support decision-making, always with human oversight
                and judgment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Risk Agents is coming in 2026. Register for early access and be part of the transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#early-access" className="btn-primary">
              Get Early Access
            </Link>
            <Link href="/about/philosophy" className="btn-secondary">
              Read Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 Risk Agents. Built by <a href="https://www.gavinslater.com" className="text-blue-400 hover:text-blue-300 transition-colors">Gavin Slater</a></p>
          <p className="mt-2">30 Years of Risk Operations Expertise, Delivered by AI</p>
        </div>
      </footer>
    </div>
  );
}
