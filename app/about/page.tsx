import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Risk Agents - 30 Years of CRO Expertise Meets AI Innovation',
  description: 'Founded by Gavin Slater with 30 years of banking risk experience at Barclays, Deutsche Bank, and ICBC Standard Bank. Learn how Risk Agents transforms risk management.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center px-6 py-24 pt-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted uppercase tracking-widest text-sm font-medium mb-6">
            The Urgency
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            AI Is Transforming Risk.
            <br />
            Don&apos;t Get Left Behind.
          </h1>

          <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl">
            Risk Agents combines 30 years of CRO expertise with AI to help banks leap from Level 1 (chatbots) to Level 3 (managed workflows)—before competitors do.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

            <div>
              <p className="text-muted uppercase tracking-widest text-sm font-medium mb-6">
                Built By Experience
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Banking&apos;s Risk Frontlines to AI Innovation
              </h2>
              <p className="text-lg text-secondary mb-6">
                Risk Agents was created by <strong className="text-white">Gavin Slater</strong>,
                a Chief Operating Officer within Risk with 30 years of experience building and transforming risk functions at:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">ICBC Standard Bank</h4>
                    <p className="text-muted text-sm">Head of Risk Infrastructure (2021-Present)</p>
                    <p className="text-secondary">Leading Risk Reporting team and Risk Change initiatives</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Barclays Bank</h4>
                    <p className="text-muted text-sm">Global Head Market & Credit Risk Infrastructure (2008-2013)</p>
                    <p className="text-secondary">Led team of ~300 people, harmonized risk management infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Deutsche Bank</h4>
                    <p className="text-muted text-sm">COO Market Risk Management (2001-2008)</p>
                    <p className="text-secondary">Managed all support activities for Market Risk Management function</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Nordea Bank</h4>
                    <p className="text-muted text-sm">Head of Trading & Risk Programme (2016-2019)</p>
                    <p className="text-secondary">Led cultural transformation of trading business</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/gavin-avatar.png"
                  alt="Gavin Slater"
                  width={128}
                  height={128}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Gavin Slater
              </h3>
              <p className="text-secondary text-center mb-6">
                Chief Operating Officer (Risk), Risk Agents Founder
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/60"></div>
                  <span className="text-secondary">30 years building risk infrastructure & operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/60"></div>
                  <span className="text-secondary">Led teams of 300+ in risk transformation programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/60"></div>
                  <span className="text-secondary">Head of Risk Infrastructure at ICBC Standard Bank</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/60"></div>
                  <span className="text-secondary">Former COO Market Risk at Deutsche Bank</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/60"></div>
                  <span className="text-secondary">Specialist in target operating models & change delivery</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://www.gavinslater.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-secondary transition-colors text-sm"
                >
                  Visit gavinslater.com &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Journey to Risk Agents */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted uppercase tracking-widest text-sm font-medium mb-4">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From Banking Risk to AI Innovation
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              How 30 years of managing risk functions led to the creation of Risk Agents
            </p>
          </div>

          <div className="space-y-8">

            {/* Phase 1: Banking Experience */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] border-2 border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)] flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  1995-2025: Banking Risk Management
                </h3>
                <p className="text-secondary mb-4">
                  Three decades managing risk at Barclays, Deutsche Bank, and ICBC Standard Bank.
                  Built and transformed complete risk functions covering credit, market, operational,
                  liquidity, model, and climate risk.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">Basel II/III/IV</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">IFRS 9</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">FRTB</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">CCAR/ICAAP</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">Climate Risk</span>
                </div>
              </div>
            </div>

            {/* Phase 2: The Realization */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] border-2 border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)] flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  2023: The AI Transformation Begins
                </h3>
                <p className="text-secondary mb-4">
                  Watching the emergence of Large Language Models (LLMs) and realizing their potential
                  to transform risk management. Started experimenting with AI agents for risk analysis,
                  combining banking expertise with cutting-edge AI capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">LLM Adoption</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">Agent Frameworks</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">Risk + AI</span>
                </div>
              </div>
            </div>

            {/* Phase 3: Building Risk Agents */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] border-2 border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)] flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  2024-2025: Building Risk Agents
                </h3>
                <p className="text-secondary mb-4">
                  Development of the Risk Agents platform combining three innovations: <strong className="text-white">Skills</strong> (modular
                  capabilities), <strong className="text-white">Fabrix Patterns</strong> (composable workflows), and <strong className="text-white">Natural Language</strong> (query-based
                  reporting). Turning 30 years of CRO expertise into AI-powered risk intelligence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">100+ Skills</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">75+ Patterns</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">Claude Integration</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">Context Management</span>
                </div>
              </div>
            </div>

            {/* Phase 4: Coming 2026 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] border-2 border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)] flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  2026: Launch & Beyond
                </h3>
                <p className="text-secondary mb-4">
                  Risk Agents launches to transform how financial institutions manage risk.
                  From day one, clients get access to 100+ skills, 75+ patterns, and 30 years
                  of CRO expertise—no multi-year implementations, no armies of consultants.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">Early Access Program</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">Beta Testing</span>
                  <span className="px-3 py-1 bg-[rgb(45,45,45)] rounded-full text-xs text-secondary">General Availability</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-6 bg-[rgb(22,22,22)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted uppercase tracking-widest text-sm font-medium mb-4">
              Our Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What We Believe
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              The core principles that guide Risk Agents development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Experience Over Hype
              </h3>
              <p className="text-secondary">
                Risk Agents is built on 30 years of real banking experience, not theoretical
                frameworks. Every skill and pattern reflects what actually works in managing
                risk at global financial institutions.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Skills Over Monoliths
              </h3>
              <p className="text-secondary">
                We believe in composable, modular capabilities rather than rigid, all-or-nothing
                systems. Skills combine into patterns, patterns solve problems, and the system
                evolves with usage.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Natural Language Over Training
              </h3>
              <p className="text-secondary">
                Risk professionals should ask questions in plain English, not learn complex
                systems. The platform should adapt to users, not the other way around.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Evolution Over Perfection
              </h3>
              <p className="text-secondary">
                Patterns that track success and improve over time beat static &ldquo;best practices.&rdquo;
                Risk Agents learns from every query, every pattern, every outcome.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Context Over Documents
              </h3>
              <p className="text-secondary">
                Information should be captured, curated, and consulted—not buried in
                SharePoint. Every insight, every analysis, every piece of knowledge should
                be instantly accessible.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Orchestration Over Automation
              </h3>
              <p className="text-secondary">
                AI should augment human expertise, not replace it. Risk Agents coordinates
                skills and patterns to support decision-making, always with human oversight
                and judgment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Sharing Community */}
      <section className="py-24 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted uppercase tracking-widest text-sm font-medium mb-4">
                A New Model
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Not Just Software—A Community
              </h2>
              <p className="text-lg text-secondary mb-6">
                Risk Agents isn&apos;t just a platform you buy. It&apos;s a community you join. Risk professionals sharing methodology (not data), building on each other&apos;s work, raising the bar across the industry.
              </p>
              <p className="text-secondary mb-6">
                The perception that banks don&apos;t share is wrong. They lack time, not willingness. We&apos;re changing that.
              </p>
              <Link href="/skills-sharing" className="btn-secondary">
                Learn About Skills Sharing
              </Link>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">Community Benefits</h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Network Effects:</strong> More members = better skills for everyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Knowledge Compounds:</strong> Unlike consultants, shared skills stay and improve</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Levels the Field:</strong> Smaller banks access capabilities of larger institutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Industry Resilience:</strong> Better risk management benefits everyone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 px-6 bg-[rgb(22,22,22)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Time to Act Is Now
          </h2>
          <p className="text-lg text-secondary mb-8">
            Join as a founding member to shape the platform, or register for early access to stay informed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/skills-sharing/founding-members" className="btn-primary">
              Become a Founding Member
            </Link>
            <Link href="/how-we-think" className="btn-secondary">
              Read How We Think
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
