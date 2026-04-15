"use client"

import Header from "@/components/Header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, Mail, Phone, MapPin } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans selection:bg-blue-500/30">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-neutral-950">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-neutral-950 to-neutral-950"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center flex flex-col items-center">
            {/* icon */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 bg-blue-500/10 p-4 rounded-full"
            >
                <Shield className="w-12 h-12 text-blue-400" />
            </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            We value your trust and are committed to protecting your personal information. Read our privacy policy below to understand how we collect, use, and protect your data.
          </motion.p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 md:py-24 relative z-20 -mt-10">
        <div className="container px-4 mx-auto max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white dark:bg-neutral-900/90 rounded-[2rem] p-8 md:p-12 shadow-2xl border border-neutral-200 dark:border-neutral-800 relative overflow-hidden backdrop-blur-xl space-y-12"
            >
               {/* Form background accents */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
               
               {/* Content Block 1 */}
               <div className="space-y-4">
                 <h2 className="text-2xl font-bold flex items-center gap-3 text-neutral-900 dark:text-white">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold">1</span>
                    Information We Collect
                 </h2>
                 <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                   We may collect the following types of information when you use our website:
                 </p>
                 <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Personal Information</h3>
                        <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 text-sm">
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>Name</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>Email address</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>Phone number</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>Course interest or academic preferences</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>Any details submitted through forms on our website</li>
                        </ul>
                    </div>
                    <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Non-Personal Information</h3>
                        <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 text-sm">
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>IP address</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>Device information</li>
                            <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>Website usage data through cookies or analytics tools</li>
                        </ul>
                    </div>
                 </div>
               </div>

                {/* Content Block 2 */}
                <div className="space-y-4">
                 <h2 className="text-2xl font-bold flex items-center gap-3 text-neutral-900 dark:text-white">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold">2</span>
                    How We Use Your Information
                 </h2>
                 <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                   We use your information to:
                 </p>
                 <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>Communicate via RCS/SMS/WhatsApp/Email for marketing if you opted in while filling the contact form.</span>
                    </li>
                    <li className="flex items-start gap-3">
                         <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>Provide education counseling and admission guidance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                         <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>Respond to inquiries and requests.</span>
                    </li>
                    <li className="flex items-start gap-3">
                         <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>Share information about courses, colleges, and services.</span>
                    </li>
                    <li className="flex items-start gap-3">
                         <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>Improve our website and user experience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                         <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>Communicate updates, offers, or relevant services.</span>
                    </li>
                 </ul>
               </div>

               {/* Content Block 3 */}
               <div className="space-y-4">
                 <h2 className="text-2xl font-bold flex items-center gap-3 text-neutral-900 dark:text-white">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold">3</span>
                    Sharing of Information
                 </h2>
                 <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                   We do not sell or rent your personal information. However, we may share your information with:
                 </p>
                 <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 border-l-2 border-neutral-100 dark:border-neutral-800 pl-4 ml-2">
                    <li className="flex items-center gap-2">Partner universities or institutions (for admission guidance).</li>
                    <li className="flex items-center gap-2">Service providers helping us operate our website.</li>
                    <li className="flex items-center gap-2">Authorities if required by law.</li>
                 </ul>
               </div>

               {/* Content Block 4 */}
               <div className="space-y-4">
                 <h2 className="text-2xl font-bold flex items-center gap-3 text-neutral-900 dark:text-white">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold">4</span>
                    Cookies and Tracking Technologies
                 </h2>
                 <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                   Our website may use cookies and similar technologies to improve your browsing experience and analyze website traffic. You may disable cookies in your browser settings if you prefer.
                 </p>
               </div>

               {/* Content Block 5 */}
               <div className="space-y-4">
                 <h2 className="text-2xl font-bold flex items-center gap-3 text-neutral-900 dark:text-white">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold">5</span>
                    Data Security
                 </h2>
                 <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                   We take appropriate technical and organizational measures to protect your personal data from unauthorized access, misuse, or disclosure. However, no online system can guarantee 100% security.
                 </p>
               </div>

               {/* Content Block 6 */}
               <div className="space-y-4">
                 <h2 className="text-2xl font-bold flex items-center gap-3 text-neutral-900 dark:text-white">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold">6</span>
                    Third-Party Links
                 </h2>
                 <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                   Our website may contain links to third-party websites such as partner colleges or external services. We are not responsible for their privacy practices.
                 </p>
               </div>

               {/* Content Block 7 */}
               <div className="space-y-4">
                 <h2 className="text-2xl font-bold flex items-center gap-3 text-neutral-900 dark:text-white">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold">7</span>
                    Your Rights
                 </h2>
                 <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                   You may:
                 </p>
                 <div className="flex flex-wrap gap-3 mt-2 mb-4">
                    <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm border border-neutral-200 dark:border-neutral-700/50">Request access to your personal data</span>
                    <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm border border-neutral-200 dark:border-neutral-700/50">Request correction or deletion of your data</span>
                    <span className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm border border-neutral-200 dark:border-neutral-700/50">Withdraw consent for communications</span>
                 </div>
                 <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                   To make a request, contact us using the details below.
                 </p>
               </div>

               {/* Content Block 8 */}
               <div className="space-y-4">
                 <h2 className="text-2xl font-bold flex items-center gap-3 text-neutral-900 dark:text-white">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold">8</span>
                    Changes to This Policy
                 </h2>
                 <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                   We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised effective date.
                 </p>
               </div>

               {/* Content Block 9 / Contact Us */}
               <div className="space-y-6 pt-10 mt-12 border-t border-neutral-200 dark:border-neutral-800 w-full relative">
                 {/* Contact cards section */}
                 <h2 className="text-2xl font-bold flex items-center gap-3 text-neutral-900 dark:text-white mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold">9</span>
                    Contact Us
                 </h2>
                 <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                   If you have questions about this Privacy Policy, please contact us:
                 </p>
                 <div className="grid md:grid-cols-3 gap-6">
                    {/* Email Card */}
                    <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 shadow-sm border border-blue-200/50 dark:border-blue-800/50">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white text-base mb-2">Email</h4>
                        <a href="mailto:support@eliteeducation.co.in" className="text-neutral-500 dark:text-neutral-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            support@eliteeducation.co.in
                        </a>
                    </div>
                    {/* Phone Card */}
                    <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                        <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 shadow-sm border border-purple-200/50 dark:border-purple-800/50">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white text-base mb-2">Phone</h4>
                        <a href="tel:+919905909990" className="text-neutral-500 dark:text-neutral-400 text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors block mb-1">
                            +91 99059-09990
                        </a>
                        <a href="tel:+918777469721" className="text-neutral-500 dark:text-neutral-400 text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors block">
                            +91 87774-69721
                        </a>
                    </div>
                    {/* Address Card */}
                    <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-200/50 dark:border-emerald-800/50">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white text-base mb-2">Address</h4>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                            Elite education Unit - 303, 3rd floor, Merlin matrix, DN 10, Salt lake sector V, Kolkata - 700091
                        </p>
                    </div>
                 </div>
               </div>

            </motion.div>
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
