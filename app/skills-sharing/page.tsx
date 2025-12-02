import Navigation from '../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Skills Sharing - Risk Agents',
  description: 'Share risk management best practices across the industry. Not software you buy—a community you join.',
};

export default function SkillsSharing() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern circuit-dots">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge-success mb-6 inline-block">A New Model</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Why Share?
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Risk managers want to share best practices—they just lack time.
            <br />
            <span className="text-slate-400">What if we could change that?</span>
          </p>
        </div>
      </section>

      {/* The Problem with Current Model */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                The Consultancy Tax
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                When banks need &quot;best practices,&quot; they hire consultancies like McKinsey, Accenture, or the Big 4. These firms charge premium fees largely because they&apos;ve worked with multiple banks and can bring that &quot;cross-industry experience.&quot;
              </p>
              <p className="text-lg text-slate-300 mb-6">
                But here&apos;s the problem: <strong className="text-slate-200">that knowledge walks out the door when the engagement ends.</strong> And you&apos;ve just paid to train their junior consultants on your business.
              </p>
              <p className="text-lg text-slate-300">
                Six months later, you&apos;re paying again—often to different consultants who need to learn everything from scratch.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-red-900/30">
              <h3 className="text-xl font-bold text-red-400 mb-6">The Hidden Costs</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">£</span>
                  <span><strong className="text-slate-200">£1,500-2,500/day</strong> for &quot;multi-bank experience&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">📅</span>
                  <span><strong className="text-slate-200">2-4 weeks</strong> onboarding before they&apos;re productive</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">🚪</span>
                  <span><strong className="text-slate-200">Knowledge walks out</strong> when engagement ends</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">🔄</span>
                  <span><strong className="text-slate-200">Repeat the cycle</strong> for every new project</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Story */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-6">
            Risk Managers Want to Share
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
            The perception that banks don&apos;t share is wrong. The reality is they <strong className="text-slate-200">lack time, not willingness</strong>. Every CRO we&apos;ve spoken to would love to learn from peers and contribute their own insights—if only it didn&apos;t require endless meetings, conferences, and document exchanges.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Peer Networks Exist</h3>
              <p className="text-slate-400 text-sm">
                CRO forums, GARP events, industry working groups—risk professionals actively seek peer connections.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Time Is the Barrier</h3>
              <p className="text-slate-400 text-sm">
                Documenting and sharing takes time that risk teams simply don&apos;t have—they&apos;re too busy firefighting.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Proprietary vs Generic</h3>
              <p className="text-slate-400 text-sm">
                Most methodology is generic—the &quot;secret sauce&quot; is in your specific parameters, not the framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Shared vs What Stays Private */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              What Gets Shared vs What Stays Yours
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The line is clear: share the &quot;how,&quot; keep the &quot;what&quot;
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Shared */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-emerald-900/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">🤝</span> Shared (Non-Proprietary)
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Methodology frameworks</strong>—how to approach credit analysis, stress testing, etc.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Regulatory interpretations</strong>—how to comply with Basel, IFRS, FRTB</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Data quality rules</strong>—validation logic, completeness checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Report templates</strong>—structures for board packs, regulatory submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Integration patterns</strong>—how to connect to common systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Skills & Patterns</strong>—reusable AI capabilities and workflows</span>
                </li>
              </ul>
            </div>

            {/* Private */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-900/30">
              <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">🔐</span> Yours (Proprietary)
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Calibrated model parameters</strong>—your specific PD/LGD values</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Thresholds & limits</strong>—your risk appetite translated to numbers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Client data & positions</strong>—all your transactional data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Risk appetite framework</strong>—your strategic risk decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Competitive intelligence</strong>—your market positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-200">Your organizational context</strong>—structure, policies, people</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is Different */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Why This Is Different
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Not software you buy—a community you join
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Network Effects</h3>
              <p className="text-slate-400 text-sm">
                More banks participating = better skills for everyone. The platform improves as the community grows.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Knowledge Compounds</h3>
              <p className="text-slate-400 text-sm">
                Unlike consultants who leave, shared skills stay and improve. Institutional memory that grows.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Levels the Field</h3>
              <p className="text-slate-400 text-sm">
                Smaller banks get access to capabilities only large institutions could previously afford.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-lift">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">Industry Resilience</h3>
              <p className="text-slate-400 text-sm">
                Better risk management across the industry benefits everyone—including regulators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Explore how skills sharing works in practice, or join as a founding member to help shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/skills-sharing/how-it-works" className="btn-secondary">
              How It Works
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
