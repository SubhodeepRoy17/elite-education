"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Search, 
  Filter, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  FileText, 
  UserCheck, 
  Building2, 
  AlertCircle,
  HelpCircle,
  Award,
  ChevronRight,
  TrendingUp,
  FileCheck2
} from "lucide-react"

// Types for components
type ExamKey = "JEE Main" | "NEET UG" | "CAT" | "WBJEE"
type RegionKey = "All Hubs" | "West Bengal" | "Delhi NCR" | "Pune" | "Bangalore"

interface CollegeMatch {
  name: string
  location: string
  cutoffRank: number
  probability: string
  probabilityColor: string
  averagePackage: string
  eligibility: string
}

export default function HomePage() {
  // College Predictor states
  const [exam, setExam] = useState<ExamKey>("JEE Main")
  const [rank, setRank] = useState<string>("8500")
  const [category, setCategory] = useState<string>("General")
  const [stream, setStream] = useState<string>("Computer Science")
  const [predictions, setPredictions] = useState<CollegeMatch[] | null>(null)
  const [isPredicting, setIsPredicting] = useState(false)

  // University region filters state
  const [activeRegion, setActiveRegion] = useState<RegionKey>("All Hubs")

  // Prediction simulation data
  const mockDatabase: Record<ExamKey, CollegeMatch[]> = {
    "JEE Main": [
      { name: "IIT Delhi", location: "New Delhi", cutoffRank: 5000, probability: "Highly Competitive", probabilityColor: "text-amber-600 bg-amber-50 dark:bg-amber-950/20", averagePackage: "21.5 LPA", eligibility: "Top 2.5 percentile" },
      { name: "IIT Bombay", location: "Mumbai", cutoffRank: 4200, probability: "Highly Competitive", probabilityColor: "text-amber-600 bg-amber-50 dark:bg-amber-950/20", averagePackage: "22.8 LPA", eligibility: "Top 2.0 percentile" },
      { name: "IIT Kanpur", location: "Kanpur", cutoffRank: 6000, probability: "Moderate Chance", probabilityColor: "text-blue-600 bg-blue-50 dark:bg-blue-950/20", averagePackage: "19.2 LPA", eligibility: "Top 3.0 percentile" },
      { name: "NIT Trichy", location: "Tiruchirappalli", cutoffRank: 12000, probability: "Strong Probability", probabilityColor: "text-green-600 bg-green-50 dark:bg-green-950/20", averagePackage: "15.8 LPA", eligibility: "Top 5.0 percentile" },
      { name: "IEM Kolkata", location: "Kolkata", cutoffRank: 25000, probability: "High Probability", probabilityColor: "text-green-600 bg-green-50 dark:bg-green-950/20", averagePackage: "6.2 LPA", eligibility: "60% in boards" },
      { name: "Heritage Institute of Technology", location: "Kolkata", cutoffRank: 28000, probability: "High Probability", probabilityColor: "text-green-600 bg-green-50 dark:bg-green-950/20", averagePackage: "5.8 LPA", eligibility: "60% in boards" },
    ],
    "NEET UG": [
      { name: "AIIMS New Delhi", location: "New Delhi", cutoffRank: 50, probability: "Highly Competitive", probabilityColor: "text-amber-600 bg-amber-50 dark:bg-amber-950/20", averagePackage: "N/A", eligibility: "Top 0.05 percentile" },
      { name: "KPC Medical College", location: "Kolkata", cutoffRank: 45000, probability: "Strong Probability", probabilityColor: "text-green-600 bg-green-50 dark:bg-green-950/20", averagePackage: "N/A", eligibility: "NEET Qualified" },
      { name: "MAMC Delhi", location: "New Delhi", cutoffRank: 1500, probability: "Highly Competitive", probabilityColor: "text-amber-600 bg-amber-50 dark:bg-amber-950/20", averagePackage: "N/A", eligibility: "Top 0.5 percentile" },
      { name: "BMCRI Bangalore", location: "Bangalore", cutoffRank: 8000, probability: "Moderate Chance", probabilityColor: "text-blue-600 bg-blue-50 dark:bg-blue-950/20", averagePackage: "N/A", eligibility: "Top 2 percentile" },
    ],
    "CAT": [
      { name: "IIM Ahmedabad", location: "Ahmedabad", cutoffRank: 99, probability: "Highly Competitive", probabilityColor: "text-amber-600 bg-amber-50 dark:bg-amber-950/20", averagePackage: "32.7 LPA", eligibility: "99+ Percentile" },
      { name: "IIM Bangalore", location: "Bangalore", cutoffRank: 98, probability: "Highly Competitive", probabilityColor: "text-amber-600 bg-amber-50 dark:bg-amber-950/20", averagePackage: "31.2 LPA", eligibility: "98.5+ Percentile" },
      { name: "IIM Calcutta", location: "Kolkata", cutoffRank: 98, probability: "Highly Competitive", probabilityColor: "text-amber-600 bg-amber-50 dark:bg-amber-950/20", averagePackage: "33.5 LPA", eligibility: "98.5+ Percentile" },
      { name: "BIBS Kolkata", location: "Kolkata", cutoffRank: 75, probability: "High Probability", probabilityColor: "text-green-600 bg-green-50 dark:bg-green-950/20", averagePackage: "5.4 LPA", eligibility: "Graduate (50%)" },
    ],
    "WBJEE": [
      { name: "Jadavpur University", location: "Kolkata", cutoffRank: 1500, probability: "Moderate Chance", probabilityColor: "text-blue-600 bg-blue-50 dark:bg-blue-950/20", averagePackage: "23.7 LPA", eligibility: "WBJEE Merit rank" },
      { name: "Heritage Institute of Technology", location: "Kolkata", cutoffRank: 8000, probability: "High Probability", probabilityColor: "text-green-600 bg-green-50 dark:bg-green-950/20", averagePackage: "5.8 LPA", eligibility: "Physics, Chem & Math 60%" },
      { name: "IEM Kolkata", location: "Kolkata", cutoffRank: 6000, probability: "Strong Probability", probabilityColor: "text-green-600 bg-green-50 dark:bg-green-950/20", averagePackage: "6.2 LPA", eligibility: "WBJEE General Merit Rank" },
      { name: "Techno India Main", location: "Kolkata", cutoffRank: 12000, probability: "High Probability", probabilityColor: "text-green-600 bg-green-50 dark:bg-green-950/20", averagePackage: "4.8 LPA", eligibility: "PCM 50%" },
    ]
  }

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault()
    setIsPredicting(true)
    setTimeout(() => {
      const userRank = parseInt(rank) || 0
      const matches = mockDatabase[exam].filter(col => {
        // WBJEE and CAT use percentile check
        if (exam === "CAT") {
          return userRank >= (col.cutoffRank - 15) // simple range simulation
        }
        return userRank <= col.cutoffRank + 5000
      })
      setPredictions(matches)
      setIsPredicting(false)
    }, 800)
  }

  interface CollegeInfo {
    name: string
    location: string
    region: string
    est: string
    rank: string
    package: string
    highestPackage: string
    recruiters: string[]
    admissionsUrl: string
  }

  // University listing data
  const collegesList: CollegeInfo[] = [
    { name: "Jadavpur University (JU)", location: "Kolkata", region: "West Bengal", est: "Est. 1955", rank: "NIRF #10", package: "23.7 LPA", highestPackage: "85 LPA", recruiters: ["Microsoft", "Google", "PwC", "L&T"], admissionsUrl: "/colleges/jadavpur-university" },
    { name: "IIT Delhi", location: "New Delhi", region: "Delhi NCR", est: "Est. 1961", rank: "NIRF #2", package: "21.5 LPA", highestPackage: "2.1 Cr PA", recruiters: ["Google", "Microsoft", "Uber", "Goldman Sachs"], admissionsUrl: "/colleges/iit-delhi" },
    { name: "Heritage Institute of Technology", location: "Kolkata", region: "West Bengal", est: "Est. 2001", rank: "Grade A", package: "5.8 LPA", highestPackage: "44 LPA", recruiters: ["TCS", "Cognizant", "Wipro", "Infosys"], admissionsUrl: "/colleges/heritage-institute-of-technology" },
    { name: "IIT Bombay", location: "Mumbai", region: "All Hubs", est: "Est. 1958", rank: "NIRF #3", package: "22.8 LPA", highestPackage: "2.4 Cr PA", recruiters: ["Apple", "Qualcomm", "Meta", "Google"], admissionsUrl: "/colleges/iit-bombay" },
    { name: "IEM Kolkata", location: "Kolkata", region: "West Bengal", est: "Est. 1989", rank: "Grade A++", package: "6.2 LPA", highestPackage: "40 LPA", recruiters: ["Capgemini", "Cognizant", "TCS", "LTI"], admissionsUrl: "/colleges/iem-kolkata" },
    { name: "IIM Ahmedabad", location: "Ahmedabad", region: "All Hubs", est: "Est. 1961", rank: "NIRF #1 MBA", package: "32.7 LPA", highestPackage: "1.1 Cr PA", recruiters: ["McKinsey", "BCG", "Bain", "Goldman Sachs"], admissionsUrl: "/colleges/iim-ahmedabad" },
    { name: "Symbiosis Institute of Business", location: "Pune", region: "Pune", est: "Est. 1978", rank: "Top 15 B-School", package: "20.8 LPA", highestPackage: "39 LPA", recruiters: ["Deloitte", "EY", "KPMG", "ICICI Bank"], admissionsUrl: "/colleges/symbiosis-institute-of-business" },
    { name: "RV College of Engineering", location: "Bangalore", region: "Bangalore", est: "Est. 1963", rank: "Top 50 Engg", package: "11.2 LPA", highestPackage: "62 LPA", recruiters: ["Amazon", "Cisco", "Intel", "Adobe"], admissionsUrl: "/colleges/rv-college-of-engineering" },
    { name: "Christ University", location: "Bangalore", region: "Bangalore", est: "Est. 1969", rank: "Grade A+", package: "8.5 LPA", highestPackage: "24 LPA", recruiters: ["Target", "Goldman Sachs", "Dell", "HUL"], admissionsUrl: "/colleges/christ-university" },
  ]

  const filteredColleges = activeRegion === "All Hubs" 
    ? collegesList 
    : collegesList.filter(col => col.region === activeRegion)

  const [selectedCollege, setSelectedCollege] = useState<CollegeInfo>(collegesList[0])

  const handleRegionChange = (reg: RegionKey) => {
    setActiveRegion(reg)
    const list = reg === "All Hubs" ? collegesList : collegesList.filter(col => col.region === reg)
    if (list.length > 0) {
      setSelectedCollege(list[0])
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans selection:bg-blue-100 selection:text-blue-950">
      <Header />
      
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 pt-28 pb-16 md:pt-36 md:pb-24 dark:bg-slate-950 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-50 border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                2026 Academic Advisory Session
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1] max-w-2xl">
              Strategic Counselling for High-Achievement Admissions.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              We engineer pathways to elite global universities. Get data-backed institutional selection, strategic application drafting, and scholarship matching from certified counselors.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link href="/contact-us" className="btn-primary py-3.5 px-6">
                Register for Counselling <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#college-predictor" className="btn-secondary py-3.5 px-6">
                Simulate Cutoff Matches
              </a>
            </div>

            {/* Flat stats metrics - No floating cards */}
            <div className="w-full grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 dark:border-slate-900">
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white">10K+</p>
                <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">Students Advised</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white">95.4%</p>
                <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">Success Rate</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white">200+</p>
                <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">Universities</p>
              </div>
            </div>
          </div>

          {/* Hero Illustration/Composition Right */}
          <div className="lg:col-span-5 relative w-full h-[400px] md:h-[480px] bg-slate-50 rounded-lg overflow-hidden border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
            <Image
              src="/cover2.png"
              alt="Experienced counselor conducting a professional profiling session"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
              priority
              unoptimized
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-slate-200 p-4 rounded dark:bg-slate-950/95 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-950 dark:text-white">Verified Admissions Active</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Live allocation tracking (JoSAA / NEET / UGAC)</p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded dark:bg-blue-900/30">
                2026 Active
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ SERVICES (ALTERNATING LAYOUT) ═══════════════ */}
      <section id="services" className="py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
          
          <div className="max-w-xl">
            <span className="w-8 h-1 bg-blue-600 block mb-4" />
            <h2 className="section-title mb-3">Structured Counseling Programs</h2>
            <p className="section-desc">
              We reject one-size-fits-all checklists. Every phase of your application is designed uniquely to match high-tier standards.
            </p>
          </div>

          {/* Row 1: Left Copy, Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Phase 01</span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                Detailed Academic Profiling &amp; Assessment
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Before university lists are created, our advisors dissect your metrics: SAT/ACT/Entrance scores, GPA trends, extracurricular weights, and research interests. We compile a structured roadmap to enhance your strengths.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Profiling report mapped by IVY-League methodologies.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Career path diagnostics targeting modern industries.
                </li>
              </ul>
            </div>
            
            {/* Custom Assessment Dashboard Mockup */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded p-6 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between min-h-[340px]">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-800">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Diagnostic Evaluation Report</p>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 dark:text-white">Sen, Rohit (UID: EST-2026-8941)</h4>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-900/30">
                  Assessment Verified
                </span>
              </div>
              
              <div className="py-4 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] uppercase text-slate-400 font-bold block">Academic Record</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">9.4 / 10 CGPA</span>
                    <div className="w-full bg-slate-200 rounded-full h-1 mt-1 dark:bg-slate-800">
                      <div className="bg-blue-600 h-1 rounded-full" style={{ width: "94%" }} />
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-slate-400 font-bold block">Entrance Exam Index</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">JEE: 99.2%ile | WBJEE: 1240</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 dark:border-slate-800">
                  <span className="text-[9px] uppercase text-slate-400 font-bold block">Extracurricular Mapping (Tier 1)</span>
                  <p className="text-[11px] text-slate-500 mt-0.5 dark:text-slate-400">
                    State Debate Champion + Academic Research Assistantship (Robotics Lab)
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-3 dark:border-slate-800">
                  <span className="text-[9px] uppercase text-slate-400 font-bold block mb-1">Mapped University Tiers</span>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-[9px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-250 dark:bg-emerald-950/20 dark:text-emerald-450 dark:border-emerald-900">
                      Dream (IIT Delhi)
                    </span>
                    <span className="text-[9px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200 dark:bg-blue-950/20 dark:text-blue-450 dark:border-blue-900">
                      Reach (Jadavpur Univ)
                    </span>
                    <span className="text-[9px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800">
                      Safety (IEM)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Left Image, Right Copy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="lg:col-span-6 lg:order-last flex flex-col gap-6">
              <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Phase 02</span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                End-to-End Application Engineering
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                We handle the complete execution loop. From Statement of Purpose (SOP) guidance, Letter of Recommendation (LOR) validation, to filling portal entries on CommonApp, JoSAA, and state allocation dashboards.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 border border-slate-200/80 bg-slate-50/50 rounded dark:border-slate-800 dark:bg-slate-900/50">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">SOP Masterclasses</p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">Interactive reviews with top alumni editors.</p>
                </div>
                <div className="p-4 border border-slate-200/80 bg-slate-50/50 rounded dark:border-slate-800 dark:bg-slate-900/50">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Portal Accuracy</p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">Zero-error verification checks prior to submission.</p>
                </div>
              </div>
            </div>
            
            {/* Custom Live Application Checklist Dashboard */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded p-6 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between min-h-[340px]">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-800">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Application Progress Tracker</p>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 dark:text-white">Admissions Active Registry</h4>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold">
                  <span>68% Complete</span>
                  <div className="w-14 bg-slate-200 h-1.5 rounded dark:bg-slate-800 overflow-hidden">
                    <div className="bg-blue-600 h-full rounded" style={{ width: "68%" }} />
                  </div>
                </div>
              </div>

              <div className="py-4 flex flex-col gap-2.5">
                {[
                  { task: "Statement of Purpose (SOP)", details: "Draft 3 Approved (Alumni Panel)", status: "Approved", color: "text-green-600 bg-green-50 border-green-200/60 dark:bg-green-950/20 dark:text-green-450 dark:border-green-900/40" },
                  { task: "Transcripts & Boards Certificates", details: "Portals uploaded & verified", status: "Verified", color: "text-green-600 bg-green-50 border-green-200/60 dark:bg-green-950/20 dark:text-green-450 dark:border-green-900/40" },
                  { task: "Letters of Recommendation (LOR)", details: "2 secured (Principal + Advisor)", status: "Verified", color: "text-green-600 bg-green-50 border-green-200/60 dark:bg-green-950/20 dark:text-green-450 dark:border-green-900/40" },
                  { task: "Counselling Option Entry Locked", details: "Preference order confirmed", status: "Locked", color: "text-blue-600 bg-blue-50 border-blue-200/60 dark:bg-blue-950/20 dark:text-blue-450 dark:border-blue-900/40" },
                  { task: "Seat Allocation Allotment Audit", details: "JoSAA Round 1 releases July 12", status: "Awaiting", color: "text-slate-500 bg-slate-100 border-slate-200/50 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-white border border-slate-150 rounded dark:bg-slate-950 dark:border-slate-900 text-xs">
                    <div>
                      <p className="font-bold text-slate-950 dark:text-white">{item.task}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{item.details}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold border ${item.color}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ COLLEGE PREDICTOR (INTERACTIVE TOOL PREVIEW) ═══════════════ */}
      <section id="college-predictor" className="py-20 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Tool Explanation */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Simulate Probability</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
                Simulate Cutoff Allocation Chances
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Input your exam, rank, stream, and reservation class below. Our system will scan recent JoSAA, WBJEE, and medical allotment history to calculate admission match ratings.
              </p>
              
              <div className="flex flex-col gap-3.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[10px] dark:bg-blue-900/30">1</span>
                  <span>Select entrance examination context</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[10px] dark:bg-blue-900/30">2</span>
                  <span>Input current rank or estimated percentile</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[10px] dark:bg-blue-900/30">3</span>
                  <span>Verify match predictions and eligibility criteria</span>
                </div>
              </div>
            </div>

            {/* Predictor Panel Card */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden dark:bg-slate-950 dark:border-slate-800">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Allocation Predictor Workbench</span>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded dark:bg-slate-900 dark:border-slate-800">
                  Data updated 2026
                </span>
              </div>
              
              <form onSubmit={handlePredict} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase text-slate-500">Entrance Exam</label>
                  <select 
                    value={exam}
                    onChange={(e) => setExam(e.target.value as ExamKey)}
                    className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-blue-600 focus:outline-none dark:bg-slate-900 dark:border-slate-800"
                  >
                    <option value="JEE Main">JEE Main (B.Tech)</option>
                    <option value="NEET UG">NEET UG (Medical)</option>
                    <option value="CAT">CAT (MBA/PGDM)</option>
                    <option value="WBJEE">WBJEE (West Bengal)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase text-slate-500">All India Rank / Percentile</label>
                  <input 
                    type="number"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                    required
                    placeholder="Enter rank"
                    className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-blue-600 focus:outline-none dark:bg-slate-900 dark:border-slate-800"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase text-slate-500">Select Stream Preference</label>
                  <select
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-blue-600 focus:outline-none dark:bg-slate-900 dark:border-slate-800"
                  >
                    <option value="Computer Science">Computer Science &amp; Engg</option>
                    <option value="Electronics">Electronics &amp; Comm</option>
                    <option value="Information Tech">Information Technology</option>
                    <option value="Medicine">Medicine &amp; Surgery (MBBS)</option>
                    <option value="Finance & Strategy">MBA Finance / Strategy</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase text-slate-500">Reservation Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-blue-600 focus:outline-none dark:bg-slate-900 dark:border-slate-800"
                  >
                    <option value="General">General / Unreserved</option>
                    <option value="OBC-NCL">OBC - Non Creamy</option>
                    <option value="SC">Scheduled Caste (SC)</option>
                    <option value="ST">Scheduled Tribe (ST)</option>
                  </select>
                </div>

                <div className="md:col-span-2 pt-2">
                  <button 
                    type="submit" 
                    disabled={isPredicting}
                    className="w-full h-11 bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    {isPredicting ? "Analyzing cutoff registry..." : "Run Cutoff Matching Simulation"}
                  </button>
                </div>
              </form>

              {/* Predictions output area */}
              {predictions && (
                <div className="border-t border-slate-100 bg-slate-50/50 p-6 dark:border-slate-850 dark:bg-slate-900/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Predicted Matching Colleges ({predictions.length})</h4>
                  {predictions.length === 0 ? (
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 dark:bg-amber-950/20 dark:border-amber-900 dark:text-amber-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <span>No direct allocation matches detected. Try simulating with a higher rank/percentile input.</span>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-200 text-slate-400 dark:border-slate-800">
                            <th className="py-2 font-semibold">College</th>
                            <th className="py-2 font-semibold">Location</th>
                            <th className="py-2 font-semibold">Eligibility/Percentile</th>
                            <th className="py-2 font-semibold text-right">Placement Package</th>
                            <th className="py-2 font-semibold text-right">Probability Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-150 dark:divide-slate-800">
                          {predictions.map((col, idx) => (
                            <tr key={idx} className="text-slate-700 dark:text-slate-300">
                              <td className="py-3 font-semibold text-slate-950 dark:text-white">{col.name}</td>
                              <td className="py-3">{col.location}</td>
                              <td className="py-3">{col.eligibility}</td>
                              <td className="py-3 text-right">{col.averagePackage}</td>
                              <td className="py-3 text-right">
                                <span className={`px-2 py-0.5 rounded-sm text-[10px] font-bold ${col.probabilityColor}`}>
                                  {col.probability}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════ SCHOLARSHIP SECTION (DASHBOARD STYLE) ═══════════════ */}
      <section className="py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl mb-12">
            <span className="w-8 h-1 bg-blue-600 block mb-4" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Financial Aid Mapping</span>
            <h2 className="section-title mt-2 mb-3">Scholarship &amp; State Aid Registrar</h2>
            <p className="section-desc">
              Do not leave financial aid to chance. Review active merit programs, requirements, and grant values.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg overflow-hidden dark:border-slate-800 shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-slate-500">Live Active Scholarships (Admissions 2026)</span>
              <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded dark:bg-blue-950/40 dark:border-blue-900/30">
                Verification active
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-950">
                    <th className="p-4 font-semibold uppercase">Program Name</th>
                    <th className="p-4 font-semibold uppercase">Mandatory Eligibility</th>
                    <th className="p-4 font-semibold uppercase">Award Value</th>
                    <th className="p-4 font-semibold uppercase">Evaluation Deadline</th>
                    <th className="p-4 font-semibold uppercase text-right">Guidance Workflow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {[
                    { name: "Swami Vivekananda Merit Scholarship", eligibility: "60% aggregate in last boards", value: "₹12,000 - ₹60,000 / Yr", deadline: "Nov 30, 2026", action: "Verify Documents" },
                    { name: "West Bengal Student Credit Card", eligibility: "Resident student of West Bengal", value: "Up to ₹10 Lakhs Loan @ 4%", deadline: "Year-Round", action: "Apply Loan Guide" },
                    { name: "Elite Academic Excellence Grant", eligibility: "Under 2500 Rank JEE/WBJEE or 95% Boards", value: "100% Tuition Waiver", deadline: "Aug 15, 2026", action: "Book Evaluation" },
                    { name: "National Scholarship Portal (NSP) Assist", eligibility: "Minority communities / SC / ST / OBC-NCL", value: "Direct Benefit Transfer (DBT)", deadline: "Oct 15, 2026", action: "Check Schemes" },
                    { name: "Oasis Scholarship Registry", eligibility: "SC / ST / OBC state residential status", value: "Tuition Reimbursements", deadline: "Dec 10, 2026", action: "Apply Now" }
                  ].map((sch, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 font-bold text-slate-950 dark:text-white">{sch.name}</td>
                      <td className="p-4 text-slate-600 dark:text-slate-400">{sch.eligibility}</td>
                      <td className="p-4 font-medium text-slate-950 dark:text-white">{sch.value}</td>
                      <td className="p-4 text-slate-500">{sch.deadline}</td>
                      <td className="p-4 text-right">
                        <Link href="/contact-us" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                          <span>{sch.action}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ UNIVERSITIES WALL WITH REGION FILTERS ═══════════════ */}
      <section className="py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="w-8 h-1 bg-blue-600 block mb-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Partner &amp; Match Network</span>
              <h2 className="section-title mt-2">Browse Participating Institutions</h2>
            </div>

            {/* Region Filter Selector */}
            <div className="flex flex-wrap gap-1 bg-slate-50 p-1 border border-slate-200 rounded dark:bg-slate-900 dark:border-slate-800">
              {(["All Hubs", "West Bengal", "Delhi NCR", "Pune", "Bangalore"] as RegionKey[]).map((reg) => (
                <button
                  key={reg}
                  onClick={() => handleRegionChange(reg)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    activeRegion === reg 
                      ? "bg-white text-blue-600 shadow-sm border border-slate-200/50 dark:bg-slate-950 dark:text-white dark:border-slate-800" 
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Split-Pane Catalog */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Vertical College Selection List (5 columns) */}
            <div className="lg:col-span-5 flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-2 border-r border-slate-100 dark:border-slate-900 scrollbar-hide">
              {filteredColleges.map((col, idx) => {
                const isSelected = selectedCollege.name === col.name
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedCollege(col)}
                    className={`w-full text-left p-4 rounded border transition-all ${
                      isSelected 
                        ? "bg-blue-50/50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-900/40" 
                        : "bg-white border-slate-100 hover:bg-slate-50 dark:bg-slate-950 dark:border-slate-900 dark:hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {col.region}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded dark:bg-slate-900 dark:border-slate-800">
                        {col.rank}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mt-1.5 text-sm md:text-base leading-snug">
                      {col.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{col.location}</span>
                    </p>
                  </button>
                )
              })}
            </div>

            {/* Right Column: Detailed Institutional Factsheet Panel (7 columns) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8 dark:bg-slate-900/50 dark:border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded dark:bg-blue-950/30">
                    {selectedCollege.region} Network Partner
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-950 dark:text-white mt-2">
                    {selectedCollege.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-500 bg-white px-2.5 py-1 border border-slate-200 rounded dark:bg-slate-950 dark:border-slate-850 dark:text-slate-350">
                    {selectedCollege.rank}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1.5">{selectedCollege.est}</p>
                </div>
              </div>

              {/* Placements Stats Matrix */}
              <div className="grid grid-cols-2 gap-4 py-6 border-b border-slate-200 dark:border-slate-800">
                <div className="p-4 bg-white rounded border border-slate-150 dark:bg-slate-950 dark:border-slate-900">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Average Placement Package</p>
                  <p className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {selectedCollege.package}
                  </p>
                </div>
                <div className="p-4 bg-white rounded border border-slate-150 dark:bg-slate-950 dark:border-slate-900">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Highest Package Offered</p>
                  <p className="text-lg md:text-xl font-extrabold text-blue-600 dark:text-blue-400 mt-1">
                    {selectedCollege.highestPackage}
                  </p>
                </div>
              </div>

              {/* Recruiters & Counselling Pathway */}
              <div className="py-6 flex flex-col gap-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Prominent Recruiting Partners</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCollege.recruiters.map((rec, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-white border border-slate-200 rounded text-slate-700 dark:bg-slate-950 dark:border-slate-900 dark:text-slate-300">
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Direct Counselling Pathway</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Admissions to {selectedCollege.name} are regulated strictly via corresponding state allocation/counselling frameworks (e.g. JoSAA, WBJEE, state medical registries). Our advisory provides certified assistance for choice lock sequences.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 flex-wrap">
                <span className="text-[10px] text-slate-450 dark:text-slate-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Direct institutional querying guide active.
                </span>
                <Link 
                  href={selectedCollege.admissionsUrl}
                  className="btn-primary py-2 px-4 text-xs font-semibold"
                >
                  Intake Process Guide
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════ PROCESS / TIMELINE ═══════════════ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-xl mb-16">
            <span className="w-8 h-1 bg-blue-600 block mb-4" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Timeline Workflow</span>
            <h2 className="section-title mt-2">The Structured Admission Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Visual step cards - all composed differently */}
            <div className="flex flex-col gap-4 border-l-2 border-slate-250 pl-4 py-2 relative dark:border-slate-800">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950" />
              <span className="text-[10px] font-bold uppercase text-blue-600 tracking-wider">Step 01</span>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Initial Mapping</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Review boards/entrance scores, map budget requirements, and isolate geographic choices during an initial assessment.
              </p>
              <div className="mt-2 p-3 bg-white border border-slate-200/80 rounded dark:bg-slate-950 dark:border-slate-800 text-[10px] text-slate-400 font-medium">
                ⏱️ Expected: 1 - 2 Days
              </div>
            </div>

            <div className="flex flex-col gap-4 border-l-2 border-slate-250 pl-4 py-2 relative dark:border-slate-800">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-400 border-4 border-white dark:border-slate-950" />
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Step 02</span>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Institution Selection</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Produce a classified shortlisting matrix (Dream, Reach, Safety choices) backed by historic cutoff match probabilities.
              </p>
              <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded self-start dark:bg-blue-900/30">
                Predictor check active
              </span>
            </div>

            <div className="flex flex-col gap-4 border-l-2 border-slate-250 pl-4 py-2 relative dark:border-slate-800">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-400 border-4 border-white dark:border-slate-950" />
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Step 03</span>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Portfolio Build</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Draft statement letters (SOPs), procure LORs from professors, compile boards certificate registers, and review entries.
              </p>
              <ul className="text-[10px] text-slate-400 flex flex-col gap-1">
                <li>• Verification workflow</li>
                <li>• Document checklist</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 border-l-2 border-slate-250 pl-4 py-2 relative dark:border-slate-800">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-400 border-4 border-white dark:border-slate-950" />
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Step 04</span>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Allotment &amp; Visa</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Provide real counsel during allocation selection rounds, draft scholarship verification slips, and handle visa support.
              </p>
              <div className="mt-auto">
                <Link href="/contact-us" className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700">
                  <span>Register Intake</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════ SUCCESS STORIES (EDITORIAL MAGAZINE LAYOUT) ═══════════════ */}
      <section id="success-stories" className="py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-xl mb-16">
            <span className="w-8 h-1 bg-blue-600 block mb-4" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Verification Reports</span>
            <h2 className="section-title mt-2">Matriculation &amp; Student Success</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Large Featured Testimonial (takes 7 columns) */}
            <div className="lg:col-span-7 border border-slate-200 p-8 md:p-10 flex flex-col justify-between rounded-lg dark:border-slate-800">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-150 border border-slate-200 dark:border-slate-800">
                    <Image 
                      src="/profile.png" 
                      alt="Portrait photo of Vikram Mehra" 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 dark:text-white text-sm md:text-base">Vikram Mehra</h4>
                    <p className="text-xs text-slate-500 mt-0.5">B.Tech Admission — IIT Delhi</p>
                  </div>
                </div>
                <p className="text-base md:text-lg italic text-slate-700 dark:text-slate-350 leading-relaxed font-normal">
                  "The cutoff matches simulated by the Elite Education team were extremely accurate. Their counsel guided me precisely through the choice filling rounds in JoSAA, leading directly to a seat at IIT Delhi. Beyond rank calculations, their SOP masterclass helped highlight my application portfolio."
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-150 dark:border-slate-800 pt-6 mt-8">
                <span className="text-xs text-slate-400">Class of 2026 Admissions</span>
                <span className="text-xs font-bold uppercase text-blue-600">Verified matriculation</span>
              </div>
            </div>

            {/* Smaller Secondary Testimonials Grid (takes 5 columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="p-6 border border-slate-250/80 rounded dark:border-slate-800 flex flex-col justify-between flex-1">
                <p className="text-xs text-slate-500 mb-3">MBBS Matriculant</p>
                <p className="text-sm italic text-slate-700 dark:text-slate-450 leading-relaxed mb-4">
                  "The state quota counseling was highly complicated. The team sorted out the document verification loop and helped me secure a seat in KPC Medical College."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-blue-600 dark:bg-slate-900">
                    A
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-950 dark:text-white">Ananya Reddy</h5>
                    <p className="text-[10px] text-slate-400">Class of 2026</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-slate-250/80 rounded dark:border-slate-800 flex flex-col justify-between flex-1">
                <p className="text-xs text-slate-500 mb-3">MBA Matriculant</p>
                <p className="text-sm italic text-slate-700 dark:text-slate-450 leading-relaxed mb-4">
                  "Got into IIM Ahmedabad. Their profile feedback prior to the interview rounds gave me a major confidence boost."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-blue-600 dark:bg-slate-900">
                    M
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-950 dark:text-white">Meera Krishnan</h5>
                    <p className="text-[10px] text-slate-400">Class of 2025</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════ BLOGS / NEWSPAPER FRONT-PAGE STYLE GRID ═══════════════ */}
      <section className="py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl mb-12">
            <span className="w-8 h-1 bg-blue-600 block mb-4" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Research &amp; Guides</span>
            <h2 className="section-title mt-2 mb-3">Admissions Registrar Bulletin</h2>
            <p className="section-desc">
              Weekly intelligence analyses detailing entrance updates, state counseling notifications, and registration dates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Featured Article Left (takes 7 columns) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 self-start rounded dark:bg-blue-900/30">
                Featured Bulletin
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white hover:text-blue-600 transition-colors leading-tight">
                <Link href="#">
                  JoSAA 2026 Counseling Schedules &amp; Cutoff Shifts: Critical Intake Metrics
                </Link>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                An analysis of cutoff movements across core engineering streams (CSE, ECE, EEE) based on registration volumes and recent allocation records. Key adjustments to expect in choice filling schedules.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> July 1, 2026</span>
                <span>•</span>
                <span>Written by Advisors Editorial Board</span>
              </div>
            </div>

            {/* Secondary Articles List Right (takes 5 columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6 divide-y divide-slate-150 dark:divide-slate-800 lg:pl-6 lg:border-l border-slate-200 dark:border-slate-900">
              
              <div className="flex flex-col gap-2.5 pt-0">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Medical Council Bulletin</span>
                <h4 className="font-bold text-slate-950 dark:text-white hover:text-blue-600 transition-colors text-sm leading-snug">
                  <Link href="#">NEET UG State Allocation Reservation Rules &amp; Document Checks</Link>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  Review mandatory state residence declarations and verification processes required for institutional reservations.
                </p>
                <span className="text-[10px] text-slate-400 mt-1">June 28, 2026</span>
              </div>

              <div className="flex flex-col gap-2.5 pt-5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Management Entrance Guide</span>
                <h4 className="font-bold text-slate-950 dark:text-white hover:text-blue-600 transition-colors text-sm leading-snug">
                  <Link href="#">CAT 2026 Syllabus Weightage &amp; Preparation Roadmaps</Link>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  Detailed blueprint mapping critical QA, DILR, and VARC target sections to study for a 99+ percentile ranking.
                </p>
                <span className="text-[10px] text-slate-400 mt-1">June 22, 2026</span>
              </div>

              <div className="flex flex-col gap-2.5 pt-5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Financial Aid</span>
                <h4 className="font-bold text-slate-950 dark:text-white hover:text-blue-600 transition-colors text-sm leading-snug">
                  <Link href="#">Swami Vivekananda Merit Scholarship Document Application Checklist</Link>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  Verify certificate registries and eligibility declarations required to clear merit grants without delay.
                </p>
                <span className="text-[10px] text-slate-400 mt-1">June 15, 2026</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════ BOTTOM CTA ═══════════════ */}
      <section className="py-20 bg-slate-950 text-white border-t border-slate-900 relative">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 relative z-10">
          <span className="text-xs font-bold uppercase text-blue-500 tracking-wider">Start Intake Selection</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Configure Your Professional Academic Future
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Reserve a call with our accredited advisors to compile an assessment map. No commitment required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/contact-us" className="btn-primary w-full sm:w-auto py-3.5 px-8">
              Book Advisors Consultation
            </Link>
            <a href="tel:+919905909990" className="btn-secondary w-full sm:w-auto py-3.5 px-8 bg-transparent text-white border-white/20 hover:bg-white/10 dark:bg-transparent dark:hover:bg-slate-900">
              Call Desk: +91 99059-09990
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}
