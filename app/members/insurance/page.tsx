import Navigation from '../../components/Navigation';
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
      <section className="pt-32 pb-20 px-6 circuit-pattern circuit-dots">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-risk mb-6 inline-block">For Insurance</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Risk Intelligence for Insurance
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Pre-built AI skills for underwriting, claims, reserving, and regulatory compliance. Designed for the unique challenges of insurance and reinsurance.
          </p>
        </div>
      </section>

      {/* Why Insurance Companies */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                Why Risk Agents for Insurance?
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Insurance risk is fundamentally about pricing uncertainty. Unlike banks, your core business is understanding and pricing risk—making AI-augmented analysis even more valuable.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Risk Agents provides skills built for insurance professionals: underwriting support, claims triage, reserve adequacy, and Solvency II compliance that speaks the language of actuaries and risk managers.
              </p>
              <p className="text-lg text-slate-300">
                Your underwriters and actuaries stay in control—AI provides analysis and pattern recognition, humans make the insurance decisions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-900/30">
              <h3 className="text-xl font-bold text-purple-400 mb-6">Insurance Benefits</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Underwriting acceleration</strong>—faster risk assessment with AI-assisted analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Claims intelligence</strong>—pattern recognition for fraud detection and triage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Reserving support</strong>—actuarial analysis assistance for better estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Solvency compliance</strong>—skills built with Solvency II requirements in mind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Reinsurance analysis</strong>—treaty assessment and optimal structure evaluation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance-Specific Use Cases */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Insurance-Specific Use Cases
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Skills designed for the challenges insurance risk teams face
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Underwriting Risk</h3>
              <p className="text-slate-400 text-sm">
                Risk assessment support, pricing analysis, exposure evaluation, accumulation monitoring, policy review assistance.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Claims Analysis</h3>
              <p className="text-slate-400 text-sm">
                Claims triage support, fraud pattern recognition, settlement estimation, litigation risk assessment.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Reserving Support</h3>
              <p className="text-slate-400 text-sm">
                IBNR analysis assistance, development triangle review, reserve adequacy assessment, actuarial methodology support.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Catastrophe Modelling</h3>
              <p className="text-slate-400 text-sm">
                Cat exposure analysis, scenario generation, PML estimation support, reinsurance adequacy assessment.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Regulatory Compliance</h3>
              <p className="text-slate-400 text-sm">
                Solvency II support, ORSA preparation, QRT generation assistance, regulatory change analysis.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Reinsurance Analysis</h3>
              <p className="text-slate-400 text-sm">
                Treaty structure evaluation, cession optimisation, counterparty assessment, renewal analysis support.
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
              Insurance companies typically engage with these risk domains from our skills library
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-900/30 text-center">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Underwriting Risk</h3>
              <p className="text-slate-400 text-sm">Pricing, selection, accumulation</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-900/30 text-center">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Reserve Risk</h3>
              <p className="text-slate-400 text-sm">Adequacy, IBNR, development</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-900/30 text-center">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">Market Risk</h3>
              <p className="text-slate-400 text-sm">Investment portfolio, ALM</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-900/30 text-center">
              <h3 className="text-lg font-bold text-amber-400 mb-2">Operational Risk</h3>
              <p className="text-slate-400 text-sm">Claims operations, systems, fraud</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-900/30 text-center">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Catastrophe Risk</h3>
              <p className="text-slate-400 text-sm">Nat cat, man-made, emerging</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-900/30 text-center">
              <h3 className="text-lg font-bold text-rose-400 mb-2">Credit Risk</h3>
              <p className="text-slate-400 text-sm">Reinsurance, counterparty</p>
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
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Request Early Access</h3>
                <p className="text-slate-400">
                  Join our early access list to be among the first insurers to explore the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Discovery Session</h3>
                <p className="text-slate-400">
                  We&apos;ll discuss your lines of business, risk function priorities, and how Risk Agents can help.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
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
            Join leading insurers discovering how AI can augment their risk and actuarial teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#early-access" className="btn-primary">
              Request Early Access
            </Link>
            <a
              href="mailto:gavin@risk-agents.com?subject=Insurance%20Membership%20Enquiry"
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
            <Link href="/members/investment-managers" className="btn-secondary">
              ← Investment Managers
            </Link>
            <Link href="/members/founding" className="btn-secondary">
              Founding Members →
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
