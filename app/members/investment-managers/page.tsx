import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Investment Managers - Risk Agents',
  description: 'AI-powered risk management skills designed for asset managers, hedge funds, and investment firms. Portfolio risk, market analysis, and investment compliance.',
};

export default function InvestmentManagers() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">For Investment Managers</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Risk Intelligence for Investment Professionals
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Pre-built AI skills for portfolio risk management, market analysis, and investment compliance. Designed for the unique demands of asset management.
          </p>
        </div>
      </section>

      {/* Platform Adaptation Notice */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[rgb(45,45,45)] rounded-lg p-6 border border-[rgb(60,60,60)]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgb(60,60,60)] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Seeking Founding Members</h3>
                <p className="text-secondary text-sm mb-3">
                  Our current baseline platform has been developed with a focus on banking risk management. While the core architecture—context management, skills, patterns, and goal alignment—applies equally to investment management, we are actively seeking <strong className="text-white">founding members from the asset management industry</strong> to help adapt and extend the platform for investment-specific use cases.
                </p>
                <p className="text-secondary text-sm">
                  Founding members will shape which skills we prioritise, contribute domain expertise, and benefit from early access and preferential terms.{' '}
                  <Link href="/members/founding" className="text-white hover:underline">
                    Learn more about Founding Membership &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Investment Managers */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Risk Agents for Investment Managers?
              </h2>
              <p className="text-lg text-secondary mb-6">
                Investment risk is different from banking risk. You need speed, flexibility, and deep market insight—not rigid banking frameworks retrofitted to asset management.
              </p>
              <p className="text-lg text-secondary mb-6">
                Risk Agents provides skills built for investment professionals: portfolio analytics, market risk decomposition, factor analysis, and compliance monitoring that understands investment mandates.
              </p>
              <p className="text-lg text-secondary">
                Your portfolio managers and risk teams stay in control—AI provides analysis and insights, humans make the investment decisions.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-8 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-6">Investment Manager Benefits</h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Portfolio-centric view</strong>—skills designed around investment portfolios, not loan books</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Market-aware analysis</strong>—real-time factor decomposition and scenario analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Mandate compliance</strong>—investment guideline monitoring built in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Investor reporting</strong>—risk reporting that speaks your clients&apos; language</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><strong className="text-white">Flexible deployment</strong>—works with your existing systems and data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment-Specific Use Cases */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Investment-Specific Use Cases
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Skills designed for the challenges investment risk teams face
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Portfolio Risk Analytics</h3>
              <p className="text-muted text-sm">
                VaR decomposition, factor exposure analysis, concentration risk, correlation breakdown, tail risk assessment.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Factor Analysis</h3>
              <p className="text-muted text-sm">
                Multi-factor attribution, style drift detection, benchmark decomposition, alpha/beta separation.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Stress Testing</h3>
              <p className="text-muted text-sm">
                Historical scenario replay, hypothetical stress scenarios, reverse stress testing, sensitivity analysis.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mandate Compliance</h3>
              <p className="text-muted text-sm">
                Investment guideline monitoring, pre-trade compliance, breach detection, remediation tracking.
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
                Redemption scenario analysis, liquidity bucketing, market impact estimation, portfolio liquidation analysis.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Investor Reporting</h3>
              <p className="text-muted text-sm">
                Risk report generation, performance attribution, regulatory filings, client-ready documentation.
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
              Investment managers typically engage with these risk domains from our skills library
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Market Risk</h3>
              <p className="text-muted text-sm">Equity, fixed income, derivatives, FX</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Credit Risk</h3>
              <p className="text-muted text-sm">Counterparty, issuer, spread risk</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Liquidity Risk</h3>
              <p className="text-muted text-sm">Portfolio, funding, redemption</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Operational Risk</h3>
              <p className="text-muted text-sm">Trade operations, custody, valuation</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Compliance</h3>
              <p className="text-muted text-sm">Investment mandates, regulatory, ESG</p>
            </div>
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <h3 className="text-lg font-bold text-white mb-2">Model Risk</h3>
              <p className="text-muted text-sm">Pricing models, risk models, valuation</p>
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
                  Join our early access list to be among the first investment managers to explore the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">Discovery Session</h3>
                <p className="text-muted">
                  We&apos;ll discuss your investment strategies, risk function priorities, and how Risk Agents can help.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">Pilot Programme</h3>
                <p className="text-muted">
                  Start with a focused pilot on specific portfolios or use cases before broader rollout.
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
            Join leading investment managers discovering how AI can enhance their risk capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#early-access" className="btn-primary">
              Request Early Access
            </Link>
            <a
              href="mailto:gavin@risk-agents.com?subject=Investment%20Manager%20Membership%20Enquiry"
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
            <Link href="/members/banks" className="btn-secondary">
              &larr; Banks
            </Link>
            <Link href="/members/insurance" className="btn-secondary">
              Insurance Companies &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
