import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Risk Taxonomy - Context Management - Risk Agents',
  description: 'A structured knowledge map organizing risk artifacts into interconnected layers. The foundation for AI-readable risk management frameworks.',
};

export default function RiskTaxonomyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/platform/context-management" className="text-muted hover:text-secondary transition-colors text-sm mb-4 inline-block">
            &larr; Back to Context Management
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Risk Taxonomy
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            The Map: A structured knowledge framework that organizes risk artifacts into interconnected layers, providing the guardrails AI agents need to operate safely.
          </p>
        </div>
      </section>

      {/* What is a Risk Taxonomy */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            What is a Risk Taxonomy?
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            A risk taxonomy is a structured knowledge map that organizes your organization&apos;s risk artifacts into interconnected layers. It defines what entities exist, how they relate, and what governance applies.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            In regulated industries, this isn&apos;t optional—you&apos;re expected to have documented, auditable frameworks. But for AI agents, a well-structured taxonomy becomes something more powerful: a navigable knowledge graph that provides context and guardrails for every decision.
          </p>
        </div>
      </section>

      {/* The Pyramid Structure */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            The Taxonomy Pyramid
          </h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            Risk artifacts organized in layers, from strategic requirements down to technical foundations.
          </p>

          <div className="space-y-4">
            {/* Requirements */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Requirements</h3>
                  <p className="text-secondary text-sm">Regulatory & Business requirements that drive everything below</p>
                </div>
              </div>
            </div>

            {/* Risks */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Risks</h3>
                  <p className="text-secondary text-sm">Risk taxonomy and risk types classified across all domains</p>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Policies</h3>
                  <p className="text-secondary text-sm">Governing documents that set boundaries and standards</p>
                </div>
              </div>
            </div>

            {/* Governance */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Governance</h3>
                  <p className="text-secondary text-sm">Forums, mandates, and terms of reference that guide decisions</p>
                </div>
              </div>
            </div>

            {/* Processes */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Processes</h3>
                  <p className="text-secondary text-sm">Process maps and procedures that define how work gets done</p>
                </div>
              </div>
            </div>

            {/* Controls & MI */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Controls & MI</h3>
                  <p className="text-secondary text-sm">KRIs, RCSA, and management information that monitors effectiveness</p>
                </div>
              </div>
            </div>

            {/* Technical Foundation */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">7</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Systems / Feeds / Data / Models</h3>
                  <p className="text-secondary text-sm">Technical foundation that enables everything above</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Principles */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Three Core Principles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="w-16 h-16 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Complete</h3>
              <p className="text-secondary text-sm">Comprehensive coverage across all risk domains—no gaps for AI to stumble into</p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="w-16 h-16 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Consistent</h3>
              <p className="text-secondary text-sm">Uniform standards applied everywhere—predictable structure for reliable navigation</p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)] text-center">
              <div className="w-16 h-16 rounded-full bg-[rgb(45,45,45)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Communicated</h3>
              <p className="text-secondary text-sm">Clearly articulated to staff and regulators—transparency builds trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11 Artifact Categories */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            11 Interconnected Artifact Categories
          </h2>
          <p className="text-secondary text-center mb-12 max-w-2xl mx-auto">
            Each category linked to create a navigable knowledge graph for AI agents.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Risks', 'Policies', 'Governance', 'Processes', 'Controls', 'Products', 'Reports', 'Feeds', 'Data', 'Models', 'Systems'].map((category) => (
              <div key={category} className="bg-[rgb(28,28,28)] rounded-lg p-4 border border-[rgb(45,45,45)] text-center">
                <p className="text-white font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keeping Artifacts Current */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Keeping Artifacts Current
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            Banks continuously change, requiring systematic documentation updates during every change project. A stale taxonomy is worse than no taxonomy—it gives AI agents false confidence in outdated information.
          </p>

          <div className="space-y-6">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-3">Check Out</h3>
              <p className="text-secondary">
                Artifacts are locked for editing when change projects begin. The current state is preserved as baseline—creating a clear &quot;before&quot; snapshot.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-3">Amendments</h3>
              <p className="text-secondary">
                Updates reflect post-change production state—methodology docs, model libraries, data dictionaries, curve inventories. Everything that changes gets documented.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-xl font-bold text-white mb-3">Check In</h3>
              <p className="text-secondary">
                After validation and sign-off, updated production views are checked in, creating complete audit trails. The taxonomy always reflects reality.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[rgb(22,22,22)] rounded-lg border border-[rgb(45,45,45)]">
            <p className="text-white font-medium mb-2">Why This Matters</p>
            <p className="text-secondary">
              When artifacts accurately represent current production processes, they become powerful tools for managing change efficiently and maintaining accountability. AI agents can trust the taxonomy—and so can regulators.
            </p>
          </div>
        </div>
      </section>

      {/* Connection to Context Graph */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            The Map Needs Navigators
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            The taxonomy provides structure—but structure alone doesn&apos;t capture how decisions actually get made. That&apos;s where the Context Graph comes in: capturing the real paths people take through this carefully structured map.
          </p>
          <Link
            href="/platform/context-management/context-graph"
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore Context Graph &rarr;
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              href="/platform/context-management"
              className="text-muted hover:text-secondary transition-colors"
            >
              &larr; Back to Context Management
            </Link>
            <Link
              href="/platform/context-management/context-graph"
              className="text-muted hover:text-secondary transition-colors"
            >
              Context Graph &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
