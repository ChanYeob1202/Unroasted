import React from 'react'

const encyclopediaData = [
  {
    id: 1,
    title: "Fundamentals",
    topics: [
      "Coffee Plant Biology & Cultivation",
      "Coffee Cherry to Bean: The Processing Journey",
      "The Impact of Altitude and Climate"
    ]
  },
  {
    id: 2,
    title: "Bean Classifications",
    topics: [
      "Arabica vs Robusta: Complete Guide",
      "Popular Varietals (Typica, Bourbon, Gesha, etc.)",
      "Bean Grades and Classifications"
    ]
  },
  {
    id: 3,
    title: "Origin Profiles",
    topics: [
      "African Coffee Regions (Ethiopia, Kenya, Rwanda)",
      "Central/South American Regions (Colombia, Brazil, Guatemala)",
      "Asian Coffee Regions (Indonesia, Vietnam, India)",
      "Each region's unique characteristics, flavors, and growing conditions"
    ]
  },
  {
    id: 4,
    title: "Processing Methods",
    topics: [
      "Washed/Wet Process",
      "Natural/Dry Process",
      "Honey/Pulped Natural Process",
      "Experimental Processing (Anaerobic, Wine-fermented, etc.)"
    ]
  },
  {
    id: 5,
    title: "Roasting",
    topics: [
      "Roast Levels Explained",
      "Chemical Changes During Roasting",
      "How Roasting Affects Flavor",
      "Reading Roast Dates"
    ]
  },
  {
    id: 6,
    title: "Flavor Science",
    topics: [
      "Understanding Flavor Notes",
      "Using the Coffee Taster's Flavor Wheel",
      "Factors Affecting Taste (altitude, soil, processing)",
      "Cupping Guidelines"
    ]
  },
  {
    id: 7,
    title: "Storage & Freshness",
    topics: [
      "Optimal Storage Conditions",
      "Understanding Degassing",
      "Signs of Fresh vs Stale Beans",
      "Shelf Life Guidelines"
    ]
  }
];

export default function Encyclopedia() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Coffee Encyclopedia</h1>
      
      {encyclopediaData.map((section) => (
        <section key={section.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">{section.id}. {section.title}</h2>
          <ul className="space-y-2 text-gray-600">
            {section.topics.map((topic, index) => (
              <li key={index} className="hover:text-gray-800 cursor-pointer">
                {topic}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
} 