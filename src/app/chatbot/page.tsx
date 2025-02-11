"use client"

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import ChatBot from './components/Chatbot'

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen dark:bg-gray-900">
      {/* Left Section - ChatBot */}
      <div className="w-full md:w-3/5 p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center dark:text-white">
          College Consultancy Chatbot
        </h1>
        <div className="max-w-md mx-auto md:max-w-full">
          <ChatBot />
        </div>
      </div>
      
      {/* Right Section - Slogan and Footer */}
      <div className="w-full md:w-2/5 flex flex-col">
        {/* Slogan section */}
        <div className="flex-grow bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-4 md:p-8 flex flex-col items-center justify-center text-white space-y-4 md:space-y-8">
          {/* Main heading with creative typography */}
          <div className="transform -rotate-2 text-center">
            <h2 className="text-3xl md:text-6xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-blue-200 to-emerald-200 font-serif">
              Architect Your
            </h2>
            <h2 className="text-4xl md:text-7xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-blue-200 to-pink-200 transform rotate-1">
              TOMORROW
            </h2>
          </div>

          {/* Animated tagline */}
          <p className="text-lg md:text-2xl text-center font-light italic tracking-wide transform hover:scale-105 transition-transform duration-300 font-mono">
            Code Your Future • Create Your Legacy 
          </p>

          {/* Mission statement */}
          <div className="relative text-center max-w-md">
            <div className="space-y-3 relative z-10">
              <p className="text-base md:text-lg text-blue-200 font-light tracking-wider">
                We don&apos;t just guide —
              </p>
              <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">
                We Transform Potential
              </p>
              <p className="text-base md:text-lg text-blue-200 font-light tracking-wider">
                into Excellence
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400 opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400 opacity-50"></div>
          </div>
        </div>

        {/* Footer section */}
        <div className="bg-black text-white py-4 md:py-6 px-4 md:px-8">
          <div className="text-center mb-4">
            <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-['Verdana']">
              Elite Education
            </h3>
          </div>
          
          <div className="flex justify-center space-x-4 md:space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook size={20} className="md:size-12" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={20} className="md:size-12" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Instagram size={20} className="md:size-12" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Linkedin size={20} className="md:size-12" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}