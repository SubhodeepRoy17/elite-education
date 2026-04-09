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
  Calendar, 
  Pill, 
  ArrowRight,
  Play,
  Sparkles,
  Building,
  Target,
  Trophy,
  Users
} from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import Slider from "react-slick"
import ChatBot from "./(features)/chatbot/components/Chatbot"
import FloatingChatButton from "./(features)/chatbot/components/FloatingChatButton"
import ContactForm from "@/components/ContactForm"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion, useScroll, useTransform } from "framer-motion"
import EngineeringAdmissionsSection from "@/components/EngineeringAdmissionsSection"
import NewsMarquee from "@/components/NewsMarquee"

const CustomPrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-3 md:p-4 rounded-full bg-white/10 dark:bg-black/50 backdrop-blur-xl border border-white/20 dark:border-white/10 text-neutral-800 dark:text-white hover:scale-110 hover:bg-white/30 dark:hover:bg-white/20 transition-all shadow-xl"
  >
    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
  </button>
)

const CustomNextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-3 md:p-4 rounded-full bg-white/10 dark:bg-black/50 backdrop-blur-xl border border-white/20 dark:border-white/10 text-neutral-800 dark:text-white hover:scale-110 hover:bg-white/30 dark:hover:bg-white/20 transition-all shadow-xl"
  >
    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
  </button>
)

