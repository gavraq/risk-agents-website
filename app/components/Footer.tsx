import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/RiskAgentsLogo.png"
              alt="Risk Agents - Expanding the boundaries of your vision"
              width={150}
              height={42}
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="text-center md:text-right text-slate-400 text-sm">
            <p>© 2025 Risk Agents. Built by <a href="https://www.gavinslater.com" className="text-blue-400 hover:text-blue-300 transition-colors">Gavin Slater</a></p>
            <p className="mt-1">30 Years of Chief Risk Officer Expertise, Delivered by AI</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
