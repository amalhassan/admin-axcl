'use client';
import React from 'react'
import Link from 'next/link';

import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="relative">
    <div className='flex justify-between w-full h-20 items-center px-6 sm:px-20 lg:px-25'>
      <Link href='#' className="font-family-display text-primary-accent text-2xl lg:text-3x">Admin Accelerator</Link>
      <div className="hidden md:flex items-center gap-6 lg:gap-8 font-family-sans font-medium text-bright-orange">
        <Link href='#mission' className="hover:text-dark-purple">Mission</Link>
        <Link href='#journey' className="hover:text-dark-purple">Journey</Link>
        <Link href='#get-started' className="hover:text-dark-purple">Get Started</Link>
      </div>
      {/* Mobile Hamburger Button (hidden on md and up) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open main menu"
          >
            {/* Simple SVG for a hamburger icon */}
            <svg
              className="w-6 h-6 text-primary-accent"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-lavender-blue z-50">
           {/* Menu Header with Close Button */}
           <div className="flex justify-between items-center h-20 px-4">
              <p className="font-family-display text-primary-accent text-2xl">Admin Accerlerator</p>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close main menu"
              >
                {/* Simple SVG for a close (X) icon */}
                <svg className="w-6 h-6 text-slate-blue hover:text-bright-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
           </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] font-sans text-2xl text-primary-accent gap-y-8">
            <Link href="#mission" className="hover:text-bright-orange" onClick={() => setIsMenuOpen(false)}>Mission</Link>
            <Link href="#journey" className="hover:text-bright-orange" onClick={() => setIsMenuOpen(false)}>Journey</Link>
            <Link href="#get-started" className="hover:text-bright-orange" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
         
    </div>
    </nav>
  )
}

export default NavBar
