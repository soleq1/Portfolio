// components/Header.jsx
'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
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
            <a href="mailto:edward.zie01@gmail.com" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <button
              onClick={() => setResumeOpen(true)}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-md transition-colors"
            >
              Resume
            </button>
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
              <a
                href="mailto:edward.zie01@gmail.com"
                className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={() => { setIsOpen(false); setResumeOpen(true); }}
                className="mx-6 my-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-md transition-colors text-left"
              >
                Resume
              </button>
            </nav>
          </div>
        )}
      </div>

    </header>

      {/* Resume Fullscreen — rendered outside header via portal */}
      {resumeOpen && createPortal(
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: '#000', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px 16px', background: '#111827', borderBottom: '1px solid #374151' }}>
            <button
              onClick={() => setResumeOpen(false)}
              style={{ color: '#9ca3af', background: 'none', border: 'none', fontSize: '1.75rem', cursor: 'pointer', lineHeight: 1 }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <iframe
            src="/resume/Resume_v1_5 (18).pdf"
            style={{ flex: 1, width: '100%', border: 'none' }}
            title="Resume"
          />
        </div>,
        document.body
      )}
    </>
  );
}