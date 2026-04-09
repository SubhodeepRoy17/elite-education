// src\app\chatbot\components\Chatbot.tsx

"use client"

import { useState, useRef, useEffect } from "react"
import { Send, MoreVertical, Check, Sun, Moon, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type CollegeDataType = {
    [key: string]: {
      [state: string]: string[]
    }
  }

// Custom Bot Logo Component
const BotLogo = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center rounded-full ${className}`}>
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full p-2"
    >
      <rect width="64" height="64" rx="32" fill="currentColor" className="opacity-0" />
      <path
        d="M42 24H22C20.8954 24 20 24.8954 20 26V38C20 39.1046 20.8954 40 22 40H42C43.1046 40 43.1046 39.1046 44 38V26C44 24.8954 43.1046 24 42 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 32C28.1046 32 29 31.1046 29 30C29 28.8954 28.1046 28 27 28C25.8954 28 25 28.8954 25 30C25 31.1046 25.8954 32 27 32Z"
        fill="currentColor"
      />
      <path
        d="M37 32C38.1046 32 39 31.1046 39 30C39 28.8954 38.1046 28 37 28C35.8954 28 35 28.8954 35 30C35 31.1046 35.8954 32 37 32Z"
        fill="currentColor"
      />
      <path
        d="M26 36H38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

type Message = {
    text: string
    isUser: boolean
    timestamp: Date
}

type Theme = {
  name: string
  primary: string
  secondary: string
  gradient: string
}

const themes: Theme[] = [
  {
    name: "Blue",
    primary: "bg-blue-500",
    secondary: "bg-blue-100",
    gradient: "from-blue-50 to-white dark:from-blue-950 dark:to-gray-950"
  },
  {
    name: "Purple",
    primary: "bg-purple-500",
    secondary: "bg-purple-100",
    gradient: "from-purple-50 to-white dark:from-purple-950 dark:to-gray-950"
  },
  {
    name: "Green",
    primary: "bg-green-500",
    secondary: "bg-green-100",
    gradient: "from-green-50 to-white dark:from-green-950 dark:to-gray-950"
  },
  {
    name: "Rose",
    primary: "bg-rose-500",
    secondary: "bg-rose-100",
    gradient: "from-rose-50 to-white dark:from-rose-950 dark:to-gray-950"
  },
  {
    name: "Amber",
    primary: "bg-amber-500",
    secondary: "bg-amber-100",
    gradient: "from-amber-50 to-white dark:from-amber-950 dark:to-gray-950"
  },
  {
    name: "Teal",
    primary: "bg-teal-500",
    secondary: "bg-teal-100",
    gradient: "from-teal-50 to-white dark:from-teal-950 dark:to-gray-950"
  }
]

const collegeData : CollegeDataType= {
    "Engineering": {
      "West Bengal": [
        "Indian Institute of Technology Kharagpur",
        "Jadavpur University",
        "Bengal Engineering and Science University",
        "West Bengal University of Technology",
        "Indian Institute of Engineering Science and Technology"
      ],
      "Delhi": [
        "Indian Institute of Technology Delhi",
        "Delhi Technological University",
        "Netaji Subhas University of Technology",
        "Indraprastha Institute of Information Technology",
        "Jamia Millia Islamia"
      ],
      "Pune": [
        "College of Engineering Pune",
        "Pune Institute of Computer Technology",
        "Maharashtra Institute of Technology",
        "Vishwakarma Institute of Technology",
        "Army Institute of Technology"
      ],
      "Bangalore": [
        "Indian Institute of Science",
        "Indian Institute of Technology Bangalore",
        "Bangalore Institute of Technology",
        "PES University",
        "RV College of Engineering"
      ]
    },
    "Medical": {
      "West Bengal": [
        "Medical College Kolkata",
        "IPGMER & SSKM Hospital",
        "R.G. Kar Medical College",
        "North Bengal Medical College",
        "Burdwan Medical College"
      ],
      "Delhi": [
        "All India Institute of Medical Sciences",
        "Lady Hardinge Medical College",
        "Maulana Azad Medical College",
        "University College of Medical Sciences",
        "Safdarjung Hospital"
      ],
      "Pune": [
        "B.J. Medical College",
        "Armed Forces Medical College",
        "Dr. D.Y. Patil Medical College",
        "Pune Institute of Medical Sciences",
        "Smt. Kashibai Navale Medical College"
      ],
      "Bangalore": [
        "Bangalore Medical College",
        "St. John's Medical College",
        "Rajarajeswari Medical College",
        "Vydehi Institute of Medical Sciences",
        "M.S. Ramaiah Medical College"
      ]
    },
    "BBA/BCA/MBA": {
      "West Bengal": [
        "Calcutta University",
        "Indian Institute of Management Calcutta",
        "Xaviers College",
        "Presidency University",
        "Globsyn Business School"
      ],
      "Delhi": [
        "Delhi University",
        "Indian Institute of Management Delhi",
        "ICFAI Business School",
        "Management Development Institute",
        "Great Lakes Institute of Management"
      ],
      "Pune": [
        "Symbiosis International University",
        "Pune University",
        "Indira College of Commerce and Science",
        "MIT School of Business",
        "Sinhgad College of Management"
      ],
      "Bangalore": [
        "Indian Institute of Management Bangalore",
        "Christ University",
        "Bangalore University",
        "PES University",
        "IFIM Business School"
      ]
    },
    "Pharmacy": {
      "West Bengal": [
        "Bengal College of Pharmaceutical Sciences",
        "West Bengal University of Health Sciences",
        "Calcutta University",
        "Jadavpur University",
        "Guru Nanak Institute of Pharmaceutical Science"
      ],
      "Delhi": [
        "Delhi Pharmaceutical Sciences and Research University",
        "University of Delhi",
        "Jamia Hamdard",
        "Baba Farid University of Health Sciences",
        "Guru Gobind Singh Indraprastha University"
      ],
      "Pune": [
        "Poona College of Pharmacy",
        "Maharashtra College of Pharmacy",
        "Dr. D.Y. Patil College of Pharmacy",
        "Bharati Vidyapeeth College of Pharmacy",
        "Sinhgad College of Pharmacy"
      ],
      "Bangalore": [
        "Bangalore University",
        "M.S. Ramaiah College of Pharmacy",
        "JSS College of Pharmacy",
        "Manipal College of Pharmaceutical Sciences",
        "Nitte University"
      ]
    }
  }

export default function ChatBot({ 
    isFloating = false,
    onClose,
    disableDarkModeToggle = false 
  }: { 
    isFloating?: boolean
    onClose?: () => void 
    disableDarkModeToggle?: boolean
  }) {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")
    const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0])
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [menuType, setMenuType] = useState<'admissionType' | 'state' | null>(null)
    const [inputFocused, setInputFocused] = useState(false)
    const [selectedAdmissionType, setSelectedAdmissionType] = useState<string | null>(null)
    const [, setSelectedState] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const handleAdmissionTypeSelect = (type: string) => {
        setSelectedAdmissionType(type)
        setMenuType('state')
    }
    
    const handleStateSelect = (state: string) => {
        setSelectedState(state)
        setMenuType(null)
        setInputFocused(false)

        if (selectedAdmissionType && state) {
            const topColleges = collegeData[selectedAdmissionType.replace(" Admissions", "")][state]
            const collegeListMessage = `Top 5 ${selectedAdmissionType} in ${state}:\n\n` + 
                topColleges.map((college, index) => `${index + 1}. ${college}`).join('\n')
            
            const newMessages: Message[] = [
                {
                    text: collegeListMessage,
                    isUser: false,
                    timestamp: new Date()
                }
            ]
    
            setMessages(prevMessages => [...prevMessages, ...newMessages])
        }
    }

      const admissionTypes = [
        "Engineering Admissions", 
        "Medical Admissions", 
        "BBA/BCA/MBA Admissions", 
        "Pharmacy Admissions"
      ]
    
      const states = ["West Bengal", "Delhi", "Pune", "Bangalore"]
    
      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && 
                !menuRef.current.contains(event.target as Node) &&
                inputRef.current && 
                !inputRef.current.contains(event.target as Node)
            ) {
                setInputFocused(false)
                setMenuType(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        const newMessage: Message = {
            text: "Please choose an admission type from the menu first.",
            isUser: false,
            timestamp: new Date()
        }
    
        setMessages(prevMessages => [...prevMessages, newMessage])
        setInput("")
    }
    
    const handleInputFocus = () => {
        setInputFocused(true)
        setMenuType('admissionType')
    }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    setMessages([
      {
        text: "Welcome! Please click on the input box to start exploring admission options.",
        isUser: false,
        timestamp: new Date(),
      },
    ])
  }, [])

  return (
    <>
    <Card 
        className={`
          flex flex-col 
          w-full 
          ${isFloating ? "h-full" : "h-[600px]"} 
          max-w-md 
          mx-auto 
          bg-gradient-to-b 
          ${selectedTheme.gradient} 
          dark:bg-gray-900 
          dark:text-white 
          transition-colors 
          duration-300 
          shadow-lg 
          overflow-hidden
          sm:max-w-lg
          md:max-w-xl
        `}
      >
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full ${selectedTheme.primary} text-white`}>
            <BotLogo className="w-full h-full" />
          </div>
          <div>
            <h3 className="font-semibold dark:text-white text-sm sm:text-base">College Assistant</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Always here to help</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
        {!disableDarkModeToggle && (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-gray-500 dark:text-gray-400"
        >
            {isDarkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
        </Button>
        )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {themes.map((theme) => (
                <DropdownMenuItem
                  key={theme.name}
                  onClick={() => setSelectedTheme(theme)}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-full ${theme.primary}`} />
                    <span>{theme.name}</span>
                  </div>
                  {selectedTheme.name === theme.name && (
                    <Check className="h-4 w-4" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {isFloating && onClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Messages Container */}
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 relative">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.isUser ? "justify-end" : "justify-start"} items-end space-x-2`}
                    >
                        <div
                            className={`
                                max-w-[80%] 
                                break-words 
                                ${message.isUser
                                    ? `${selectedTheme.primary} text-white`
                                    : "bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white"}
                                p-3 
                                rounded-t-lg 
                                ${message.isUser ? "rounded-l-lg" : "rounded-r-lg"} 
                                shadow-sm 
                                text-sm 
                                sm:text-base
                                whitespace-pre-wrap
                            `}
                        >
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />

                {/* In-line Menu */}
                {inputFocused && (
                    <div 
                        ref={menuRef}
                        className={`
                            absolute 
                            bottom-[72px] 
                            left-4 
                            right-4 
                            bg-white/90 
                            dark:bg-gray-800/90 
                            backdrop-blur-sm 
                            rounded-lg 
                            shadow-lg 
                            animate-slide-up 
                            z-10
                        `}
                    >
                        <div className="p-4">
                            {menuType === 'admissionType' && (
                                <>
                                    <h4 className="text-sm font-semibold mb-2 dark:text-white">
                                        Select Admission Type
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {admissionTypes.map((type) => (
                                            <Button 
                                                key={type} 
                                                variant="outline" 
                                                size="sm"
                                                onClick={() => handleAdmissionTypeSelect(type)}
                                                className="w-full"
                                            >
                                                {type}
                                            </Button>
                                        ))}
                                    </div>
                                </>
                            )}

                            {menuType === 'state' && (
                                <>
                                    <h4 className="text-sm font-semibold mb-2 dark:text-white">
                                        Select State for {selectedAdmissionType}
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {states.map((state) => (
                                            <Button 
                                                key={state} 
                                                variant="outline" 
                                                size="sm"
                                                onClick={() => handleStateSelect(state)}
                                                className="w-full"
                                            >
                                                {state}
                                            </Button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </CardContent>

            <form 
                onSubmit={handleSubmit} 
                className="p-4 border-t bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative"
            >
                <div className="flex items-center space-x-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={handleInputFocus}
                        placeholder="Type your message..."
                        className="flex-1 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400"
                    />
                    <Button 
                        type="submit" 
                        size="icon" 
                        className={`shrink-0 ${selectedTheme.primary} hover:opacity-90`}
                    >
                        <Send className="h-5 w-5 text-white" />
                    </Button>
                </div>
            </form>
        </Card>
  </>
  )
}