"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Stethoscope,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Building,
  Target,
  Trophy,
  Users,
  Search,
  MapPin,
  BookOpen,
  FlaskConical,
  Palette,
  Scale,
  Calculator,
  Atom,
  BadgeCheck,
  Handshake,
  Award,
  ShieldCheck,
  MessageSquareQuote,
  Star,
  ChevronDown,
  Phone,
  Pill,
  HeartPulse,
  FileText,
  BarChart3,
  Compass,
  Clock
} from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect, useRef } from "react"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import ChatBot from "./(features)/chatbot/components/Chatbot"
import FloatingChatButton from "./(features)/chatbot/components/FloatingChatButton"
import ContactForm from "@/components/ContactForm"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion, useInView } from "framer-motion"

/* ─── animated counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

/* ─── faq item ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-neutral-900/60 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
      >
        <span className="font-semibold text-neutral-900 dark:text-white pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-blue-500 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-5 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">{a}</p>
      </div>
    </div>
  )
}

/* ─── data ─── */
const popularCities = [
  { name: "Kolkata", icon: "🏛️", colleges: "250+" },
  { name: "Delhi", icon: "🕌", colleges: "400+" },
  { name: "Mumbai", icon: "🌊", colleges: "350+" },
  { name: "Pune", icon: "🎓", colleges: "200+" },
  { name: "Bangalore", icon: "💻", colleges: "300+" },
  { name: "Chennai", icon: "🛕", colleges: "180+" },
  { name: "Hyderabad", icon: "🏰", colleges: "220+" },
  { name: "Lucknow", icon: "🕌", colleges: "150+" },
]

