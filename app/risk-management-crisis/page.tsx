import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'The Risk Management Crisis - Risk Agents',
  description: 'Risk professionals are drowning in routine tasks while strategic threats evolve unchecked. Understand the gap between where most banks are today and where they need to be.',
};

export default function RiskManagementCrisisPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-muted hover:text-secondary transition-colors text-sm mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Risk Management Crisis
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Risk professionals are drowning in routine tasks while strategic threats evolve unchecked
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Where Most Banks Are Today */}
            <div className="bg-[rgb(22,22,22)] rounded-xl border border-[rgb(45,45,45)] overflow-hidden">
              <div className="p-6 border-b border-[rgb(45,45,45)]">
                <h2 className="text-xl font-bold text-red-400 flex items-center gap-2">
                  <span>✕</span> Where Most Banks Are Today
                </h2>
              </div>
              <div className="divide-y divide-[rgb(45,45,45)]">
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">Routine &quot;tick-box&quot; work</strong> crowding out strategic thinking
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">Volumes of static reports</strong> generated daily, weekly, and monthly—most go unread
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">Information scattered</strong> across the organisation without coherent structure
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">Knowledge trapped in heads</strong>—walks out when people leave
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">Undocumented processes</strong>—AI can&apos;t help what it can&apos;t see
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">Expensive consultants</strong> who take their knowledge with them
                  </p>
                </div>
              </div>
            </div>

            {/* Where You Need to Be */}
            <div className="bg-[rgb(22,22,22)] rounded-xl border border-[rgb(45,45,45)] overflow-hidden">
              <div className="p-6 border-b border-[rgb(45,45,45)]">
                <h2 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
                  <span>✓</span> Where You Need to Be
                </h2>
              </div>
              <div className="divide-y divide-[rgb(45,45,45)]">
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">Strategic risk/return focus</strong>—AI handles the grunt work
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">Natural language queries</strong>—ask questions, get instant answers
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">AI-powered knowledge platform</strong>—AI never tires of documenting, finds patterns, and structures information
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">Captured, curated knowledge</strong> that stays and compounds
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">AI-readable process blueprints</strong>—documented and versioned
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-secondary">
                    <strong className="text-white">Shared best practices</strong>—community-driven improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            The Core Problem
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            The universe of potential risks vastly exceeds human capacity to analyze. Most risks remain invisible—not because they&apos;re unimportant, but because there simply isn&apos;t time to look.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            A typical risk team can deeply analyze perhaps 50-100 scenarios per quarter. The space of &quot;extreme but plausible&quot; scenarios? Thousands.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            Meanwhile, institutional knowledge walks out the door every time an experienced risk professional retires or moves on. Decades of judgment, pattern recognition, and hard-won lessons—gone.
          </p>
        </div>
      </section>

      {/* The Symptoms */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Symptoms of the Crisis
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-3">Compliance Theatre</h3>
              <p className="text-secondary text-sm">
                Teams spend 80% of their time on routine compliance tasks, leaving only 20% for genuine risk analysis and strategic thinking.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-3">Report Overload</h3>
              <p className="text-secondary text-sm">
                Hundreds of pages generated weekly that nobody reads. Information exists but isn&apos;t accessible when decisions need to be made.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-3">Knowledge Silos</h3>
              <p className="text-secondary text-sm">
                Critical insights trapped in email threads, spreadsheets, and people&apos;s heads. No systematic way to capture and share what the organisation knows.
              </p>
            </div>

            <div className="bg-[rgb(22,22,22)] rounded-lg p-6 border border-[rgb(45,45,45)]">
              <h3 className="text-lg font-bold text-white mb-3">Reactive Posture</h3>
              <p className="text-secondary text-sm">
                Always responding to the last crisis rather than anticipating the next one. No capacity for proactive risk exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Stakes */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            The Stakes
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            This isn&apos;t just an efficiency problem. It&apos;s a strategic vulnerability. While risk teams are buried in routine work, genuinely important risks go undetected.
          </p>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            The 2008 financial crisis, the 2023 banking turmoil—these weren&apos;t failures of risk models. They were failures of attention. The warning signs existed; there simply wasn&apos;t capacity to see them.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            The institutions that solve this problem will have a genuine competitive advantage. Those that don&apos;t will continue playing catch-up—always one crisis behind.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[rgb(28,28,28)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            There&apos;s a Better Way
          </h2>
          <p className="text-lg text-secondary mb-8">
            AI doesn&apos;t replace risk professionals—it expands what they can meaningfully oversee. See how Risk Agents is addressing this crisis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#learn-more" className="btn-primary">
              Explore Our Approach
            </Link>
            <Link href="/platform/human-in-the-loop" className="btn-secondary">
              Human-in-the-Loop
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
