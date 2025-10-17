import Navigation from '../../components/Navigation';
import Link from 'next/link';

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[60vh] circuit-pattern circuit-dots flex items-center justify-center px-6 py-24 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="badge-ai">Design Philosophy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-6">
            <span className="text-gradient-blue">How We Think</span>
            <br />
            About Risk Intelligence
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            The principles and design decisions that shape Risk Agents
          </p>
        </div>
      </section>

      {/* Core Architecture Principles */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-success mb-4 inline-block">Architecture</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              Three Foundational Innovations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Risk Agents is built on three core innovations that work together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl p-8 border border-blue-500/30">
              <div className="text-5xl mb-4">🧩</div>
              <div className="badge-ai mb-4">Innovation 1</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Skills Framework
              </h3>
              <p className="text-slate-300 mb-4">
                100+ modular capabilities across 9 risk domains. Each skill does one thing exceptionally well.
                Skills combine to solve complex problems.
              </p>
              <Link href="/platform/skills" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                Explore Skills →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl p-8 border border-amber-500/30">
              <div className="text-5xl mb-4">🔄</div>
              <div className="badge-risk mb-4">Innovation 2</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Fabrix Patterns
              </h3>
              <p className="text-slate-300 mb-4">
                Composable workflows that combine skills into solutions. Patterns track success metrics
                and evolve based on what works.
              </p>
              <Link href="/platform/patterns" className="text-amber-400 hover:text-amber-300 transition-colors text-sm">
                Explore Patterns →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl p-8 border border-green-500/30">
              <div className="text-5xl mb-4">💬</div>
              <div className="badge-success mb-4">Innovation 3</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                Natural Language
              </h3>
              <p className="text-slate-300 mb-4">
                Query-based reporting replaces 50+ static reports. Ask questions in plain English,
                get instant structured answers.
              </p>
              <Link href="/platform/reporting" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                Explore Reporting →
              </Link>
            </div>

          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-slate-50 mb-4">
              Why This Matters
            </h3>
            <p className="text-slate-300 mb-4">
              Traditional risk systems are monolithic—rigid, hard to change, and require months of implementation.
              Risk Agents is modular and composable by design:
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-slate-50">Start Small:</strong> Use a single skill for a specific task</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-slate-50">Grow Organically:</strong> Add more skills and patterns as needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-slate-50">Customize Freely:</strong> Combine skills in new ways for your specific needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-slate-50">Evolve Continuously:</strong> Patterns improve automatically based on success</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Context Management Philosophy */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-ai mb-4 inline-block">Knowledge Architecture</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              Context Is Everything
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              How Risk Agents manages the massive context required for intelligent risk analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                The Context Challenge
              </h3>
              <p className="text-slate-300 mb-4">
                Risk management requires understanding:
              </p>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">•</span>
                  <span>Organizational structure and hierarchy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">•</span>
                  <span>Risk policies, procedures, frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">•</span>
                  <span>Regulatory requirements (Basel, IFRS, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">•</span>
                  <span>Historical data and precedents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">•</span>
                  <span>Current exposures and positions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">•</span>
                  <span>Market conditions and trends</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm">
                Traditional systems store this in disconnected databases, documents, and people's heads.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                The Risk Agents Solution
              </h3>
              <p className="text-slate-300 mb-4">
                We use the <strong className="text-slate-50">3 C's methodology</strong>:
              </p>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">📥</span>
                  <span><strong className="text-slate-50">CAPTURE:</strong> Gather information from meetings, documents, voice, APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">📚</span>
                  <span><strong className="text-slate-50">CURATE:</strong> Structure, validate, categorize, enrich into knowledge graph</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">💡</span>
                  <span><strong className="text-slate-50">CONSULT:</strong> Use curated context to power intelligent analysis</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm">
                Every piece of information is captured once, curated continuously, and consulted instantly.
              </p>
              <div className="mt-6">
                <Link href="/platform/how-it-works" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  Learn More About 3 C's →
                </Link>
              </div>
            </div>

          </div>

          <div className="bg-gradient-to-r from-blue-500/10 via-amber-500/10 to-green-500/10 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-slate-50 mb-4">
              Key Insight: Context + Skills + Patterns = Intelligence
            </h3>
            <p className="text-slate-300">
              Risk Agents doesn't just run calculations—it <strong className="text-slate-50">understands your organization</strong>.
              When you ask "What's my largest single-name exposure?", it knows your organizational structure,
              your netting agreements, your collateral positions, your regulatory definitions, and your internal
              policies. That's what makes it intelligent, not just automated.
            </p>
          </div>
        </div>
      </section>

      {/* GTD Alignment */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-success mb-4 inline-block">Goal Alignment</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              GTD for Corporations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every action traces to organizational goals and principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                What is GTD?
              </h3>
              <p className="text-slate-300 mb-4">
                <strong className="text-slate-50">Getting Things Done (GTD)</strong> is David Allen's
                productivity methodology based on the principle that you can only make good decisions
                when you have clarity at all levels:
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">Ground</div>
                  <div className="text-slate-300">Current actions and tasks</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">10K ft</div>
                  <div className="text-slate-300">Current projects</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">20K ft</div>
                  <div className="text-slate-300">Areas of responsibility</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">30K ft</div>
                  <div className="text-slate-300">1-2 year goals</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">40K ft</div>
                  <div className="text-slate-300">3-5 year vision</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">50K ft</div>
                  <div className="text-slate-300">Life purpose and principles</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                GTD for Risk Management
              </h3>
              <p className="text-slate-300 mb-4">
                Risk Agents applies GTD principles to corporate risk management:
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">Ground</div>
                  <div className="text-slate-300">Daily risk monitoring tasks</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">10K ft</div>
                  <div className="text-slate-300">Current risk initiatives</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">20K ft</div>
                  <div className="text-slate-300">Risk domains (Credit, Market, etc.)</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">30K ft</div>
                  <div className="text-slate-300">Risk strategy and targets</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">40K ft</div>
                  <div className="text-slate-300">Risk transformation vision</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 text-slate-400">50K ft</div>
                  <div className="text-slate-300">Risk culture and principles</div>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-slate-50 mb-4">
              Why This Matters
            </h3>
            <p className="text-slate-300 mb-4">
              When you ask Risk Agents to "Assess counterparty risk for XYZ Bank", it doesn't just
              run a calculation. It understands:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Your risk appetite framework (50K ft)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Your strategic risk targets (30K ft)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Your credit risk policies (20K ft)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Your current concentrations (10K ft)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Your regulatory limits (Ground)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Your monitoring requirements (Ground)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Design Decisions */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-risk mb-4 inline-block">Key Decisions</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              Important Design Choices
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The architectural decisions that shape Risk Agents
            </p>
          </div>

          <div className="space-y-6">

            {/* Decision 1 */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2">
                    Skills Over Monoliths
                  </h3>
                  <p className="text-slate-300 mb-3">
                    We chose to build 100+ small, focused skills rather than a few large, complex modules.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-green-400 font-bold mb-2">✓ Benefits:</div>
                      <ul className="space-y-1 text-slate-300">
                        <li>• Easy to understand and maintain</li>
                        <li>• Can be combined in unlimited ways</li>
                        <li>• Fast to update or improve</li>
                        <li>• Clear responsibility boundaries</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-amber-400 font-bold mb-2">⚠ Trade-offs:</div>
                      <ul className="space-y-1 text-slate-300">
                        <li>• More coordination required</li>
                        <li>• Pattern complexity can grow</li>
                        <li>• Need robust orchestration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🤖</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2">
                    Claude as the Foundation
                  </h3>
                  <p className="text-slate-300 mb-3">
                    We built Risk Agents on Anthropic's Claude rather than OpenAI or other LLMs.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-green-400 font-bold mb-2">✓ Benefits:</div>
                      <ul className="space-y-1 text-slate-300">
                        <li>• 200K+ token context window</li>
                        <li>• Strong reasoning capabilities</li>
                        <li>• Better instruction following</li>
                        <li>• Focus on safety and accuracy</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-amber-400 font-bold mb-2">⚠ Trade-offs:</div>
                      <ul className="space-y-1 text-slate-300">
                        <li>• Single vendor dependency</li>
                        <li>• API availability considerations</li>
                        <li>• Model version management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 3 */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2">
                    Patterns That Learn
                  </h3>
                  <p className="text-slate-300 mb-3">
                    We designed patterns to track success metrics and evolve, not stay static.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-green-400 font-bold mb-2">✓ Benefits:</div>
                      <ul className="space-y-1 text-slate-300">
                        <li>• Continuous improvement over time</li>
                        <li>• Evidence-based best practices</li>
                        <li>• Adapts to your organization</li>
                        <li>• Promotes successful patterns</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-amber-400 font-bold mb-2">⚠ Trade-offs:</div>
                      <ul className="space-y-1 text-slate-300">
                        <li>• More complex metadata tracking</li>
                        <li>• Need pattern governance</li>
                        <li>• Success metrics must be defined</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 4 */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-50 mb-2">
                    Natural Language First
                  </h3>
                  <p className="text-slate-300 mb-3">
                    We prioritized natural language queries over traditional UI forms and dashboards.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-green-400 font-bold mb-2">✓ Benefits:</div>
                      <ul className="space-y-1 text-slate-300">
                        <li>• Zero learning curve</li>
                        <li>• Handles complex, nuanced requests</li>
                        <li>• Adapts to user's language</li>
                        <li>• No UI constraints on questions</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-amber-400 font-bold mb-2">⚠ Trade-offs:</div>
                      <ul className="space-y-1 text-slate-300">
                        <li>• Intent interpretation challenges</li>
                        <li>• Need strong NLU capabilities</li>
                        <li>• Requires query pattern library</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-risk mb-4 inline-block">Clear Boundaries</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              What Risk Agents Doesn't Do
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Being clear about what we're NOT building
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-800 rounded-2xl p-8 border border-red-500/30">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                We Don't Replace Your Core Systems
              </h3>
              <p className="text-slate-300">
                Risk Agents is not a trade booking system, general ledger, or data warehouse.
                We integrate with your existing systems—we don't replace them. Your source of truth
                stays where it is.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-red-500/30">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                We Don&apos;t Make Decisions For You
              </h3>
              <p className="text-slate-300">
                Risk Agents provides analysis, insights, and recommendations—but humans make the final
                decisions. We augment expertise, we don&apos;t replace judgment. Every analysis clearly shows
                its assumptions and limitations.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-red-500/30">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                We Don&apos;t Claim Perfect Accuracy
              </h3>
              <p className="text-slate-300">
                LLMs can make mistakes. We design for <strong className="text-slate-50">transparency and verification</strong>,
                not blind automation. Every significant calculation shows its workings. Every pattern
                tracks its success rate.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-red-500/30">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                We Don&apos;t Offer &ldquo;One Size Fits All&rdquo;
              </h3>
              <p className="text-slate-300">
                Every bank&apos;s risk function is different. Risk Agents provides skills and patterns you can
                customize, not rigid workflows you must follow. Your organizational structure, policies,
                and preferences shape how it works.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-success mb-4 inline-block">The Future</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              Where We&apos;re Headed
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The long-term vision for Risk Agents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="badge-ai mb-4">Phase 1: 2026</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                Core Platform Launch
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• 100+ skills across 9 domains</li>
                <li>• 75+ validated patterns</li>
                <li>• Natural language queries</li>
                <li>• Context management (3 C&apos;s)</li>
                <li>• Integration with core systems</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="badge-risk mb-4">Phase 2: 2027</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                Advanced Intelligence
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Pattern learning and evolution</li>
                <li>• Cross-domain pattern synthesis</li>
                <li>• Proactive risk identification</li>
                <li>• Advanced scenario modeling</li>
                <li>• Real-time monitoring</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="badge-success mb-4">Phase 3: 2028+</div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                Autonomous Risk Operations
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Self-improving patterns</li>
                <li>• Predictive risk analytics</li>
                <li>• Automated regulatory reporting</li>
                <li>• Industry pattern sharing</li>
                <li>• Continuous transformation</li>
              </ul>
            </div>

          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-8 border border-slate-700 text-center">
            <h3 className="text-2xl font-bold text-slate-50 mb-4">
              Long-Term Goal: Risk Management That Learns
            </h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              We envision a future where risk management systems get <strong className="text-slate-50">better over time</strong>,
              where patterns evolve based on outcomes, where knowledge compounds rather than deteriorates,
              and where every organization benefits from collective learning while maintaining their unique context.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Explore the platform or register for early access
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/platform" className="btn-primary">
              Explore Platform
            </Link>
            <Link href="/#early-access" className="btn-secondary">
              Get Early Access
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
