import Navigation from '../../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Founding Members - Risk Agents',
  description: 'Join as a founding member to help shape the future of risk management skills sharing.',
};

export default function FoundingMembers() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern circuit-dots">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-warning mb-6 inline-block">Limited Positions</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Become a Founding Member
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Help shape the future of risk management. Join the first cohort of banks building an industry-wide skills sharing platform.
          </p>
        </div>
      </section>

      {/* Why Founding Members Matter */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                Why Founding Members?
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Building a community platform isn&apos;t a solo effort. The founding cohort will shape every aspect—from governance to the initial skill library to the platform features we prioritise.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                This isn&apos;t about being early adopters of someone else&apos;s vision. It&apos;s about <strong className="text-slate-200">co-creating the future</strong> of how risk teams share knowledge and leverage AI.
              </p>
              <p className="text-lg text-slate-300">
                We&apos;re looking for banks who see the opportunity and want to help build something that benefits the entire industry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 rounded-2xl p-8 border border-emerald-900/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">Founding Member Benefits</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Steering Committee seat</strong>—direct influence on platform direction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Early access</strong>—shape features before general release</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Founding member pricing</strong>—locked in for early supporters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Recognition</strong>—acknowledged as platform founders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">★</span>
                  <span><strong className="text-slate-200">Direct access</strong>—to the development team and roadmap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building Together */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              What We&apos;re Building Together
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The founding cohort will help define these foundational elements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Initial Skill Library</h3>
              <p className="text-slate-400 text-sm">
                The first 50+ skills that form the foundation. What capabilities matter most? Which domains first?
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Governance Model</h3>
              <p className="text-slate-400 text-sm">
                How do we review contributions? What are the IP rules? How do we ensure quality?
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Platform Features</h3>
              <p className="text-slate-400 text-sm">
                What features do risk teams actually need? What integrations matter? How should it work?
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Security Standards</h3>
              <p className="text-slate-400 text-sm">
                What security controls are required? How do we handle deployment options? What certifications?
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Pricing Model</h3>
              <p className="text-slate-400 text-sm">
                How should the platform be funded? What&apos;s fair for different sized institutions? How do contributors benefit?
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Roadmap Priorities</h3>
              <p className="text-slate-400 text-sm">
                Where should we focus first? Credit risk? Operational risk? Regulatory reporting? You decide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Who We&apos;re Looking For
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Founding members are banks who share our vision and want to help build it
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-emerald-900/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">Ideal Founding Members</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Believe in industry-wide knowledge sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Willing to contribute methodology (not data)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Can participate in governance discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Have mature risk management practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Interested in AI adoption for risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Can commit to pilot programme</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-400 mb-6">Institution Types</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Regional and mid-tier banks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Building societies and credit unions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Challenger banks and fintechs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Asset managers and insurers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Large banks seeking innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Regulatory bodies (observer status)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              The Founding Member Process
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A structured approach to building the founding cohort
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Expression of Interest</h3>
                <p className="text-slate-400">
                  Complete the form below to register your interest. We&apos;ll reach out to schedule an introductory call.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Discovery Call</h3>
                <p className="text-slate-400">
                  30-minute conversation to understand your risk function, current challenges, and interest in the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Founding Member Workshop</h3>
                <p className="text-slate-400">
                  Join other prospective founders to see the platform, discuss governance, and shape the initial direction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-slate-50 mb-2">Commitment & Onboarding</h3>
                <p className="text-slate-400">
                  Sign founding member agreement, join the steering committee, and begin platform pilot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900" id="join">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-6">
            Express Your Interest
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            We&apos;re targeting a founding cohort of 10-15 institutions. Spaces are limited.
          </p>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 max-w-xl mx-auto">
            <p className="text-slate-300 mb-6">
              To express interest in becoming a founding member, please reach out directly:
            </p>
            <a
              href="mailto:gavin@risk-agents.com?subject=Founding%20Member%20Interest"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>📧</span>
              Contact Us
            </a>
            <p className="text-slate-500 text-sm mt-4">
              Or register for early access to stay informed about our launch
            </p>
            <Link href="/#early-access" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              Join the Early Access List →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Founding Member Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                What&apos;s the time commitment?
              </h3>
              <p className="text-slate-300">
                Expect 2-4 hours per month for steering committee participation, plus your team&apos;s time using and contributing to the platform. This is designed to fit alongside day jobs.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                What if we can&apos;t contribute skills immediately?
              </h3>
              <p className="text-slate-300">
                That&apos;s fine—founding membership is about commitment to the vision, not immediate contribution. You can start by using the platform and providing feedback. Contributions can come later.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                How is founding member pricing different?
              </h3>
              <p className="text-slate-300">
                Founding members lock in preferential rates and get recognition credits for their contributions. Exact pricing will be finalised with input from the founding cohort—you&apos;ll help shape it.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                Can competitors both be founding members?
              </h3>
              <p className="text-slate-300">
                Yes—competition at the execution level doesn&apos;t prevent collaboration at the methodology level. This is how open source works: companies compete while sharing non-proprietary foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/skills-sharing/how-it-works" className="btn-secondary">
              ← How It Works
            </Link>
            <Link href="/platform" className="btn-secondary">
              Explore the Platform →
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
