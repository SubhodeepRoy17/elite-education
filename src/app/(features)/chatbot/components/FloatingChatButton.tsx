"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect, type ReactNode } from "react"
import ChatBot from "./Chatbot"

type FloatingChatButtonProps = {
  children: ReactNode
  isOpen: boolean
  onToggle: () => void
}

export default function FloatingChatButton({ isOpen, onToggle }: FloatingChatButtonProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <button
        onClick={onToggle}
        className={`fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle size={24} />
      </button>
      <div
        className={`fixed bottom-4 right-4 md:w-[550px] w-[95vw] h-[600px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl transition-all duration-500 ease-in-out overflow-hidden origin-bottom-right ${
          isOpen 
            ? "scale-100 translate-x-0" 
            : "scale-0 translate-x-full"
        } z-50`}
        style={{
          maxWidth: 'calc(100vw - 2rem)',
          maxHeight: 'calc(100vh - 2rem)',
        }}
      >
        <ChatBot isFloating={true} onClose={onToggle} disableDarkModeToggle={true} />
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={onToggle}
        />
      )}
    </>
  )
}