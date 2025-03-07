import React from 'react'

export default function Brewing() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <article className="prose prose-lg">
        <h1 className="text-4xl font-bold mb-6">The Art of Pour-Over Coffee: A Journey to the Perfect Cup</h1>
        
        <p className="text-lg mb-6 leading-relaxed">
          In a world of quick-fix coffee solutions and automated machines, there's something almost meditative about the pour-over method. 
          It's a brewing technique that transforms your daily coffee ritual into a moment of mindfulness, connecting you directly with the 
          brewing process in a way that no machine can replicate.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What Makes Pour-Over Special?</h2>
        <p className="mb-6">
          Pour-over coffee is celebrated for its clarity of flavor and ability to highlight the subtle notes in your favorite beans. 
          Unlike immersion methods or espresso, pour-over brewing gives you complete control over every variable - from water temperature 
          to pour speed. This level of control allows you to extract the perfect balance of flavors, resulting in a clean, bright, and 
          nuanced cup of coffee.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-medium mb-3">Why Coffee Enthusiasts Love Pour-Over</h3>
          <ul className="space-y-3">
            <li>✨ Exceptional clarity in flavor</li>
            <li>🎨 Complete control over the brewing process</li>
            <li>🌱 Environmentally friendly (minimal waste)</li>
            <li>🧘‍♂️ Creates a mindful morning ritual</li>
            <li>💡 Helps develop a deeper appreciation for coffee</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Pour-Over Renaissance</h2>
        <p className="mb-6">
          While pour-over coffee has been around for over a century (thanks to Melitta Bentz's 1908 invention), 
          it's seen a remarkable revival in the third-wave coffee movement. This resurgence isn't just about 
          the brewing method - it's about a return to intentionality in our coffee consumption, a pushback 
          against the rush of modern life.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Different Paths to Pour-Over Perfection</h2>
        <p className="mb-4">
          The beauty of pour-over lies in its versatility. Different brewers and techniques can highlight 
          various aspects of your coffee:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">The V60 Experience</h3>
            <p>
              The Hario V60's distinctive spiral ridges and large single hole create a brew that's known for 
              its brightness and clarity. It's particularly excellent for bringing out the floral and fruit 
              notes in light-roasted single-origin coffees.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Kalita Wave's Consistency</h3>
            <p>
              With its flat bottom and three small holes, the Kalita Wave offers a more forgiving brew process. 
              It produces a well-balanced cup that's perfect for those starting their pour-over journey.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">The Chemex Charm</h3>
            <p>
              The Chemex combines brewing vessel and filter cone in one elegant package. Its thick filters 
              produce an incredibly clean cup that's perfect for sharing, making it a favorite for coffee 
              ceremonies and slow weekend mornings.
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg italic">
          Whether you're a coffee connoisseur or just starting your specialty coffee journey, pour-over 
          brewing offers a rewarding path to discovering coffee's full potential. In our next posts, 
          we'll dive deeper into specific techniques and tips for each brewing method.
        </p>
      </article>
    </div>
  )
}
