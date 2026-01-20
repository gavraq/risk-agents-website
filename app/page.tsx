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
      <section
        className="min-h-screen flex items-center justify-center px-6 py-24 pt-32 relative"
        style={{
          backgroundImage: 'url(/images/RiskAgentsLogo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col justify-between py-20 pb-8 px-6 z-10">
          {/* Top section - main headline */}
          <div className="text-center pt-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              AI Augments. Humans Decide.
            </h1>

            <p className="text-base md:text-lg text-slate-300 uppercase tracking-widest font-medium">
              Risk Intelligence for Banks & Financial Institutions
            </p>
          </div>

          {/* Bottom section - CTA button */}
          <div className="text-center mb-0">
            <a
              href="#early-access"
              className="btn-primary inline-flex items-center gap-2"
            >
              Request Early Access
            </a>
          </div>
        </div>
      </section>

      {/* Layer 2: The Challenge */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            The Challenge in Risk Management
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Risk professionals are drowning in routine tasks while strategic threats evolve unchecked. Tick-box compliance crowds out strategic thinking. Volumes of static reports go unread. Knowledge is trapped in heads and walks out when people leave.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            The universe of potential risks vastly exceeds human capacity to analyze. Most risks remain invisible—not because they&apos;re unimportant, but because there simply isn&apos;t time to look.
          </p>
          <Link
            href="/risk-management-crisis"
            className="text-muted hover:text-secondary transition-colors text-sm inline-flex items-center gap-2"
          >
            Explore the Risk Management Crisis &rarr;
          </Link>
        </div>
      </section>

      {/* Layer 3: The Urgency */}
      <section className="py-24 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            The Window Is Closing
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            While you&apos;re buried in compliance, your competitors are deploying AI. Leading institutions are rapidly advancing along the AI Maturity Model—moving from basic automation to intelligent augmentation.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            The gap widens every day. Those who act now will define the future of risk management. Those who wait will be playing catch-up for years.
          </p>
          <Link
            href="/ai-maturity-model"
            className="text-muted hover:text-secondary transition-colors text-sm inline-flex items-center gap-2"
          >
            Explore the AI Maturity Model &rarr;
          </Link>
        </div>
      </section>

      {/* Layer 4: The Future Vision */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Expanding the Boundaries of What&apos;s Possible
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            AI doesn&apos;t replace human judgment—it expands what humans can meaningfully oversee. Monitor thousands of scenarios instead of dozens. Detect patterns in real-time instead of batch analysis. Explore future possibilities that were previously invisible.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            The irreplaceable human elements remain: risk judgment, accountability, institutional context, and knowing when models miss the point. AI handles the grunt work so you can focus on what matters.
          </p>
          <Link
            href="/platform/human-in-the-loop"
            className="text-muted hover:text-secondary transition-colors text-sm inline-flex items-center gap-2 mb-12 block"
          >
            Explore Human-in-the-Loop &rarr;
          </Link>

          <h3 className="text-2xl font-bold text-white mb-6">
            Not Software You Buy—A Community You Join
          </h3>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Individual institutions face inherent limitations—finite resources, concentrated expertise, isolated knowledge. Consultancies charge exorbitant fees to bring &quot;multi-bank experience&quot; to your door.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            <strong className="text-white">What if we democratized that experience?</strong> Share the non-competitive parts (methodology, frameworks, templates) while keeping your proprietary data and parameters private.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            When firms collaborate strategically, their combined capabilities create something far more powerful than the sum of their parts. Knowledge compounds. Best practices spread. The entire industry becomes more resilient.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start gap-4 sm:gap-8">
            <Link
              href="/skills-sharing"
              className="text-muted hover:text-secondary transition-colors text-sm inline-flex items-center gap-2"
            >
              Explore Why Share Skills &rarr;
            </Link>
            <Link
              href="/skills-sharing/how-it-works"
              className="text-muted hover:text-secondary transition-colors text-sm inline-flex items-center gap-2"
            >
              Explore How Skills Sharing Works &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Layer 5: The Solution - Four Innovations */}
      <section id="learn-more" className="py-24 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Solution
            </h2>
            <p className="text-secondary">
              Four innovations, 30 years of risk expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Context Management */}
            <Link
              href="/platform/context-management"
              className="group block bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)] hover:border-[rgb(60,60,60)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Context Management
              </h3>
              <p className="text-secondary text-sm mb-4">
                Risk Taxonomy + Context Graph for institutional memory
              </p>
              <span className="text-muted text-sm group-hover:text-secondary transition-colors">
                Explore &rarr;
              </span>
            </Link>

            {/* 2. Skills */}
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

            {/* 3. Patterns */}
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

            {/* 4. Goal Alignment */}
            <Link
              href="/platform/goal-alignment"
              className="group block bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)] hover:border-[rgb(60,60,60)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Goal Alignment
              </h3>
              <p className="text-secondary text-sm mb-4">
                AI agents aligned to your strategic objectives
              </p>
              <span className="text-muted text-sm group-hover:text-secondary transition-colors">
                Explore &rarr;
              </span>
            </Link>
          </div>

          {/* Innovation Progression */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Context Management → Skills → Patterns → Goal Alignment
            </h3>
            <p className="text-secondary text-sm max-w-2xl mx-auto">
              Context provides the foundation. Skills provide capabilities. Patterns orchestrate workflows. Goal Alignment ensures everything connects to strategic outcomes.
            </p>
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
