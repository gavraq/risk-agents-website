'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-gradient-blue">Risk Agents</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-slate-300 hover:text-slate-50 transition-colors flex items-center gap-1">
                Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                  <Link href="/platform/reporting" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Natural Language Reporting
                  </Link>
                  <Link href="/platform/how-it-works" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    How It Works (3 C&apos;s)
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/domains" className="text-slate-300 hover:text-slate-50 transition-colors">
              Risk Domains
            </Link>

            <div className="relative group">
              <button className="text-slate-300 hover:text-slate-50 transition-colors flex items-center gap-1">
                About
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-lg py-2">
                  <Link href="/about" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Our Story
                  </Link>
                  <Link href="/about/philosophy" className="block px-4 py-2 text-slate-300 hover:text-slate-50 hover:bg-slate-700 transition-colors">
                    Design Philosophy
                  </Link>
                </div>
              </div>
            </div>

            <a
              href="#early-access"
              className="btn-primary"
            >
              Get Early Access
            </a>
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
            <Link href="/platform" className="block text-slate-300 hover:text-slate-50 transition-colors py-2">
              Platform Overview
            </Link>
            <Link href="/platform/skills" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Skills Framework
            </Link>
            <Link href="/platform/patterns" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Fabrix Patterns
            </Link>
            <Link href="/platform/reporting" className="block text-slate-300 hover:text-slate-50 transition-colors py-2 pl-4">
              Natural Language Reporting
            </Link>
            <Link href="/domains" className="block text-slate-300 hover:text-slate-50 transition-colors py-2">
              Risk Domains
            </Link>
            <Link href="/about" className="block text-slate-300 hover:text-slate-50 transition-colors py-2">
              About
            </Link>
            <a href="#early-access" className="block btn-primary text-center mt-4">
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
