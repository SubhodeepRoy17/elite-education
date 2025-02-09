"use client"
import { useState } from "react"

const programs = [
  {
    "name": "Regular BHMS",
    "description": "A five-and-a-half-year undergraduate program focusing on the study of homeopathic medicine and surgery, including clinical training."
  },
  {
    "name": "Integrated BHMS",
    "description": "A program that combines the BHMS course with additional components like research, specialization, or advanced clinical training over a longer duration."
  },
  {
    "name": "Part-time BHMS",
    "description": "A flexible program designed for working professionals, allowing them to complete the BHMS course while balancing work and study over an extended period."
  },
  {
    "name": "Distance BHMS",
    "description": "An online or distance learning format for BHMS, offering flexibility for students who cannot attend traditional, in-person classes."
  }
]

export default function TypesOfPrograms() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0].name)

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Types of BHMS Programs</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          {programs.map((program) => (
            <button
                key={program.name}
                onClick={() => setSelectedProgram(program.name)}
                className={`block w-full text-left p-4 mb-2 rounded-full border-2 border-black dark:border-white
                transition-all duration-300 ease-in-out
                ${
                    selectedProgram === program.name
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-transparent hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white"
                }`}
            >
                {program.name}
            </button>          
          ))}
        </div>
        <div className="md:w-2/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 font-verdana">{selectedProgram}</h3>
          <p className="font-verdana">{programs.find((p) => p.name === selectedProgram)?.description}</p>
        </div>
      </div>
    </section>
  )
}
