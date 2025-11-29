import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function DomainsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[60vh] circuit-pattern circuit-dots flex items-center justify-center px-6 py-24 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="badge-risk">9 Risk Domains</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-6">
            <span className="text-gradient-amber">Comprehensive</span>
            <br />
            Risk Coverage
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            100+ specialized skills organized across 9 critical risk domains,
            covering every aspect of enterprise risk management
          </p>

          <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span>100+ Skills Total</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <span>75+ Patterns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span>30 Years CRO Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Credit Risk */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift h-full">
              <div className="text-5xl mb-4">💳</div>
              <div className="badge-ai mb-4">15 Skills</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Credit Risk
              </h3>
              <p className="text-slate-300 mb-6">
                Counterparty exposure, concentration analysis, credit ratings, collateral management, ECL calculations
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Exposure Monitoring</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Rating Models</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">ECL/IFRS 9</span>
              </div>
            </div>

            {/* Market Risk */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift h-full">
              <div className="text-5xl mb-4">📈</div>
              <div className="badge-ai mb-4">18 Skills</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Market Risk
              </h3>
              <p className="text-slate-300 mb-6">
                VaR, stress testing, sensitivity analysis, PV01, FX exposure, interest rate risk, scenario modeling
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">VaR/CVaR</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Greeks</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">FRTB</span>
              </div>
            </div>

            {/* Operational Risk */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift h-full">
              <div className="text-5xl mb-4">⚙️</div>
              <div className="badge-ai mb-4">12 Skills</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Operational Risk
              </h3>
              <p className="text-slate-300 mb-6">
                RCSA, loss event analysis, KRIs, scenario analysis, controls testing, business continuity
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">RCSA</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">KRIs</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Loss Events</span>
              </div>
            </div>

            {/* Liquidity Risk */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift h-full">
              <div className="text-5xl mb-4">💧</div>
              <div className="badge-ai mb-4">10 Skills</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Liquidity Risk
              </h3>
              <p className="text-slate-300 mb-6">
                Cash flow forecasting, LCR/NSFR, funding gap analysis, contingency planning, liquidity stress testing
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">LCR/NSFR</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Cash Flow</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Funding</span>
              </div>
            </div>

            {/* Model Risk */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift h-full">
              <div className="text-5xl mb-4">🧮</div>
              <div className="badge-ai mb-4">8 Skills</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Model Risk
              </h3>
              <p className="text-slate-300 mb-6">
                Model validation, backtesting, assumption analysis, model inventory, version control, documentation
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Validation</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Backtesting</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">SR 11-7</span>
              </div>
            </div>

            {/* Climate Risk */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift h-full">
              <div className="text-5xl mb-4">🌍</div>
              <div className="badge-success mb-4">9 Skills</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Climate Risk
              </h3>
              <p className="text-slate-300 mb-6">
                Physical risk assessment, transition risk, scenario analysis, carbon footprint, TCFD reporting, ESG integration
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">TCFD</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Scenarios</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">ESG</span>
              </div>
            </div>

            {/* Regulatory Risk */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift h-full">
              <div className="text-5xl mb-4">⚖️</div>
              <div className="badge-risk mb-4">11 Skills</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Regulatory Risk
              </h3>
              <p className="text-slate-300 mb-6">
                Compliance monitoring, regulatory change tracking, capital adequacy, ICAAP, stress testing, reporting
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Basel III/IV</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">ICAAP</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Stress Tests</span>
              </div>
            </div>

            {/* Strategic Risk */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift h-full">
              <div className="text-5xl mb-4">🎯</div>
              <div className="badge-ai mb-4">7 Skills</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Strategic Risk
              </h3>
              <p className="text-slate-300 mb-6">
                Business plan risk assessment, emerging risks, competitive analysis, M&A risk, strategic alignment
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Emerging Risks</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">M&A</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Strategy</span>
              </div>
            </div>

            {/* Risk Change */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 card-lift h-full">
              <div className="text-5xl mb-4">🔄</div>
              <div className="badge-success mb-4">10 Skills</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Risk Change
              </h3>
              <p className="text-slate-300 mb-6">
                Change management, transformation projects, system implementations, process improvement, organizational design
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">PMO</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Agile</span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">Transformation</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cross-Domain Integration Section */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-ai mb-4 inline-block">Cross-Domain Intelligence</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              Skills That Work Together
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Risk Agents skills can combine across domains to solve complex, multi-dimensional risk challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Example 1 */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">
                📊 Concentration Risk Analysis
              </h3>
              <p className="text-slate-300 mb-6">
                &ldquo;Show me single-name concentrations across all portfolios with market impact analysis&rdquo;
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Credit</span>
                  <span className="text-slate-400">Counterparty exposure aggregation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Market</span>
                  <span className="text-slate-400">Mark-to-market valuation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Liquidity</span>
                  <span className="text-slate-400">Exit cost estimation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-risk text-xs">Regulatory</span>
                  <span className="text-slate-400">Large exposure limit checking</span>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">
                🌍 Climate Stress Testing
              </h3>
              <p className="text-slate-300 mb-6">
                &ldquo;Run 2°C warming scenario across all portfolios with capital impact&rdquo;
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="badge-success text-xs">Climate</span>
                  <span className="text-slate-400">Physical/transition risk scenarios</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Credit</span>
                  <span className="text-slate-400">PD/LGD shock calibration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Market</span>
                  <span className="text-slate-400">Asset price impact modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-risk text-xs">Regulatory</span>
                  <span className="text-slate-400">RWA and capital calculations</span>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">
                💼 M&A Risk Assessment
              </h3>
              <p className="text-slate-300 mb-6">
                &ldquo;Assess full risk profile for acquisition target XYZ Bank&rdquo;
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Strategic</span>
                  <span className="text-slate-400">Business model analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Credit</span>
                  <span className="text-slate-400">Portfolio quality assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Operational</span>
                  <span className="text-slate-400">Control environment review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-risk text-xs">Regulatory</span>
                  <span className="text-slate-400">Compliance/capital implications</span>
                </div>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-slate-50 mb-4">
                🔄 System Migration Risk
              </h3>
              <p className="text-slate-300 mb-6">
                &ldquo;Assess risk impact of migrating to new trading platform&rdquo;
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="badge-success text-xs">Risk Change</span>
                  <span className="text-slate-400">Project risk assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Operational</span>
                  <span className="text-slate-400">Process/control impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Market</span>
                  <span className="text-slate-400">Pricing/valuation continuity</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-ai text-xs">Model</span>
                  <span className="text-slate-400">Model migration validation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Ready to Transform Your Risk Management?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            See how 100+ skills across 9 domains can revolutionize your risk function
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#early-access" className="btn-primary">
              Get Early Access
            </Link>
            <Link href="/platform" className="btn-secondary">
              Explore Platform
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
