import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen circuit-pattern circuit-dots flex items-center justify-center px-6 py-24 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="mb-8 inline-block">
            <span className="badge-success">Coming 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-6">
            <span className="text-gradient-blue">Risk Agents</span>
            <br />
            AI-Powered Risk Intelligence
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
            Built on <span className="text-gradient-blue">Skills</span>, <span className="text-gradient-amber">Patterns</span>, and 30 Years of CRO Expertise
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            100+ AI Skills that combine into patterns that evolve. Replace 50+ standard reports with natural language queries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#early-access"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Early Access
            </a>
            <a
              href="#learn-more"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Learn More
            </a>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift">
              <div className="badge-ai mb-4">Skills-Based</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                100+ Modular Capabilities
              </h3>
              <p className="text-slate-300">
                Focused skills across 9 risk domains that combine to solve complex challenges
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift">
              <div className="badge-risk mb-4">Pattern-Driven</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Workflows That Evolve
              </h3>
              <p className="text-slate-300">
                Composable patterns that track success and improve over time
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift">
              <div className="badge-success mb-4">Goal-Aligned</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                GTD for Corporations
              </h3>
              <p className="text-slate-300">
                Every action traces to organizational goals and principles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Temporary Early Access Section */}
      <section id="early-access" className="py-24 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Register for Early Access
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Be the first to know when Risk Agents launches. Get exclusive early access and updates on our development progress.
          </p>
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-400 mb-4">
              <span className="led-indicator led-on mr-2"></span>
              Building the future of risk management with AI
            </p>
            <p className="text-sm text-slate-500">
              Follow development updates on{" "}
              <a
                href="https://www.gavinslater.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                gavinslater.com
              </a>
            </p>
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
