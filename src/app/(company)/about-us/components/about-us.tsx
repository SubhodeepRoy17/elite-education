"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import { Target, Compass, BookOpen, GraduationCap, Building, Phone } from "lucide-react"

export default function AboutUs() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center w-full">
        {/* --- Hero Section --- */}
        <section className="w-full relative overflow-hidden bg-white dark:bg-gray-900 py-24 border-b border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 z-0">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
            <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>Elite Education</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white">
                Guiding You to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Dream College</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We provide personalized, strategic guidance to help students navigate the complex admissions process with confidence and clarity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Mission & Approach Section --- */}
        <section className="container mx-auto px-6 py-24 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUpVariant} className="mb-12 relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold dark:text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  At Elite Education, we are dedicated to guiding students through the complex college admission
                  process. Our mission is to empower students to reach their full potential and gain admission to their
                  dream colleges.
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-full"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold dark:text-white">Our Approach</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We believe in a personalized approach, tailoring our services to each student&apos;s unique strengths,
                  interests, and goals. Our team of experienced consultants provides expert guidance on every aspect of the
                  college application process.
                </p>
              </motion.div>
            </motion.div>

            {/* Right-side Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
              <Image
                src="/cover2.png"
                alt="College students"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl object-cover border border-gray-100 dark:border-gray-800"
                unoptimized
              />
            </motion.div>
          </div>
        </section>

        {/* --- Our Team Section --- */}
        <section className="w-full bg-white dark:bg-gray-900 py-24 border-y border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 dark:text-white">Meet Our Experts</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our team is composed of former admissions officers, expert strategists, and dedicated mentors.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { name: "Jane Doe", role: "Founder & Lead Consultant" },
                { name: "John Smith", role: "Essay Specialist" },
                { name: "Emily Brown", role: "Admissions Strategist" },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeUpVariant}
                  className="group bg-neutral-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-all"></div>
                    <Image
                      src={`https://via.placeholder.com/150x150?text=${member.name.charAt(0)}`}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full relative z-10 border-4 border-white dark:border-gray-800 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Admissions Information Section --- */}
        <section className="container mx-auto px-6 py-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700"
          >
            <div className="grid lg:grid-cols-5 h-full">
              {/* Left Content */}
              <div className="lg:col-span-3 p-10 md:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-6 w-max border border-white/20">
                  <Building className="w-4 h-4" />
                  <span>India Admissions</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Comprehensive Course Coverage
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-gray-400 font-semibold mb-4 text-sm tracking-widest uppercase">Undergraduate Programs</h3>
                    <div className="flex flex-wrap gap-2">
                      {['MBBS', 'BDS', 'NURSING', 'B.Tech', 'B.Pharma', 'BBA', 'BCA', 'LLB'].map(course => (
                        <span key={course} className="px-3 py-1 bg-white/5 text-white rounded-md text-sm border border-white/10 hover:bg-white/10 transition-colors">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-400 font-semibold mb-4 text-sm tracking-widest uppercase">Postgraduate Programs</h3>
                    <div className="flex flex-wrap gap-2">
                      {['MD', 'MDS', 'M.PHARM', 'MBA', 'MCA', 'MCI', 'DCI', 'INC', 'BCI', 'PCI', 'AICTE APPROVED'].map(course => (
                        <span key={course} className="px-3 py-1 bg-white/5 text-white rounded-md text-sm border border-white/10 hover:bg-white/10 transition-colors">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-10 text-sm text-gray-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  All admissions are subject to Govt. of India and college guidelines.
                </p>
              </div>

              {/* Right Contact Info */}
              <div className="lg:col-span-2 bg-primary p-10 md:p-14 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute right-0 bottom-0 text-white/10 translate-x-1/4 translate-y-1/4 pb-5">
                   <Phone className="w-64 h-64" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 relative z-10">Get in Touch</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <p className="font-semibold text-white/80 mb-1 text-sm uppercase tracking-wider">Unit</p>
                    <p className="leading-relaxed">
                      Elite Education Unit - 303, 3rd floor, Merlin matrix, DN 10, Salt lake sector V, Kolkata - 700091
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <p className="font-semibold text-white/80 mb-1 text-sm uppercase tracking-wider">Contact Number</p>
                    <p className="text-xl font-bold flex items-center gap-2">
                      <Phone className="w-5 h-5 opacity-80" />
                      +91 99059-09990
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
