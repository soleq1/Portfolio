// components/Header.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Edward
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
              Work Experience
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="mailto:edward.zie01@gmail.com" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span 
              className={`w-6 h-0.5 bg-white transition-all transform ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-white transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-white transition-all transform ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
            <nav className="flex flex-col py-4">
              <Link 
                href="#experience" 
                className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Work Experience
              </Link>
              <Link 
                href="#projects" 
                className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}