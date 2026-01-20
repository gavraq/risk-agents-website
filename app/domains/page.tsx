import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: '9 Risk Domains - Risk Agents',
  description: '100+ AI skills across 9 risk domains: Credit, Market, Operational, Liquidity, Model, Climate, Regulatory, Strategic, and Risk Change. Comprehensive enterprise risk coverage.',
};

export default function DomainsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">9 Risk Domains</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive Risk Coverage
          </h1>
          <p className="text-xl text-secondary max-w-2xl mb-8">
            100+ specialized skills organized across 9 critical risk domains, covering every aspect of enterprise risk management.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span>100+ Skills Total</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span>75+ Patterns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span>30 Years CRO Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Credit Risk */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">15 Skills</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Credit Risk</h3>
              <p className="text-secondary text-sm mb-4">
                Counterparty exposure, concentration analysis, credit ratings, collateral management, ECL calculations
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Exposure Monitoring</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Rating Models</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">ECL/IFRS 9</span>
              </div>
            </div>

            {/* Market Risk */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">18 Skills</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Market Risk</h3>
              <p className="text-secondary text-sm mb-4">
                VaR, stress testing, sensitivity analysis, PV01, FX exposure, interest rate risk, scenario modeling
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">VaR/CVaR</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Greeks</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">FRTB</span>
              </div>
            </div>

            {/* Operational Risk */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">12 Skills</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Operational Risk</h3>
              <p className="text-secondary text-sm mb-4">
                RCSA, loss event analysis, KRIs, scenario analysis, controls testing, business continuity
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">RCSA</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">KRIs</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Loss Events</span>
              </div>
            </div>

            {/* Liquidity Risk */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">10 Skills</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Liquidity Risk</h3>
              <p className="text-secondary text-sm mb-4">
                Cash flow forecasting, LCR/NSFR, funding gap analysis, contingency planning, liquidity stress testing
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">LCR/NSFR</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Cash Flow</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Funding</span>
              </div>
            </div>

            {/* Model Risk */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">8 Skills</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Model Risk</h3>
              <p className="text-secondary text-sm mb-4">
                Model validation, backtesting, assumption analysis, model inventory, version control, documentation
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Validation</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Backtesting</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">SR 11-7</span>
              </div>
            </div>

            {/* Climate Risk */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">9 Skills</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Climate Risk</h3>
              <p className="text-secondary text-sm mb-4">
                Physical risk assessment, transition risk, scenario analysis, carbon footprint, TCFD reporting, ESG integration
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">TCFD</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Scenarios</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">ESG</span>
              </div>
            </div>

            {/* Regulatory Risk */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">11 Skills</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Regulatory Risk</h3>
              <p className="text-secondary text-sm mb-4">
                Compliance monitoring, regulatory change tracking, capital adequacy, ICAAP, stress testing, reporting
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Basel III/IV</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">ICAAP</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Stress Tests</span>
              </div>
            </div>

            {/* Strategic Risk */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">7 Skills</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Strategic Risk</h3>
              <p className="text-secondary text-sm mb-4">
                Business plan risk assessment, emerging risks, competitive analysis, M&A risk, strategic alignment
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Emerging Risks</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">M&A</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Strategy</span>
              </div>
            </div>

            {/* Risk Change */}
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">15 Skills</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">Risk Change</h3>
              <p className="text-secondary text-sm mb-4">
                Full spectrum from tactical improvements to strategic transformation—Run the Bank (RTB), Change the Bank (CTB), and strategic initiatives
              </p>
              <div className="space-y-2 text-xs text-muted mb-4">
                <div><strong className="text-secondary">RTB:</strong> Process fixes, documentation, BAU improvements</div>
                <div><strong className="text-secondary">CTB:</strong> System implementations, model development</div>
                <div><strong className="text-secondary">Strategic:</strong> TOM design, organizational transformation</div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">RTB</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">CTB</span>
                <span className="px-2 py-1 bg-[rgb(45,45,45)] rounded text-xs text-muted">Strategic</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cross-Domain Integration Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted mb-4">Cross-Domain Intelligence</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Skills That Work Together
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Risk Agents skills can combine across domains to solve complex, multi-dimensional risk challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Example 1 */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Concentration Risk Analysis</h3>
              <p className="text-secondary text-sm mb-4">
                &ldquo;Show me single-name concentrations across all portfolios with market impact analysis&rdquo;
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Credit</span>
                  <span className="text-muted">Counterparty exposure aggregation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Market</span>
                  <span className="text-muted">Mark-to-market valuation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Liquidity</span>
                  <span className="text-muted">Exit cost estimation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Regulatory</span>
                  <span className="text-muted">Large exposure limit checking</span>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Climate Stress Testing</h3>
              <p className="text-secondary text-sm mb-4">
                &ldquo;Run 2°C warming scenario across all portfolios with capital impact&rdquo;
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Climate</span>
                  <span className="text-muted">Physical/transition risk scenarios</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Credit</span>
                  <span className="text-muted">PD/LGD shock calibration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Market</span>
                  <span className="text-muted">Asset price impact modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Regulatory</span>
                  <span className="text-muted">RWA and capital calculations</span>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">M&A Risk Assessment</h3>
              <p className="text-secondary text-sm mb-4">
                &ldquo;Assess full risk profile for acquisition target XYZ Bank&rdquo;
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Strategic</span>
                  <span className="text-muted">Business model analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Credit</span>
                  <span className="text-muted">Portfolio quality assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Operational</span>
                  <span className="text-muted">Control environment review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Regulatory</span>
                  <span className="text-muted">Compliance/capital implications</span>
                </div>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-[rgb(28,28,28)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <div className="w-10 h-10 rounded-lg bg-[rgb(45,45,45)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">System Migration Risk</h3>
              <p className="text-secondary text-sm mb-4">
                &ldquo;Assess risk impact of migrating to new trading platform&rdquo;
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Risk Change</span>
                  <span className="text-muted">Project risk assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Operational</span>
                  <span className="text-muted">Process/control impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Market</span>
                  <span className="text-muted">Pricing/valuation continuity</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[rgb(45,45,45)] text-muted px-2 py-1 rounded">Model</span>
                  <span className="text-muted">Model migration validation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Risk Management?
          </h2>
          <p className="text-lg text-secondary mb-8">
            See how 100+ skills across 9 domains can revolutionize your risk function
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/members/founding" className="btn-primary">
              Become a Founding Member
            </Link>
            <Link href="/platform" className="btn-secondary">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
