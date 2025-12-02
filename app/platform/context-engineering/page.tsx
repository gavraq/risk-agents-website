import Navigation from '../../components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Context Engineering - Risk Agents',
  description: 'The foundation of effective AI: giving agents the right information at the right time through the 3 C\'s methodology.',
};

export default function ContextEngineering() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 circuit-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="badge-ai">Knowledge Management</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
            Context <span className="text-gradient-blue">Engineering</span>
          </h1>
          <p className="text-xl text-slate-300 mb-4 max-w-3xl mx-auto">
            AI is only as good as the context you give it. Context Engineering ensures agents have the right information at the right time.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Built on the 3 C&apos;s methodology: Capture, Curate, Consult
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-6">
                Why Context Matters
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Large Language Models are powerful, but they&apos;re stateless—they don&apos;t inherently know your bank, your policies, your data, or your context.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                The challenge isn&apos;t the AI. It&apos;s ensuring the AI has access to the right knowledge when it needs it.
              </p>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Without context: generic responses that miss your specifics</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Without context: hallucinations and incorrect assumptions</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Without context: inability to apply your frameworks</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-emerald-900/30">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">With Context Engineering</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Agents know your policies, limits, and frameworks</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Responses grounded in your actual data</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Consistent application of your methodology</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Institutional knowledge preserved and accessible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 C's Overview */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              The 3 C&apos;s Methodology
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A systematic approach to building and maintaining the context your AI agents need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/30">
              <div className="text-5xl mb-4">📥</div>
              <div className="badge-ai mb-4">1. CAPTURE</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">Gather Information</h3>
              <p className="text-slate-300">
                Collect data from meetings, documents, voice, APIs, and unstructured sources. Transform raw information into structured inputs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl p-8 border border-amber-500/30">
              <div className="text-5xl mb-4">🗂️</div>
              <div className="badge-risk mb-4">2. CURATE</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">Organize Knowledge</h3>
              <p className="text-slate-300">
                Structure, validate, enrich, and categorise information. Apply risk taxonomy for consistent knowledge management.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl p-8 border border-emerald-500/30">
              <div className="text-5xl mb-4">💡</div>
              <div className="badge-success mb-4">3. CONSULT</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">Deliver Insights</h3>
              <p className="text-slate-300">
                Analyze, recommend, model scenarios, and generate reports. Transform knowledge into actionable decisions.
              </p>
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-slate-50 mb-6 text-center">Context Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center">
                <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/50 mb-2">
                  <div className="font-bold text-blue-400">CAPTURE</div>
                  <div className="text-xs text-slate-400 mt-2">Raw Information</div>
                </div>
              </div>

              <div className="text-slate-500 text-2xl">→</div>

              <div className="flex-1 text-center">
                <div className="bg-amber-500/20 rounded-xl p-4 border border-amber-500/50 mb-2">
                  <div className="font-bold text-amber-400">CURATE</div>
                  <div className="text-xs text-slate-400 mt-2">Structured Knowledge</div>
                </div>
              </div>

              <div className="text-slate-500 text-2xl">→</div>

              <div className="flex-1 text-center">
                <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-500/50 mb-2">
                  <div className="font-bold text-emerald-400">CONSULT</div>
                  <div className="text-xs text-slate-400 mt-2">Actionable Context</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Taxonomy - The Knowledge Map */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-risk mb-6 inline-block">Knowledge Architecture</span>
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              The Risk Taxonomy
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              A structured knowledge map that organizes all risk artefacts into interconnected layers—the foundation AI agents navigate to find the right context.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Pyramid Visualization */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-50 mb-6 text-center">Taxonomy Pyramid</h3>

              {/* Requirements - Top */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-red-700 to-red-600 rounded-lg px-6 py-3 text-center w-48">
                  <div className="font-bold text-white text-sm">Requirements</div>
                  <div className="text-red-200 text-xs">Regulatory & Business</div>
                </div>
              </div>

              {/* Risks */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-amber-700 to-amber-600 rounded-lg px-6 py-3 text-center w-56">
                  <div className="font-bold text-white text-sm">Risks</div>
                  <div className="text-amber-200 text-xs">Risk Taxonomy & Types</div>
                </div>
              </div>

              {/* Policies */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-yellow-700 to-yellow-600 rounded-lg px-6 py-3 text-center w-64">
                  <div className="font-bold text-white text-sm">Policies</div>
                  <div className="text-yellow-200 text-xs">Governing Documents</div>
                </div>
              </div>

              {/* Governance */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-slate-600 to-slate-500 rounded-lg px-6 py-3 text-center w-72">
                  <div className="font-bold text-white text-sm">Governance</div>
                  <div className="text-slate-300 text-xs">Forums, Mandates, ToRs</div>
                </div>
              </div>

              {/* Processes */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-lg px-6 py-3 text-center w-80">
                  <div className="font-bold text-white text-sm">Processes</div>
                  <div className="text-teal-200 text-xs">Process Maps & Procedures</div>
                </div>
              </div>

              {/* Controls & MI */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg px-6 py-3 text-center w-[22rem]">
                  <div className="font-bold text-white text-sm">Controls & MI</div>
                  <div className="text-blue-200 text-xs">KRIs, RCSA, Management Information</div>
                </div>
              </div>

              {/* Systems/Feeds/Data/Models - Base */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg px-6 py-3 text-center w-[26rem]">
                  <div className="font-bold text-white text-sm">Systems / Feeds / Data / Models</div>
                  <div className="text-slate-300 text-xs">Technical Foundation</div>
                </div>
              </div>
            </div>

            {/* Three Principles + AI Maintenance */}
            <div className="space-y-6">
              {/* Three Principles */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-slate-50 mb-4">Three Principles</h3>
                <p className="text-slate-400 text-sm mb-4">
                  A well-maintained taxonomy ensures your knowledge is:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-500/20 rounded-full p-2">
                      <span className="text-emerald-400 font-bold text-sm">C</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-50">Complete</div>
                      <div className="text-sm text-slate-400">Comprehensive coverage across all risk domains—no gaps</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 rounded-full p-2">
                      <span className="text-blue-400 font-bold text-sm">C</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-50">Consistent</div>
                      <div className="text-sm text-slate-400">Uniform standards applied everywhere—no duplications</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-500/20 rounded-full p-2">
                      <span className="text-amber-400 font-bold text-sm">C</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-50">Communicated</div>
                      <div className="text-sm text-slate-400">Articulated clearly to staff, regulators, and auditors</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI-Powered Maintenance */}
              <div className="bg-gradient-to-br from-blue-900/30 to-emerald-900/30 rounded-2xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold text-slate-50 mb-4">AI-Powered Maintenance</h3>
                <p className="text-slate-300 text-sm mb-4">
                  A federated model where domain experts own accountability, while AI handles the curation burden:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <div className="text-slate-300 text-sm">
                      <strong className="text-slate-200">Federated Accountability:</strong> Domain experts own sign-off and approval
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <div className="text-slate-300 text-sm">
                      <strong className="text-slate-200">AI Curation:</strong> Automatic capture, gap detection, draft updates
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <div className="text-slate-300 text-sm">
                      <strong className="text-slate-200">Check-Out/Check-In:</strong> Change management ensures artefact accuracy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Artefact Categories */}
          <div className="mt-12 bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-slate-50 mb-6 text-center">11 Interconnected Artefact Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">📋</div>
                <div className="text-xs font-semibold text-slate-300">Risks</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">📜</div>
                <div className="text-xs font-semibold text-slate-300">Policies</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">🏛️</div>
                <div className="text-xs font-semibold text-slate-300">Governance</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">⚙️</div>
                <div className="text-xs font-semibold text-slate-300">Processes</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">🎛️</div>
                <div className="text-xs font-semibold text-slate-300">Controls</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">📦</div>
                <div className="text-xs font-semibold text-slate-300">Products</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">📊</div>
                <div className="text-xs font-semibold text-slate-300">Reports</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">🔌</div>
                <div className="text-xs font-semibold text-slate-300">Feeds</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">💾</div>
                <div className="text-xs font-semibold text-slate-300">Data</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">🧮</div>
                <div className="text-xs font-semibold text-slate-300">Models</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center border border-slate-700">
                <div className="text-2xl mb-1">🖥️</div>
                <div className="text-xs font-semibold text-slate-300">Systems</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm text-center mt-4">
              Each artefact is linked to others—creating a navigable knowledge graph for AI agents
            </p>
          </div>
        </div>
      </section>

      {/* Artefact Change Management */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-success mb-6 inline-block">Change Management</span>
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Keeping Artefacts Current
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Banks are always changing. The only way to maintain a true picture of your actual processes is to systematically update documentation during every change project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Check-Out/Check-In Flow Diagram */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-6 text-center">Artefact Update Process</h3>

              <div className="flex items-center justify-between gap-4">
                {/* RAV Ownership */}
                <div className="text-center">
                  <div className="bg-slate-700 rounded-lg px-4 py-3 mb-2">
                    <div className="font-bold text-slate-50">RAV</div>
                    <div className="text-xs text-slate-400">Ownership</div>
                  </div>
                </div>

                {/* Arrows and Check Out/In */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  {/* Check Out Arrow */}
                  <div className="flex items-center w-full">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400"></div>
                    <div className="bg-amber-500/20 border border-amber-500/50 rounded px-3 py-1 mx-2">
                      <span className="text-amber-400 text-sm font-semibold">Check Out</span>
                    </div>
                    <div className="text-amber-400">→</div>
                  </div>

                  {/* Check In Arrow */}
                  <div className="flex items-center w-full">
                    <div className="text-emerald-400">←</div>
                    <div className="bg-emerald-500/20 border border-emerald-500/50 rounded px-3 py-1 mx-2">
                      <span className="text-emerald-400 text-sm font-semibold">Check In</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-l from-emerald-500 to-emerald-400"></div>
                  </div>
                </div>

                {/* Risk Change */}
                <div className="text-center">
                  <div className="bg-slate-700 rounded-lg px-4 py-3 mb-2">
                    <div className="font-bold text-slate-50">Risk</div>
                    <div className="font-bold text-slate-50">Change</div>
                    <div className="text-xs text-slate-400">Amendments</div>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-sm text-center mt-6">
                Artefacts are &quot;checked out&quot; during change projects and &quot;checked in&quot; after validation
              </p>
            </div>

            {/* Benefits and Process Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-50 mb-4">Why This Matters</h3>
                <p className="text-slate-300 mb-4">
                  If artefacts are a true representation of what production currently looks like, they become a powerful tool for managing change efficiently.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-500/20 rounded-lg p-2 mt-1">
                    <span className="text-amber-400">📤</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-50">Check Out</div>
                    <div className="text-sm text-slate-400">Artefacts are locked for editing when a change project begins. The current state is preserved as the baseline.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-500/20 rounded-lg p-2 mt-1">
                    <span className="text-blue-400">✏️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-50">Amendments</div>
                    <div className="text-sm text-slate-400">Updates reflect what production will look like after the change—methodology docs, model libraries, data dictionaries, curve inventories.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-emerald-500/20 rounded-lg p-2 mt-1">
                    <span className="text-emerald-400">📥</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-50">Check In</div>
                    <div className="text-sm text-slate-400">After validation and sign-off, the updated production view is checked in—creating a complete audit trail.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Risk Artefacts */}
          <div className="mt-12 bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-slate-50 mb-6 text-center">Example Risk Artefacts Managed Through Change</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-sm font-semibold text-slate-300">Policy Documents</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-sm font-semibold text-slate-300">Trade Execution Framework</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-sm font-semibold text-slate-300">Model & Curve Inventory</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-sm font-semibold text-slate-300">Methodology Documents</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-sm font-semibold text-slate-300">Data Dictionary & DQ</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-sm font-semibold text-slate-300">Feed Inventory & SLAs</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-sm font-semibold text-slate-300">Systems Configuration</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-sm font-semibold text-slate-300">Process Flow Maps</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-sm font-semibold text-slate-300">Report Inventory</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="text-sm font-semibold text-slate-300">Approved Product List</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPTURE Details */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="badge-ai mb-4">CAPTURE</div>
            <h2 className="text-4xl font-bold text-slate-50 mb-4">Information Gathering</h2>
            <p className="text-slate-300 text-lg">
              The first C focuses on collecting information from various sources and transforming it into usable formats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Data Sources</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-blue-400">📝</div>
                  <div>
                    <div className="font-semibold text-slate-50">Meeting Minutes</div>
                    <div className="text-sm text-slate-400">AI-powered transcription and action item extraction</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-blue-400">📄</div>
                  <div>
                    <div className="font-semibold text-slate-50">Documents</div>
                    <div className="text-sm text-slate-400">PDF, Word, Excel processing with intelligent parsing</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-blue-400">🎤</div>
                  <div>
                    <div className="font-semibold text-slate-50">Voice Input</div>
                    <div className="text-sm text-slate-400">Speech-to-text with context understanding</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-blue-400">🔌</div>
                  <div>
                    <div className="font-semibold text-slate-50">Bank APIs</div>
                    <div className="text-sm text-slate-400">Real-time data feeds from core banking systems</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Capture Skills</h3>
              <div className="space-y-2 font-mono text-sm text-slate-300">
                <div>• meeting-minutes.skill</div>
                <div>• document-processing.skill</div>
                <div>• voice-transcription.skill</div>
                <div>• data-extraction.skill</div>
                <div>• interview-capture.skill</div>
                <div>• email-parsing.skill</div>
                <div>• api-integration.skill</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURATE Details */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="badge-risk mb-4">CURATE</div>
            <h2 className="text-4xl font-bold text-slate-50 mb-4">Knowledge Organisation</h2>
            <p className="text-slate-300 text-lg">
              The second C transforms raw information into structured, validated, and enriched knowledge ready for analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Curation Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-amber-400">🏗️</div>
                  <div>
                    <div className="font-semibold text-slate-50">Structuring</div>
                    <div className="text-sm text-slate-400">Apply templates, formats, and frameworks</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-amber-400">✅</div>
                  <div>
                    <div className="font-semibold text-slate-50">Validation</div>
                    <div className="text-sm text-slate-400">Check completeness, accuracy, consistency</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-amber-400">🏷️</div>
                  <div>
                    <div className="font-semibold text-slate-50">Categorisation</div>
                    <div className="text-sm text-slate-400">Apply risk taxonomy for consistent organisation</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-amber-400">💎</div>
                  <div>
                    <div className="font-semibold text-slate-50">Enrichment</div>
                    <div className="text-sm text-slate-400">Add context, links, regulatory references</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Curate Skills</h3>
              <div className="space-y-2 font-mono text-sm text-slate-300">
                <div>• requirements-structuring.skill</div>
                <div>• taxonomy-tagging.skill</div>
                <div>• gap-analysis.skill</div>
                <div>• data-validation.skill</div>
                <div>• knowledge-enrichment.skill</div>
                <div>• cross-reference.skill</div>
                <div>• version-control.skill</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
            <h4 className="font-bold text-slate-50 mb-2">Risk Taxonomy Integration</h4>
            <p className="text-slate-300 text-sm mb-4">
              All curated knowledge is automatically tagged against the Risk Taxonomy pyramid—linking artefacts across categories and enabling powerful cross-domain search.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="text-slate-300 text-sm">
                <div className="font-semibold text-amber-400 mb-2">What Gets Tagged:</div>
                <ul className="space-y-1 text-slate-400 text-xs">
                  <li>• Policy documents → Governance forums</li>
                  <li>• Process maps → Controls & KRIs</li>
                  <li>• Models → Data dictionaries</li>
                  <li>• Reports → Feed dependencies</li>
                </ul>
              </div>
              <div className="text-slate-300 text-sm">
                <div className="font-semibold text-amber-400 mb-2">Why It Matters:</div>
                <ul className="space-y-1 text-slate-400 text-xs">
                  <li>• AI finds related context automatically</li>
                  <li>• Gap analysis identifies missing links</li>
                  <li>• Impact analysis traces dependencies</li>
                  <li>• Regulatory queries pull full context</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="badge-ai text-xs">Credit Risk</span>
              <span className="badge-risk text-xs">Market Risk</span>
              <span className="badge-success text-xs">Operational Risk</span>
              <span className="badge-ai text-xs">Liquidity Risk</span>
              <span className="badge-risk text-xs">Model Risk</span>
              <span className="badge-success text-xs">Regulatory</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULT Details */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="badge-success mb-4">CONSULT</div>
            <h2 className="text-4xl font-bold text-slate-50 mb-4">Insight Delivery</h2>
            <p className="text-slate-300 text-lg">
              The final C applies expertise to curated knowledge, delivering analysis, recommendations, and actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Consultation Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-emerald-400">📊</div>
                  <div>
                    <div className="font-semibold text-slate-50">Framework Analysis</div>
                    <div className="text-sm text-slate-400">Apply 30+ years of risk frameworks</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-emerald-400">💡</div>
                  <div>
                    <div className="font-semibold text-slate-50">Recommendations</div>
                    <div className="text-sm text-slate-400">Context-aware, actionable guidance</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-emerald-400">🎯</div>
                  <div>
                    <div className="font-semibold text-slate-50">Scenario Modelling</div>
                    <div className="text-sm text-slate-400">What-if analysis and stress testing</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-emerald-400">📋</div>
                  <div>
                    <div className="font-semibold text-slate-50">Report Generation</div>
                    <div className="text-sm text-slate-400">Board packs, executive summaries, presentations</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">Consult Skills</h3>
              <div className="space-y-2 font-mono text-sm text-slate-300">
                <div>• framework-analysis.skill</div>
                <div>• recommendation-generation.skill</div>
                <div>• scenario-modeling.skill</div>
                <div>• report-generation.skill</div>
                <div>• board-presentation.skill</div>
                <div>• regulatory-guidance.skill</div>
                <div>• implementation-roadmap.skill</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progressive Disclosure */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 mb-4">
              Progressive Disclosure
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Not all context at once—the right context at the right time
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-slate-300 mb-6">
              LLM context windows are precious. Risk Agents uses progressive disclosure to load only the context needed for each task:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <h4 className="font-semibold text-slate-200 mb-2">Core Context</h4>
                <p className="text-slate-400 text-sm">Always loaded: your policies, limits, key frameworks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <h4 className="font-semibold text-slate-200 mb-2">Task Context</h4>
                <p className="text-slate-400 text-sm">Loaded for the specific task: relevant data, recent reports</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <h4 className="font-semibold text-slate-200 mb-2">On-Demand</h4>
                <p className="text-slate-400 text-sm">Fetched when needed: historical data, deep regulatory detail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-50 mb-8 text-center">
            Context Powers Everything
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 mb-8">
            <p className="text-slate-300 text-lg mb-6">
              Context Engineering is the foundation. Skills use context. Patterns orchestrate context across workflows. Goal Alignment ensures context serves strategic outcomes.
            </p>

            <div className="bg-slate-900 rounded-xl p-6">
              <div className="font-mono text-sm space-y-4 text-slate-300">
                <div>
                  <div className="text-blue-400 mb-2">Pattern: board-risk-report</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">CAPTURE:</span> portfolio-data-extraction.skill</div>
                    <div><span className="text-amber-400">CURATE:</span> data-validation.skill → taxonomy-tagging.skill</div>
                    <div><span className="text-emerald-400">CONSULT:</span> trend-analysis.skill → board-presentation.skill</div>
                  </div>
                </div>
                <div className="text-xs text-slate-500 pt-2 border-t border-slate-700">
                  Context loaded: Risk appetite, concentration limits, last 3 board packs, current portfolio data
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/platform/skills" className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors text-center">
              <div className="text-3xl mb-2">🧩</div>
              <div className="font-bold text-slate-50 mb-1">Skills</div>
              <div className="text-sm text-slate-400">Use context effectively</div>
            </Link>

            <Link href="/platform/patterns" className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-500 transition-colors text-center">
              <div className="text-3xl mb-2">🔄</div>
              <div className="font-bold text-slate-50 mb-1">Patterns</div>
              <div className="text-sm text-slate-400">Orchestrate context flow</div>
            </Link>

            <Link href="/platform/goal-alignment" className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-500 transition-colors text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-bold text-slate-50 mb-1">GTD Alignment</div>
              <div className="text-sm text-slate-400">Connect to outcomes</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            Build Your Knowledge Foundation
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Context Engineering ensures your AI agents have the institutional knowledge they need to deliver real value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/domains" className="btn-primary">
              Explore Risk Domains
            </Link>
            <Link href="/platform" className="btn-secondary">
              Back to Platform Overview
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
