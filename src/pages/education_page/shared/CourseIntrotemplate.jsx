import React from 'react'
import CourseLink from '../../../components/CourseLink'
export default function CourseIntroTemplate({ 
  title, 
  subtitle, 
  description, 
  sections, 
  courseLinks,
  closingText 
}) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>

        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-3xl font-light mb-12 text-gray-900">What You'll Explore</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Course Sections */}
            {sections.map((section, index) => (
              <section key={index} className="group hover:bg-white hover:shadow-xl transition-all duration-300 p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-4 text-gray-900">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </section>
            ))}
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto italic">
          {closingText}
        </p>

        {/* Course Links */}
        <div className="grid gap-6 mt-12">
          {sections.map((section) => (
            <CourseLink
              key={section.number}
              to={section.to}
              title={section.title}
              number={section.number}
              className="hover:scale-[1.02] transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  )
}