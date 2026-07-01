"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, PhoneCall, Award } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<"institutions" | "programs" | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 w-full flex justify-center pointer-events-none">
      <header 
        className={`w-full max-w-7xl rounded-full border transition-all duration-300 pointer-events-auto ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-md py-2 px-6 dark:bg-slate-950/90 dark:border-slate-800 dark:shadow-none" 
            : "bg-white/95 border-slate-150 shadow-sm py-2.5 px-6 dark:bg-slate-950 dark:border-slate-900"
        }`}
      >
        <div className="flex items-center justify-between h-10">
          
          {/* Sleek Minimal Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group pointer-events-auto">
            <span className="w-2.5 h-5 bg-blue-600 rounded-sm group-hover:scale-y-110 transition-all duration-200" />
            <span className="font-bold text-sm tracking-tight text-slate-950 dark:text-white">
              Elite<span className="text-blue-600 font-normal">Education</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 pointer-events-auto">
            <Link href="/" className="text-xs font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-450 dark:hover:text-white transition-colors">
              Home
            </Link>
            
            {/* Institutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("institutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                activeDropdown === "institutions" ? "text-blue-600" : "text-slate-600 hover:text-slate-950 dark:text-slate-450 dark:hover:text-white"
              }`}>
                Institutions <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === "institutions" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] pt-3 bg-transparent">
                  <div className="bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden dark:bg-slate-950 dark:border-slate-850 p-4">
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 pb-1.5 border-b border-slate-100 dark:border-slate-900">
                      Regional Directories
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {[
                        { name: "West Bengal Colleges", desc: "Salt Lake, Newtown, Jadavpur hubs", href: "/top-colleges-wb" },
                        { name: "Delhi NCR Colleges", desc: "Noida, Gurgaon, Greater Noida", href: "/top-colleges-dl" },
                        { name: "Pune Colleges", desc: "FLAME, Symbiosis, dynamic campuses", href: "/top-colleges-pu" },
                        { name: "Bangalore Colleges", desc: "Electronic City, Whitefield tech hubs", href: "/top-colleges-bl" }
                      ].map((col, idx) => (
                        <Link 
                          key={idx} 
                          href={col.href}
                          className="flex flex-col gap-0.5 p-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded group transition-all"
                        >
                          <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 dark:text-white">
                            {col.name}
                          </span>
                          <span className="text-[10px] text-slate-455">
                            {col.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("programs")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                activeDropdown === "programs" ? "text-blue-600" : "text-slate-600 hover:text-slate-950 dark:text-slate-455 dark:hover:text-white"
              }`}>
                Programs <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === "programs" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[420px] pt-3 bg-transparent">
                  <div className="bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden dark:bg-slate-950 dark:border-slate-850 p-4">
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 pb-1.5 border-b border-slate-100 dark:border-slate-900 flex justify-between">
                      <span>Admissions Categories</span>
                      <span className="text-[9px] font-medium text-blue-600">NEET/JoSAA Mapped</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {[
                        { name: "Medical (MBBS)", href: "/mbbs" },
                        { name: "Dental Surgery (BDS)", href: "/bds" },
                        { name: "Engineering (B.Tech)", href: "/engineering" },
                        { name: "Business (BBA/BCA)", href: "/business" },
                        { name: "Business (MBA)", href: "/mba" },
                        { name: "Nursing Programs", href: "/nursing" },
                        { name: "Pharmacy Studies", href: "/Pharmacy" },
                        { name: "NEET allocation checklist", href: "/medical" }
                      ].map((prog, idx) => (
                        <Link 
                          key={idx} 
                          href={prog.href}
                          className="text-[11px] font-semibold text-slate-700 hover:text-blue-600 p-1.5 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-900 rounded transition-colors"
                        >
                          {prog.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#services" className="text-xs font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-450 dark:hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/about-us" className="text-xs font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-455 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact-us" className="text-xs font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-455 dark:hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Call CTA with alive indicator */}
          <div className="hidden md:flex items-center gap-5 pointer-events-auto">
            <div className="flex flex-col items-end">
              <a 
                href="tel:+919905909990" 
                className="flex items-center gap-1.5 text-xs font-bold text-slate-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                <span>+91 99059-09990</span>
              </a>
              
              <div className="flex items-center gap-1 mt-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Advisor online</span>
              </div>
            </div>

            <Link href="/contact-us" className="btn-primary py-2 px-4.5 text-[11px] font-bold rounded-full">
              Seat Consultation
            </Link>
          </div>

          {/* Mobile Hamburg */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-1.5 text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white pointer-events-auto"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white dark:bg-slate-950 dark:border-slate-900 mt-2 p-6 flex flex-col gap-5 rounded-3xl shadow-lg pointer-events-auto">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-bold text-slate-900 hover:text-blue-600 dark:text-white"
              >
                Home
              </Link>
              
              <div className="flex flex-col gap-2 pl-2.5 border-l border-slate-100 dark:border-slate-800">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Institutions</span>
                {[
                  { name: "West Bengal Colleges", href: "/top-colleges-wb" },
                  { name: "Delhi NCR Colleges", href: "/top-colleges-dl" },
                  { name: "Pune Colleges", href: "/top-colleges-pu" },
                  { name: "Bangalore Colleges", href: "/top-colleges-bl" }
                ].map((c, i) => (
                  <Link 
                    key={i} 
                    href={c.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 pl-2.5 border-l border-slate-100 dark:border-slate-800">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Programs</span>
                {[
                  { name: "MBBS admissions", href: "/mbbs" },
                  { name: "B.Tech Engineering", href: "/engineering" },
                  { name: "MBA management", href: "/mba" },
                  { name: "BBA / BCA computer", href: "/business" }
                ].map((c, i) => (
                  <Link 
                    key={i} 
                    href={c.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>

              <Link 
                href="/#services" 
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-bold text-slate-900 hover:text-blue-600 dark:text-white"
              >
                Services
              </Link>
              <Link 
                href="/about-us" 
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-bold text-slate-900 hover:text-blue-600 dark:text-white"
              >
                About Us
              </Link>
              <Link 
                href="/contact-us" 
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-bold text-slate-900 hover:text-blue-600 dark:text-white"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-slate-900">
              <a 
                href="tel:+919905909990" 
                className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-950 dark:text-white p-3 border border-slate-200 rounded-full dark:border-slate-800"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>+91 99059-09990</span>
              </a>
              <Link 
                href="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary py-3 text-xs w-full text-center rounded-full"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
