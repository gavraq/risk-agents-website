import Navigation from '../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'How We Think - Risk Agents Philosophy',
  description: 'Three principles guide Risk Agents: Human in the Loop, AI Augments Humans Decide, and Expanding Boundaries. Discover our approach to AI-powered risk management.',
};

export default function HowWeThinkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 py-24 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="badge">Our Philosophy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
            How We Think
          </h1>

          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Three principles guide everything we build
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Principle 1: Human in the Loop */}
          <div className="mb-24">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-muted text-sm font-medium tracking-wide uppercase">Principle One</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                  Human in the Loop
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-secondary leading-relaxed mb-6">
                  Risk decisions are too important to fully automate. Every analysis we provide includes
                  clear assumptions, limitations, and confidence levels. The human expert always
                  makes the final call.
                </p>
                <p className="text-secondary leading-relaxed">
                  We design for transparency, not blind automation. When Risk Agents surfaces an insight,
                  you can trace exactly how it reached that conclusion. Trust is built through
                  understanding, not black boxes.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider mb-24"></div>

          {/* Principle 2: AI Augments, Humans Decide */}
          <div className="mb-24">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-muted text-sm font-medium tracking-wide uppercase">Principle Two</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                  AI Augments.<br />Humans Decide.
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-secondary leading-relaxed mb-6">
                  AI excels at processing vast amounts of information, identifying patterns, and
                  synthesizing complex data. Humans excel at judgment, context, and accountability.
                </p>
                <p className="text-secondary leading-relaxed">
                  Risk Agents amplifies human expertise rather than replacing it. We handle the
                  time-consuming analysis so risk professionals can focus on what matters most:
                  making informed decisions that protect their organizations.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider mb-24"></div>

          {/* Principle 3: Expanding Boundaries */}
          <div className="mb-24">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <span className="text-muted text-sm font-medium tracking-wide uppercase">Principle Three</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                  Expanding Boundaries
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-secondary leading-relaxed mb-6">
                  Traditional risk management is constrained by what&apos;s feasible with existing tools
                  and limited time. We believe those constraints should be challenged.
                </p>
                <p className="text-secondary leading-relaxed">
                  What if you could analyze every document, not just samples? What if scenario
                  analysis could explore hundreds of possibilities, not just a handful? What if
                  regulatory changes could be assessed in hours, not months? Risk Agents expands
                  what&apos;s possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means in Practice */}
      <section className="py-24 px-6 bg-[var(--background-elevated)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What This Means in Practice
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Our principles shape every feature and interaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Transparent Analysis
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Every recommendation shows its reasoning. You see the data sources,
                assumptions, and confidence levels behind each insight.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Expert-Driven Workflows
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Risk professionals guide the analysis. You set the parameters,
                define the questions, and validate the outputs.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Comprehensive Coverage
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Analyze more scenarios, review more documents, and monitor more
                signals than ever before possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            See Our Principles in Action
          </h2>
          <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
            Explore how Risk Agents brings these ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/platform" className="btn-primary">
              Explore the Platform
            </Link>
            <Link href="/about" className="btn-secondary">
              About Risk Agents
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border-subtle)]">
        <div className="max-w-6xl mx-auto text-center text-muted text-sm">
          <p>&copy; 2025 Risk Agents. Built by <a href="https://www.gavinslater.com" className="text-secondary hover:text-foreground transition-colors">Gavin Slater</a></p>
          <p className="mt-2">30 Years of Chief Risk Officer Expertise, Delivered by AI</p>
        </div>
      </footer>
    </div>
  );
}
