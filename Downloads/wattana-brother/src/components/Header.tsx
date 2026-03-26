'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: 'หน้าแรก', href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'เกี่ยวกับเรา', href: '/about/', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { name: 'โรงงาน', href: '/factory/', icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' },
  { name: 'สินค้า', href: '/products/', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { name: 'บริการ', href: '/supply/', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  { name: 'ติดต่อ', href: '/contact/', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-navy text-ice-white z-50 shadow-xl border-b border-steel-blue/30">
      <nav className="container mx-auto px-4 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative">
              {/* Icon/Logo */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1.5 shadow-md transform transition-all duration-300 group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt="Wattana Brother Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-ice-white transition-all duration-300 group-hover:text-accent-cyan">
                WATTANA BROTHER
              </span>
              <p className="text-xs text-fog-gray -mt-1">ตั้งแต่ปี 1984</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-ice-white hover:text-accent-cyan transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-steel-blue/0 group-hover:bg-steel-blue/30 rounded-lg transition-all duration-300"></span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent-cyan transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side - Phone + CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center bg-steel-blue/20 rounded-full px-4 py-2 border border-steel-blue/30">
              <svg
                className="w-4 h-4 text-accent-cyan mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+6627498115" className="text-sm font-medium text-ice-white hover:text-accent-cyan transition-colors">02-749-8115-6</a>
              <span className="mx-2 text-steel-blue">|</span>
              <a href="tel:+66811381555" className="text-sm font-medium text-ice-white hover:text-accent-cyan transition-colors">081-138-1555</a>
            </div>

            <Link
              href="/contact/"
              className="relative px-6 py-2.5 bg-steel-blue hover:bg-steel-blue-dark text-ice-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span>ขอใบเสนอราคา</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2.5 rounded-lg hover:bg-steel-blue/30 transition-colors duration-300"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 pb-8 border-t border-steel-blue/30">
            {/* Navigation Links */}
            <ul className="space-y-1 px-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3.5 text-ice-white hover:bg-steel-blue/20 rounded-xl transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-steel-blue/30 group-hover:bg-steel-blue rounded-lg flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-accent-cyan group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                      </svg>
                    </div>
                    <span className="font-medium text-lg group-hover:text-accent-cyan transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="my-4 mx-4 border-t border-steel-blue/30"></div>

            {/* Phone Numbers */}
            <div className="px-4 space-y-3">
              <p className="text-fog-gray text-sm font-medium mb-2">โทรหาเราได้เลย</p>
              <a
                href="tel:+6627498115"
                className="flex items-center gap-3 p-3 bg-steel-blue/20 hover:bg-steel-blue/30 rounded-xl transition-colors"
              >
                <div className="w-10 h-10 bg-steel-blue rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-fog-gray">สำนักงาน</p>
                  <p className="text-ice-white font-semibold">02-749-8115-6</p>
                </div>
              </a>
              <a
                href="tel:+66811381555"
                className="flex items-center gap-3 p-3 bg-steel-blue/20 hover:bg-steel-blue/30 rounded-xl transition-colors"
              >
                <div className="w-10 h-10 bg-accent-cyan rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-fog-gray">มือถือ</p>
                  <p className="text-ice-white font-semibold">081-138-1555</p>
                </div>
              </a>
            </div>

            {/* CTA Button */}
            <div className="px-4 mt-6">
              <Link
                href="/contact/"
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-steel-blue to-accent-cyan hover:from-steel-blue-dark hover:to-steel-blue text-ice-white font-bold rounded-xl transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>ขอใบเสนอราคา</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          {/* Safe area padding for iPhone */}
          <div className="h-6"></div>
        </div>
      </nav>
    </header>
  )
}