export default function HomePage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isFloatingChatOpen, setIsFloatingChatOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const collegeDetails = [
    { image: "/college1.png", name: "IIT Delhi", location: "New Delhi, India", link: "https://home.iitd.ac.in/" },
    { image: "/college2.png", name: "IIT Bombay", location: "Mumbai, India", link: "https://www.iitb.ac.in/" },
    { image: "/college3.png", name: "IIT Madras", location: "Chennai, India", link: "https://study.iitm.ac.in/" },
    { image: "/college4.png", name: "IIMA Ahmedabad", location: "Ahmedabad, India", link: "https://www.iima.ac.in/" },
    { image: "/college5.png", name: "IIT Kanpur", location: "Kanpur, India", link: "https://www.iitk.ac.in/" }
  ]

  const services = [
    { icon: <GraduationCap className="h-8 w-8" />, title: "Engineering", description: "Gateway to premium technology institutes globally.", link: "/engineering", color: "from-blue-500 to-cyan-400", shadow: "shadow-blue-500/20" },
    { icon: <Stethoscope className="h-8 w-8" />, title: "Medical", description: "Navigate medical entrances with expert precision.", link: "/medical", color: "from-emerald-500 to-teal-400", shadow: "shadow-emerald-500/20" },
    { icon: <Briefcase className="h-8 w-8" />, title: "MBA", description: "Fast-track your corporate leadership journey.", link: "/mba", color: "from-orange-500 to-amber-400", shadow: "shadow-orange-500/20" },
    { icon: <Building className="h-8 w-8" />, title: "Business Admin", description: "BBA and BCA admissions for future leaders.", link: "/business", color: "from-purple-500 to-indigo-400", shadow: "shadow-purple-500/20" },
    { icon: <Stethoscope className="h-8 w-8" />, title: "Nursing", description: "Fulfill your calling with B.Sc & M.Sc Nursing.", link: "/nursing", color: "from-pink-500 to-rose-400", shadow: "shadow-pink-500/20" },
    { icon: <Pill className="h-8 w-8" />, title: "Pharmacy", description: "B.Pharm & M.Pharm tailored admission routes.", link: "/Pharmacy", color: "from-violet-500 to-purple-400", shadow: "shadow-violet-500/20" },
  ]

  const stats = [
    { value: "15+", label: "Years Experience", icon: <Target className="w-6 h-6 text-blue-400" /> },
    { value: "95%", label: "Success Rate", icon: <Trophy className="w-6 h-6 text-emerald-400" /> },
    { value: "10k+", label: "Students Placed", icon: <Users className="w-6 h-6 text-purple-400" /> }
  ]

  useEffect(() => {
    setMounted(true)
    const popupTimer = setTimeout(() => setIsPopupOpen(true), 2000)
    return () => clearTimeout(popupTimer)
  }, [])

  if (!mounted) return null

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  }

  const testimonialSettings = { ...sliderSettings, slidesToShow: 2, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1 } }] }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans selection:bg-blue-500/30">
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-neutral-950 pt-20 pb-16">
          {/* Awesome gradient backgrounds */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-neutral-950 to-neutral-950"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
          />

          <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center mt-12 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">Admissions Open for Global Intake</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight"
            >
              Master Your Destiny <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Design Your Future
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} 
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Elite educational consulting blending AI insights with decades of human expertise. We don&apos;t just find you a college; we help you find your calling.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
            >
              <Link href="/chatbot" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-14 px-8 text-base rounded-full bg-white text-neutral-950 hover:bg-neutral-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] gap-2 font-semibold">
                  Start Consultation <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="#services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-14 px-8 text-base rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md gap-2 font-semibold">
                  <Play className="w-5 h-5" /> Explore Programs
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-xl border-t border-white/5 py-6"
          >
            <div className="container px-4 mx-auto flex flex-wrap justify-center gap-8 md:gap-24">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                    <p className="text-sm text-neutral-400 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* MARQUEE */}
        <div className="bg-white dark:bg-neutral-900 py-6 border-b border-neutral-200 dark:border-neutral-800">
          <NewsMarquee />
        </div>

        {/* SERVICES SECTION */}
        <section id="services" className="w-full py-24 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">Our Expertise</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-6">Programs We Specialize In</h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  Comprehensive admission strategies customized for highly competitive fields, guaranteeing your profile stands out.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={service.link}>
                    <Card className={`group relative h-full flex flex-col p-8 bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 dark:hover:border-neutral-700 hover:-translate-y-1 ${service.shadow}`}>
                      {/* Hover Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6 rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                        <div className="w-full h-full bg-white dark:bg-neutral-900 rounded-xl flex items-center justify-center text-neutral-900 dark:text-white">
                          <span className={`bg-clip-text text-transparent bg-gradient-to-br ${service.color}`}>
                            {service.icon}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">{service.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 flex-1">{service.description}</p>
                      
                      <div className="mt-6 flex items-center text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Explore Program <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ENGINEERING OVERVIEW */}
        <EngineeringAdmissionsSection />

        {/* TOP COLLEGES SECTION */}
        <section className="w-full py-24 bg-white dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800 overflow-hidden">
          <div className="container px-4 md:px-6 relative px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">Partner Institutions</h2>
                <h3 className="text-4xl font-extrabold text-neutral-900 dark:text-white">Top Colleges We Work With</h3>
              </div>
              <Button variant="outline" className="rounded-full hidden md:flex">View All Partners</Button>
            </div>
            
            <div className="relative">
              <Slider {...sliderSettings} className="colleges-slider mx-auto">
                {collegeDetails.map((college, index) => (
                  <div key={index} className="px-3 pb-8">
                    <Card className="group relative overflow-hidden rounded-3xl border-0 bg-neutral-100 dark:bg-neutral-950">
                      <div className="relative h-64 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                        <Image
                          src={college.image}
                          alt={college.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          unoptimized
                        />
                      </div>
                      <div className="p-6 relative z-20 bg-white dark:bg-neutral-900 -mt-6 mx-4 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800 transition-transform group-hover:-translate-y-2">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">{college.name}</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">{college.location}</p>
                        <Link href={college.link} target="_blank">
                          <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="mt-8 flex justify-center md:hidden">
                <Button variant="outline" className="rounded-full w-full max-w-sm">View All Partners</Button>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US (Timeline/Features) */}
        <section id="why-choose-us" className="w-full py-24 bg-neutral-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/40 via-neutral-950 to-neutral-950"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">The Elite Advantage</h2>
              <p className="text-neutral-400 text-lg">We combine data-driven insights with human empathy to craft the perfect application strategy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-[45px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-30"></div>

              {[
                { title: "AI-Powered Matching", desc: "Our proprietary algorithms match your profile with the statistically most favorable institutions.", icon: <Sparkles /> },
                { title: "Ivy-League Mentors", desc: "Get essay feedback and interview prep directly from alumni of premier global universities.", icon: <GraduationCap /> },
                { title: "End-to-End Execution", desc: "From test prep planning to visa assistance, we handle every micro-step of your journey.", icon: <CheckCircle /> }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex items-center justify-center mb-6 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed max-w-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="w-full py-24 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
          <div className="container px-4 md:px-6">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-[3rem] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                  Ready to Shape Your Legacy?
                </h2>
                <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                  Join thousands of successful students who chose the premium path to their dream colleges. Your journey begins with a single conversation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/chatbot">
                    <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-lg rounded-full bg-white text-indigo-900 hover:bg-neutral-100 shadow-xl transition-transform hover:scale-105 font-bold">
                      Book Free Strategy Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FloatingChatButton isOpen={isFloatingChatOpen} onToggle={() => setIsFloatingChatOpen(!isFloatingChatOpen)}>
          <ChatBot isFloating={true} />
        </FloatingChatButton>
        
        <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-2xl p-0">
            <div className="p-6 sm:p-10">
              <DialogHeader className="mb-6 mt-4">
                <DialogTitle className="text-3xl font-extrabold dark:text-white mb-2 text-center text-neutral-900">
                  Secure Your Seat Now
                </DialogTitle>
                <DialogDescription className="text-neutral-500 text-center text-base">
                  Get expert guidance for top Engineering, Medical & MBA colleges globally.
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
