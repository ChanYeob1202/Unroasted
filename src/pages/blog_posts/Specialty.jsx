import React from 'react';

export default function Specialty() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <article className="max-w-3xl mx-auto px-4 pb-20">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-5xl font-serif text-coffee-dark mb-4">
            What Makes Coffee "Specialty"? A Simple Guide
          </h1>
          <div className="text-coffee-light font-rubik mb-8">April 17, 2024 • 7 min read</div>
          <img 
            src="/images/coffee/specialty.jpg" 
            alt="Specialty Coffee Beans and Brewing" 
            className="w-full h-auto rounded-lg mb-8"
          />
        </header>

        <div className="space-y-8 font-rubik text-gray-800">
          {/* Introduction */}
          <section>
            <p className="mb-6">
              You've probably heard the term "specialty coffee" at local cafés or seen it on bags of beans. But what exactly does this term mean, and why do some coffees earn this distinction while others don't? Let's break it down in simple terms.
            </p>
          </section>

          {/* What Is Specialty Coffee */}
          <section>
            <h2 className="text-3xl font-serif text-coffee mb-6">What Is Specialty Coffee?</h2>
            <p className="mb-4">
              At its most basic, specialty coffee refers to coffee that's of exceptionally high quality. The Specialty Coffee Association (SCA) defines it as coffee that scores 80 points or above on a 100-point scale when evaluated by certified coffee tasters (called Q Graders).
            </p>
            <p className="mb-2">But in everyday terms, specialty coffee is:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Coffee that tastes distinctly better than average</li>
              <li>Coffee where care has been taken at every step from farm to cup</li>
              <li>Coffee with unique flavors that reflect where and how it was grown</li>
            </ul>
          </section>

          {/* How Is Specialty Coffee Different */}
          <section>
            <h2 className="text-3xl font-serif text-coffee mb-6">How Is Specialty Coffee Different from Regular Coffee?</h2>
            
            <h3 className="text-2xl font-serif text-coffee-dark mb-4">Quality</h3>
            <p className="mb-2">The most obvious difference is simply quality. Specialty coffee beans:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Are picked at peak ripeness</li>
              <li>Have few to no defects</li>
              <li>Are properly processed and stored</li>
              <li>Are roasted to highlight their best characteristics</li>
            </ul>
            <p className="mb-6">
              Regular commercial coffee often contains defective beans, may be harvested by machine (collecting unripe and overripe cherries along with the perfect ones), and is typically roasted dark to create consistency across varying bean qualities.
            </p>

            <h3 className="text-2xl font-serif text-coffee-dark mb-4">Traceability</h3>
            <p className="mb-2">When you buy specialty coffee, you usually know:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>The country it comes from (often even the specific region, farm, or producer)</li>
              <li>When it was harvested</li>
              <li>How it was processed</li>
              <li>When it was roasted</li>
            </ul>

            <h3 className="text-2xl font-serif text-coffee-dark mb-4">Flavor</h3>
            <p className="mb-2">Specialty coffee offers:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Complex flavors beyond just "coffee taste"</li>
              <li>Distinctive characteristics based on origin (fruity Ethiopian coffees, chocolatey Guatemalan coffees, etc.)</li>
              <li>Natural sweetness that often requires less added sugar</li>
            </ul>

            <h3 className="text-2xl font-serif text-coffee-dark mb-4">Freshness</h3>
            <p className="mb-2">Specialty coffee is:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Usually sold within weeks of roasting</li>
              <li>Often roasted in small batches</li>
              <li>Best consumed within a month of roasting</li>
            </ul>
          </section>

          {/* What Makes Coffee Qualify as "Specialty" */}
          <section>
            <h2 className="text-3xl font-serif text-coffee mb-6">What Makes Coffee Qualify as "Specialty"?</h2>
            <p className="mb-4">
              For coffee to be considered specialty, it needs to excel at multiple points along its journey:
            </p>

            <h3 className="text-2xl font-serif text-coffee-dark mb-4">1. Growing Conditions</h3>
            <p className="mb-2">Specialty coffee typically grows:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>At high elevations (usually above 1,200 meters)</li>
              <li>In ideal climate conditions</li>
              <li>With proper shade and sun exposure</li>
              <li>With careful attention to soil health</li>
            </ul>

            {/* Continue with other sections... */}
          </section>

          {/* Is Specialty Coffee Worth the Higher Price */}
          <section>
            <h2 className="text-3xl font-serif text-coffee mb-6">Is Specialty Coffee Worth the Higher Price?</h2>
            <p className="mb-4">
              Specialty coffee does cost more than commercial coffee, but for good reasons:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Farmers receive better compensation for their higher quality crops</li>
              <li>Selective harvesting requires more labor than machine harvesting</li>
              <li>Small-batch roasting is less efficient than industrial roasting</li>
              <li>The extra care at every step adds cost but also quality</li>
            </ul>
          </section>

          {/* How to Start Exploring Specialty Coffee */}
          <section>
            <h2 className="text-3xl font-serif text-coffee mb-6">How to Start Exploring Specialty Coffee</h2>
            <p className="mb-2">If you're curious about specialty coffee:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Visit a local independent coffee shop</strong> that focuses on specialty beans</li>
              <li><strong>Try a pour-over or single-origin espresso</strong> to taste the coffee's distinct characteristics</li>
              <li><strong>Ask questions</strong> - specialty baristas are usually passionate and happy to share knowledge</li>
              <li><strong>Buy freshly roasted beans</strong> and experiment with brewing at home</li>
              <li><strong>Start simple</strong> with your home brewing - even a French press can make excellent specialty coffee</li>
            </ol>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-3xl font-serif text-coffee mb-6">Conclusion</h2>
            <p className="mb-4">
              Specialty coffee isn't just a marketing term or a way to charge more. It represents a fundamentally different approach to coffee that values quality, sustainability, and the unique characteristics of each harvest.
            </p>
            <p className="mb-4">
              When you choose specialty coffee, you're not just getting a better-tasting cup - you're supporting a system that rewards quality and care over mass production, and you're discovering the amazing range of flavors that coffee can actually offer.
            </p>
            <p>
              Whether you're a coffee connoisseur or just someone who wants their morning cup to taste better, understanding what makes coffee "specialty" helps you make more informed choices about what you drink.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
