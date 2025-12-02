import Navigation from '../../components/Navigation';
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
      <section className="pt-32 pb-20 px-6 circuit-pattern circuit-dots">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-success mb-6 inline-block">The Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            How Skills Sharing Works
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From contribution to curation to deployment—a virtuous cycle that benefits everyone.
          </p>
        </div>
      </section>

      {/* The Cycle */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              The Skills Sharing Cycle
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A continuous loop of contribution, improvement, and value creation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-emerald-900/30 h-full">
                <div className="absolute -top-4 left-8 bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4 mt-2">Contribute</h3>
                <p className="text-slate-300 mb-4">
                  Member banks share methodology, frameworks, and skills—not data or proprietary parameters.
                </p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">→</span>
                    <span>Submit skills through structured templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">→</span>
                    <span>Document methodology without exposing specifics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">→</span>
                    <span>AI-assisted extraction minimises time burden</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-900/30 h-full">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 mt-2">Curate</h3>
                <p className="text-slate-300 mb-4">
                  Community review and governance ensure quality, security, and regulatory alignment.
                </p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Peer review by domain experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Compliance and legal review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Version control and audit trails</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-900/30 h-full">
                <div className="absolute -top-4 left-8 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 mt-2">Deploy</h3>
                <p className="text-slate-300 mb-4">
                  Skills become available to all members, each applying their own data and parameters.
                </p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">→</span>
                    <span>Browse and select relevant skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">→</span>
                    <span>Configure with your own parameters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">→</span>
                    <span>Feedback loop improves the skill</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                Community Governance
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Skills sharing only works with trust. That&apos;s why we&apos;ve built governance into the foundation—not as an afterthought.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">🏛️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Steering Committee</h4>
                    <p className="text-slate-400 text-sm">Founding members shape strategy and standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Domain Working Groups</h4>
                    <p className="text-slate-400 text-sm">Experts review and approve skills in their area</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400">⚖️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Legal Framework</h4>
                    <p className="text-slate-400 text-sm">Clear IP rules and contribution agreements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400">🔍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Transparency</h4>
                    <p className="text-slate-400 text-sm">Open roadmap, public changelog, community input</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-6">Review Process</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold">1</div>
                  <div className="flex-1">
                    <div className="h-2 bg-emerald-600 rounded-full"></div>
                    <p className="text-slate-400 text-sm mt-1">Submission & Initial Review</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold">2</div>
                  <div className="flex-1">
                    <div className="h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-slate-400 text-sm mt-1">Domain Expert Review</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold">3</div>
                  <div className="flex-1">
                    <div className="h-2 bg-purple-600 rounded-full"></div>
                    <p className="text-slate-400 text-sm mt-1">Compliance & Legal Check</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold">4</div>
                  <div className="flex-1">
                    <div className="h-2 bg-amber-600 rounded-full"></div>
                    <p className="text-slate-400 text-sm mt-1">Community Testing</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">✓</div>
                  <div className="flex-1">
                    <div className="h-2 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"></div>
                    <p className="text-slate-400 text-sm mt-1">Published to Library</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Quality Assurance
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every skill in the library meets rigorous standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Documented</h3>
              <p className="text-slate-400 text-sm">
                Clear methodology, assumptions, and limitations
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Tested</h3>
              <p className="text-slate-400 text-sm">
                Validated against real-world scenarios
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Secure</h3>
              <p className="text-slate-400 text-sm">
                No proprietary data, no security risks
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Measured</h3>
              <p className="text-slate-400 text-sm">
                Usage metrics and success tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                What if a competitor sees our methodology?
              </h3>
              <p className="text-slate-300">
                Methodology isn&apos;t your competitive advantage—execution is. The framework for stress testing is standard; your calibrated parameters and how you act on results create differentiation. You share the &quot;how,&quot; keep the &quot;what.&quot;
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                Who owns the intellectual property?
              </h3>
              <p className="text-slate-300">
                Contributors retain rights to their original methodology. Shared skills are licensed for use by all members under clear terms. Improvements and variations follow established open-source-style licensing models.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                How do you prevent free-riders?
              </h3>
              <p className="text-slate-300">
                Membership requires contribution—either skills, feedback, or participation in governance. The founding member tier recognises those who contribute most. Engagement metrics are transparent.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                How do regulators view this?
              </h3>
              <p className="text-slate-300">
                Regulators actively encourage knowledge sharing—it raises industry standards. We&apos;re building relationships with regulatory bodies to ensure alignment. Better risk management everywhere is good for financial stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Founding members help shape the platform and get recognition for their contributions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/skills-sharing" className="btn-secondary">
              ← Back to Why Share?
            </Link>
            <Link href="/skills-sharing/founding-members" className="btn-primary">
              Become a Founding Member
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
