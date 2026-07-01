"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Send, Check } from "lucide-react"

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 dark:bg-slate-950 dark:border-slate-900 dark:text-slate-400">
      
      {/* Admissions bulletin newsletter sign up bar */}
      <div className="border-b border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
              Admissions Bulletin Registry
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Receive updates on NEET UG cutoff drops, JoSAA seats matrix updates, and key scholarship deadlines.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto max-w-sm">
            <input 
              type="email"
              placeholder="name@university.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-xs px-3.5 py-2.5 rounded w-full focus:outline-none focus:border-blue-600 dark:bg-slate-900 dark:border-slate-800 dark:text-white dark:focus:border-blue-500"
              required
            />
            <button 
              type="submit"
              className="btn-primary text-xs shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium flex items-center justify-center gap-1.5"
            >
              {subscribed ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Subscribed
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Join Registry
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand & Mission */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-2.5 h-6 bg-blue-600 rounded-sm" />
            <span className="font-bold text-base tracking-tight text-slate-950 dark:text-white">
              Elite<span className="text-blue-600 font-normal">Education</span>
            </span>
          </Link>
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-450">
            Admissions counseling and global education consultancy. Assisting students toward elite national and international programs.
          </p>
          <div className="flex items-center gap-3 mt-2">
            {[
              { icon: <Facebook className="w-4 h-4" />, href: "#" },
              { icon: <Instagram className="w-4 h-4" />, href: "#" },
              { icon: <Twitter className="w-4 h-4" />, href: "#" },
              { icon: <Youtube className="w-4 h-4" />, href: "#" }
            ].map((soc, idx) => (
              <a 
                key={idx} 
                href={soc.href} 
                className="p-1.5 border border-slate-200 rounded hover:border-slate-400 hover:text-slate-950 dark:border-slate-800 dark:hover:border-slate-650 dark:hover:text-white transition-colors"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column: Destinations */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white">
            Institutions
          </h4>
          <nav className="flex flex-col gap-2.5 text-xs">
            <Link href="/top-colleges-wb" className="hover:text-blue-600 transition-colors">West Bengal Colleges</Link>
            <Link href="/top-colleges-dl" className="hover:text-blue-600 transition-colors">Delhi NCR Colleges</Link>
            <Link href="/top-colleges-pu" className="hover:text-blue-600 transition-colors">Pune Colleges</Link>
            <Link href="/top-colleges-bl" className="hover:text-blue-600 transition-colors">Bangalore Colleges</Link>
          </nav>
        </div>

        {/* Column: Core Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white">
            Programs
          </h4>
          <nav className="flex flex-col gap-2.5 text-xs">
            <Link href="/engineering" className="hover:text-blue-600 transition-colors">Engineering (B.Tech / M.Tech)</Link>
            <Link href="/medical" className="hover:text-blue-600 transition-colors">Medical (MBBS / BDS)</Link>
            <Link href="/mba" className="hover:text-blue-600 transition-colors">Business &amp; MBA Guidance</Link>
            <Link href="/business" className="hover:text-blue-600 transition-colors">BBA / BCA Admissions</Link>
            <Link href="/nursing" className="hover:text-blue-600 transition-colors">Nursing Programs</Link>
            <Link href="/Pharmacy" className="hover:text-blue-600 transition-colors">Pharmacy Studies</Link>
          </nav>
        </div>

        {/* Column: Corporate */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white">
            Corporate
          </h4>
          <nav className="flex flex-col gap-2.5 text-xs">
            <Link href="/about-us" className="hover:text-blue-600 transition-colors">About Our Agency</Link>
            <Link href="/contact-us" className="hover:text-blue-600 transition-colors">Work with Us</Link>
            <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Principles</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Client Portal</Link>
          </nav>
        </div>

        {/* Column: Support & Location */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white">
            Contact
          </h4>
          <div className="flex flex-col gap-3 text-xs leading-relaxed">
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <a href="mailto:support@eliteeducation.co.in" className="hover:text-blue-600 transition-colors">
                support@eliteeducation.co.in
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href="tel:+919905909990" className="hover:text-blue-600 transition-colors">+91 99059-09990</a>
                <a href="tel:+918777469721" className="hover:text-blue-600 transition-colors">+91 87774-69721</a>
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                Unit 303, Merlin Matrix, DN 10, Salt Lake Sector V, Kolkata — 700091
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom / Disclaimer */}
      <div className="border-t border-slate-200 dark:border-slate-900 py-8 bg-slate-100/50 dark:bg-slate-950/20 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
            <span>© {new Date().getFullYear()} Elite Education Consultancy. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-slate-950 dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-950 dark:hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/contact-us" className="hover:text-slate-950 dark:hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
          <p className="text-[10px] leading-relaxed text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60 pt-4">
            <strong>Disclaimer:</strong> Elite Education is an independent educational consulting firm. All institution details, rankings, and exam guides are collected from primary university sources and public directories for information facilitation. Admission decisions are governed entirely by autonomous university boards; Elite Education does not guarantee admission placement outcomes.
          </p>
        </div>
      </div>

    </footer>
  )
}
