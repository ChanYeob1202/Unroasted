import React from 'react'

export default function IntroSection() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 bg-white/50 rounded-xl p-6 shadow-sm">
      <div className="md:w-2/3">
        <p className="mb-4 text-lg text-gray-700 font-extralight leading-relaxed">
          Hi, I'm Michael. As both a software engineer and manager at One:Escape Coffee, I've discovered a unique intersection where precision meets craft. My journey weaves together the analytical world of coding with the artistry of coffee making.
        </p>
        <p className="text-lg text-gray-700 font-extralight leading-relaxed">
          This coffee community is where these two passions converge—a digital space built with my programming expertise and infused with my coffee knowledge, designed to help others explore and elevate their coffee experience.
        </p>
      </div>
      <div className="md:w-1/3">
        <img 
          src="images/barista/michaelLatte.png" 
          alt="Barista pouring latte art" 
          className="w-full max-w-[200px] rounded-lg shadow-md mx-auto mt-10"
        />
         {/* <img 
          src="images/mainPicture2.jpeg" 
          alt="Barista pouring latte art" 
          className="w-full max-w-[200px] rounded-lg shadow-md mx-auto mt-0"
        /> */}
      </div>
    </div>
  )
}