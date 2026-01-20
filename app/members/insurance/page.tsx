import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Insurance Companies - Risk Agents',
  description: 'AI-powered risk management skills designed for insurance and reinsurance companies. Underwriting risk, claims analysis, reserving, and regulatory compliance.',
};

export default function Insurance() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">For Insurance</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Risk Intelligence for Insurance
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Pre-built AI skills for underwriting, claims, reserving, and regulatory compliance. Designed for the unique challenges of insurance and reinsurance.
          </p>
        </div>
      </section>

      {/* Why Insurance Companies */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Risk Agents for Insurance?
              </h2>
              <p className="text-lg text-secondary mb-6">
                Insurance risk is fundamentally about pricing uncertainty. Unlike banks, your core business is understanding and pricing risk—making AI-augmented analysis even more valuable.
              </p>
              <p className="text-lg text-secondary mb-6">
                Risk Agents provides skills built for insurance professionals: underwriting support, claims triage, reserve adequacy, and Solvency II compliance that speaks the language of actuaries and risk managers.
              </p>
              <p className="text-lg text-secondary">
                Your underwriters and actuaries stay in control—AI provides analysis and pattern recognition, humans make the insurance decisions.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">Insurance Benefits</h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Underwriting acceleration</strong>—faster risk assessment with AI-assisted analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Claims intelligence</strong>—pattern recognition for fraud detection and triage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Reserving support</strong>—actuarial analysis assistance for better estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Solvency compliance</strong>—skills built with Solvency II requirements in mind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Reinsurance analysis</strong>—treaty assessment and optimal structure evaluation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance-Specific Use Cases */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Insurance-Specific Use Cases
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Skills designed for the challenges insurance risk teams face
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Underwriting Risk</h3>
              <p className="text-muted text-sm">
                Risk assessment support, pricing analysis, exposure evaluation, accumulation monitoring, policy review assistance.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Claims Analysis</h3>
              <p className="text-muted text-sm">
                Claims triage support, fraud pattern recognition, settlement estimation, litigation risk assessment.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Reserving Support</h3>
              <p className="text-muted text-sm">
                IBNR analysis assistance, development triangle review, reserve adequacy assessment, actuarial methodology support.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Catastrophe Modelling</h3>
              <p className="text-muted text-sm">
                Cat exposure analysis, scenario generation, PML estimation support, reinsurance adequacy assessment.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Regulatory Compliance</h3>
              <p className="text-muted text-sm">
                Solvency II support, ORSA preparation, QRT generation assistance, regulatory change analysis.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Reinsurance Analysis</h3>
              <p className="text-muted text-sm">
                Treaty structure evaluation, cession optimisation, counterparty assessment, renewal analysis support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Risk Domains */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Relevant Risk Domains
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Insurance companies typically engage with these risk domains from our skills library
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Underwriting Risk</h3>
              <p className="text-muted text-sm">Pricing, selection, accumulation</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Reserve Risk</h3>
              <p className="text-muted text-sm">Adequacy, IBNR, development</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Market Risk</h3>
              <p className="text-muted text-sm">Investment portfolio, ALM</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Operational Risk</h3>
              <p className="text-muted text-sm">Claims operations, systems, fraud</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Catastrophe Risk</h3>
              <p className="text-muted text-sm">Nat cat, man-made, emerging</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Credit Risk</h3>
              <p className="text-muted text-sm">Reinsurance, counterparty</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How to Join
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Getting started is straightforward
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">Request Early Access</h3>
                <p className="text-muted">
                  Join our early access list to be among the first insurers to explore the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">Discovery Session</h3>
                <p className="text-muted">
                  We&apos;ll discuss your lines of business, risk function priorities, and how Risk Agents can help.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">Pilot Programme</h3>
                <p className="text-muted">
                  Start with a focused pilot on specific use cases before broader rollout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Explore?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Join leading insurers discovering how AI can augment their risk and actuarial teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#early-access" className="btn-primary">
              Request Early Access
            </Link>
            <a
              href="mailto:gavin@risk-agents.com?subject=Insurance%20Membership%20Enquiry"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </a>
          </div>

          <p className="text-muted text-sm mt-6">
            Interested in shaping the platform from the start?{' '}
            <Link href="/members/founding" className="text-secondary hover:text-white transition-colors">
              Learn about Founding Membership &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/members/investment-managers" className="btn-secondary">
              &larr; Investment Managers
            </Link>
            <Link href="/members/founding" className="btn-secondary">
              Founding Members &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
