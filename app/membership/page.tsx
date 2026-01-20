import Navigation from '../components/Navigation';
import MembershipForm from '../components/MembershipForm';
import Link from 'next/link';

export const metadata = {
  title: 'Membership & Pricing - Risk Agents',
  description: 'Join Risk Agents: Choose from Founding Member, Member, or Enterprise tiers. Access AI-powered risk management skills built by the industry, for the industry.',
};

export default function Membership() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge mb-6 inline-block">Membership</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Join the Risk Management Revolution
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Three tiers designed for different stages of your AI journey.
            All members access the same industry-leading skills library.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Founding Member Tier */}
            <div className="relative bg-gradient-to-b from-amber-900/20 to-slate-900 rounded-2xl p-8 border-2 border-amber-500/50">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  Limited Spots
                </span>
              </div>
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-amber-400 mb-2">Founding Member</h3>
                <p className="text-slate-400 text-sm mb-4">Shape the platform&apos;s future</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-50">£10,000</span>
                  <span className="text-slate-400">/year</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">★</span>
                  <span className="text-slate-300">Steering Committee seat</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">★</span>
                  <span className="text-slate-300">Full skills library access</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">★</span>
                  <span className="text-slate-300">Priority feature requests</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">★</span>
                  <span className="text-slate-300">Direct access to dev team</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">★</span>
                  <span className="text-slate-300">Rate locked for life</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">★</span>
                  <span className="text-slate-300">Founder recognition</span>
                </div>
              </div>

              <Link
                href="/members/founding#join"
                className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 py-3 rounded-lg font-bold transition-colors"
              >
                Become a Founder
              </Link>
              <p className="text-amber-400/70 text-xs text-center mt-3">
                Only 10-15 positions available
              </p>
            </div>

            {/* Member Tier */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Member</h3>
                <p className="text-slate-400 text-sm mb-4">Full platform access</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-50">£20,000</span>
                  <span className="text-slate-400">/year</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-slate-300">Full skills library access</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-slate-300">Unlimited pattern usage</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-slate-300">Community contributions</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-slate-300">Standard support</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-slate-300">Cloud deployment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-slate-300">Regular updates</span>
                </div>
              </div>

              <a
                href="#register"
                className="block w-full text-center btn-primary py-3"
              >
                Register Interest
              </a>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Enterprise</h3>
                <p className="text-slate-400 text-sm mb-4">Custom solutions</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-50">Custom</span>
                </div>
                <p className="text-slate-500 text-sm mt-1">Tailored to your needs</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">◆</span>
                  <span className="text-slate-300">Everything in Member</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">◆</span>
                  <span className="text-slate-300">Custom skill development</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">◆</span>
                  <span className="text-slate-300">Dedicated support team</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">◆</span>
                  <span className="text-slate-300">On-premise deployment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">◆</span>
                  <span className="text-slate-300">SLA guarantees</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">◆</span>
                  <span className="text-slate-300">Integration assistance</span>
                </div>
              </div>

              <a
                href="mailto:gavin@risk-agents.com?subject=Enterprise%20Inquiry"
                className="block w-full text-center btn-secondary py-3"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - Detailed Breakdown */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              What Every Member Gets
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              All membership tiers include access to our core platform capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Skills Library</h3>
              <p className="text-slate-400 text-sm">
                Access 50+ industry-developed risk management skills across all domains.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Pattern Library</h3>
              <p className="text-slate-400 text-sm">
                Reusable workflows and templates that combine skills for common tasks.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Community</h3>
              <p className="text-slate-400 text-sm">
                Connect with risk professionals from banks, insurers, and asset managers.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Security First</h3>
              <p className="text-slate-400 text-sm">
                Enterprise-grade security with audit trails and compliance controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Compare Membership Tiers
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-400 font-normal">Feature</th>
                  <th className="text-center py-4 px-4 text-amber-400 font-bold">Founding</th>
                  <th className="text-center py-4 px-4 text-blue-400 font-bold">Member</th>
                  <th className="text-center py-4 px-4 text-purple-400 font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Skills Library Access</td>
                  <td className="text-center py-4 px-4"><span className="text-amber-400">Full</span></td>
                  <td className="text-center py-4 px-4"><span className="text-blue-400">Full</span></td>
                  <td className="text-center py-4 px-4"><span className="text-purple-400">Full + Custom</span></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Pattern Usage</td>
                  <td className="text-center py-4 px-4"><span className="text-amber-400">Unlimited</span></td>
                  <td className="text-center py-4 px-4"><span className="text-blue-400">Unlimited</span></td>
                  <td className="text-center py-4 px-4"><span className="text-purple-400">Unlimited</span></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Support Level</td>
                  <td className="text-center py-4 px-4"><span className="text-amber-400">Priority</span></td>
                  <td className="text-center py-4 px-4"><span className="text-blue-400">Standard</span></td>
                  <td className="text-center py-4 px-4"><span className="text-purple-400">Dedicated</span></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Deployment Options</td>
                  <td className="text-center py-4 px-4"><span className="text-amber-400">Cloud</span></td>
                  <td className="text-center py-4 px-4"><span className="text-blue-400">Cloud</span></td>
                  <td className="text-center py-4 px-4"><span className="text-purple-400">Cloud + On-Prem</span></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Steering Committee</td>
                  <td className="text-center py-4 px-4"><span className="text-amber-400">✓</span></td>
                  <td className="text-center py-4 px-4"><span className="text-slate-600">—</span></td>
                  <td className="text-center py-4 px-4"><span className="text-slate-600">—</span></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Custom Skills Development</td>
                  <td className="text-center py-4 px-4"><span className="text-slate-600">—</span></td>
                  <td className="text-center py-4 px-4"><span className="text-slate-600">—</span></td>
                  <td className="text-center py-4 px-4"><span className="text-purple-400">✓</span></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">SLA Guarantees</td>
                  <td className="text-center py-4 px-4"><span className="text-slate-600">—</span></td>
                  <td className="text-center py-4 px-4"><span className="text-slate-600">—</span></td>
                  <td className="text-center py-4 px-4"><span className="text-purple-400">✓</span></td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Pricing Locked</td>
                  <td className="text-center py-4 px-4"><span className="text-amber-400">Forever</span></td>
                  <td className="text-center py-4 px-4"><span className="text-blue-400">1 Year</span></td>
                  <td className="text-center py-4 px-4"><span className="text-purple-400">Contract Term</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Founding Member Highlight */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 rounded-2xl p-8 md:p-12 border border-amber-500/30">
            <div className="text-center">
              <span className="badge-warning mb-6 inline-block">Limited Time Opportunity</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
                Founding Member Programme
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                We&apos;re looking for 10-15 institutions to join as founding members.
                Shape the platform, influence the roadmap, and lock in preferential rates.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">50%</div>
                  <p className="text-slate-400 text-sm">Lower than standard pricing</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">10-15</div>
                  <p className="text-slate-400 text-sm">Positions available</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">Forever</div>
                  <p className="text-slate-400 text-sm">Rate lock guarantee</p>
                </div>
              </div>

              <Link
                href="/members/founding"
                className="btn-primary inline-flex items-center gap-2"
              >
                Learn More About Founding Membership
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                What happens after I register interest?
              </h3>
              <p className="text-slate-300">
                We&apos;ll reach out within 48 hours to schedule a discovery call. We&apos;ll discuss your risk function,
                current challenges, and how Risk Agents can help. No commitment required.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                Can I try before committing to a full membership?
              </h3>
              <p className="text-slate-300">
                Yes. We offer pilot programmes for qualified institutions. During the pilot, you&apos;ll have
                access to a subset of skills to evaluate the platform in your environment.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                How do skills work? Do they require my data?
              </h3>
              <p className="text-slate-300">
                Skills are AI prompts and workflows—methodology, not data. They run on your infrastructure
                using your LLM deployment. Your data never leaves your environment.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                What&apos;s the difference between skills and patterns?
              </h3>
              <p className="text-slate-300">
                Skills are individual capabilities (e.g., &quot;Analyse credit covenant breach&quot;). Patterns combine
                multiple skills into workflows (e.g., &quot;Quarterly credit review process&quot;).
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                Can multiple teams in my organisation access the platform?
              </h3>
              <p className="text-slate-300">
                Yes. Membership is at the institutional level, not per user. Your entire risk function
                can use the platform under a single membership.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-2">
                How do I contribute skills to the library?
              </h3>
              <p className="text-slate-300">
                All members can submit skills for review. Contributions go through a governance process
                to ensure quality and applicability. Contributors receive recognition in the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-6 bg-slate-950" id="register">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Register Your Interest
            </h2>
            <p className="text-lg text-slate-300">
              Tell us about your organisation and we&apos;ll be in touch to discuss the right membership for you.
            </p>
          </div>

          <MembershipForm />
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/members" className="btn-secondary">
              ← Explore Member Types
            </Link>
            <Link href="/platform/skills" className="btn-secondary">
              See the Skills Library →
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
