import React from 'react'

export default function TheImpactOfAltitudeAndClimate() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header>
        <h1 className="text-3xl font-bold mb-6">The Impact of Altitude and Climate on Coffee</h1>
        <p className="text-lg mb-8">
          When coffee connoisseurs speak of terroir—that elusive sense of place captured in flavor—they're largely discussing the combined effects of altitude and climate. These environmental factors arguably influence coffee quality more profoundly than any other variables, sculpting flavor profiles before the first cherry is even harvested.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Altitude: Coffee's Defining Dimension</h2>
        <div className="space-y-6">
          <h3 className="text-xl font-medium">How Elevation Affects Coffee Plants</h3>
          <p>
            Coffee grown at different elevations undergoes distinct developmental patterns that translate directly to cup quality. These differences begin at the cellular level and manifest in everything from bean density to chemical composition.
          </p>
          
          <h4 className="text-lg font-medium">Plant Growth Patterns</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Extended maturation periods allow more time for complex sugars and acids to form</li>
            <li>Denser cell structures develop, with thicker cell walls</li>
            <li>More concentrated flavor compounds accumulate</li>
            <li>Defense mechanisms trigger production of beneficial metabolites</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Climate Factors Shaping Coffee Quality</h2>
        <p className="mb-4">
          While altitude creates the foundation for quality potential, climate factors determine how that potential develops throughout the growing season. Temperature patterns, rainfall distribution, and seasonal variations interact in complex ways to influence coffee's flavor development.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-4">Temperature Ranges Impact on Quality</h3>
          <ul className="space-y-3">
            <li><strong>Too cold (below 15°C/59°F):</strong> Growth stalls, frost damage possible</li>
            <li><strong>Optimal (18-22°C/64-72°F):</strong> Perfect balance of development and complexity</li>
            <li><strong>Too warm (above 25°C/77°F):</strong> Accelerated maturation reduces complexity</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Climate Change Impacts</h2>
        <p className="mb-4">
          Climate change presents an existential threat to coffee production in many traditional growing regions. Understanding these challenges helps producers and industry stakeholders develop adaptation strategies.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Current Challenges</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shifting growing zones</li>
              <li>Disrupted rainfall patterns</li>
              <li>Increased pest pressure</li>
              <li>Temperature extremes</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Adaptation Strategies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Development of resistant varieties</li>
              <li>Enhanced shade systems</li>
              <li>Improved water management</li>
              <li>Climate-smart practices</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}
