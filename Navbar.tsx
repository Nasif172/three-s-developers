'use client';

import { useState } from 'react';
import Link from 'next/link';
// Icons removed so you can work offline

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-10 w-10 bg-blue-900 text-white flex items-center justify-center font-bold text-xl rounded">
                3S
              </div>
              <span className="font-bold text-2xl text-slate-800 tracking-tight">
                Three S
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-blue-900 font-medium">Home</Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-900 font-medium">Projects</Link>
            <Link href="/landowners" className="text-gray-600 hover:text-blue-900 font-medium">Landowners</Link>
            
            <Link href="/contact" className="bg-blue-900 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-800">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button (Text Only) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 font-bold">
              {isOpen ? "Close X" : "Menu +"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" className="block py-3 text-base font-medium text-gray-700">Home</Link>
            <Link href="/projects" className="block py-3 text-base font-medium text-gray-700">Projects</Link>
            <Link href="/landowners" className="block py-3 text-base font-medium text-gray-700">Landowners</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
