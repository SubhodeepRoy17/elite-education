"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, FileText, PhoneCall, AlertCircle, Award } from "lucide-react"

export default function MedicalPage() {
  const stats = [
    { value: "850+", label: "MBBS Seats Placed" },
    { value: "50+", label: "Government Colleges Mapped" },
    { value: "96.2%", label: "Allotment Accuracy Rate" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans selection:bg-blue-100 selection:text-blue-950">
      <Header />

      <main className="flex-1 w-full">
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Admissions Desk</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded dark:bg-blue-950/40 dark:text-blue-400">
                Admissions Intake 2026
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1] max-w-xl">
                Undergraduate Medical Admissions Counselling.
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Secure allocations across elite government and private medical institutions. We provide expert choice locking analysis for MCC, state UGAC registries, and NEET UG quota allocations.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/contact-us" className="btn-primary py-3.5 px-6">
                  Schedule NEET Guidance <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#programs-directory" className="btn-secondary py-3.5 px-6">
                  View Programs Directory
                </a>
              </div>

              {/* Stats metric strip */}
              <div className="w-full grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 dark:border-slate-900 mt-4">
                {stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white">{s.value}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Banner Image Frame */}
            <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] bg-slate-50 border border-slate-200 rounded overflow-hidden dark:bg-slate-900 dark:border-slate-800">
              <Image
                src="/medicalmain.png"
                alt="Medical students in professional laboratory mapping curriculum targets"
                fill
                className="object-cover opacity-90 dark:opacity-80"
                priority
                unoptimized
              />
              <div className="absolute top-4 left-4 bg-white/95 border border-slate-200 px-3 py-1 rounded text-[10px] font-bold text-slate-900 dark:bg-slate-950/95 dark:border-slate-850 dark:text-white">
                🩺 MCI / NMC Mapped Colleges Only
              </div>
            </div>

          </div>
        </section>

        {/* Programs Directory section */}
        <section id="programs-directory" className="py-20 bg-slate-50 border-y border-slate-250/60 dark:bg-slate-900/30 dark:border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="max-w-xl mb-16">
              <span className="w-8 h-1 bg-blue-600 block mb-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Qualifications Matrix</span>
              <h2 className="section-title mt-2 mb-3">Undergraduate Medical Courses</h2>
              <p className="section-desc">
                Review specific eligibility standards, duration, and accepted counseling paths for UG medical programs.
              </p>
            </div>

            {/* Asymmetric layout compositions */}
            <div className="flex flex-col gap-8">
              
              {/* MBBS - Featured Wide Block */}
              <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded dark:bg-blue-900/30">Most Preferred</span>
                    <span className="text-xs font-medium text-slate-400">5.5 Years Duration</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white mt-3 mb-2">
                    Bachelor of Medicine &amp; Bachelor of Surgery (MBBS)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    The core primary medical degree qualifying graduates to practice clinical medicine and surgery in India. Mapped across AIIMS, JIPMER, and top state government medical colleges.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Exam: NEET UG Required</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Minimum Eligibility: 50% in PCB Boards</span>
                  </div>
                </div>

                <Link href="/mbbs" className="btn-primary shrink-0 py-3 px-6 text-xs w-full lg:w-auto">
                  Explore MBBS Admissions <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* BDS & BPT - Split Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* BDS */}
                <div className="p-6 bg-white border border-slate-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 flex flex-col justify-between h-72">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Dental Surgery</span>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white mt-2 mb-2">
                      Bachelor of Dental Surgery (BDS)
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      5-year dental education program focusing on dental healthcare, surgery, and prosthodontics. Mapped across premier dental clinics and government departments.
                    </p>
                  </div>
                  <div className="border-t border-slate-100 dark:border-slate-900 pt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500">Exam: NEET UG</span>
                    <Link href="/bds" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                      <span>Dental Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* BPT */}
                <div className="p-6 bg-white border border-slate-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 flex flex-col justify-between h-72">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Physiotherapy</span>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white mt-2 mb-2">
                      Bachelor of Physiotherapy (BPT)
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      4.5-year healthcare course training professional physiotherapists in rehabilitation, physical therapy, sports medicine, and exercises logic.
                    </p>
                  </div>
                  <div className="border-t border-slate-100 dark:border-slate-900 pt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500">Exam: CET / Merit Entry</span>
                    <Link href="/bpt" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                      <span>Therapy Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* BHMS & BAMS - Monospaced Tabular row style */}
              <div className="border border-slate-200 bg-white rounded-lg overflow-hidden dark:border-slate-800 dark:bg-slate-950">
                <div className="p-4 bg-slate-50 border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-bold uppercase text-slate-500">Alternative Medical Systems (AYUSH)</span>
                  <span className="text-slate-400">NEET UG Qualified Mandatory</span>
                </div>
                
                <div className="divide-y divide-slate-150 dark:divide-slate-800">
                  {[
                    { name: "Bachelor of Homeopathic Medicine and Surgery (BHMS)", duration: "5.5 Years", link: "/bhms", overview: "Detailed academic coursework mapping clinical homoeopathic diagnostics, therapeutics, and surgical systems." },
                    { name: "Bachelor of Ayurvedic Medicine and Surgery (BAMS)", duration: "5.5 Years", link: "/bams", overview: "Integrated Ayurvedic medicine system combined with modern surgical anatomy details and pharmacology." }
                  ].map((ay, idx) => (
                    <div key={idx} className="p-6 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center hover:bg-slate-50/20">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-slate-950 dark:text-white">{ay.name}</h4>
                          <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded dark:border-slate-800">
                            {ay.duration}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed max-w-xl">
                          {ay.overview}
                        </p>
                      </div>
                      <Link href={ay.link} className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 shrink-0">
                        <span>AYUSH Pathway</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* NEET UG Counselling Process */}
        <section className="py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="max-w-xl mb-16">
              <span className="w-8 h-1 bg-blue-600 block mb-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Counselling Registry</span>
              <h2 className="section-title mt-2">All-India &amp; State NEET UG Allocation Workflow</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="flex flex-col gap-3.5 border-l-2 border-slate-200 pl-4 py-1.5 relative dark:border-slate-800">
                <span className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950" />
                <span className="text-[10px] font-bold uppercase text-blue-600 tracking-wider">Step 01</span>
                <h3 className="text-base font-bold text-slate-950 dark:text-white">Entrance Evaluation</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  NEET UG examination results publishing. Verification of qualifying percentiles according to NMC notifications.
                </p>
              </div>

              <div className="flex flex-col gap-3.5 border-l-2 border-slate-200 pl-4 py-1.5 relative dark:border-slate-800">
                <span className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-slate-400 border-4 border-white dark:border-slate-950" />
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Step 02</span>
                <h3 className="text-base font-bold text-slate-950 dark:text-white">Option Matrix Locking</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Mapping of choice lists in MCC (for 15% AIIMS/Govt seats) and state counselling portals (for 85% domicile seats).
                </p>
              </div>

              <div className="flex flex-col gap-3.5 border-l-2 border-slate-200 pl-4 py-1.5 relative dark:border-slate-800">
                <span className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-slate-400 border-4 border-white dark:border-slate-950" />
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Step 03</span>
                <h3 className="text-base font-bold text-slate-950 dark:text-white">Allotment Rounds</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Evaluation of allocation chances in Rounds 1, 2, and the Mop-up stage. Deciding to freeze, float, or withdraw.
                </p>
              </div>

              <div className="flex flex-col gap-3.5 border-l-2 border-slate-200 pl-4 py-1.5 relative dark:border-slate-800">
                <span className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-slate-400 border-4 border-white dark:border-slate-950" />
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Step 04</span>
                <h3 className="text-base font-bold text-slate-950 dark:text-white">Document Reporting</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Physical submission of certificates, medical check registers, fee locks, and confirm allocation intakes.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Direct consultation desk card */}
        <section className="py-20 bg-slate-950 text-white relative">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 relative z-10">
            <span className="text-xs font-bold uppercase text-blue-500 tracking-wider">Consultation Desk</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Connect with Certified Medical Advisory Team
            </h2>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Verify your NEET score allotment probabilities and get a verified list of colleges within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/contact-us" className="btn-primary w-full sm:w-auto py-3.5 px-8 bg-blue-600 hover:bg-blue-700">
                Book NEET Seat Evaluation
              </Link>
              <a href="tel:+919905909990" className="btn-secondary w-full sm:w-auto py-3.5 px-8 bg-transparent text-white border-white/20 hover:bg-white/10 dark:bg-transparent">
                <PhoneCall className="w-3.5 h-3.5" /> Call Advisory: +91 99059-09990
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
