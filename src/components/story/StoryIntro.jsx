import React from 'react'
import IntroSection from './IntroSection'
import StorySection from './StorySection';
import PassionsSection from './PassionsSection';

const journeySteps = [
  {
    title: "Coffee Coffee (Larchmont Village)",
    content: "Learned the fundamentals of coffee service and began building my barista skills, gaining a solid foundation in espresso preparation and drink crafting."
  },
  {
    title: "6xs Coffee",
    content: "Formally introduced to the world of specialty coffee—where I began to understand the nuances of single-origin beans, the science behind different extraction methods, and the artistry involved in creating the perfect cup. Stepped into the deeper coffee world, learning about sourcing, roast profiles, and the complex flavor notes that make each coffee unique."
  },
  {
    title: "One:Escape Coffee",
    content: "Joined as an opening team member and manager, playing a pivotal role in shaping the café's identity. Led the development of our signature menu, established coffee quality standards, and built a training program for our team. As a consultant, I've been instrumental in setting up our coffee program, from equipment selection to workflow optimization, ensuring we deliver exceptional coffee experiences to our community."
  }
];

export default function StoryIntro() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <IntroSection />
      <PassionsSection />
      <StorySection title="My Coffee Origin Story">
        <div className="flex flex-col md:flex-row items-start gap-8 bg-white/50 rounded-xl p-6 shadow-sm">
          <div className="md:w-1/3">
            <img 
              src="/images/mainPicture2.jpeg" 
              alt="Barista pouring latte art" 
              className="w-full max-w-[200px] rounded-lg shadow-md mx-auto mt-10"
            />
          </div>
          <div className="md:w-2/3">
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
        </div>
      </StorySection>
      <StorySection title="My Coffee Journey">
        <div className="space-y-6">
          {journeySteps.map((step, index) => (
            <div key={index} className="p-4 hover:bg-white/70 transition-colors duration-300 rounded-lg">
              <h3 className="text-xl font-medium text-coffee mb-2">{step.title}</h3>
              <p className="text-lg text-gray-700 font-extralight leading-relaxed">{step.content}</p>
            </div>
          ))}
        </div>
      </StorySection>
      {/* Continue with other sections using StorySection component */}
    </div>
  )
}
