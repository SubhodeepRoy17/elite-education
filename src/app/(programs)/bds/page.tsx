"use client"

import Header from "@/components/Header"
import Footer from "@/components/footer"
import Overview from "./components/Overview"
import Advantages from "./components/Advantages"
import TypesOfPrograms from "./components/TypesOfPrograms"
import TopColleges from "./components/TopColleges"
import EntranceExams from "./components/EntranceExams"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, PhoneCall, Award } from "lucide-react"

export default function BDSPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans selection:bg-blue-100 selection:text-blue-950">
      <Header />
      
      {/* Hero Header */}
      <section className="border-b border-slate-100 py-12 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-start gap-4">
          <Link href="/medical" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Medical Desk
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded dark:bg-blue-950/40 dark:text-blue-400">
            Admissions counselling
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            BDS admissions 2026.
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl dark:text-slate-400 leading-relaxed">
            Choices locking sequence, clinical dental programs criteria, and NEET UG state/all-India allocation guides for Bachelor of Dental Surgery.
          </p>
        </div>
      </section>

      {/* Split Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-8 program-container">
          <Overview />
          <Advantages />
          <TypesOfPrograms />
          <TopColleges />
          <EntranceExams />
        </div>

        {/* Right Column (Sticky counselling desk) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
          
          <div className="bg-slate-950 text-white rounded-lg p-6 flex flex-col gap-5 dark:bg-slate-900">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase text-[9px] tracking-wider">
              <Award className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Dental Admissions Desk</span>
            </div>
            
            <h3 className="text-base font-bold text-white tracking-tight">Counselling Allocation Support</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              BDS seat allocations require strategy on NEET score cutoffs. Map safe government and private dental colleges with verified placement data.
            </p>
            
            <div className="flex flex-col gap-2.5 text-xs border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Dental seat matrix check</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>State &amp; All-India allocation lock sets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Scholarship options checks</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a href="tel:+919905909990" className="btn-primary w-full py-3 text-xs bg-blue-600 hover:bg-blue-700">
                <PhoneCall className="w-3.5 h-3.5 text-white" /> Call BDS Advisory
              </a>
              <Link href="/contact-us" className="btn-secondary w-full py-3 text-xs text-center border-white/10 text-white bg-transparent hover:bg-white/10 dark:hover:bg-slate-800">
                Register Intake Call
              </Link>
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 dark:bg-slate-950 dark:border-slate-800 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white border-b border-slate-100 pb-2 dark:border-slate-850">
              BDS Specifications
            </h3>
            
            <div className="flex flex-col gap-3 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold uppercase text-[9px]">Course Duration</span>
                <span className="text-slate-900 dark:text-white font-bold block mt-0.5">5.5 Years (Inc. 1 Yr Internship)</span>
              </div>
              <div className="border-t border-slate-100 pt-3 dark:border-slate-850">
                <span className="text-slate-400 block font-semibold uppercase text-[9px]">Entrance Exam</span>
                <span className="text-slate-900 dark:text-white font-bold block mt-0.5">NEET UG Required</span>
              </div>
              <div className="border-t border-slate-100 pt-3 dark:border-slate-850">
                <span className="text-slate-400 block font-semibold uppercase text-[9px]">Dental Council Mapped</span>
                <span className="text-slate-900 dark:text-white font-bold block mt-0.5">Yes, NM / State Registries</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}