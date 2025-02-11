import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Slider from "react-slick"

const collegeRegions = {
  westBengal: [
    { image: "/iem.png", name: "Institute of Engineering and Management", link: "https://www.iitkgp.ac.in/" },
    { image: "/techno.png", name: "Techno India University", link: "https://www.jaduniv.edu.in/" },
    { image: "/heritage.png", name: "Heritage Institute of Technology", link: "https://wbutech.edu.in/" },
    { image: "/haldia.png", name: "Haldia Institute of Technology", link: "https://www.presidency.edu.in/" },
    { image: "/nsec.png", name: "Netaji Subhash Engineering College", link: "https://www.rcciit.org/" }
  ],
  pune: [
    { image: "/asansol.png", name: "College of Engineering Pune", link: "https://coep.org.in/" },
    { image: "/snu.png", name: "Pune Institute of Computer Technology", link: "https://www.pict.edu/" },
    { image: "/amity.png", name: "MIT World Peace University", link: "https://mitwpu.edu.in/" },
    { image: "/cnm.png", name: "Army Institute of Technology", link: "https://www.aitpune.com/" },
    { image: "/mc.png", name: "Vishwakarma Institute of Technology", link: "https://www.vit.edu/" }
  ],
  delhi: [
    { image: "/nshm.png", name: "IIT Delhi", link: "https://home.iitd.ac.in/" },
    { image: "/ip.png", name: "DTU", link: "https://www.dtu.ac.in/" },
    { image: "/ju.png", name: "NSUT", link: "https://www.nsut.ac.in/" },
    { image: "/bcda.png", name: "GGSIPU", link: "https://www.ipu.ac.in/" },
    { image: "/cipt.png", name: "IP College", link: "https://ipcollege.du.ac.in/" }
  ],
  bangalore: [
    { image: "/fbs.png", name: "IISc Bangalore", link: "https://www.iisc.ac.in/" },
    { image: "/gbs.png", name: "RVCE", link: "https://www.rvce.edu.in/" },
    { image: "/hbs.png", name: "PES University", link: "https://www.pes.edu/" },
    { image: "/gccba.png", name: "BMS College of Engineering", link: "https://www.bmsce.in/" },
    { image: "/scc.png", name: "RV Institute of Technology", link: "https://www.rvitm.edu.in/" }
  ]
}

export default function EngineeringAdmissionsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section id="engineering-admissions" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 dark:text-white">
          Engineering Admissions Guidance
        </h2>
        <Slider {...settings}>
          {[
            { title: "Top Colleges in West Bengal", colleges: collegeRegions.westBengal },
            { title: "Top Colleges in Pune", colleges: collegeRegions.pune },
            { title: "Top Colleges in Delhi", colleges: collegeRegions.delhi },
            { title: "Top Colleges in Bangalore", colleges: collegeRegions.bangalore }
          ].map((region, index) => (
            <div key={index} className="p-4">
              <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-center mb-8 dark:text-gray-200">{region.title}</h3>
                
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {region.colleges.map((college, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center h-full">
                      {/* Image Container */}
                      <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[120px] sm:h-[130px] md:h-[150px] bg-white dark:bg-gray-700 shadow-lg rounded-2xl overflow-hidden mb-2">
                        <Image
                          src={college.image}
                          alt={`${college.name} logo`}
                          width={200}
                          height={150}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* College Name with Fixed Height */}
                      <div className="min-h-[3rem] flex items-center justify-center px-2">
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-300">{college.name}</p>
                      </div>

                      {/* Button Always at the Same Level */}
                      <Link href={college.link} className="mt-auto w-full">
                        <Button variant="default" className="w-full dark:bg-white-500 dark:hover:bg-blue-600 dark:text-black">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
