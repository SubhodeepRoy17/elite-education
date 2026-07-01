"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import Overview from "./components/Overview"
import Advantages from "./components/Advantages"
import TypesOfPrograms from "./components/TypesOfPrograms"
import TopColleges from "./components/TopColleges"
import EntranceExams from "./components/EntranceExams"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, PhoneCall, Award } from "lucide-react"

export default function PharmacyPage() {
  const [activeProgram, setActiveProgram] = useState<"B.Pharm" | "M.Pharm">("B.Pharm")

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans selection:bg-blue-100 selection:text-blue-950">
      <Header />
      
      {/* Hero Header */}
      <section className="border-b border-slate-100 py-12 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-start gap-4">
          <Link href="/" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Admissions Desk
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded dark:bg-blue-950/40 dark:text-blue-400">
            Admissions counselling
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Pharmacy Admissions 2026.
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl dark:text-slate-400 leading-relaxed">
            Counselling guides, placement stats, and selection guidelines for B.Pharm and M.Pharm undergraduate and postgraduate pharmacy pathways.
          </p>

          {/* Micro-rounded tab selectors */}
          <div className="flex gap-1 bg-slate-50 p-1 border border-slate-200 rounded dark:bg-slate-900 dark:border-slate-800 mt-4">
            {(["B.Pharm", "M.Pharm"] as const).map((prog) => (
              <button
                key={prog}
                onClick={() => setActiveProgram(prog)}
                className={`px-4 py-1.5 text-xs font-semibold rounded transition-colors ${
                  activeProgram === prog 
                    ? "bg-white text-blue-600 shadow-sm border border-slate-200/50 dark:bg-slate-950 dark:text-white dark:border-slate-800" 
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {prog} Program
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Split Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-8 program-container">
          <Overview activeProgram={activeProgram} />
          <Advantages activeProgram={activeProgram} />
          <TypesOfPrograms activeProgram={activeProgram} />
          <TopColleges activeProgram={activeProgram} />
          <EntranceExams activeProgram={activeProgram} />
        </div>

        {/* Right Column (Sticky counselling desk) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
          
          <div className="bg-slate-950 text-white rounded-lg p-6 flex flex-col gap-5 dark:bg-slate-900">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase text-[9px] tracking-wider">
              <Award className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Pharmacy Advisory Desk</span>
            </div>
            
            <h3 className="text-base font-bold text-white tracking-tight">{activeProgram} Option Lock Support</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We assist pharmacy aspirants in securing seats in PCI (Pharmacy Council of India) approved colleges. Map placements and research facilities dynamically.
            </p>
            
            <div className="flex flex-col gap-2.5 text-xs border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>B.Pharm &amp; M.Pharm seat registers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>PCI approved college mappings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>State entrance cutoff matrices</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a href="tel:+919905909990" className="btn-primary w-full py-3 text-xs bg-blue-600 hover:bg-blue-700">
                <PhoneCall className="w-3.5 h-3.5 text-white" /> Call Pharmacy Desk
              </a>
              <Link href="/contact-us" className="btn-secondary w-full py-3 text-xs text-center border-white/10 text-white bg-transparent hover:bg-white/10 dark:hover:bg-slate-800">
                Register Intake Call
              </Link>
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 dark:bg-slate-950 dark:border-slate-800 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white border-b border-slate-100 pb-2 dark:border-slate-850">
              {activeProgram} Specifications
            </h3>
            
            <div className="flex flex-col gap-3 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold uppercase text-[9px]">Course Options</span>
                <span className="text-slate-900 dark:text-white font-bold block mt-0.5">
                  {activeProgram === "B.Pharm" ? "B.Pharm - 4 Years" : "M.Pharm - 2 Years"}
                </span>
              </div>
              <div className="border-t border-slate-100 pt-3 dark:border-slate-850">
                <span className="text-slate-400 block font-semibold uppercase text-[9px]">Entrance Exams</span>
                <span className="text-slate-900 dark:text-white font-bold block mt-0.5">
                  {activeProgram === "B.Pharm" ? "WBJEE Pharm, CET, Boards Merit" : "GPAT Entrance Exam"}
                </span>
              </div>
              <div className="border-t border-slate-100 pt-3 dark:border-slate-850">
                <span className="text-slate-400 block font-semibold uppercase text-[9px]">PCI Approved</span>
                <span className="text-slate-900 dark:text-white font-bold block mt-0.5">Yes, NM Mapped</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}
