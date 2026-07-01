import Header from "@/components/Header"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Calendar, Award, Building2, CheckCircle2, DollarSign, Briefcase, FileSpreadsheet, ArrowLeft, ArrowRight, PhoneCall } from "lucide-react"

interface Cutoff {
  branch: string
  cutoff: string
}

interface CollegeData {
  slug: string
  name: string
  fullName: string
  location: string
  region: string
  est: string
  rank: string
  averagePackage: string
  highestPackage: string
  recruiters: string[]
  overview: string
  admissionProcess: string
  examsAccepted: string[]
  cutoffs: Cutoff[]
  fees: string
  hostelFees: string
  infrastructure: string[]
  sectors: string[]
}

const collegesDatabase: Record<string, CollegeData> = {
  "jadavpur-university": {
    slug: "jadavpur-university",
    name: "Jadavpur University (JU)",
    fullName: "Jadavpur University, Faculty of Engineering and Technology",
    location: "Kolkata, West Bengal",
    region: "West Bengal",
    est: "1955",
    rank: "NIRF #10 Engineering",
    averagePackage: "23.7 LPA",
    highestPackage: "85 LPA",
    recruiters: ["Microsoft", "Google", "Amazon", "PwC", "L&T", "Texas Instruments"],
    overview: "Established in 1955, Jadavpur University is a premier public state university renowned for its engineering research and unmatched placement statistics. Offering state-of-the-art laboratory facilities and highly distinguished alumni, it remains a top destination for engineering aspirants across India.",
    admissionProcess: "Admissions to Jadavpur University engineering courses are handled strictly via the WBJEE counselling process based on WBJEE General Merit Rank (GMR). Candidates must lock choices in the WBJEE portal during counselling rounds.",
    examsAccepted: ["WBJEE"],
    cutoffs: [
      { branch: "Computer Science & Engg (CSE)", cutoff: "General Rank: 1 - 85" },
      { branch: "Information Technology (IT)", cutoff: "General Rank: 86 - 150" },
      { branch: "Electronics & Telecomm (ETC)", cutoff: "General Rank: 151 - 290" },
      { branch: "Mechanical Engineering (ME)", cutoff: "General Rank: 291 - 700" }
    ],
    fees: "₹2,400 per annum (Extremely subsidised government fee)",
    hostelFees: "₹3,000 per annum (Subject to seat allocation checks)",
    infrastructure: ["State-level research labs", "Centrally air-conditioned library", "On-campus hostels", "Wi-Fi enabled campus"],
    sectors: ["Software Development", "Core Electronics", "Quantitative Analytics", "Consulting"]
  },
  "iit-delhi": {
    slug: "iit-delhi",
    name: "IIT Delhi",
    fullName: "Indian Institute of Technology Delhi",
    location: "New Delhi, Delhi NCR",
    region: "Delhi NCR",
    est: "1961",
    rank: "NIRF #2 Engineering",
    averagePackage: "21.5 LPA",
    highestPackage: "2.1 Cr PA",
    recruiters: ["Google", "Microsoft", "Uber", "Goldman Sachs", "Apple", "Rubrik"],
    overview: "Indian Institute of Technology Delhi is a public research university located in New Delhi, recognized globally as an Institute of Eminence. Known for pioneering research, incubated startups, and high-tier academic programs, it offers an incomparable foundation in engineering and technology.",
    admissionProcess: "Qualified candidates in JEE Advanced must participate in JoSAA (Joint Seat Allocation Authority) counselling rounds. Choice mapping is highly competitive and requires strict score alignment.",
    examsAccepted: ["JEE Advanced", "JEE Main (Qualifying)"],
    cutoffs: [
      { branch: "Computer Science & Engg (CSE)", cutoff: "JEE Adv Rank: 1 - 115" },
      { branch: "Electrical Engineering (EE)", cutoff: "JEE Adv Rank: 116 - 550" },
      { branch: "Mathematics & Computing", cutoff: "JEE Adv Rank: 120 - 350" },
      { branch: "Mechanical Engineering", cutoff: "JEE Adv Rank: 551 - 1200" }
    ],
    fees: "₹2.2 Lakhs per semester (Standard IIT structure)",
    hostelFees: "₹45,000 per semester",
    infrastructure: ["Supercomputing facility", "Distinguished incubation centers", "State-of-the-art gyms & pools", "Central library library"],
    sectors: ["Quantitative Trading", "Machine Learning & AI", "Corporate Advisory", "SaaS Engineering"]
  },
  "heritage-institute-of-technology": {
    slug: "heritage-institute-of-technology",
    name: "Heritage Institute of Technology",
    fullName: "Heritage Institute of Technology, Kolkata (HITK)",
    location: "Kolkata, West Bengal",
    region: "West Bengal",
    est: "2001",
    rank: "NAAC Grade A",
    averagePackage: "5.8 LPA",
    highestPackage: "44 LPA",
    recruiters: ["TCS", "Cognizant", "Wipro", "Infosys", "IBM", "Capgemini"],
    overview: "Heritage Institute of Technology was founded in 2001 by the Kalyan Bharti Trust and has risen to become one of the top private self-financed engineering institutions in West Bengal. It offers excellent academic structure and a rich campus experience.",
    admissionProcess: "80% of seats are allocated via WBJEE counseling, 10% via JEE Main counseling, and 10% via Management Quota allocations. Candidates must undergo document checks.",
    examsAccepted: ["WBJEE", "JEE Main"],
    cutoffs: [
      { branch: "Computer Science & Engg (CSE)", cutoff: "WBJEE Rank: 1500 - 3200" },
      { branch: "Information Technology (IT)", cutoff: "WBJEE Rank: 3201 - 4500" },
      { branch: "Computer Science & Business System", cutoff: "WBJEE Rank: 4501 - 6000" },
      { branch: "Electronics & Comm (ECE)", cutoff: "WBJEE Rank: 6001 - 9200" }
    ],
    fees: "₹1.1 Lakhs per annum (Tuition Fee)",
    hostelFees: "₹50,000 per annum",
    infrastructure: ["Modern air-conditioned computer labs", "Rich library with digital portal", "Football ground & gym", "Spacious auditoriums"],
    sectors: ["IT Services", "Enterprise App Development", "Telecommunications", "Financial Operations"]
  },
  "iit-bombay": {
    slug: "iit-bombay",
    name: "IIT Bombay",
    fullName: "Indian Institute of Technology Bombay",
    location: "Mumbai, Maharashtra",
    region: "All Hubs",
    est: "1958",
    rank: "NIRF #3 Engineering",
    averagePackage: "22.8 LPA",
    highestPackage: "2.4 Cr PA",
    recruiters: ["Apple", "Qualcomm", "Meta", "Google", "Goldman Sachs", "Optiver"],
    overview: "IIT Bombay, established in 1958, is a premier Institute of Eminence located in Powai, Mumbai. Renowned for its world-class research publications, industry partnerships, and vibrant entrepreneurship culture, it is the first choice of JEE Advanced top rankers.",
    admissionProcess: "Seat allocation is managed through JoSAA counselling based on JEE Advanced category rankings. Precise choice sequencing is critical to lock desired branches.",
    examsAccepted: ["JEE Advanced", "JEE Main (Qualifying)"],
    cutoffs: [
      { branch: "Computer Science & Engg (CSE)", cutoff: "JEE Adv Rank: 1 - 65" },
      { branch: "Electrical Engineering", cutoff: "JEE Adv Rank: 66 - 290" },
      { branch: "Engineering Physics", cutoff: "JEE Adv Rank: 291 - 650" },
      { branch: "Aerospace Engineering", cutoff: "JEE Adv Rank: 651 - 950" }
    ],
    fees: "₹2.3 Lakhs per semester",
    hostelFees: "₹48,000 per semester",
    infrastructure: ["Advanced Nanotechnology Lab", "Central Library with over 2.5 lakh books", "Olympic-sized track & pool", "Lakeside campus Powai"],
    sectors: ["Hedge Funds & Quant", "AI Core Development", "Product Management", "Strategic Consulting"]
  },
  "iem-kolkata": {
    slug: "iem-kolkata",
    name: "IEM Kolkata",
    fullName: "Institute of Engineering & Management, Kolkata",
    location: "Kolkata, West Bengal",
    region: "West Bengal",
    est: "1989",
    rank: "NAAC Grade A++",
    averagePackage: "6.2 LPA",
    highestPackage: "40 LPA",
    recruiters: ["Capgemini", "Cognizant", "TCS", "LTI", "Infosys", "Mindtree"],
    overview: "Established in 1989, the Institute of Engineering & Management (IEM) is West Bengal's oldest private self-financed engineering and management institution. Located in Salt Lake Sector V, it is recognized for discipline, rigorous study structures, and consistent campus recruitment records.",
    admissionProcess: "Admissions are conducted through WBJEE and JEE Main counselling. Candidates seeking admission under management criteria must verify their boards marks eligibility.",
    examsAccepted: ["WBJEE", "JEE Main"],
    cutoffs: [
      { branch: "Computer Science & Engg (CSE)", cutoff: "WBJEE Rank: 1200 - 2800" },
      { branch: "Information Technology (IT)", cutoff: "WBJEE Rank: 2801 - 3900" },
      { branch: "Electronics & Comm (ECE)", cutoff: "WBJEE Rank: 3901 - 7000" },
      { branch: "Computer Science & Specializations", cutoff: "WBJEE Rank: 2800 - 4500" }
    ],
    fees: "₹1.8 Lakhs per annum (Tuition Fee)",
    hostelFees: "₹72,000 per annum",
    infrastructure: ["Rigorous coding labs", "Salt Lake Sector V technology exposure", "Digital study library", "Corporate conference auditoriums"],
    sectors: ["IT Solutions Consulting", "Enterprise Software Services", "Product Assurance", "Fintech Operations"]
  },
  "iim-ahmedabad": {
    slug: "iim-ahmedabad",
    name: "IIM Ahmedabad",
    fullName: "Indian Institute of Management Ahmedabad",
    location: "Ahmedabad, Gujarat",
    region: "All Hubs",
    est: "1961",
    rank: "NIRF #1 Management",
    averagePackage: "32.7 LPA",
    highestPackage: "1.1 Cr PA",
    recruiters: ["McKinsey & Co", "Boston Consulting Group (BCG)", "Bain & Co", "Goldman Sachs", "J.P. Morgan", "Tata Administrative Services"],
    overview: "Indian Institute of Management Ahmedabad is India's most prestigious business school. Recognized globally for its case-method teaching pedagogy, highly rigorous academic environment, and elite placements, it produces leaders, CEOs, and policymakers.",
    admissionProcess: "Candidates are shortlisted based on CAT percentile, followed by Analytical Writing Tests (AWT) and Personal Interviews (PI). Profile weights (10th/12th/Work Ex) are critical.",
    examsAccepted: ["CAT", "GMAT (International candidates)"],
    cutoffs: [
      { branch: "Post Graduate Programme (PGP/MBA)", cutoff: "CAT Percentile: 99.0+ (General shortlisting)" },
      { branch: "PGP in Food & Agri Business (FABM)", cutoff: "CAT Percentile: 96.0+ (General shortlisting)" }
    ],
    fees: "₹25.0 Lakhs (Total MBA program fee)",
    hostelFees: "Included in course fee (Mandatory residential structure)",
    infrastructure: ["Louis Kahn heritage plaza campus", "Distinguished case research center", "Vast digital business archives", "Elite executive centers"],
    sectors: ["Management Consulting", "Investment Banking", "Private Equity", "General Management"]
  },
  "symbiosis-institute-of-business": {
    slug: "symbiosis-institute-of-business",
    name: "Symbiosis Institute of Business",
    fullName: "Symbiosis Institute of Business Management, Pune (SIBM)",
    location: "Pune, Maharashtra",
    region: "Pune",
    est: "1978",
    rank: "Top 15 B-School India",
    averagePackage: "20.8 LPA",
    highestPackage: "39 LPA",
    recruiters: ["Deloitte", "EY", "KPMG", "ICICI Bank", "PwC", "Aditya Birla Group"],
    overview: "SIBM Pune, founded in 1978, is the flagship MBA institute under Symbiosis International University. Positioned in the scenic hills of Lavale, Pune, it offers stellar academic programs in Marketing, Finance, HR, and Operations.",
    admissionProcess: "Candidates must qualify in the SNAP (Symbiosis National Aptitude Test) examination, followed by Group Exercises (GE), Writing Ability Test (WAT), and Personal Interviews.",
    examsAccepted: ["SNAP"],
    cutoffs: [
      { branch: "MBA (General)", cutoff: "SNAP Percentile: 97.5+ Shortlist" },
      { branch: "MBA (Innovation & Entrepreneurship)", cutoff: "SNAP Percentile: 92.0+ Shortlist" },
      { branch: "MBA (Leadership & Strategy)", cutoff: "SNAP Percentile: 95.0+ Shortlist" }
    ],
    fees: "₹11.5 Lakhs per annum",
    hostelFees: "₹1.2 Lakhs per annum",
    infrastructure: ["Lavale hilltop campus", "Bloomberg terminal finance labs", "Modern sports complex", "Rich business library archives"],
    sectors: ["Investment & Banking", "Corporate HR Strategy", "Brand & Product Management", "Supply Chain Operations"]
  },
  "rv-college-of-engineering": {
    slug: "rv-college-of-engineering",
    name: "RV College of Engineering",
    fullName: "Rashtreeya Vidyalaya College of Engineering (RVCE)",
    location: "Bangalore, Karnataka",
    region: "Bangalore",
    est: "1963",
    rank: "Top 50 NIRF Engineering",
    averagePackage: "11.2 LPA",
    highestPackage: "62 LPA",
    recruiters: ["Amazon", "Cisco", "Intel", "Adobe", "Microsoft", "Bosch"],
    overview: "Established in 1963, RV College of Engineering is an autonomous private technical institution located in Bangalore, India's tech hub. Backed by excellent corporate collaborations and hands-on lab structures, it ranks among India's elite self-financed engineering schools.",
    admissionProcess: "45% of seats are filled via KCET, 30% via COMEDK UGET counseling, and 25% via Management Quota criteria. High cutoff ranks are common.",
    examsAccepted: ["KCET", "COMEDK UGET", "JEE Main"],
    cutoffs: [
      { branch: "Computer Science & Engg (CSE)", cutoff: "COMEDK Rank: 1 - 290" },
      { branch: "Information Science & Engg (ISE)", cutoff: "COMEDK Rank: 291 - 450" },
      { branch: "Artificial Intelligence & ML", cutoff: "COMEDK Rank: 350 - 580" },
      { branch: "Electronics & Comm (ECE)", cutoff: "COMEDK Rank: 581 - 1100" }
    ],
    fees: "₹2.2 Lakhs per annum (COMEDK quota tuition fee)",
    hostelFees: "₹1.1 Lakhs per annum",
    infrastructure: ["IoT & Robotics labs", "Dynamic placement cell block", "On-campus hostels & food court", "Extensive technical library portal"],
    sectors: ["VLSI Design & Hardware", "Enterprise Software SaaS", "Network Systems Engineering", "Cloud Computing & Data Systems"]
  },
  "christ-university": {
    slug: "christ-university",
    name: "Christ University",
    fullName: "Christ (Deemed to be University), Bangalore",
    location: "Bangalore, Karnataka",
    region: "Bangalore",
    est: "1969",
    rank: "NAAC Grade A+",
    averagePackage: "8.5 LPA",
    highestPackage: "24 LPA",
    recruiters: ["Target Corporation", "Goldman Sachs", "Dell", "HUL", "Deloitte", "EY"],
    overview: "Founded in 1969 as Christ College, Christ University is known for its sprawling green urban campus, multicultural student base, and rigorous business management and humanities departments. It is a highly sought campus for professional degrees.",
    admissionProcess: "Admissions involve the Christ University Entrance Test (CUET) followed by Micro Presentations (MP) and Personal Interviews (PI). Academic grades profile weight is also checked.",
    examsAccepted: ["CUET", "CAT/MAT/XAT/CMAT (For MBA)"],
    cutoffs: [
      { branch: "Bachelor of Business Admin (BBA)", cutoff: "CUET entrance qualify + Interview shortlist" },
      { branch: "BBA (Finance & International Business)", cutoff: "CUET entrance qualify + Interview shortlist" },
      { branch: "MBA (General)", cutoff: "CAT: 75+ Percentile or MAT: 600+ Score" }
    ],
    fees: "₹2.1 Lakhs per annum (BBA Tuition Fee)",
    hostelFees: "₹85,000 per annum",
    infrastructure: ["Green urban campus library", "Advanced seminar rooms", "Lush campus pathways", "Multiple dining halls"],
    sectors: ["Consulting & Analytics", "Corporate Finance", "Retail Management", "Human Capital Management"]
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CollegePage({ params }: PageProps) {
  const { slug } = await params
  const college = collegesDatabase[slug]

  if (!college) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans selection:bg-blue-100 selection:text-blue-950">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Admissions Desk</span>
        </Link>

        {/* Hero Section */}
        <section className="border-b border-slate-200 pb-10 mb-12 dark:border-slate-800">
          <div className="max-w-4xl flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded dark:bg-blue-950/40 dark:text-blue-400">
                {college.region} Institution Network
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded dark:bg-slate-900 dark:text-slate-400">
                {college.rank}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
              {college.fullName}
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-4 mt-2">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-600 shrink-0" /> {college.location}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-600 shrink-0" /> Established {college.est}</span>
            </p>
          </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info Columns (Takes 8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Overview */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-150 pb-2 dark:border-slate-800">
                Institutional Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-450 leading-relaxed">
                {college.overview}
              </p>
            </div>

            {/* Placement Dashboard */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-150 pb-2 dark:border-slate-800">
                Placement &amp; Employment Metrics
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
                <div className="p-5 bg-slate-50 rounded border border-slate-200/60 dark:bg-slate-900/40 dark:border-slate-800/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Average Placement Package</span>
                  <p className="text-2xl font-black text-slate-950 dark:text-white mt-1.5">{college.averagePackage}</p>
                </div>
                <div className="p-5 bg-slate-50 rounded border border-slate-200/60 dark:bg-slate-900/40 dark:border-slate-800/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Highest Package Recorded</span>
                  <p className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1.5">{college.highestPackage}</p>
                </div>
                <div className="p-5 bg-slate-50 rounded border border-slate-200/60 dark:bg-slate-900/40 dark:border-slate-800/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Corporate Partners</span>
                  <p className="text-2xl font-black text-slate-950 dark:text-white mt-1.5">{college.recruiters.length}+ hiring</p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Key Recruiting Enterprises</h3>
                  <div className="flex flex-wrap gap-2">
                    {college.recruiters.map((rec, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 bg-white border border-slate-200 rounded font-medium text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-350">
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Primary Recruitment Sectors</h3>
                  <div className="flex flex-wrap gap-2">
                    {college.sectors.map((sec, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-slate-50 border border-slate-200/60 rounded text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400">
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Admission Cutoffs & Workbench */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-150 pb-2 dark:border-slate-800">
                Entrance Examinations &amp; Historical Cutoffs
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Admissions details are simulated based on corresponding counselling rounds. Review cutoffs below to map target thresholds.
              </p>

              <div className="border border-slate-200 rounded-lg overflow-hidden dark:border-slate-800 shadow-sm mt-2">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 text-slate-500 dark:text-slate-400">
                      <th className="p-4 font-semibold uppercase">Academic Branch / Specialization</th>
                      <th className="p-4 font-semibold uppercase text-right">Cutoff Criteria (General Class)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-850">
                    {college.cutoffs.map((cut, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/30">
                        <td className="p-4 font-bold text-slate-900 dark:text-white">{cut.branch}</td>
                        <td className="p-4 text-right text-slate-600 font-medium dark:text-slate-350">{cut.cutoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Sidebar (Takes 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Direct Counselling Callout */}
            <div className="bg-slate-950 text-white rounded-lg p-6 flex flex-col gap-5 relative overflow-hidden dark:bg-slate-900">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl -m-6" />
              <h3 className="text-lg font-bold tracking-tight text-white">Admissions Consultation Desk</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect with our certified counsellors for options allocation guidance, choice list compilation, and tuition waivers matching.
              </p>
              
              <div className="flex flex-col gap-2.5 text-xs border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Free eligibility diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Choice mapping sequencing</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <a href="tel:+919905909990" className="btn-primary w-full py-3 text-xs bg-blue-600 hover:bg-blue-700">
                  <PhoneCall className="w-3.5 h-3.5" /> Call Advisor (+91 99059-09990)
                </a>
                <Link href="/contact-us" className="btn-secondary w-full py-3 text-xs text-center border-white/10 text-white bg-transparent hover:bg-white/10 dark:hover:bg-slate-800">
                  Schedule Office Meeting
                </Link>
              </div>
            </div>

            {/* General Admission requirements */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 dark:bg-slate-950 dark:border-slate-800 flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white border-b border-slate-100 pb-2 dark:border-slate-850">
                Admission Specifications
              </h3>
              
              <div className="flex flex-col gap-3.5 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold uppercase text-[9px]">Exams Accepted</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {college.examsAccepted.map((ex, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded font-bold text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-350">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 dark:border-slate-850">
                  <span className="text-slate-400 block font-semibold uppercase text-[9px]">Course Tuition Fees</span>
                  <span className="text-slate-900 dark:text-white font-bold block mt-1">{college.fees}</span>
                </div>

                <div className="border-t border-slate-100 pt-3 dark:border-slate-850">
                  <span className="text-slate-400 block font-semibold uppercase text-[9px]">Hostel &amp; Mess Cost</span>
                  <span className="text-slate-900 dark:text-white font-bold block mt-1">{college.hostelFees}</span>
                </div>

                <div className="border-t border-slate-100 pt-3 dark:border-slate-850">
                  <span className="text-slate-400 block font-semibold uppercase text-[9px] mb-1.5">Core Infrastructure Highlights</span>
                  <ul className="flex flex-col gap-1.5 text-slate-600 dark:text-slate-400">
                    {college.infrastructure.map((inf, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{inf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}
