import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Banks - Risk Agents',
  description: 'AI-powered risk management skills designed specifically for banking institutions. Credit risk, market risk, operational risk, and regulatory compliance.',
};

export default function Banks() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">For Banks</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Risk Management for Modern Banking
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Pre-built AI skills designed specifically for banking risk functions. From credit decisioning to regulatory reporting, accelerate your risk capabilities.
          </p>
        </div>
      </section>

      {/* Why Banks */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Risk Agents for Banks?
              </h2>
              <p className="text-lg text-secondary mb-6">
                Banking risk management is uniquely complex—credit, market, operational, liquidity, and compliance all intertwined. Traditional solutions force you to build everything from scratch.
              </p>
              <p className="text-lg text-secondary mb-6">
                Risk Agents gives you pre-built, industry-tested skills that your team can deploy immediately. Skills that encode decades of risk expertise, continuously updated as regulations evolve.
              </p>
              <p className="text-lg text-secondary">
                Your risk professionals stay in control—AI augments their judgement, it doesn&apos;t replace it.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">Banking Benefits</h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Faster deployment</strong>—weeks not months to production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Regulatory alignment</strong>—skills built with Basel, IFRS 9, and local requirements in mind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Model risk managed</strong>—transparent methodology, auditable decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Secure deployment</strong>—runs in your environment, your data stays yours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Continuous evolution</strong>—skills improve with industry contributions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bank-Specific Use Cases */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Bank-Specific Use Cases
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Skills designed for the challenges banking risk teams face every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Credit Risk Assessment</h3>
              <p className="text-muted text-sm">
                PD/LGD/EAD modelling support, credit memo analysis, counterparty risk assessment, portfolio concentration analysis.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Market Risk Analysis</h3>
              <p className="text-muted text-sm">
                VaR methodology support, stress testing scenarios, limit monitoring, P&L attribution analysis.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Operational Risk</h3>
              <p className="text-muted text-sm">
                RCSA support, incident analysis, control effectiveness assessment, loss event categorisation.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Liquidity Risk</h3>
              <p className="text-muted text-sm">
                Cash flow forecasting support, LCR/NSFR analysis, stress scenario generation, funding gap analysis.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Regulatory Reporting</h3>
              <p className="text-muted text-sm">
                Report generation support, data quality checks, regulatory change impact analysis, submission preparation.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Model Risk Management</h3>
              <p className="text-muted text-sm">
                Model validation support, documentation review, performance monitoring, inventory management.
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
              Banking institutions typically engage with these risk domains from our skills library
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Credit Risk</h3>
              <p className="text-muted text-sm">Lending, counterparty, concentration</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Market Risk</h3>
              <p className="text-muted text-sm">Trading book, interest rate, FX</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Operational Risk</h3>
              <p className="text-muted text-sm">Process, people, systems, external</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Liquidity Risk</h3>
              <p className="text-muted text-sm">Funding, market, contingency</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Regulatory Compliance</h3>
              <p className="text-muted text-sm">Basel, local regulations, reporting</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Model Risk</h3>
              <p className="text-muted text-sm">Validation, monitoring, governance</p>
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
                  Join our early access list to be among the first banks to explore the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">Discovery Session</h3>
                <p className="text-muted">
                  We&apos;ll discuss your risk function&apos;s priorities and show how Risk Agents can help.
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
            Join leading banks discovering how AI can augment their risk teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#early-access" className="btn-primary">
              Request Early Access
            </Link>
            <a
              href="mailto:gavin@risk-agents.com?subject=Banking%20Membership%20Enquiry"
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
            <Link href="/members" className="btn-secondary">
              &larr; All Member Types
            </Link>
            <Link href="/members/investment-managers" className="btn-secondary">
              Investment Managers &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
