"use client"

import { useState } from "react"
import { CheckCircleIcon, Send } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectGroup, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    graduationYear: "",
    interestedProgram: "",
    message: "",
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termsAccepted: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate network request
    setTimeout(() => {
      console.log(formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-12 text-center h-full"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/10"
        >
          <CheckCircleIcon className="w-12 h-12 text-green-500 dark:text-green-400" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Application Received!
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Elite Education. One of our expert advisors will contact you shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 focus-visible:ring-blue-500 h-12 transition-all shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 focus-visible:ring-blue-500 h-12 transition-all shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 focus-visible:ring-blue-500 h-12 transition-all shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="graduationYear" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Expected Graduation</Label>
          <Select
            name="graduationYear"
            value={formData.graduationYear}
            onValueChange={(value) =>
                handleChange({
                target: { name: "graduationYear", value },
                } as React.ChangeEvent<HTMLInputElement>) 
            }
          >
            <SelectTrigger className="w-full rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 focus:ring-blue-500 h-12 transition-all shadow-sm">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent className="rounded-xl shadow-xl dark:border-neutral-800">
              <SelectGroup>
                <SelectItem value="2024">2027</SelectItem>
                <SelectItem value="2025">2028</SelectItem>
                <SelectItem value="2026">2029</SelectItem>
                <SelectItem value="2027">2030</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="interestedProgram" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Interested Program</Label>
        <Select
          name="interestedProgram"
          value={formData.interestedProgram}
          onValueChange={(value) => handleChange({ target: { name: "interestedProgram", value } } as React.ChangeEvent<HTMLInputElement>)}
        >
          <SelectTrigger className="w-full rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 focus:ring-blue-500 h-12 transition-all shadow-sm">
            <SelectValue placeholder="Select Program" />
          </SelectTrigger>
          <SelectContent className="rounded-xl shadow-xl dark:border-neutral-800">
            <SelectGroup>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="medical">Medical / MBBS</SelectItem>
              <SelectItem value="mba">MBA</SelectItem>
              <SelectItem value="business">Business Admin (BBA/BCA)</SelectItem>
              <SelectItem value="nursing">Nursing</SelectItem>
              <SelectItem value="pharmacy">Pharmacy</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your goals and how we can help..."
          value={formData.message}
          onChange={handleChange}
          className="mt-1 rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 focus-visible:ring-blue-500 transition-all shadow-sm resize-none"
        />
      </div>
      <div className="flex items-center bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors">
        <Checkbox 
          id="terms" 
          checked={formData.termsAccepted} 
          onCheckedChange={handleCheckboxChange} 
          className="border-blue-300 dark:border-blue-700 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-500" 
        />
        <Label htmlFor="terms" className="ml-3 text-sm font-medium cursor-pointer">
           By clicking submit, I agree to receive promotional and transactional updates through SMS/Email/RCS/Whatsapp.
        </Label>
      </div>
      <Button 
        type="submit" 
        className="w-full h-14 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2" 
        disabled={!formData.termsAccepted || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            Apply Now <Send className="w-5 h-5" />
          </>
        )}
      </Button>
    </form>
  )
}
