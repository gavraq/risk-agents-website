import Navigation from '../../components/Navigation';
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
      <section className="pt-32 pb-20 px-6 circuit-pattern circuit-dots">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-success mb-6 inline-block">For Investment Managers</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Risk Intelligence for Investment Professionals
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Pre-built AI skills for portfolio risk management, market analysis, and investment compliance. Designed for the unique demands of asset management.
          </p>
        </div>
      </section>

      {/* Why Investment Managers */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                Why Risk Agents for Investment Managers?
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Investment risk is different from banking risk. You need speed, flexibility, and deep market insight—not rigid banking frameworks retrofitted to asset management.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Risk Agents provides skills built for investment professionals: portfolio analytics, market risk decomposition, factor analysis, and compliance monitoring that understands investment mandates.
              </p>
              <p className="text-lg text-slate-300">
                Your portfolio managers and risk teams stay in control—AI provides analysis and insights, humans make the investment decisions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-2xl p-8 border border-emerald-900/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">Investment Manager Benefits</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Portfolio-centric view</strong>—skills designed around investment portfolios, not loan books</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Market-aware analysis</strong>—real-time factor decomposition and scenario analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Mandate compliance</strong>—investment guideline monitoring built in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Investor reporting</strong>—risk reporting that speaks your clients&apos; language</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Flexible deployment</strong>—works with your existing systems and data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment-Specific Use Cases */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Investment-Specific Use Cases
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Skills designed for the challenges investment risk teams face
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Portfolio Risk Analytics</h3>
              <p className="text-slate-400 text-sm">
                VaR decomposition, factor exposure analysis, concentration risk, correlation breakdown, tail risk assessment.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Factor Analysis</h3>
              <p className="text-slate-400 text-sm">
                Multi-factor attribution, style drift detection, benchmark decomposition, alpha/beta separation.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Stress Testing</h3>
              <p className="text-slate-400 text-sm">
                Historical scenario replay, hypothetical stress scenarios, reverse stress testing, sensitivity analysis.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Mandate Compliance</h3>
              <p className="text-slate-400 text-sm">
                Investment guideline monitoring, pre-trade compliance, breach detection, remediation tracking.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">💧</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Liquidity Risk</h3>
              <p className="text-slate-400 text-sm">
                Redemption scenario analysis, liquidity bucketing, market impact estimation, portfolio liquidation analysis.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📑</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Investor Reporting</h3>
              <p className="text-slate-400 text-sm">
                Risk report generation, performance attribution, regulatory filings, client-ready documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Risk Domains */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Relevant Risk Domains
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Investment managers typically engage with these risk domains from our skills library
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-900/30 text-center">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">Market Risk</h3>
              <p className="text-slate-400 text-sm">Equity, fixed income, derivatives, FX</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-900/30 text-center">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Credit Risk</h3>
              <p className="text-slate-400 text-sm">Counterparty, issuer, spread risk</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-900/30 text-center">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Liquidity Risk</h3>
              <p className="text-slate-400 text-sm">Portfolio, funding, redemption</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-900/30 text-center">
              <h3 className="text-lg font-bold text-amber-400 mb-2">Operational Risk</h3>
              <p className="text-slate-400 text-sm">Trade operations, custody, valuation</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-900/30 text-center">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Compliance</h3>
              <p className="text-slate-400 text-sm">Investment mandates, regulatory, ESG</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-900/30 text-center">
              <h3 className="text-lg font-bold text-rose-400 mb-2">Model Risk</h3>
              <p className="text-slate-400 text-sm">Pricing models, risk models, valuation</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              How to Join
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Getting started is straightforward
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Request Early Access</h3>
                <p className="text-slate-400">
                  Join our early access list to be among the first investment managers to explore the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Discovery Session</h3>
                <p className="text-slate-400">
                  We&apos;ll discuss your investment strategies, risk function priorities, and how Risk Agents can help.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Pilot Programme</h3>
                <p className="text-slate-400">
                  Start with a focused pilot on specific portfolios or use cases before broader rollout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-6">
            Ready to Explore?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join leading investment managers discovering how AI can enhance their risk capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#early-access" className="btn-primary">
              Request Early Access
            </Link>
            <a
              href="mailto:gavin@risk-agents.com?subject=Investment%20Manager%20Membership%20Enquiry"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>📧</span>
              Contact Us
            </a>
          </div>

          <p className="text-slate-500 text-sm mt-6">
            Interested in shaping the platform from the start?{' '}
            <Link href="/members/founding" className="text-amber-400 hover:text-amber-300 transition-colors">
              Learn about Founding Membership →
            </Link>
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/members/banks" className="btn-secondary">
              ← Banks
            </Link>
            <Link href="/members/insurance" className="btn-secondary">
              Insurance Companies →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 Risk Agents. Built by <a href="https://www.gavinslater.com" className="text-blue-400 hover:text-blue-300 transition-colors">Gavin Slater</a></p>
          <p className="mt-2">30 Years of Chief Risk Officer Expertise, Delivered by AI</p>
        </div>
      </footer>
    </div>
  );
}
