import React, { useState } from 'react'
import CourseLink from '../../../components/CourseLink'

export default function Fundamentals() {
  const [selectedModule, setSelectedModule] = useState(null);
  
  const courseLinks = [
    {
      to: "/education/coffee-fundamentals/origins&varieties",
      title: "Coffee Origins & Varieties",
      number: 1,
      description: "Explore coffee-growing regions, varietals, and how terroir affects flavor.",
      duration: "45 mins"
    },
    {
      to: "/education/coffee-fundamentals/bean-classification",
      title: "Bean Classification",
      number: 2,
      description: "Learn about coffee grades, processing methods, and quality standards.",
      duration: "30 mins"
    },
    {
      to: "/education/coffee-fundamentals/profiles",
      title: "Origin Profiles",
      number: 3
    },
    {
      to: "/education/coffee-fundamentals/flavor",
      title: "Flavor Science",
      number: 4
    },
    {
      to: "/education/coffee-fundamentals/storage",
      title: "Storage & Freshness",
      number: 5
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-stone-800 mb-6">
        Coffee Fundamentals
      </h1>
      
      <div className="space-y-6 text-lg leading-relaxed text-stone-700 mb-8">
        <p>
          Welcome to Coffee Fundamentals, your gateway to understanding the fascinating world of coffee beyond just a morning beverage. This comprehensive course is designed for coffee enthusiasts who want to deepen their knowledge and appreciation of coffee from bean to cup.
        </p>
        
        <p>
          In this course, you'll explore the rich diversity of coffee origins and varieties, learning how geography, climate, and cultivation methods influence the character of different coffees. You'll master bean classification systems and understand what distinguishes specialty coffee from commercial varieties.
        </p>
        
        <p>
          Our journey will take you through distinct origin profiles from around the coffee belt, where you'll discover the unique flavor signatures of regions like Ethiopia, Colombia, and Indonesia. You'll develop your palate through our flavor science module, learning to identify and articulate the complex taste components that make each coffee unique.
        </p>
        
        <p>
          Finally, you'll gain practical knowledge about proper storage techniques and the importance of freshness, ensuring you can preserve the quality of your coffee beans at home.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-stone-800">Course Modules</h2>
          <div className="text-stone-600">
            <span className="mr-2">Total Duration:</span>
            <span className="font-medium">3.5 hours</span>
          </div>
        </div>

        <div className="grid gap-6">
          {courseLinks.map((link) => (
            <div 
              key={link.number}
              className="transition-all duration-300"
              onMouseEnter={() => setSelectedModule(link.number)}
              onMouseLeave={() => setSelectedModule(null)}
            >
              <CourseLink 
                to={link.to}
                number={link.number}
                title={link.title}
                isActive={selectedModule === link.number}
              />
              
              {selectedModule === link.number && (
                <div className="mt-2 ml-12 text-stone-600 animate-fadeIn">
                  <p className="text-sm">{link.description}</p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Duration:</span> {link.duration}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-stone-50 to-white p-8 rounded-xl border border-stone-100 shadow-sm">
        <div>
          <h3 className="text-2xl font-light text-stone-800 mb-6">
            Course Requirements
          </h3>
          <ul className="space-y-4 text-stone-600">
            {[
              {
                item: "Basic coffee brewing equipment",
                description: "French press, pour-over, or espresso machine"
              },
              {
                item: "Tasting journal",
                description: "For recording your coffee experiences"
              },
              {
                item: "Coffee varieties",
                description: "Access to different origins (recommended)"
              },
              {
                item: "Dedicated time",
                description: "2-3 hours weekly for optimal learning"
              }
            ].map((req, index) => (
              <li key={index} className="flex items-start space-x-3 group">
                <span className="mt-1.5">
                  <svg className="w-4 h-4 text-stone-400 group-hover:text-stone-600 transition-colors" 
                    viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-medium text-stone-800">{req.item}</span>
                  <p className="text-sm text-stone-500 mt-1">{req.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-stone-600 text-sm max-w-xs">
              All course materials are available online. Begin your journey when you're ready.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
