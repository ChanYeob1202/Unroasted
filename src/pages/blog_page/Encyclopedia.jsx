import React from 'react'

const blogContent = {
  title: "Coffee Bean Encyclopedia: A Journey from Seed to Cup",
  author: "Michael Kim",
  date: "April 15, 2024",
  readTime: "5 min read",
  content: [
    {
      id: 1,
      subtitle: "The Magic Begins: From Cherry to Bean",
      text: `Have you ever wondered about the journey of your morning coffee? Before that rich aroma fills your kitchen, your coffee begins as a small, red cherry growing on a bush in some of the world's most beautiful highlands. 

      At peak ripeness, these cherries are carefully harvested - often by hand - in a process that's been perfected over centuries. Inside each cherry lie two seeds, which we know as coffee beans. These aren't actually beans at all, but that's a story for another day.

      The altitude at which these cherries grow plays a crucial role in their flavor development. Higher elevations mean cooler temperatures, which slows the growth of the coffee cherry, allowing more complex flavors to develop. This is why you'll often hear coffee experts talking about "high-altitude" beans with such enthusiasm.`
    },
    {
      id: 2,
      subtitle: "The Art of Processing",
      text: `After harvesting, coffee cherries undergo one of several processing methods, each leaving its unique fingerprint on the final flavor:

      The Washed Process: Think clean, bright flavors with pronounced acidity. The fruit is removed immediately, letting the true character of the bean shine through.

      Natural Process: Imagine sun-dried raisins. The cherry is dried whole around the bean, imparting sweet, fruity notes that can be absolutely magical in your cup.

      Honey Process: A beautiful middle ground where some fruit remains on the bean during drying, creating complex sweetness with moderate acidity.`
    },
    {
      id: 3,
      subtitle: "A World of Flavors",
      text: `Each coffee-growing region tells its own story in your cup. Ethiopian beans might sing with jasmine and bergamot notes, while Colombian beans could whisper hints of caramel and chocolate. Brazilian beans often bring nutty, chocolate notes that feel like a warm hug.

      The secret lies in the unique combination of soil composition, climate, altitude, and processing methods. It's nature and human craftsmanship working in perfect harmony.

      Next time you take a sip of your morning coffee, remember: you're not just drinking a beverage. You're experiencing a story that began months ago, thousands of miles away, crafted by dozens of skilled hands before reaching yours.`
    }
  ],
  conclusion: `Understanding these fundamentals doesn't just make you a coffee expert - it helps you appreciate each cup a little more. It's about connecting with a global tradition that spans centuries and continues to evolve.

  Stay tuned for our next deep dive into specific bean varieties and their unique characteristics!`
};

export default function Encyclopedia() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif mb-4">{blogContent.title}</h1>
        <div className="flex items-center justify-center space-x-4 text-gray-600">
          <span>{blogContent.author}</span>
          <span>•</span>
          <span>{blogContent.date}</span>
          <span>•</span>
          <span>{blogContent.readTime}</span>
        </div>
      </header>

      <article className="prose prose-lg max-w-none">
        {blogContent.content.map((section) => (
          <section key={section.id} className="mb-12">
            <h2 className="text-2xl font-serif mb-4">{section.subtitle}</h2>
            {section.text.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="italic text-gray-700">{blogContent.conclusion}</p>
        </div>
      </article>
    </div>
  )
} 