import React from 'react'

export default function StoryIntro() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Initial intro section */}
      <div className="flex flex-col md:flex-row items-start gap-8 bg-white/50 rounded-xl p-6 shadow-sm">
        <div className="md:w-2/3">
          <p className="mb-4 text-lg text-gray-700 font-extralight leading-relaxed">
            Hi, I'm Michael. As both a software engineer and specialty coffee barista, I've discovered a unique intersection where precision meets craft. My journey weaves together the analytical world of coding with the artistry of coffee making.
          </p>
          <p className="text-lg text-gray-700 font-extralight leading-relaxed">
            This coffee community is where these two passions converge—a digital space built with my programming expertise and infused with my coffee knowledge, designed to help others explore and elevate their coffee experience.
          </p>
        </div>
        <div className="md:w-1/3">
          <img 
            src="images/barista/michaelLatte.png" 
            alt="Barista pouring latte art" 
            className="w-full max-w-[200px] rounded-lg shadow-md mx-auto mt-10"
          />
        </div>
      </div>

      {/* Passions section */}
      <div className="mt-8 bg-white/50 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl text-coffee mb-4">Where Two Passions Converge</h2>
        <p className="text-lg text-gray-700 font-extralight leading-relaxed mb-8">
          There's something profoundly similar about writing code and crafting coffee. Both require precision, patience, and a willingness to iterate until perfection. As both a software engineer and a barista, I've found my joy in these parallel worlds that satisfy my deepest creative instincts.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 hover:bg-white/70 transition-colors duration-300 rounded-lg">
            <h3 className="text-xl font-medium text-coffee mb-2">Creating Something from Scratch</h3>
            <p className="text-gray-700 font-extralight leading-relaxed">
              Whether it's building an application from lines of code or extracting the perfect espresso shot, I'm drawn to the process of creation. There's magic in watching raw ingredients—be it syntax or coffee beans—transform into something meaningful through my hands.
            </p>
          </div>
          <div className="p-4 hover:bg-white/70 transition-colors duration-300 rounded-lg">
            <h3 className="text-xl font-medium text-coffee mb-2">The Art of Troubleshooting</h3>
            <p className="text-gray-700 font-extralight leading-relaxed">
              Debugging code feels remarkably similar to diagnosing what went wrong with a bitter espresso. Both require analytical thinking, methodical testing, and a willingness to trace back through each step. This puzzle-solving aspect keeps both professions endlessly engaging.
            </p>
          </div>
          <div className="p-4 hover:bg-white/70 transition-colors duration-300 rounded-lg">
            <h3 className="text-xl font-medium text-coffee mb-2">Bringing Joy to Others</h3>
            <p className="text-gray-700 font-extralight leading-relaxed">
              Nothing compares to the moment someone experiences something you've created—whether it's a user navigating through a seamless interface or a customer taking that first sip of a perfectly balanced pour-over. In both worlds, I'm creating experiences that make someone's day a little brighter.
            </p>
          </div>
        </div>
      </div>

      {/* Coffee Origin Story section */}
      <div className="mt-8 bg-white/50 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl text-coffee mb-4">My Coffee Origin Story</h2>
        <div className="text-lg text-gray-700 font-extralight leading-relaxed space-y-4">
          <p>
            My relationship with coffee began rather unexceptionally—through necessity. As a student, coffee was simply fuel, consumed in concerning quantities to power through late-night coding sessions. But somewhere between the countless cups, curiosity sparked.
          </p>
          <p>
            I began noticing subtle differences between brews. Why did some energize while others inspired? What made certain cafés worth the extra walk? These questions led me down a rabbit hole that eventually culminated in a thought that would change my path: "Why don't I work in the coffee industry?"
          </p>
          <p>
            What started as casual interest transformed into passionate pursuit. I began training, learning the science behind extraction, understanding bean origins, and developing my palate—finding the same satisfaction in mastering these skills as I did in solving complex coding problems.
          </p>
        </div>
      </div>

      {/* Coffee Journey section */}
      <div className="mt-8 bg-white/50 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl text-coffee mb-4">My Coffee Journey</h2>
        <div className="space-y-6">
          <div className="p-4 hover:bg-white/70 transition-colors duration-300 rounded-lg">
            <h3 className="text-xl font-medium text-coffee
             mb-2">Coffee Coffee (Larchmont Village)</h3>
            <p className="text-lg text-gray-700 font-extralight leading-relaxed">
              Learned the fundamentals of coffee service and began building my barista skills, gaining a solid foundation in espresso preparation and drink crafting.
            </p>
          </div>
          <div className="p-4 hover:bg-white/70 transition-colors duration-300 rounded-lg">
            <h3 className="text-xl font-medium text-coffee
             mb-2">6xs Coffee</h3>
            <p className="text-lg text-gray-700 font-extralight leading-relaxed">
              Formally introduced to the world of specialty coffee—where I began to understand the nuances of single-origin beans, the science behind different extraction methods, and the artistry involved in creating the perfect cup. Stepped into the deeper coffee world, learning about sourcing, roast profiles, and the complex flavor notes that make each coffee unique.
            </p>
          </div>
        </div>
      </div>

      {/* Website Origin section */}
      <div className="mt-8 bg-white/50 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl text-coffee mb-4">How This Website Was Born</h2>
        <div className="text-lg text-gray-700 font-extralight leading-relaxed space-y-4">
          <p>
            As my knowledge of coffee deepened, I found myself constantly helping friends navigate the often intimidating world of specialty coffee. I'd receive texts asking for brewing advice, equipment recommendations, and explanations of coffee terminology.
          </p>
          <p>
            One day, while debugging a particularly challenging piece of code, I had an epiphany: I could combine my software engineering skills with my coffee knowledge to create something more scalable than one-on-one advice sessions.
          </p>
          <p>
            I realized that my unique position—straddling both the technical and coffee worlds—gave me a perspective that could bridge the gap between casual coffee drinkers and the sometimes exclusive specialty coffee community. I could build a platform that made coffee knowledge accessible, combining the technical precision of an engineer with the welcoming approach of a friendly neighborhood barista.
          </p>
        </div>
      </div>

      {/* Final sections */}
      <div className="mt-8 space-y-8">
        <div className="bg-white/50 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl text-coffee mb-4">Brewing a Digital Coffee Experience</h2>
          <div className="text-lg text-gray-700 font-extralight leading-relaxed space-y-4">
            <p>
              Coffee, much like coding, presents a fascinating paradox—it's simultaneously accessible to everyone yet infinitely complex. This realization became the foundation for this website.
            </p>
            <p>
              The challenges I encountered in my coffee journey—the complexity of tasting notes, the precision required in brewing methods, the vast world of bean varieties—made me realize how much knowledge stood between simply consuming coffee and truly experiencing it.
            </p>
            <p>
              With so many people drinking coffee daily, I saw an opportunity to use my software engineering skills to bridge this knowledge gap. This website isn't just another blog—it's where my two passions converge to create something greater than the sum of its parts.
            </p>
          </div>
        </div>

        <div className="bg-white/50 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl text-coffee mb-4">A Personal Learning Journey</h2>
          <div className="text-lg text-gray-700 font-extralight leading-relaxed space-y-4">
            <p>
              Perhaps the most honest confession: this project isn't solely altruistic. While I love helping others discover the depth of coffee culture, this platform serves my own growth too.
            </p>
            <p>
              I'm not the perfect barista. My palate is still developing. My latte art occasionally resembles abstract expressionism rather than the intended heart. But by sharing what I learn, by engaging with other coffee enthusiasts, by documenting my experiments and failures—I'm accelerating my own journey.
            </p>
            <p>
              Through teaching, I learn. Through sharing, I grow. Through community, we all elevate our coffee experience together.
            </p>
          </div>
        </div>

        <div className="bg-white/50 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl text-coffee mb-4">The Road Ahead</h2>
          <div className="text-lg text-gray-700 font-extralight leading-relaxed space-y-4">
            <p>
              This intersection of code and coffee represents more than my past—it's my ongoing journey. Every line of code I write for this platform and every cup of coffee I brew feeds into a continuous cycle of improvement.
            </p>
            <p>
              I invite you to join me as we explore the rich complexity of coffee together, one cup and one click at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
