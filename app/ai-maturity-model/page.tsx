import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'AI Maturity Model - Risk Agents',
  description: 'The 5-level AI Maturity Model for understanding the rapid shift from generic chatbots to autonomous agents and business workflows. Where is your organisation on the curve?',
};

export default function AIMaturityModelPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The race is on to build AI-powered risk intelligence.
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-4">
            Some organizations will have AI doing the heavy lifting while humans drive strategy.
            Others will still be copy-pasting into chatbots.
          </p>
          <p className="text-2xl font-bold text-amber-400">
            Which future are you building?
          </p>
        </div>
      </section>

      {/* AIMM Visual Diagram */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[rgb(28,28,28)] rounded-xl p-8 border border-[rgb(45,45,45)]">
            {/* Header */}
            <p className="text-center text-sm text-muted mb-8 tracking-wide">
              BASED ON DANIEL MIESSLER&apos;S{' '}
              <a
                href="https://danielmiessler.com/p/ai-maturity-model-aimm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                AI MATURITY MODEL (AIMM)
              </a>
            </p>

            {/* Timeline Labels */}
            <div className="grid grid-cols-5 gap-3 mb-2 text-center">
              <p className="text-xs text-muted">&rarr; 2022</p>
              <p className="text-xs text-muted">2023 &rarr; 2025</p>
              <p className="text-xs text-muted">2025 &rarr; 2027</p>
              <p className="text-xs text-muted">2027+</p>
              <p className="text-xs text-muted">2030+</p>
            </div>

            {/* Level Cards */}
            <div className="grid grid-cols-5 gap-3 mb-4">
              {/* Level 0 - Natural */}
              <div className="bg-[rgb(45,55,72)] rounded-lg p-4 text-center">
                <p className="text-amber-400 font-bold text-lg mb-2">0 <span className="text-white">NATURAL</span></p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The human does their work completely on their own, with no AI assistance
                </p>
              </div>

              {/* Level 1 - Chatbots */}
              <div className="bg-amber-600 rounded-lg p-4 text-center">
                <p className="text-amber-200 font-bold text-lg mb-2">1 <span className="text-white">CHATBOTS</span></p>
                <p className="text-xs text-amber-100 leading-relaxed">
                  The human asks questions and gets useful answers back from an AI chatbot-like system
                </p>
              </div>

              {/* Level 2 - Agentic */}
              <div className="bg-blue-600 rounded-lg p-4 text-center border-2 border-blue-400">
                <p className="text-blue-200 font-bold text-lg mb-2">2 <span className="text-white">AGENTIC</span></p>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Agentic platforms magnify people&apos;s effectiveness by learning tasks, context, and tooling
                </p>
              </div>

              {/* Level 3 - Workflows */}
              <div className="bg-purple-700 rounded-lg p-4 text-center">
                <p className="text-purple-200 font-bold text-lg mb-2">3 <span className="text-white">WORKFLOWS</span></p>
                <p className="text-xs text-purple-100 leading-relaxed">
                  Most work is decomposed into automatable tasks and pipelines executed by AI
                </p>
              </div>

              {/* Level 4 - Managed */}
              <div className="bg-purple-900 rounded-lg p-4 text-center">
                <p className="text-purple-300 font-bold text-lg mb-2">4 <span className="text-white">MANAGED</span></p>
                <p className="text-xs text-purple-200 leading-relaxed">
                  AI captures current and desired state, and continuously makes adjustments
                </p>
              </div>
            </div>

            {/* Human to AI spectrum */}
            <div className="flex items-center justify-between text-xs text-muted mb-8">
              <span>Human-centered work</span>
              <div className="flex-1 mx-4 h-px bg-gradient-to-r from-slate-600 via-blue-500 to-purple-500"></div>
              <span>AI-centered work</span>
            </div>

            {/* Warning */}
            <div className="text-center">
              <p className="text-amber-400 font-semibold mb-2">
                <span className="mr-2">⚠</span>
                Your competitors are racing along this same maturity model.
              </p>
              <p className="text-secondary text-sm">
                The larger the gap between you and them, the more concerned you should be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/#early-access" className="btn-primary text-center">
            Join the Movement
          </Link>
          <Link href="/skills-sharing" className="btn-secondary text-center">
            Learn About Skills Sharing
          </Link>
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Understanding the Levels
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Level 0: Natural</h3>
              <p className="text-secondary leading-relaxed">
                This is how the world worked before ChatGPT. All knowledge work done by humans, using traditional tools and processes. If your organisation is still here, you&apos;re not just behind—you&apos;re invisible to what&apos;s coming.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Level 1: Chatbots</h3>
              <p className="text-secondary leading-relaxed">
                The first AI-enabled level. You can ask difficult questions and get useful answers—but then you still have to do something with the result. The AI provides information; humans take all the actions. Most organisations are here today.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">Level 2: Agentic — Where Risk Agents Operates</h3>
              <p className="text-secondary leading-relaxed mb-4">
                The last level that remains heavily human-focused. You ask questions like before, but now you have context about how to properly answer—and crucially, the AI can <strong className="text-white">take actions</strong>.
              </p>
              <p className="text-secondary leading-relaxed">
                Agents understand work using context and can go and do things with it. They&apos;re extraordinarily powerful for magnifying an individual&apos;s capability. This is where Risk Agents provides the skills, patterns, and context management that make agentic systems work for risk professionals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Level 3: Workflows</h3>
              <p className="text-secondary leading-relaxed">
                All the tasks and skills from the agentic phase get turned into permanent workflows throughout the organisation. Business processes become AI pipelines that are always running. Work gets broken down into pieces, with AI identifying where humans are doing intelligent work and where AI can be substituted.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Level 4: Managed</h3>
              <p className="text-secondary leading-relaxed">
                The most advanced level. AI can see the company working by watching workflows. Level 4 asks: <em className="text-white">What is our current state? What is our desired state? How do we transition from one to the other?</em> Agents continuously gather current state, understand desired state, and make small changes to transition between them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Path Forward */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            The Path Forward
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            The recommendation is clear: move as fast as possible to Level 2. Build agentic capabilities that magnify your people. Get your context into the system—your knowledge, your goals, what you&apos;re actually trying to accomplish.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            The more context AI understands about your organisation, your risk appetite, and your strategic objectives, the more powerful it becomes. Context compounds. Knowledge accumulates.
          </p>

          <div className="bg-[rgb(28,28,28)] rounded-lg p-8 border border-[rgb(45,45,45)] my-8">
            <p className="text-xl text-white italic leading-relaxed text-center">
              &quot;Things are absolutely insane right now. We&apos;re living in the greatest moment of human change in probably thousands of years because of how this is going to affect human labour.&quot;
            </p>
            <p className="text-muted text-sm text-center mt-4">— Daniel Miessler</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Your Level 2 Journey
          </h2>
          <p className="text-lg text-secondary mb-8">
            Risk Agents provides the skills, patterns, and context management infrastructure to accelerate your move to agentic AI in risk management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#early-access" className="btn-primary">
              Request Early Access
            </Link>
            <Link href="/#learn-more" className="btn-secondary">
              Explore Our Approach
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
