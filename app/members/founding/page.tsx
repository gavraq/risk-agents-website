import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Founding Members - Risk Agents',
  description: 'Join as a founding member to help shape the future of risk management skills sharing. Limited positions available.',
};

export default function FoundingMembers() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">Limited Positions</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Become a Founding Member
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Help shape the future of risk management. Join the first cohort of institutions building an industry-wide skills sharing platform.
          </p>
        </div>
      </section>

      {/* Why Founding Members Matter */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Founding Members?
              </h2>
              <p className="text-lg text-secondary mb-6">
                Building a community platform isn&apos;t a solo effort. The founding cohort will shape every aspect—from governance to the initial skill library to the platform features we prioritise.
              </p>
              <p className="text-lg text-secondary mb-6">
                This isn&apos;t about being early adopters of someone else&apos;s vision. It&apos;s about <strong className="text-white">co-creating the future</strong> of how risk teams share knowledge and leverage AI.
              </p>
              <p className="text-lg text-secondary">
                We&apos;re looking for institutions who see the opportunity and want to help build something that benefits the entire industry.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">Founding Member Benefits</h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Steering Committee seat</strong>—direct influence on platform direction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Early access</strong>—shape features before general release</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Founding member pricing</strong>—locked in for early supporters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Recognition</strong>—acknowledged as platform founders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Direct access</strong>—to the development team and roadmap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building Together */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What We&apos;re Building Together
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              The founding cohort will help define these foundational elements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Initial Skill Library</h3>
              <p className="text-muted text-sm">
                The first 50+ skills that form the foundation. What capabilities matter most? Which domains first?
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Governance Model</h3>
              <p className="text-muted text-sm">
                How do we review contributions? What are the IP rules? How do we ensure quality?
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Platform Features</h3>
              <p className="text-muted text-sm">
                What features do risk teams actually need? What integrations matter? How should it work?
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Security Standards</h3>
              <p className="text-muted text-sm">
                What security controls are required? How do we handle deployment options? What certifications?
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pricing Model</h3>
              <p className="text-muted text-sm">
                How should the platform be funded? What&apos;s fair for different sized institutions? How do contributors benefit?
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Roadmap Priorities</h3>
              <p className="text-muted text-sm">
                Where should we focus first? Credit risk? Operational risk? Regulatory reporting? You decide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Who We&apos;re Looking For
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Founding members are institutions who share our vision and want to help build it
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">Ideal Founding Members</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Believe in industry-wide knowledge sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Willing to contribute methodology (not data)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Can participate in governance discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Have mature risk management practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Interested in AI adoption for risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Can commit to pilot programme</span>
                </li>
              </ul>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">Institution Types</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span>Regional and mid-tier banks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span>Building societies and credit unions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span>Challenger banks and fintechs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span>Asset managers and insurers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span>Large institutions seeking innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span>Regulatory bodies (observer status)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              The Founding Member Process
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A structured approach to building the founding cohort
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">Expression of Interest</h3>
                <p className="text-muted">
                  Reach out to register your interest. We&apos;ll schedule an introductory call to discuss the opportunity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">Discovery Call</h3>
                <p className="text-muted">
                  30-minute conversation to understand your risk function, current challenges, and interest in the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">Founding Member Workshop</h3>
                <p className="text-muted">
                  Join other prospective founders to see the platform, discuss governance, and shape the initial direction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">Commitment & Onboarding</h3>
                <p className="text-muted">
                  Sign founding member agreement, join the steering committee, and begin platform pilot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]" id="join">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Express Your Interest
          </h2>
          <p className="text-lg text-secondary mb-8">
            We&apos;re targeting a founding cohort of 10-15 institutions. Spaces are limited.
          </p>

          <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)] max-w-xl mx-auto">
            <p className="text-secondary mb-6">
              To express interest in becoming a founding member, please reach out directly:
            </p>
            <a
              href="mailto:gavin@risk-agents.com?subject=Founding%20Member%20Interest"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
            <p className="text-muted text-sm mt-4">
              Or register for early access to stay informed about our launch
            </p>
            <Link href="/#early-access" className="text-secondary hover:text-white transition-colors text-sm">
              Join the Early Access List &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Founding Member Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-2">
                What&apos;s the time commitment?
              </h3>
              <p className="text-secondary">
                Expect 2-4 hours per month for steering committee participation, plus your team&apos;s time using and contributing to the platform. This is designed to fit alongside day jobs.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-2">
                What if we can&apos;t contribute skills immediately?
              </h3>
              <p className="text-secondary">
                That&apos;s fine—founding membership is about commitment to the vision, not immediate contribution. You can start by using the platform and providing feedback. Contributions can come later.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-2">
                How is founding member pricing different?
              </h3>
              <p className="text-secondary">
                Founding members lock in preferential rates and get recognition credits for their contributions. Exact pricing will be finalised with input from the founding cohort—you&apos;ll help shape it.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-2">
                Can competitors both be founding members?
              </h3>
              <p className="text-secondary">
                Yes—competition at the execution level doesn&apos;t prevent collaboration at the methodology level. This is how open source works: companies compete while sharing non-proprietary foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/members/insurance" className="btn-secondary">
              &larr; Insurance Companies
            </Link>
            <Link href="/members" className="btn-secondary">
              All Member Types &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
