import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Skills Sharing - Risk Agents',
  description: 'Share risk management best practices across the industry. Not software you buy—a community you join.',
};

export default function SkillsSharing() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">A New Model</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Why Share?
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Risk managers want to share best practices—they just lack time.
            <br />
            <span className="text-muted">What if we could change that?</span>
          </p>
        </div>
      </section>

      {/* The Problem with Current Model */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                The Consultancy Tax
              </h2>
              <p className="text-lg text-secondary mb-6">
                When banks need &quot;best practices,&quot; they hire consultancies like McKinsey, Accenture, or the Big 4. These firms charge premium fees largely because they&apos;ve worked with multiple banks and can bring that &quot;cross-industry experience.&quot;
              </p>
              <p className="text-lg text-secondary mb-6">
                But here&apos;s the problem: <strong className="text-white">that knowledge walks out the door when the engagement ends.</strong> And you&apos;ve just paid to train their junior consultants on your business.
              </p>
              <p className="text-lg text-secondary">
                Six months later, you&apos;re paying again—often to different consultants who need to learn everything from scratch.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">The Hidden Costs</h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">£</span>
                  <span><strong className="text-white">£1,500-2,500/day</strong> for &quot;multi-bank experience&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span><strong className="text-white">2-4 weeks</strong> onboarding before they&apos;re productive</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span><strong className="text-white">Knowledge walks out</strong> when engagement ends</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span><strong className="text-white">Repeat the cycle</strong> for every new project</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Story */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Risk Managers Want to Share
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-3xl mx-auto">
            The perception that banks don&apos;t share is wrong. The reality is they <strong className="text-white">lack time, not willingness</strong>. Every CRO we&apos;ve spoken to would love to learn from peers and contribute their own insights—if only it didn&apos;t require endless meetings, conferences, and document exchanges.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Peer Networks Exist</h3>
              <p className="text-muted text-sm">
                CRO forums, GARP events, industry working groups—risk professionals actively seek peer connections.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Time Is the Barrier</h3>
              <p className="text-muted text-sm">
                Documenting and sharing takes time that risk teams simply don&apos;t have—they&apos;re too busy firefighting.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Proprietary vs Generic</h3>
              <p className="text-muted text-sm">
                Most methodology is generic—the &quot;secret sauce&quot; is in your specific parameters, not the framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Shared vs What Stays Private */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Gets Shared vs What Stays Yours
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              The line is clear: share the &quot;how,&quot; keep the &quot;what&quot;
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Shared */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Shared (Non-Proprietary)
              </h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Methodology frameworks</strong>—how to approach credit analysis, stress testing, etc.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Regulatory interpretations</strong>—how to comply with Basel, IFRS, FRTB</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Data quality rules</strong>—validation logic, completeness checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Report templates</strong>—structures for board packs, regulatory submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Integration patterns</strong>—how to connect to common systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Skills & Patterns</strong>—reusable AI capabilities and workflows</span>
                </li>
              </ul>
            </div>

            {/* Private */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Yours (Proprietary)
              </h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Calibrated model parameters</strong>—your specific PD/LGD values</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Thresholds & limits</strong>—your risk appetite translated to numbers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Client data & positions</strong>—all your transactional data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Risk appetite framework</strong>—your strategic risk decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Competitive intelligence</strong>—your market positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span><strong className="text-white">Your organizational context</strong>—structure, policies, people</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is Different */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why This Is Different
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Not software you buy—a community you join
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Network Effects</h3>
              <p className="text-muted text-sm">
                More banks participating = better skills for everyone. The platform improves as the community grows.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Knowledge Compounds</h3>
              <p className="text-muted text-sm">
                Unlike consultants who leave, shared skills stay and improve. Institutional memory that grows.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Levels the Field</h3>
              <p className="text-muted text-sm">
                Smaller banks get access to capabilities only large institutions could previously afford.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Industry Resilience</h3>
              <p className="text-muted text-sm">
                Better risk management across the industry benefits everyone—including regulators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Explore how skills sharing works in practice, or join as a founding member to help shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/skills-sharing/how-it-works" className="btn-secondary">
              How It Works
            </Link>
            <Link href="/members/founding" className="btn-primary">
              Become a Founding Member
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
