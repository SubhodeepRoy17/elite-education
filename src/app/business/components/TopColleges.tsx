import { useState } from "react";

interface TopCollegesProps {
  activeProgram: "BBA" | "BCA"
}

export default function TopColleges({ activeProgram }: TopCollegesProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    const colleges = {
      "BBA": [
          { rank: 1, name: "Indian Institute of Management, Indore (Integrated Program)", exams: "IPMAT" },
          { rank: 2, name: "Shaheed Sukhdev College of Business Studies, Delhi University", exams: "DU JAT" },
          { rank: 3, name: "Narsee Monjee Institute of Management Studies, Mumbai", exams: "NPAT" },
          { rank: 4, name: "Symbiosis Centre for Management Studies, Pune", exams: "SET" },
          { rank: 5, name: "Christ University, Bangalore", exams: "CUET" },
      ],
      "BCA": [
          { rank: 1, name: "Christ University, Bangalore", exams: "CUET" },
          { rank: 2, name: "Symbiosis Institute of Computer Studies and Research, Pune", exams: "SET" },
          { rank: 3, name: "Loyola College, Chennai", exams: "Merit-Based" },
          { rank: 4, name: "Amity Institute of Information Technology, Noida", exams: "AMITY Entrance Test" },
          { rank: 5, name: "Vellore Institute of Technology, Vellore", exams: "VITEEE" },
      ]
  }  

  return (
    <section className="my-12 p-6 border-2 border-black dark:border-white rounded-lg">
      <h2 className="text-4xl font-bold mb-6 font-serif">Top 5 {activeProgram} Colleges in India</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <p className="font-verdana text-lg">
            These top colleges offer exceptional {activeProgram} Business programs, featuring state-of-the-art facilities, experienced faculty, and strong industry collaborations. Admission to these institutions is highly competitive and is based on entrance exams and academic performance.
          </p>
        </div>
        <div className="md:w-2/3">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-black text-white dark:bg-black dark:text-white">
                <th className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">NIRF Ranking</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">College Names</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">Exams Accepted</th>
              </tr>
            </thead>
            <tbody>
              {colleges[activeProgram].map((college, index) => (
                <tr
                  key={college.rank}
                  className={`even:bg-gray-50 dark:even:bg-gray-800 transition-all duration-300 ${
                    hoveredIndex !== null && hoveredIndex !== index ? "blur-sm" : "blur-none"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <td className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">{college.rank}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">
                      <span className="cursor-pointer hover:text-blue-500 font-bold transition-all duration-300">
                        {college.name}
                      </span>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 font-verdana">{college.exams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

