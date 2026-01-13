'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/RiskAgentsLogo.png"
              alt="Risk Agents - Expanding the boundaries of your vision"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Platform Dropdown */}
            <div className="relative group">
              <button className="text-slate-300 hover:text-slate-50 transition-colors flex items-center gap-1">
                Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-lg py-2">
                  <Link href="/platform" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Overview
                  </Link>
                  <Link href="/platform/skills" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Skills Framework
                  </Link>
                  <Link href="/platform/patterns" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Fabrix Patterns
                  </Link>
                  <Link href="/platform/goal-alignment" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    GTD Goal Alignment
                  </Link>
                  <Link href="/platform/context-engineering" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Context Engineering
                  </Link>
                  <Link href="/platform/reporting" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Natural Language Reporting
                  </Link>
                  <Link href="/platform/human-in-the-loop" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Human-in-the-Loop
                  </Link>
                </div>
              </div>
            </div>

            {/* Skills Sharing Dropdown - NEW */}
            <div className="relative group">
              <button className="text-slate-300 hover:text-slate-50 transition-colors flex items-center gap-1">
                Skills Sharing
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-lg py-2">
                  <Link href="/skills-sharing" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Why Share?
                  </Link>
                  <Link href="/skills-sharing/how-it-works" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    How It Works
                  </Link>
                  <Link href="/skills-sharing/founding-members" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Founding Members
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/domains" className="text-slate-300 hover:text-slate-50 transition-colors">
              Risk Domains
            </Link>

            <Link href="/about/philosophy" className="text-slate-300 hover:text-slate-50 transition-colors">
              Design Philosophy
            </Link>

            <Link href="/about" className="text-slate-300 hover:text-slate-50 transition-colors">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-slate-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-6 py-4 space-y-3">
            {/* Platform Section */}
            <div className="text-slate-400 text-sm font-semibold uppercase tracking-wide pt-2">Platform</div>
            <Link href="/platform" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Overview
            </Link>
            <Link href="/platform/skills" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Skills Framework
            </Link>
            <Link href="/platform/patterns" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Fabrix Patterns
            </Link>
            <Link href="/platform/goal-alignment" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              GTD Goal Alignment
            </Link>
            <Link href="/platform/context-engineering" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Context Engineering
            </Link>
            <Link href="/platform/reporting" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Natural Language Reporting
            </Link>
            <Link href="/platform/human-in-the-loop" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Human-in-the-Loop
            </Link>

            {/* Skills Sharing Section */}
            <div className="text-slate-400 text-sm font-semibold uppercase tracking-wide pt-4">Skills Sharing</div>
            <Link href="/skills-sharing" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Why Share?
            </Link>
            <Link href="/skills-sharing/how-it-works" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              How It Works
            </Link>
            <Link href="/skills-sharing/founding-members" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Founding Members
            </Link>

            {/* Other Links */}
            <div className="border-t border-slate-700 pt-4 mt-4">
              <Link href="/domains" className="block text-slate-300 hover:text-slate-50 transition-colors py-2">
                Risk Domains
              </Link>
              <Link href="/about" className="block text-slate-300 hover:text-slate-50 transition-colors py-2">
                About
              </Link>
              <Link href="/about/philosophy" className="block text-slate-300 hover:text-slate-50 transition-colors py-2">
                Design Philosophy
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
