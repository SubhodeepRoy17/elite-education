import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 relative overflow-hidden">
      {/* Top CTA strip */}
      <div className="bg-blue-600 py-4">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-sm text-center sm:text-left">
            🎓 Admissions Open 2026 — Speak with our expert counselors today!
          </p>
          <Link href="/contact-us">
            <Button size="sm" className="bg-white text-blue-700 hover:bg-neutral-100 font-bold rounded-full px-6 shadow-lg text-xs">
              Book Free Session <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-xl font-extrabold text-white tracking-tight">ELITE EDUCATION</h3>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 mb-6">
              Comprehensive admission guidance for Indian colleges and universities. Leading the way in strategic education consulting.
            </p>
            <div className="flex gap-3">
              {/* Social placeholder circles */}
              {["FB", "IG", "TW", "YT"].map((s, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-neutral-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/#services" },
                { label: "About Us", href: "/about-us" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <a href="mailto:support@eliteeducation.co.in" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  support@eliteeducation.co.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div className="text-sm text-neutral-400">
                  <a href="tel:+919905909990" className="hover:text-white transition-colors block">+91 99059-09990</a>
                  <a href="tel:+918777469721" className="hover:text-white transition-colors block">+91 87774-69721</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <p className="text-sm text-neutral-400">
                  Elite Education Unit - 303, 3rd floor, Merlin Matrix, DN 10, Salt Lake Sector V, Kolkata - 700091
                </p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Stay Connected</h4>
            <p className="text-sm text-neutral-400 mb-4">Get the latest admission updates and career guidance.</p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-11 bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 rounded-xl focus-visible:ring-blue-500"
              />
              <Button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-500/20">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container px-4 md:px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-500 text-center md:text-left">
              © {new Date().getFullYear()} ELITE EDUCATION. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-neutral-500">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/contact-us" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
          {/* Disclaimer */}
          <div className="mt-5 pt-5 border-t border-neutral-800/50">
            <p className="text-[11px] text-neutral-600 leading-relaxed max-w-4xl">
              <strong className="text-neutral-500">Important Disclaimer:</strong> Elite Education provides educational consulting and guidance services. We do not guarantee admissions, placements, or specific outcomes. Information about colleges, courses, and fees is sourced from institutional websites and official publications. Users must verify all details directly with respective institutions. All academic and financial decisions remain solely the user&apos;s responsibility.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