const programCategories = [
  { icon: <GraduationCap className="w-7 h-7" />, title: "Engineering", desc: "B.Tech, M.Tech, diploma courses & top colleges.", color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400", border: "hover:border-blue-300 dark:hover:border-blue-700", link: "/engineering" },
  { icon: <Stethoscope className="w-7 h-7" />, title: "Medical", desc: "MBBS, BDS, Nursing & allied medical programs.", color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400", border: "hover:border-emerald-300 dark:hover:border-emerald-700", link: "/medical" },
  { icon: <Briefcase className="w-7 h-7" />, title: "Management & MBA", desc: "MBA, PGDM including CAT, XAT & CMAT details.", color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400", border: "hover:border-orange-300 dark:hover:border-orange-700", link: "/mba" },
  { icon: <Building className="w-7 h-7" />, title: "Business (BBA/BCA)", desc: "BBA and BCA admissions for future leaders.", color: "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400", border: "hover:border-purple-300 dark:hover:border-purple-700", link: "/business" },
  { icon: <HeartPulse className="w-7 h-7" />, title: "Nursing", desc: "B.Sc & M.Sc Nursing with top institute guidance.", color: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400", border: "hover:border-pink-300 dark:hover:border-pink-700", link: "/nursing" },
  { icon: <Pill className="w-7 h-7" />, title: "Pharmacy", desc: "B.Pharm & M.Pharm tailored admission routes.", color: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400", border: "hover:border-violet-300 dark:hover:border-violet-700", link: "/Pharmacy" },
  { icon: <Scale className="w-7 h-7" />, title: "Law (LLB)", desc: "5-year & 3-year LLB programs at top NLUs.", color: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400", border: "hover:border-amber-300 dark:hover:border-amber-700", link: "#" },
  { icon: <FlaskConical className="w-7 h-7" />, title: "Science & Research", desc: "B.Sc, M.Sc, PhD & research opportunities.", color: "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400", border: "hover:border-cyan-300 dark:hover:border-cyan-700", link: "#" },
]

const stats = [
  { value: 10000, suffix: "+", label: "Students Guided", icon: <Users className="w-7 h-7" />, color: "text-blue-500" },
  { value: 95, suffix: "%", label: "Success Rate", icon: <Trophy className="w-7 h-7" />, color: "text-emerald-500" },
  { value: 200, suffix: "+", label: "Partner Institutions", icon: <Handshake className="w-7 h-7" />, color: "text-purple-500" },
  { value: 500, suffix: "+", label: "Scholarships Secured", icon: <Award className="w-7 h-7" />, color: "text-amber-500" },
]

const services = [
  { icon: <Compass className="w-8 h-8" />, title: "Career Counseling", desc: "Personalized guidance to choose the right course and university.", color: "from-blue-500 to-cyan-400" },
  { icon: <FileText className="w-8 h-8" />, title: "Admission Support", desc: "End-to-end admission and application support with high success rate.", color: "from-emerald-500 to-teal-400" },
  { icon: <Building className="w-8 h-8" />, title: "College Selection", desc: "Data-driven college recommendations based on your profile & rank.", color: "from-purple-500 to-indigo-400" },
  { icon: <Award className="w-8 h-8" />, title: "Scholarships", desc: "Support in securing merit and need-based education scholarships.", color: "from-amber-500 to-orange-400" },
  { icon: <BookOpen className="w-8 h-8" />, title: "Exam Preparation", desc: "Expert coaching strategies for NEET, JEE, CAT and other entrances.", color: "from-pink-500 to-rose-400" },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Student Support", desc: "Accommodation, documentation, and ongoing guidance throughout.", color: "from-violet-500 to-purple-400" },
]

const testimonials = [
  { quote: "Elite Education helped me secure admission at my dream engineering college. Their guidance was invaluable!", name: "Ananya Reddy", college: "IIT Bombay", rating: 5 },
  { quote: "The counselors understood my profile perfectly and recommended colleges I hadn't even considered.", name: "Arjun Sharma", college: "IIT Delhi", rating: 5 },
  { quote: "Mentorship and the strong alumni network helped me prepare strategically for GATE.", name: "Meera Krishnan", college: "NIT Trichy", rating: 5 },
  { quote: "From mock interviews to final admission, they were with me every step of the way.", name: "Vikram Mehra", college: "DTU Delhi", rating: 5 },
]

const faqs = [
  { q: "What services does Elite Education provide?", a: "We provide comprehensive admission counseling, career guidance, entrance exam preparation strategies, college selection support, scholarship assistance, and end-to-end application management for engineering, medical, MBA, and other professional programs across India." },
  { q: "How does the admission guidance process work?", a: "Our process starts with a free consultation to understand your profile and goals. We then create a personalized roadmap, help you shortlist colleges, prepare your applications, guide you through counseling rounds, and support you until final admission." },
  { q: "Do you guarantee admission to specific colleges?", a: "While we cannot guarantee admission to any specific institution, our 95% success rate speaks for itself. We use data-driven insights and years of experience to maximize your chances at the best possible institutions matching your profile." },
  { q: "What courses do you specialize in?", a: "We specialize in Engineering (B.Tech/M.Tech), Medical (MBBS/BDS/Nursing), MBA/PGDM, BBA/BCA, Pharmacy (B.Pharm/M.Pharm), Law (LLB), and various other UG and PG programs across India." },
  { q: "Is there a fee for initial consultation?", a: "The initial consultation is completely free. We believe in understanding your needs first before discussing any service packages. Contact us to schedule your free session today." },
  { q: "Which cities and states do you cover?", a: "We cover admissions across all major educational hubs in India including Kolkata, Delhi, Mumbai, Pune, Bangalore, Chennai, Hyderabad, and many more cities across all states." },
]

const collegeHighlights = [
  { image: "/college1.png", name: "IIT Delhi", location: "New Delhi", est: "Est. 1961", link: "https://home.iitd.ac.in/" },
  { image: "/college2.png", name: "IIT Bombay", location: "Mumbai", est: "Est. 1958", link: "https://www.iitb.ac.in/" },
  { image: "/college3.png", name: "IIT Madras", location: "Chennai", est: "Est. 1959", link: "https://study.iitm.ac.in/" },
  { image: "/college4.png", name: "IIM Ahmedabad", location: "Ahmedabad", est: "Est. 1961", link: "https://www.iima.ac.in/" },
  { image: "/college5.png", name: "IIT Kanpur", location: "Kanpur", est: "Est. 1959", link: "https://www.iitk.ac.in/" },
  { image: "/college6.png", name: "NIT Trichy", location: "Tiruchirappalli", est: "Est. 1964", link: "https://www.nitt.edu/" },
]


/* ═══════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════ */
export default function HomePage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isFloatingChatOpen, setIsFloatingChatOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setMounted(true)
    const popupTimer = setTimeout(() => setIsPopupOpen(true), 2500)
    return () => clearTimeout(popupTimer)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950 font-sans selection:bg-blue-500/30">
      <Header />
      <main className="flex-1 w-full overflow-hidden">

        {/* ═══════════════ HERO SECTION ═══════════════ */}
        <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-neutral-950 pt-20 pb-28">
          {/* Background layers */}
          <div className="absolute inset-0">
            <Image src="/cover.png" alt="Campus" fill className="object-cover opacity-30" unoptimized priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>

          {/* Animated blobs */}
          <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px]" />
          <motion.div animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px]" />

          <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-blue-200">Admissions Open 2026 – Apply Now!</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl">
              Your Gateway to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                India&apos;s Top Colleges
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Complete admission guidance for Engineering, Medical, MBA &amp; more. Expert counseling with 15+ years of experience across 200+ institutions.
            </motion.p>

            {/* Search Bar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
              className="w-full max-w-2xl mb-10">
              <div className="relative flex items-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 shadow-2xl overflow-hidden transition-all focus-within:border-blue-400/50 focus-within:bg-white/15">
                <Search className="w-5 h-5 text-neutral-400 ml-5 shrink-0" />
                <input
                  type="text"
                  placeholder="Search colleges, courses, exams..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-neutral-500 py-4 px-4 text-base focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 transition-colors text-sm shrink-0">
                  Search
                </button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 mb-12">
              <Link href="/contact-us" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-13 px-8 text-base rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] gap-2 font-semibold transition-all hover:scale-105">
                  Find Top Colleges <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/chatbot" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-13 px-8 text-base rounded-full border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20 backdrop-blur-md gap-2 font-semibold">
                  Free Counseling 2026
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Glass Stat Cards */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-xl border-t border-white/5 py-5">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { val: "200+", label: "Partner Institutions", icon: <Building className="w-5 h-5" /> },
                  { val: "10,000+", label: "Students Guided", icon: <Users className="w-5 h-5" /> },
                  { val: "95%", label: "Success Rate", icon: <Target className="w-5 h-5" /> },
                  { val: "15+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl px-4 py-3 border border-white/10 transition-all cursor-default group">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">{s.icon}</div>
                    <div>
                      <p className="text-lg md:text-xl font-bold text-white">{s.val}</p>
                      <p className="text-xs text-neutral-400">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════ POPULAR CITIES ═══════════════ */}
        <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
          <div className="container px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">Explore Locations</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">Popular Cities</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mt-3 max-w-xl mx-auto">Find top colleges across India&apos;s leading educational hubs.</p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {popularCities.map((city, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <Link href={`#`} className="group flex flex-col items-center p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/5 transition-all hover:-translate-y-1">
                    <span className="text-3xl mb-3">{city.icon}</span>
                    <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">{city.name}</h4>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-medium">{city.colleges} Colleges</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FIND YOUR CAREER PATH ═══════════════ */}
        <section id="services" className="py-16 md:py-24 bg-white dark:bg-neutral-900/50">
          <div className="container px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">Programs We Cover</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4">Find Your Perfect Career Path</h3>
              <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
                Choose from diverse programs designed to match your interests. Get expert guidance for admissions and campus selection.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {programCategories.map((cat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <Link href={cat.link}>
                    <Card className={`group relative p-6 bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full ${cat.border}`}>
                      <div className={`w-14 h-14 rounded-xl ${cat.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                        {cat.icon}
                      </div>
                      <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{cat.title}</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{cat.desc}</p>
                      <div className="mt-4 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FEATURE CARDS (3 pillars) ═══════════════ */}
        <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800">
          <div className="container px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4">Expert Guidance & Data-Driven Insights</h3>
              <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">Everything you need for your admission journey, in one place.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <BookOpen className="w-8 h-8" />, title: "Entrance Exams", desc: "Get exam dates, syllabus, and preparation strategies for national tests like NEET, JEE, CAT & more.", cta: "Explore Exams", link: "#", color: "from-blue-500 to-cyan-500" },
                { icon: <Building className="w-8 h-8" />, title: "Top Colleges", desc: "Discover premier institutions ranked by placements, infrastructure, and faculty quality.", cta: "Browse Colleges", link: "#", color: "from-purple-500 to-indigo-500" },
                { icon: <BarChart3 className="w-8 h-8" />, title: "College Compare", desc: "Compare colleges side-by-side based on your entrance exam scores, fees, and placement data.", cta: "Compare Now", link: "#", color: "from-emerald-500 to-teal-500" },
              ].map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                  <Card className="group relative p-8 bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${f.color} opacity-5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-10 transition-opacity`} />
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                      {f.icon}
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{f.title}</h4>
                    <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">{f.desc}</p>
                    <Link href={f.link} className="mt-6 inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                      {f.cta} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ TOP COLLEGES ═══════════════ */}
        <section className="py-16 md:py-24 bg-white dark:bg-neutral-900/50 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">Partner Institutions</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">Top Indian Colleges</h3>
              </div>
              <Link href="#">
                <Button variant="outline" className="rounded-full hidden md:flex border-blue-200 dark:border-neutral-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-neutral-800">
                  View All Colleges <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collegeHighlights.map((college, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Card className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-52 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <Image src={college.image} alt={college.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                      <div className="absolute top-3 right-3 z-20 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        Top Ranked
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">{college.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {college.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {college.est}</span>
                      </div>
                      <Link href={college.link} target="_blank">
                        <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/15 font-semibold">
                          View Details <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex justify-center md:hidden">
              <Button variant="outline" className="rounded-full w-full max-w-sm border-blue-200 text-blue-600">View All Colleges</Button>
            </div>
          </div>
        </section>

        {/* ═══════════════ NUMBERS THAT INSPIRE ═══════════════ */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-950 via-blue-950/80 to-neutral-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">Our Impact</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-4">Numbers That Inspire</h3>
              <p className="text-neutral-400 max-w-xl mx-auto">Our commitment to student success is reflected in our data.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <div className={`${stat.color} mb-4`}>{stat.icon}</div>
                  <p className="text-3xl md:text-4xl font-extrabold text-white">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-neutral-400 mt-2 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ OUR SERVICES ═══════════════ */}
        <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
          <div className="container px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">What We Offer</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4">From Counseling to Campus</h3>
              <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">From initial counseling to post-admission support, we ensure your academic success.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((srv, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Card className="group p-7 bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${srv.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      {srv.icon}
                    </div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{srv.title}</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{srv.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ WHY CHOOSE US (Trust Signals) ═══════════════ */}
        <section className="py-16 md:py-24 bg-white dark:bg-neutral-900/50 border-y border-neutral-200 dark:border-neutral-800">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">Why Elite Education</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white mb-6 leading-tight">
                  We help students secure admissions in top Indian colleges through expert guidance.
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
                  Transparent processes and strong institutional partnerships make us the trusted choice for thousands of students and families across India.
                </p>
                <div className="space-y-5">
                  {[
                    { icon: <GraduationCap className="w-6 h-6" />, title: "IIT/JEE & NEET Experts", desc: "Specialized counseling for IITs, NITs, AIIMS and top colleges." },
                    { icon: <Handshake className="w-6 h-6" />, title: "200+ College Partnerships", desc: "Direct tie-ups with premier universities across India." },
                    { icon: <BadgeCheck className="w-6 h-6" />, title: "Counseling Excellence", desc: "Expert guidance for JoSAA, NEET counseling, and state-level processes." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white">{item.title}</h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="relative">
                <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 -m-16 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 -m-16 w-48 h-48 bg-black/20 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-4">Need Expert Advice?</h4>
                    <p className="text-blue-100 mb-6 leading-relaxed">Talk to our career mentors for a personalized admission roadmap. Free consultation available.</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/contact-us">
                        <Button size="lg" className="w-full sm:w-auto bg-white text-indigo-900 hover:bg-neutral-100 font-bold rounded-full shadow-lg transition-transform hover:scale-105">
                          Get Free Counseling
                        </Button>
                      </Link>
                      <a href="tel:+919905909990">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-full font-semibold gap-2">
                          <Phone className="w-4 h-4" /> Call Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════ TESTIMONIALS ═══════════════ */}
        <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
          <div className="container px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">Student Success</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4">Trusted by Future Leaders</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {testimonials.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="p-6 bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl h-full flex flex-col hover:shadow-lg transition-all">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <MessageSquareQuote className="w-8 h-8 text-blue-200 dark:text-blue-900/60 mb-3" />
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                      <p className="font-bold text-neutral-900 dark:text-white text-sm">{t.name}</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{t.college}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FAQ SECTION ═══════════════ */}
        <section className="py-16 md:py-24 bg-white dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">Got Questions?</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white mb-4">Frequently Asked Questions</h3>
              <p className="text-neutral-500 dark:text-neutral-400">Everything you need to know about the admission process and our services.</p>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <FAQItem q={faq.q} a={faq.a} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ BOTTOM CTA SECTION ═══════════════ */}
        <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
          <div className="container px-4 md:px-6">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                  Ready to Step Into Your Dream University?
                </motion.h2>
                <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                  Don&apos;t leave your career to chance. Join 10,000+ students who have already secured their future with our expert admission guidance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
                  {[
                    { icon: <BadgeCheck className="w-6 h-6" />, title: "Verified Admits", desc: "100% transparent process." },
                    { icon: <GraduationCap className="w-6 h-6" />, title: "Expert Mentors", desc: "IIT & Medical alumni." },
                    { icon: <ShieldCheck className="w-6 h-6" />, title: "Priority Support", desc: "24/7 assistance." },
                  ].map((p, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/15">
                      <div className="text-white mb-2">{p.icon}</div>
                      <h4 className="font-bold text-white text-sm">{p.title}</h4>
                      <p className="text-blue-200 text-xs">{p.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact-us">
                    <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-lg rounded-full bg-white text-indigo-900 hover:bg-neutral-100 shadow-xl transition-transform hover:scale-105 font-bold">
                      Get Started Today
                    </Button>
                  </Link>
                  <Link href="/chatbot">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 text-lg rounded-full border-white/30 text-white hover:bg-white/10 font-bold gap-2">
                      <MessageSquareQuote className="w-5 h-5" /> Talk to Advisor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Chat */}
        <FloatingChatButton isOpen={isFloatingChatOpen} onToggle={() => setIsFloatingChatOpen(!isFloatingChatOpen)}>
          <ChatBot isFloating={true} />
        </FloatingChatButton>

        {/* Popup Dialog */}
        <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-2xl p-0">
            <div className="p-6 sm:p-10">
              <DialogHeader className="mb-6 mt-4">
                <DialogTitle className="text-3xl font-extrabold dark:text-white mb-2 text-center text-neutral-900">
                  Secure Your Seat Now
                </DialogTitle>
                <DialogDescription className="text-neutral-500 text-center text-base">
                  Get expert guidance for top Engineering, Medical &amp; MBA colleges.
                </DialogDescription>
              </DialogHeader>
              <ContactForm />
            </div>
          </DialogContent>
        </Dialog>

      </main>
      <Footer />
    </div>
  )
}
