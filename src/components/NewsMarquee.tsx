import React, { useRef } from 'react';

const NewsMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      const animations = marqueeRef.current.getAnimations();
      animations.forEach(animation => animation.pause());
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      const animations = marqueeRef.current.getAnimations();
      animations.forEach(animation => animation.play());
    }
  };

  return (
    <div className="bg-black w-full h-8">
      <div className="max-w-[1000px] mx-auto h-full">
        <div className="relative h-full overflow-hidden">
          <div
            ref={marqueeRef}
            className="absolute whitespace-nowrap flex items-center h-full animate-[marquee_160s_linear_infinite]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
              <span  
                className="inline-block text-white font-arial text-base"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;&nbsp;&nbsp;&nbsp;&nbsp;
                <a 
                  href="/news1" 
                  className="text-white hover:text-gray-200 font-arial text-base no-underline"
                >
                  Notice for Publication of Result (B.Tech 5th & 7th Sem, M.Tech 3rd Sem and MCA 3rd Sem)... Check website&apos;s Notice Board for details...&nbsp;&nbsp; &gt;&gt;&gt;&nbsp;&nbsp;
                </a>
                <a 
                  href="/news2" 
                  className="text-white hover:text-gray-200 font-arial text-base no-underline"
                >
                  Notice for Payment of Even Semester Fees (January - June 2025) for TFW students published... Check website&apos;s Notice Board for details..&nbsp;&nbsp; &gt;&gt;&gt;&nbsp;&nbsp;
                </a>
                <a 
                  href="/news3" 
                  className="text-white hover:text-gray-200 font-arial text-base no-underline"
                >
                  Notice for Payment of Even Semester Fees (January - June 2025) published....Check website&apos;s Notice Board for details.&nbsp;&nbsp; &gt;&gt;&gt;&nbsp;&nbsp;
                </a>
                <a 
                  href="/news4" 
                  className="text-white hover:text-gray-200 font-arial text-base no-underline"
                >
                  Commencement of UG and PG Even Sem classes (2024-2025 A.Y.) published... Check website&apos;s Notice Board for details...&nbsp;&nbsp; &gt;&gt;&gt;&nbsp;&nbsp;
                </a>
                <a 
                  href="/news5" 
                  className="text-white hover:text-gray-200 font-arial text-base no-underline"
                >
                  WBFS Notice for B.Tech 2nd year (2023-2024 Batch)... Check website&apos;s Notice Board for details..&nbsp;&nbsp; &gt;&gt;&gt;&nbsp;&nbsp;
                </a>
                <a 
                  href="/news6" 
                  className="text-white hover:text-gray-200 font-arial text-base no-underline"
                >
                  Pragati Scholarship Scheme for Girl Students and Saksham Scholarship for differently abled students. For details check the Notice Board of the website.&nbsp;&nbsp; &gt;&gt;&gt;&nbsp;&nbsp;
                </a>
                
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;