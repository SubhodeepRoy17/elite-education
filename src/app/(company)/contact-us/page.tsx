"use client"

import ContactForm from "@/components/ContactForm"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans selection:bg-blue-500/30">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-neutral-950">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-neutral-950 to-neutral-950"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            We're here to answer any questions you have about Elite Education programs, admissions, and more. Reach out to us today.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section className="py-16 md:py-24 relative z-20 -mt-10">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">
            
            {/* Contact Details (Left side) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-8 mt-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Contact Information</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                  Whether you're aiming for a top-tier B-School, an elite Engineering institute, or a prestigious Medical college, we are dedicated to guiding you.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-900/50 shadow-sm border border-neutral-200 dark:border-neutral-800 backdrop-blur-md">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">Email Us</h4>
                    <p className="text-neutral-500 text-xs mt-1 mb-2">Our team will respond within 24 hours.</p>
                    <a href="mailto:support@eliteeducation.co.in" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                      support@eliteeducation.co.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-900/50 shadow-sm border border-neutral-200 dark:border-neutral-800 backdrop-blur-md">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">Call Us</h4>
                    <p className="text-neutral-500 text-xs mt-1 mb-2">Mon-Fri from 9am to 6pm.</p>
                    <a href="tel:+919905909990" className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline block">
                      +91 99059-09990
                    </a>
                    <a href="tel:+918777469721" className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline block mt-1">
                      +91 87774-69721
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-900/50 shadow-sm border border-neutral-200 dark:border-neutral-800 backdrop-blur-md">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl text-emerald-600 dark:text-emerald-400 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">Our Office</h4>
                    <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
                    Elite education Unit - 303, 3rd floor, Merlin matrix, DN 10, Salt lake sector V, Kolkata - 700091
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form (Right side) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-3 bg-white dark:bg-neutral-900/90 rounded-[2rem] p-8 md:p-10 shadow-2xl border border-neutral-200 dark:border-neutral-800 relative overflow-hidden backdrop-blur-xl"
            >
               {/* Form background accents */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
               
               <div className="mb-8">
                 <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Send us a Message</h3>
                 <p className="text-neutral-500 text-sm mt-2">Fill out the form below and we'll get back to you shortly.</p>
               </div>
               
               <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* INFO BANNER */}
      <section className="w-full py-16 bg-blue-600 dark:bg-indigo-950 text-white relative overflow-hidden mt-auto">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay blur-[2px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-600/50 via-indigo-600/50 to-purple-600/50 pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-widest mb-8 drop-shadow-md">
              INDIA ADMISSIONS
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 bg-black/20 p-8 rounded-3xl backdrop-blur-md border border-white/10 shadow-xl">
              <p className="md:text-lg text-blue-50 text-sm leading-relaxed">
                <strong className="text-white bg-white/20 px-3 py-1 rounded-md mr-2 inline-block shadow-sm">UG COURSE</strong> 
                MBBS | BDS | NURSING | B.Tech | B.Pharma | BBA | BCA | LLB 
              </p>
              <p className="md:text-lg text-blue-50 text-sm leading-relaxed">
                <strong className="text-white bg-white/20 px-3 py-1 rounded-md mr-2 inline-block shadow-sm">PG COURSE</strong> 
                MD | MDS | M.PHARM | MBA | MCA | MCI | DCI | INC | BCI | PCI | AICTE
              </p>
              
              <div className="w-full h-px bg-white/20 my-6"></div>
              
              <p className="text-xs font-bold tracking-widest text-blue-200 uppercase flex items-center justify-center gap-2">
                 <span className="w-8 h-px bg-blue-400"></span>
                 All admissions are subject to Govt. of India and college guidelines
                 <span className="w-8 h-px bg-blue-400"></span>
              </p>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
