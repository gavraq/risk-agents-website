import Navigation from './components/Navigation';
import EarlyAccessForm from './components/EarlyAccessForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - The AI Maturity Challenge */}
      <section className="min-h-screen circuit-pattern circuit-dots flex items-center justify-center px-6 py-24 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-50 mb-4 leading-tight">
            The race is on to build AI-powered risk intelligence.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-4xl mx-auto">
            Some organizations will have AI doing the heavy lifting while humans drive strategy.
            <br className="hidden md:block" />
            Others will still be copy-pasting into chatbots.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-gradient-amber mb-2">
            Which future are you building?
          </p>

          {/* AIMM Model Visual */}
          <div className="max-w-5xl mx-auto my-12">
            <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700">
              <p className="text-sm text-slate-400 mb-8 uppercase tracking-wide">
                Based on Daniel Miessler&apos;s{' '}
                <a
                  href="https://www.youtube.com/watch?v=K8h9fEgf5yY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  AI Maturity Model (AIMM)
                </a>
              </p>

              {/* Timeline row - centered over each box */}
              <div className="hidden md:grid grid-cols-5 gap-1 text-xs text-slate-500 mb-2">
                <div className="text-center">→ 2022</div>
                <div className="text-center">2023 → 2025</div>
                <div className="text-center">2025 → 2027</div>
                <div className="text-center">2027+</div>
                <div className="text-center">2030+</div>
              </div>

              {/* AIMM Levels - Horizontal Flow */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-1">
                {/* Level 0 */}
                <div className="bg-gradient-to-b from-slate-700/50 to-slate-800/50 rounded-lg p-4 md:p-5 flex flex-col">
                  <div className="text-slate-400 font-bold text-base md:text-lg mb-2 whitespace-nowrap">0 <span className="font-normal uppercase tracking-wide">Natural</span></div>
                  <div className="w-full h-0.5 bg-slate-600 mb-3"></div>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">
                    The human does their work completely on their own, with no AI assistance
                  </p>
                </div>

                {/* Level 1 */}
                <div className="bg-gradient-to-b from-amber-600/40 to-amber-700/40 rounded-lg p-4 md:p-5 border-2 border-amber-500 flex flex-col">
                  <div className="text-amber-300 font-bold text-base md:text-lg mb-2 whitespace-nowrap">1 <span className="font-normal uppercase tracking-wide">Chatbots</span></div>
                  <div className="w-full h-0.5 bg-amber-500/50 mb-3"></div>
                  <p className="text-amber-200/80 text-xs leading-relaxed flex-1">
                    The human asks questions and gets useful answers back from an AI chatbot-like system
                  </p>
                </div>

                {/* Level 2 */}
                <div className="bg-gradient-to-b from-blue-600/40 to-blue-700/40 rounded-lg p-4 md:p-5 border-2 border-blue-500 flex flex-col">
                  <div className="text-blue-300 font-bold text-base md:text-lg mb-2 whitespace-nowrap">2 <span className="font-normal uppercase tracking-wide">Agentic</span></div>
                  <div className="w-full h-0.5 bg-blue-500/50 mb-3"></div>
                  <p className="text-blue-200/80 text-xs leading-relaxed flex-1">
                    Agentic platforms magnify people&apos;s effectiveness by learning tasks, context, and tooling
                  </p>
                </div>

                {/* Level 3 */}
                <div className="bg-gradient-to-b from-violet-600/40 to-violet-700/40 rounded-lg p-4 md:p-5 border-2 border-violet-500 flex flex-col">
                  <div className="text-violet-300 font-bold text-base md:text-lg mb-2 whitespace-nowrap">3 <span className="font-normal uppercase tracking-wide">Workflows</span></div>
                  <div className="w-full h-0.5 bg-violet-500/50 mb-3"></div>
                  <p className="text-violet-200/80 text-xs leading-relaxed flex-1">
                    Most work is decomposed into automatable tasks and pipelines executed by AI
                  </p>
                </div>

                {/* Level 4 */}
                <div className="bg-gradient-to-b from-purple-700/30 to-purple-800/30 rounded-lg p-4 md:p-5 flex flex-col">
                  <div className="text-purple-300 font-bold text-base md:text-lg mb-2 whitespace-nowrap">4 <span className="font-normal uppercase tracking-wide">Managed</span></div>
                  <div className="w-full h-0.5 bg-purple-500/50 mb-3"></div>
                  <p className="text-purple-300/70 text-xs leading-relaxed flex-1">
                    AI captures current and desired state, and continuously makes adjustments
                  </p>
                </div>
              </div>

              {/* Labels below - two lines meeting in the middle */}
              <div className="hidden md:flex mt-4 text-xs">
                <div className="flex-1 flex items-center">
                  <div className="flex-1 border-t border-slate-600"></div>
                  <span className="text-slate-500 px-3">Human-centered work</span>
                  <div className="flex-1 border-t border-slate-600"></div>
                </div>
                <div className="flex-1 flex items-center">
                  <div className="flex-1 border-t border-slate-600"></div>
                  <span className="text-slate-500 px-3">AI-centered work</span>
                  <div className="flex-1 border-t border-slate-600"></div>
                </div>
              </div>

              {/* Warning Message */}
              <div className="mt-8 text-center">
                <p className="text-slate-300 text-sm md:text-base">
                  <span className="text-amber-400 font-semibold">⚠️ Your competitors are racing along this same maturity model.</span>
                  <br />
                  <span className="text-slate-400">The larger the gap between you and them, the more concerned you should be.</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#early-access"
              className="btn-primary inline-flex items-center gap-2"
            >
              Join the Movement
            </a>
            <Link
              href="/skills-sharing"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Learn About Skills Sharing
            </Link>
          </div>
        </div>
      </section>

      {/* The Risk Management Crisis Section */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              The Risk Management Crisis
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Risk professionals are drowning in routine tasks while strategic threats evolve unchecked
            </p>
          </div>

          {/* Column Headers */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-6">
            <div className="bg-slate-800/50 rounded-t-2xl p-6 border border-red-900/30 border-b-0">
              <h3 className="text-xl font-bold text-red-400 flex items-center gap-2">
                <span className="text-2xl">❌</span> Where Most Banks Are Today
              </h3>
            </div>
            <div className="bg-slate-800/50 rounded-t-2xl p-6 border border-emerald-900/30 border-b-0">
              <h3 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
                <span className="text-2xl">✅</span> Where You Need to Be
              </h3>
            </div>
          </div>

          {/* Paired Rows */}
          <div className="max-w-5xl mx-auto space-y-4">
            {/* Row 1 - Tick-box work */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-4 border-x border-red-900/30 flex items-start gap-3 text-slate-300">
                <span className="text-red-400 mt-1">•</span>
                <span><strong className="text-slate-200">Routine &quot;tick-box&quot; work</strong> crowding out strategic thinking</span>
              </div>
              <div className="bg-slate-800/50 p-4 border-x border-emerald-900/30 flex items-start gap-3 text-slate-300">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-slate-200">Strategic risk/return focus</strong>—AI handles the grunt work</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-4 border-x border-red-900/30 flex items-start gap-3 text-slate-300">
                <span className="text-red-400 mt-1">•</span>
                <span><strong className="text-slate-200">Volumes of static reports</strong> generated daily, weekly, and monthly—most go unread</span>
              </div>
              <div className="bg-slate-800/50 p-4 border-x border-emerald-900/30 flex items-start gap-3 text-slate-300">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-slate-200">Natural language queries</strong>—ask questions, get instant answers</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-4 border-x border-red-900/30 flex items-start gap-3 text-slate-300">
                <span className="text-red-400 mt-1">•</span>
                <span><strong className="text-slate-200">Information scattered</strong> across the organisation without coherent structure</span>
              </div>
              <div className="bg-slate-800/50 p-4 border-x border-emerald-900/30 flex items-start gap-3 text-slate-300">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-slate-200">AI-powered knowledge platform</strong>—AI never tires of documenting, finds patterns, and structures information</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-4 border-x border-red-900/30 flex items-start gap-3 text-slate-300">
                <span className="text-red-400 mt-1">•</span>
                <span><strong className="text-slate-200">Knowledge trapped in heads</strong>—walks out when people leave</span>
              </div>
              <div className="bg-slate-800/50 p-4 border-x border-emerald-900/30 flex items-start gap-3 text-slate-300">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-slate-200">Captured, curated knowledge</strong> that stays and compounds</span>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-4 border-x border-red-900/30 flex items-start gap-3 text-slate-300">
                <span className="text-red-400 mt-1">•</span>
                <span><strong className="text-slate-200">Undocumented processes</strong>—AI can&apos;t help what it can&apos;t see</span>
              </div>
              <div className="bg-slate-800/50 p-4 border-x border-emerald-900/30 flex items-start gap-3 text-slate-300">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-slate-200">AI-readable process blueprints</strong>—documented and versioned</span>
              </div>
            </div>

            {/* Row 6 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-4 border-x border-b border-red-900/30 rounded-b-2xl flex items-start gap-3 text-slate-300">
                <span className="text-red-400 mt-1">•</span>
                <span><strong className="text-slate-200">Expensive consultants</strong> who take their knowledge with them</span>
              </div>
              <div className="bg-slate-800/50 p-4 border-x border-b border-emerald-900/30 rounded-b-2xl flex items-start gap-3 text-slate-300">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-slate-200">Shared best practices</strong>—community-driven improvement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Innovations Section */}
      <section id="learn-more" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-ai mb-6 inline-block">The Risk Agents Solution</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Three Foundational Innovations
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Built on 30 years of risk expertise, delivered through AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Skills Framework */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift">
              <div className="badge-ai mb-4">Innovation 1</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Skills Framework
              </h3>
              <p className="text-slate-300 mb-4">
                100+ modular capabilities across 9 risk domains. Each skill does one thing exceptionally well. Skills combine to solve complex challenges.
              </p>
              <Link href="/platform/skills" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                Explore Skills →
              </Link>
            </div>

            {/* Fabrix Patterns */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift">
              <div className="badge-risk mb-4">Innovation 2</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Fabrix Patterns
              </h3>
              <p className="text-slate-300 mb-4">
                Composable workflows that track success and improve over time. Patterns evolve based on what works, creating institutional memory.
              </p>
              <Link href="/platform/patterns" className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium">
                Explore Patterns →
              </Link>
            </div>

            {/* GTD Goal Alignment */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift">
              <div className="badge-success mb-4">Innovation 3</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                GTD Goal Alignment
              </h3>
              <p className="text-slate-300 mb-4">
                Every action traces to organizational goals and principles. From 50K ft vision down to ground-level tasks—all aligned.
              </p>
              <Link href="/platform/goal-alignment" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">
                Explore GTD →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Sharing Section */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-success mb-6 inline-block">A New Model</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
                Not Software You Buy—<br />
                <span className="text-gradient-blue">A Community You Join</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Risk managers want to share best practices—they just lack time. Consultancies charge exorbitant fees to bring &quot;multi-bank experience&quot; to your door.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                <strong className="text-slate-200">What if we democratized that experience?</strong> Share the non-competitive parts (methodology, frameworks, templates) while keeping your proprietary data and parameters private.
              </p>
              <Link href="/skills-sharing" className="btn-primary inline-flex items-center gap-2">
                Learn About Skills Sharing
              </Link>
            </div>

            {/* What Gets Shared vs What Stays Private */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-slate-50 mb-6 text-center">
                What Gets Shared vs What Stays Yours
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-emerald-400 font-semibold text-sm mb-3 uppercase tracking-wide">Shared</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Methodology frameworks</li>
                    <li>• Regulatory interpretations</li>
                    <li>• Data quality rules</li>
                    <li>• Report templates</li>
                    <li>• Integration patterns</li>
                    <li>• Skills & Patterns</li>
                  </ul>
                </div>
                <div>
                  <div className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide">Yours</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Model parameters</li>
                    <li>• Thresholds & limits</li>
                    <li>• Client data</li>
                    <li>• Risk appetite</li>
                    <li>• Competitive intel</li>
                    <li>• Your context</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="py-24 px-6 bg-slate-950">
        <div className="max-w-2xl mx-auto text-center">
          <span className="badge-risk mb-6 inline-block">Don&apos;t Get Left Behind</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Join the Founding Members
          </h2>
          <p className="text-lg text-slate-300 mb-4">
            The gap between you and your competitors grows every day you wait. Be among the first to transform risk management.
          </p>
          <p className="text-slate-400 mb-8">
            Early access members will help shape the platform, influence governance, and get a head start on the AI maturity journey.
          </p>
          <EarlyAccessForm />
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
