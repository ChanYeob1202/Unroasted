import React from 'react'

export default function AboutSection({title, children}) {
  return (
    <section className = "py-12 md:py-16">
        <h2 className = "text-2xl font-bold font-oswald text-[#bba687]  mb-6">{title}</h2>
        <div className = "prose prose-lg max-w-none font-serif font-thin">
            {children}
        </div>
    </section>
  )
}
