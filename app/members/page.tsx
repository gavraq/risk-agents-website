import Navigation from '../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Membership - Risk Agents',
  description: 'Join Risk Agents to access industry-leading AI-powered risk management skills and collaborative knowledge sharing.',
};

export default function Members() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern circuit-dots">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-ai mb-6 inline-block">Membership</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Join the Risk Management Revolution
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access pre-built AI agents, share risk expertise across the industry, and transform how your organisation manages risk.
          </p>
        </div>
      </section>

      {/* What Membership Means */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                What Membership Means
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Risk Agents membership isn&apos;t just software access—it&apos;s joining a community of risk professionals building the future of risk management together.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Members get access to our library of AI-powered skills, can contribute their own methodologies, and benefit from the collective expertise of leading financial institutions.
              </p>
              <p className="text-lg text-slate-300">
                Whether you&apos;re a bank, investment manager, or insurance company, there&apos;s a place for you in our growing community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-900/30">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Core Benefits</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Access 100+ Skills</strong>—pre-built AI agents across 9 risk domains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Human-in-the-Loop</strong>—AI augments your team, never replaces judgement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Industry Collaboration</strong>—learn from and contribute to shared expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Continuous Updates</strong>—skills evolve with regulatory changes and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Secure Deployment</strong>—your data never trains the model, stays in your environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Path */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Find Your Path
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We serve different segments of the financial services industry—each with tailored solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/members/banks" className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-600/50 transition-all duration-300">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-blue-400 transition-colors">Banks</h3>
              <p className="text-slate-400 mb-4">
                Credit risk, market risk, operational risk, regulatory compliance—tailored for banking institutions.
              </p>
              <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                Explore Banking Solutions →
              </span>
            </Link>

            <Link href="/members/investment-managers" className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-emerald-600/50 transition-all duration-300">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-emerald-400 transition-colors">Investment Managers</h3>
              <p className="text-slate-400 mb-4">
                Portfolio risk, market analysis, investment compliance—designed for asset managers and funds.
              </p>
              <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                Explore Investment Solutions →
              </span>
            </Link>

            <Link href="/members/insurance" className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-purple-600/50 transition-all duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-purple-400 transition-colors">Insurance Companies</h3>
              <p className="text-slate-400 mb-4">
                Underwriting risk, claims analysis, reserving—specific to insurance and reinsurance operations.
              </p>
              <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                Explore Insurance Solutions →
              </span>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link href="/members/founding" className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-2xl px-8 py-6 border border-amber-700/50 hover:border-amber-500/50 transition-all duration-300">
              <span className="text-3xl">⭐</span>
              <div className="text-left">
                <h3 className="text-lg font-bold text-amber-400 group-hover:text-amber-300 transition-colors">Founding Members</h3>
                <p className="text-slate-400 text-sm">Shape the platform from day one. Limited positions available.</p>
              </div>
              <span className="text-amber-400 group-hover:text-amber-300 transition-colors">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How Membership Works */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              How Membership Works
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Simple, transparent, designed for enterprise needs
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Choose Your Path</h3>
                <p className="text-slate-400">
                  Select the membership tier that fits your organisation—whether you&apos;re a founding member shaping the platform or joining our growing community.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Get Access</h3>
                <p className="text-slate-400">
                  Immediate access to our library of AI skills. Deploy in your environment with your security controls. Your data stays yours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Use & Contribute</h3>
                <p className="text-slate-400">
                  Use pre-built skills immediately. Optionally contribute your own methodologies to earn credits and help the community grow.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Evolve Together</h3>
                <p className="text-slate-400">
                  Skills continuously improve through community contributions. Stay current with regulatory changes automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-6">
            Ready to Transform Risk Management?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join the institutions already exploring how AI can augment their risk teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#early-access" className="btn-primary">
              Request Early Access
            </Link>
            <a
              href="mailto:gavin@risk-agents.com?subject=Membership%20Enquiry"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>📧</span>
              Contact Us
            </a>
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
