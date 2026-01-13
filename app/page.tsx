import Navigation from './components/Navigation';
import Footer from './components/Footer';
import EarlyAccessForm from './components/EarlyAccessForm';
import Link from 'next/link';

export const metadata = {
  title: 'Risk Agents - AI-Powered Risk Intelligence for Banks & Financial Institutions',
  description: 'AI augments, humans decide. Risk Agents combines 100+ AI skills with 30 years of CRO expertise to transform risk management for banks and financial institutions.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Layer 1: Hero - 5 seconds (Hook) */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            AI Augments.<br />
            Humans Decide.
          </h1>

          <p className="text-xl md:text-2xl text-secondary mb-6 max-w-2xl mx-auto font-light">
            Expanding the boundaries of your vision
          </p>

          <p className="text-base md:text-lg text-muted mb-12 uppercase tracking-widest font-medium">
            Risk Intelligence for Banks & Financial Institutions
          </p>

          <a
            href="#early-access"
            className="btn-primary inline-flex items-center gap-2"
          >
            Request Early Access
          </a>
        </div>
      </section>

      {/* Layer 2: The Problem - 15 seconds (Intrigue) */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl text-secondary font-light leading-relaxed mb-8">
            Can your risk management keep pace with AI-driven markets?
          </p>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            While you&apos;re buried in tick-box compliance, your competitors are deploying AI. The gap widens every day.
          </p>
        </div>
      </section>

      {/* Layer 3: The Solution - 30 seconds (Three Visual Cards) */}
      <section id="learn-more" className="py-24 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Solution
            </h2>
            <p className="text-secondary">
              Three innovations, 30 years of risk expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Skills */}
            <Link
              href="/platform/skills"
              className="group block bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)] hover:border-[rgb(60,60,60)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Skills
              </h3>
              <p className="text-secondary text-sm mb-4">
                100+ modular capabilities across 9 risk domains
              </p>
              <span className="text-muted text-sm group-hover:text-secondary transition-colors">
                Explore &rarr;
              </span>
            </Link>

            {/* Patterns */}
            <Link
              href="/platform/patterns"
              className="group block bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)] hover:border-[rgb(60,60,60)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Patterns
              </h3>
              <p className="text-secondary text-sm mb-4">
                Composable workflows that learn and improve
              </p>
              <span className="text-muted text-sm group-hover:text-secondary transition-colors">
                Explore &rarr;
              </span>
            </Link>

            {/* Platform */}
            <Link
              href="/platform"
              className="group block bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)] hover:border-[rgb(60,60,60)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Platform
              </h3>
              <p className="text-secondary text-sm mb-4">
                Human-in-the-loop AI with full alignment
              </p>
              <span className="text-muted text-sm group-hover:text-secondary transition-colors">
                Explore &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Layer 4: Credibility - 15 seconds */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">30+</p>
              <p className="text-secondary">Years Risk Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">Global</p>
              <p className="text-secondary">Banking Background</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">100+</p>
              <p className="text-secondary">AI-Powered Skills</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-secondary mb-6">
              Not software you buy. A community you join.
            </p>
            <Link href="/skills-sharing" className="text-muted hover:text-secondary transition-colors text-sm">
              Learn about Skills Sharing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Layer 5: Final CTA */}
      <section id="early-access" className="py-24 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Founding Members
          </h2>
          <p className="text-secondary mb-8">
            Shape the platform. Influence governance. Lead the transformation.
          </p>
          <EarlyAccessForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
