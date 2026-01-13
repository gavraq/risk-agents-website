'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Handle scroll for sticky navigation transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav-scrolled'
          : 'glass-nav'
      }`}
    >
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
            {/* Risk Agents (Platform) Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1">
                Risk Agents
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <Link href="/platform" className="dropdown-item">
                    Overview
                  </Link>
                  <Link href="/platform/skills" className="dropdown-item">
                    Skills Framework
                  </Link>
                  <Link href="/skills-sharing/how-it-works" className="dropdown-item">
                    How It Works
                  </Link>
                </div>
              </div>
            </div>

            {/* Members Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1">
                Members
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <Link href="/members/banks" className="dropdown-item">
                    Banks
                  </Link>
                  <Link href="/members/investment-managers" className="dropdown-item">
                    Investment Managers
                  </Link>
                  <Link href="/members/insurance" className="dropdown-item">
                    Insurance Companies
                  </Link>
                  <Link href="/skills-sharing/founding-members" className="dropdown-item">
                    Founding Members
                  </Link>
                </div>
              </div>
            </div>

            {/* How We Think (was Design Philosophy) */}
            <Link href="/about/philosophy" className="nav-link">
              How We Think
            </Link>

            {/* About */}
            <Link href="/about" className="nav-link">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden nav-link p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mobile-menu">
          {/* Risk Agents Section */}
          <div className="mobile-menu-section">
            <button
              onClick={() => toggleDropdown('platform')}
              className="mobile-menu-header"
            >
              Risk Agents
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'platform' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`mobile-dropdown ${openDropdown === 'platform' ? 'open' : ''}`}>
              <Link href="/platform" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>
                Overview
              </Link>
              <Link href="/platform/skills" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>
                Skills Framework
              </Link>
              <Link href="/skills-sharing/how-it-works" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>
                How It Works
              </Link>
            </div>
          </div>

          {/* Members Section */}
          <div className="mobile-menu-section">
            <button
              onClick={() => toggleDropdown('members')}
              className="mobile-menu-header"
            >
              Members
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'members' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`mobile-dropdown ${openDropdown === 'members' ? 'open' : ''}`}>
              <Link href="/members/banks" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>
                Banks
              </Link>
              <Link href="/members/investment-managers" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>
                Investment Managers
              </Link>
              <Link href="/members/insurance" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>
                Insurance Companies
              </Link>
              <Link href="/skills-sharing/founding-members" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>
                Founding Members
              </Link>
            </div>
          </div>

          {/* Other Links */}
          <div className="mobile-menu-divider"></div>
          <Link href="/about/philosophy" className="mobile-menu-link" onClick={() => setIsOpen(false)}>
            How We Think
          </Link>
          <Link href="/about" className="mobile-menu-link" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
