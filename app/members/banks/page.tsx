import Navigation from '../../components/Navigation';
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
      <section className="pt-32 pb-20 px-6 circuit-pattern circuit-dots">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-ai mb-6 inline-block">For Banks</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Risk Management for Modern Banking
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Pre-built AI skills designed specifically for banking risk functions. From credit decisioning to regulatory reporting, accelerate your risk capabilities.
          </p>
        </div>
      </section>

      {/* Why Banks */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                Why Risk Agents for Banks?
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Banking risk management is uniquely complex—credit, market, operational, liquidity, and compliance all intertwined. Traditional solutions force you to build everything from scratch.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Risk Agents gives you pre-built, industry-tested skills that your team can deploy immediately. Skills that encode decades of risk expertise, continuously updated as regulations evolve.
              </p>
              <p className="text-lg text-slate-300">
                Your risk professionals stay in control—AI augments their judgement, it doesn&apos;t replace it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-900/30">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Banking Benefits</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Faster deployment</strong>—weeks not months to production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Regulatory alignment</strong>—skills built with Basel, IFRS 9, and local requirements in mind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Model risk managed</strong>—transparent methodology, auditable decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Secure deployment</strong>—runs in your environment, your data stays yours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Continuous evolution</strong>—skills improve with industry contributions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bank-Specific Use Cases */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Bank-Specific Use Cases
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Skills designed for the challenges banking risk teams face every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Credit Risk Assessment</h3>
              <p className="text-slate-400 text-sm">
                PD/LGD/EAD modelling support, credit memo analysis, counterparty risk assessment, portfolio concentration analysis.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Market Risk Analysis</h3>
              <p className="text-slate-400 text-sm">
                VaR methodology support, stress testing scenarios, limit monitoring, P&L attribution analysis.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Operational Risk</h3>
              <p className="text-slate-400 text-sm">
                RCSA support, incident analysis, control effectiveness assessment, loss event categorisation.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">💧</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Liquidity Risk</h3>
              <p className="text-slate-400 text-sm">
                Cash flow forecasting support, LCR/NSFR analysis, stress scenario generation, funding gap analysis.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Regulatory Reporting</h3>
              <p className="text-slate-400 text-sm">
                Report generation support, data quality checks, regulatory change impact analysis, submission preparation.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Model Risk Management</h3>
              <p className="text-slate-400 text-sm">
                Model validation support, documentation review, performance monitoring, inventory management.
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
              Banking institutions typically engage with these risk domains from our skills library
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-900/30 text-center">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Credit Risk</h3>
              <p className="text-slate-400 text-sm">Lending, counterparty, concentration</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-900/30 text-center">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">Market Risk</h3>
              <p className="text-slate-400 text-sm">Trading book, interest rate, FX</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-900/30 text-center">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Operational Risk</h3>
              <p className="text-slate-400 text-sm">Process, people, systems, external</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-900/30 text-center">
              <h3 className="text-lg font-bold text-amber-400 mb-2">Liquidity Risk</h3>
              <p className="text-slate-400 text-sm">Funding, market, contingency</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-900/30 text-center">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Regulatory Compliance</h3>
              <p className="text-slate-400 text-sm">Basel, local regulations, reporting</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-900/30 text-center">
              <h3 className="text-lg font-bold text-rose-400 mb-2">Model Risk</h3>
              <p className="text-slate-400 text-sm">Validation, monitoring, governance</p>
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
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Request Early Access</h3>
                <p className="text-slate-400">
                  Join our early access list to be among the first banks to explore the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Discovery Session</h3>
                <p className="text-slate-400">
                  We&apos;ll discuss your risk function&apos;s priorities and show how Risk Agents can help.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Pilot Programme</h3>
                <p className="text-slate-400">
                  Start with a focused pilot on specific use cases before broader rollout.
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
            Join leading banks discovering how AI can augment their risk teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#early-access" className="btn-primary">
              Request Early Access
            </Link>
            <a
              href="mailto:gavin@risk-agents.com?subject=Banking%20Membership%20Enquiry"
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
            <Link href="/members" className="btn-secondary">
              ← All Member Types
            </Link>
            <Link href="/members/investment-managers" className="btn-secondary">
              Investment Managers →
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
