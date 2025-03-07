import React from 'react'

export default function UnRoastedStory() {
  return (
    <div className='flex justify-center bg-stone-50 rounded-2xl'>
        <img 
          src  = "/images/hero/pin.png"
          className = "absolute top-12 -left-3 w-[80px] "
          alt  = "Decorative pin"
        />
      <div className="max-w-3xl mx-auto text-center space-y-6 p-10">
        <h2 className="text-5xl font-bold mb-8 font-amatic">The Story Behind UnRoasted</h2>
        
        <div className='space-y-10 text-xl font-serif'>
          <p className="text-gray-700">
            UnRoasted emerged from a simple idea: creating a space where coffee enthusiasts can come together to share their experiences and discoveries. We believe that everyone's coffee journey is unique, and there's always something new to learn from each other.
          </p>

          <p className="text-gray-700">
            This platform is built on the belief that brewing great coffee is a lot like writing good code - it's about experimentation, attention to detail, and the joy of creating something wonderful from scratch. Whether you're just starting out or have been brewing for years, there's always room to explore and grow together.
          </p>

          <p className="text-gray-700">
            At UnRoasted, we're passionate about bringing together the worlds of coffee and technology. It's a space where we can share brewing techniques, exchange tips, and celebrate both the successes and the learning experiences that come with each cup we brew.
          </p>

          <p className="text-gray-700">
            We've built this platform as a collaborative space where everyone's voice matters. From brewing guides to coffee discussions, everything here is designed to encourage exploration and foster meaningful connections within our community.
          </p>

          <p className="text-gray-700">
            UnRoasted is about that shared journey of discovery - the satisfaction of solving puzzles, the joy of creating something from scratch, and the endless pursuit of making things better, one line of code or one cup at a time. Join us in this adventure of exploration and creation.
          </p>
        </div>
      </div>
    </div>
  )
}
