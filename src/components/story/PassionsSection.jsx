import React from 'react'

const passionCards = [
  {
    title: "Creating Something from Scratch",
    content: "Whether it's building an application from lines of code or extracting the perfect espresso shot, I'm drawn to the process of creation. There's magic in watching raw ingredients—be it syntax or coffee beans—transform into something meaningful through my hands."
  },
  {
    title: "The Art of Troubleshooting",
    content: "Debugging code feels remarkably similar to diagnosing what went wrong with a bitter espresso. Both require analytical thinking, methodical testing, and a willingness to trace back through each step. This puzzle-solving aspect keeps both professions endlessly engaging."
  },
  {
    title: "Bringing Joy to Others",
    content: "Nothing compares to the moment someone experiences something you've created—whether it's a user navigating through a seamless interface or a customer taking that first sip of a perfectly balanced pour-over. In both worlds, I'm creating experiences that make someone's day a little brighter."
  }
];

export default function PassionsSection() {
  return (
    <div className="mt-8 bg-white/50 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl text-coffee mb-4">Where Two Passions Converge</h2>
      <p className="text-lg text-gray-700 font-extralight leading-relaxed mb-8">
        There's something profoundly similar about writing code and crafting coffee. Both require precision, patience, and a willingness to iterate until perfection. As both a software engineer and a barista, I've found my joy in these parallel worlds that satisfy my deepest creative instincts.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {passionCards.map((card, index) => (
          <div key={index} className="p-4 hover:bg-white/70 transition-colors duration-300 rounded-lg">
            <h3 className="text-xl font-medium text-coffee mb-2">{card.title}</h3>
            <p className="text-gray-700 font-extralight leading-relaxed">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}