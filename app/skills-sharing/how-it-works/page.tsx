import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'How Skills Sharing Works - Risk Agents',
  description: 'Learn how risk management skills are contributed, curated, and shared across the community.',
};

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">The Process</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            How Skills Sharing Works
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            From contribution to curation to deployment—a virtuous cycle that benefits everyone.
          </p>
        </div>
      </section>

      {/* The Cycle */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              The Skills Sharing Cycle
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              A continuous loop of contribution, improvement, and value creation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)] h-full">
                <div className="absolute -top-4 left-8 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-xl font-bold text-white mb-4 mt-2">Contribute</h3>
                <p className="text-secondary mb-4">
                  Member banks share methodology, frameworks, and skills—not data or proprietary parameters.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span>Submit skills through structured templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span>Document methodology without exposing specifics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span>AI-assisted extraction minimises time burden</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)] h-full">
                <div className="absolute -top-4 left-8 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-xl font-bold text-white mb-4 mt-2">Curate</h3>
                <p className="text-secondary mb-4">
                  Community review and governance ensure quality, security, and regulatory alignment.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span>Peer review by domain experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span>Compliance and legal review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span>Version control and audit trails</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)] h-full">
                <div className="absolute -top-4 left-8 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <h3 className="text-xl font-bold text-white mb-4 mt-2">Deploy</h3>
                <p className="text-secondary mb-4">
                  Skills become available to all members, each applying their own data and parameters.
                </p>
                <ul className="space-y-2 text-muted text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span>Browse and select relevant skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span>Configure with your own parameters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">→</span>
                    <span>Feedback loop improves the skill</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Community Governance
              </h2>
              <p className="text-lg text-secondary mb-6">
                Skills sharing only works with trust. That&apos;s why we&apos;ve built governance into the foundation—not as an afterthought.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Steering Committee</h4>
                    <p className="text-muted text-sm">Founding members shape strategy and standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Domain Working Groups</h4>
                    <p className="text-muted text-sm">Experts review and approve skills in their area</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Legal Framework</h4>
                    <p className="text-muted text-sm">Clear IP rules and contribution agreements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Transparency</h4>
                    <p className="text-muted text-sm">Open roadmap, public changelog, community input</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">Review Process</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold">1</div>
                  <div className="flex-1">
                    <div className="h-2 bg-white rounded-full"></div>
                    <p className="text-muted text-sm mt-1">Submission & Initial Review</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold">2</div>
                  <div className="flex-1">
                    <div className="h-2 bg-[rgb(180,180,180)] rounded-full"></div>
                    <p className="text-muted text-sm mt-1">Domain Expert Review</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold">3</div>
                  <div className="flex-1">
                    <div className="h-2 bg-[rgb(140,140,140)] rounded-full"></div>
                    <p className="text-muted text-sm mt-1">Compliance & Legal Check</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold">4</div>
                  <div className="flex-1">
                    <div className="h-2 bg-[rgb(100,100,100)] rounded-full"></div>
                    <p className="text-muted text-sm mt-1">Community Testing</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold">✓</div>
                  <div className="flex-1">
                    <div className="h-2 bg-gradient-to-r from-white to-[rgb(180,180,180)] rounded-full"></div>
                    <p className="text-muted text-sm mt-1">Published to Library</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quality Assurance
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Every skill in the library meets rigorous standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Documented</h3>
              <p className="text-muted text-sm">
                Clear methodology, assumptions, and limitations
              </p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tested</h3>
              <p className="text-muted text-sm">
                Validated against real-world scenarios
              </p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Secure</h3>
              <p className="text-muted text-sm">
                No proprietary data, no security risks
              </p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="mb-3">
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Measured</h3>
              <p className="text-muted text-sm">
                Usage metrics and success tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-2">
                What if a competitor sees our methodology?
              </h3>
              <p className="text-secondary">
                Methodology isn&apos;t your competitive advantage—execution is. The framework for stress testing is standard; your calibrated parameters and how you act on results create differentiation. You share the &quot;how,&quot; keep the &quot;what.&quot;
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-2">
                Who owns the intellectual property?
              </h3>
              <p className="text-secondary">
                Contributors retain rights to their original methodology. Shared skills are licensed for use by all members under clear terms. Improvements and variations follow established open-source-style licensing models.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-2">
                How do you prevent free-riders?
              </h3>
              <p className="text-secondary">
                Membership requires contribution—either skills, feedback, or participation in governance. The founding member tier recognises those who contribute most. Engagement metrics are transparent.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-2">
                How do regulators view this?
              </h3>
              <p className="text-secondary">
                Regulators actively encourage knowledge sharing—it raises industry standards. We&apos;re building relationships with regulatory bodies to ensure alignment. Better risk management everywhere is good for financial stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Founding members help shape the platform and get recognition for their contributions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/skills-sharing" className="btn-secondary">
              &larr; Back to Why Share?
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
