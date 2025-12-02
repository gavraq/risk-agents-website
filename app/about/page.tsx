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
            <span className="badge-risk">The Urgency</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-6">
            AI Is Transforming Risk.
            <br />
            <span className="text-gradient-amber">Don&apos;t Get Left Behind.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Risk Agents combines 30 years of CRO expertise with AI to help banks leap from Level 1 (chatbots) to Level 3 (managed workflows)—before competitors do.
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

      {/* Skills Sharing Community */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-success mb-4 inline-block">A New Model</div>
              <h2 className="text-4xl font-bold text-slate-50 mb-6">
                Not Just Software—A Community
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Risk Agents isn&apos;t just a platform you buy. It&apos;s a community you join. Risk professionals sharing methodology (not data), building on each other&apos;s work, raising the bar across the industry.
              </p>
              <p className="text-slate-300 mb-6">
                The perception that banks don&apos;t share is wrong. They lack time, not willingness. We&apos;re changing that.
              </p>
              <Link href="/skills-sharing" className="btn-secondary">
                Learn About Skills Sharing
              </Link>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-emerald-900/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">Community Benefits</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Network Effects:</strong> More members = better skills for everyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Knowledge Compounds:</strong> Unlike consultants, shared skills stay and improve</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Levels the Field:</strong> Smaller banks access capabilities of larger institutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Industry Resilience:</strong> Better risk management benefits everyone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            The Time to Act Is Now
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join as a founding member to shape the platform, or register for early access to stay informed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/skills-sharing/founding-members" className="btn-primary">
              Become a Founding Member
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
