import React, { useState, useEffect } from 'react';
import Sidebar from '../../../../components/shared/Sidebar';

export default function Varieties() {
  const [activeSection, setActiveSection] = useState('introduction');

  // Intersection Observer to update active section based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50px 0px -55%',
        threshold: 0
      }
    );

    // Observe all section elements
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Progress indicator for reading
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  // Back to top button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: '��' },
    { id: 'basics', title: 'Coffee Basics', icon: '☕' },
    { id: 'main-types', title: 'Main Types', icon: '🌱' },
    { id: 'popular', title: 'Popular Varieties', icon: '⭐' },
    { id: 'taste', title: 'Taste Differences', icon: '👅' },
    { id: 'summary', title: 'Quick Summary', icon: '📝' }
  ];

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
        style={{ opacity: readingProgress > 0 ? 1 : 0 }}
      >
        <div 
          className="h-full bg-green-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="flex gap-6 max-w-7xl mx-auto px-4 py-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <Sidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            sections={sections}
          />
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="prose max-w-none">
            <section id="introduction" className="mb-12">
              <h1 className="text-3xl font-bold mb-6">Understanding Coffee Varieties</h1>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                <p className="text-lg">
                  Just like apples come in different varieties (think Honeycrisp vs. Granny Smith), 
                  coffee also has many different types! Each variety has its own unique taste and 
                  characteristics. Let's explore the wonderful world of coffee varieties together! 🌱
                </p>
              </div>
            </section>

            <section id="basics" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Coffee Basics: What's a Variety?</h2>
              <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Think of it Like This:</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🌳</span>
                        <p>Coffee plants are like one big family</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">👨‍👩‍👧‍👦</span>
                        <p>Different varieties are like siblings in that family</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🎨</span>
                        <p>Each one has its own special features and flavors</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Fun Fact!</h3>
                    <p>Most coffee we drink comes from just two main types: Arabica and Robusta. 
                    But within these, there are hundreds of different varieties!</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="main-types" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">The Main Types of Coffee</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">Arabica Coffee</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span>☕</span>
                        <span>Smoother, sweeter taste</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>🌄</span>
                        <span>Grows best in high places</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>💝</span>
                        <span>Most popular in coffee shops</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-coffee text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">Robusta Coffee</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span>💪</span>
                        <span>Stronger, more bitter taste</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>☀️</span>
                        <span>Can grow in warmer places</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>⚡</span>
                        <span>More caffeine</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="popular" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Popular Coffee Varieties You Might Try</h2>
              
              {/* Arabica Introduction */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3">Arabica Varieties</h3>
                <p className="text-lg">
                  Most specialty coffee comes from the Arabica species. Within Arabica, there are many 
                  varieties - kind of like how there are different types of apples! Here are some of 
                  the most important Arabica varieties you'll hear about:
                </p>
              </div>

              <div className="space-y-8">
                {/* Typica Section */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-amber-600 text-white px-6 py-4 flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <h3 className="text-xl font-semibold">Typica: The Original Arabica</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-4">
                          Typica is one of the oldest and most important Arabica varieties. 
                          It's like the grandparent of many other coffee varieties we enjoy today!
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg mb-4">
                          <p><strong>Tastes like:</strong> Sweet and clean with light floral notes</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>💡</span>
                          <p>Many high-quality coffees like Jamaica Blue Mountain come from Typica trees</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Quick Facts:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <span>🌱</span>
                            <span>Type: Arabica variety</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Origin: Ethiopia to Yemen</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>⭐</span>
                            <span>Known for: High quality, classic flavor</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bourbon Section */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-amber-600 text-white px-6 py-4 flex items-center gap-3">
                    <span className="text-2xl">🍯</span>
                    <h3 className="text-xl font-semibold">Bourbon: The Sweet Arabica</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-4">
                          Bourbon is another major Arabica variety, named after Réunion Island 
                          (formerly called Bourbon). It's known for being sweeter than Typica!
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg mb-4">
                          <p><strong>Tastes like:</strong> Sweet and smooth with caramel notes</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>💡</span>
                          <p>Comes in different colors: Red, Yellow, and Pink Bourbon!</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Quick Facts:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <span>🌱</span>
                            <span>Type: Arabica variety</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Origin: Réunion Island</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>⭐</span>
                            <span>Known for: Sweet, complex flavor</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gesha Section */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-amber-600 text-white px-6 py-4 flex items-center gap-3">
                    <span className="text-2xl">👑</span>
                    <h3 className="text-xl font-semibold">Gesha: The Premium Arabica</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-4">
                          Gesha (also spelled Geisha) is a special Arabica variety discovered in Ethiopia. 
                          It became famous in Panama and is now one of the most expensive coffees in the world!
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg mb-4">
                          <p><strong>Tastes like:</strong> Floral and tea-like with jasmine notes</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>💡</span>
                          <p>Can sell for hundreds of dollars per pound!</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Quick Facts:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <span>🌱</span>
                            <span>Type: Arabica variety</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Origin: Ethiopia (Gori Gesha forest)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span>⭐</span>
                            <span>Known for: Exceptional quality, unique flavor</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Robusta Section */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                  <div className="bg-brown-600 text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">Common Robusta Varieties</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-4">
                          While Robusta is less common in specialty coffee shops, it plays a huge role 
                          in the coffee world. It's particularly important in:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Instant coffee production</li>
                          <li>Many espresso blends (adds crema and body)</li>
                          <li>Traditional Vietnamese coffee</li>
                          <li>Coffee regions where Arabica won't grow well</li>
                        </ul>
                        <div className="bg-amber-50 p-4 rounded-lg mb-4">
                          <p><strong>Tastes like:</strong> Strong, bold, often with nutty or woody notes</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Popular Robusta Types:</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium">Vietnamese Robusta</h5>
                            <p className="text-sm text-gray-600">Known for strong flavor, perfect for 
                            traditional Vietnamese coffee with condensed milk</p>
                          </div>
                          <div>
                            <h5 className="font-medium">Indian Robusta</h5>
                            <p className="text-sm text-gray-600">Higher quality, often used in espresso 
                            blends</p>
                          </div>
                          <div>
                            <h5 className="font-medium">Indonesian Robusta</h5>
                            <p className="text-sm text-gray-600">Common in instant coffee, known for 
                            strong body</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Differences Box */}
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">How is Robusta Different from Arabica?</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Growing Conditions:</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Can grow at lower altitudes</li>
                            <li>More resistant to pests</li>
                            <li>Tolerates higher temperatures</li>
                            <li>Generally easier to grow</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Bean Characteristics:</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Higher caffeine content (2x Arabica)</li>
                            <li>More bitter taste</li>
                            <li>Stronger, bolder flavor</li>
                            <li>Usually cheaper to produce</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Fun Facts */}
                    <div className="mt-6 flex items-start gap-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <p className="font-semibold">Did you know?</p>
                        <p className="text-gray-600">Robusta makes up about 40% of the world's coffee 
                        production! While it's less common in specialty coffee shops, it's a crucial 
                        part of the global coffee industry.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Robusta Note */}
                <div className="bg-gray-50 border-l-4 border-gray-500 p-6">
                  <h3 className="text-lg font-semibold mb-3">What About Robusta Varieties?</h3>
                  <p>
                    While Robusta also has different varieties, they're less common in specialty coffee. 
                    Robusta is mainly used in instant coffee, espresso blends, and some traditional 
                    brewing styles (like Vietnamese coffee). Most of the special varieties we talk about 
                    in specialty coffee are Arabica varieties!
                  </p>
                </div>
              </div>
            </section>

            <section id="taste" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">How Do They Taste Different?</h2>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      type: "Sweet & Smooth",
                      varieties: ["Bourbon", "Caturra"],
                      icon: "🍯",
                      description: "Like caramel or honey"
                    },
                    {
                      type: "Bright & Fruity",
                      varieties: ["Ethiopian", "Kenyan"],
                      icon: "🍎",
                      description: "Like berries or citrus"
                    },
                    {
                      type: "Floral & Delicate",
                      varieties: ["Gesha", "SL28"],
                      icon: "🌸",
                      description: "Like jasmine tea"
                    }
                  ].map(profile => (
                    <div key={profile.type} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{profile.icon}</span>
                        <h3 className="font-semibold">{profile.type}</h3>
                      </div>
                      <p className="mb-2">{profile.description}</p>
                      <p className="text-sm text-gray-600">
                        Found in: {profile.varieties.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="summary" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Quick Summary</h2>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="space-y-4">
                  <p className="flex items-center gap-2">
                    <span>✨</span>
                    <span>Coffee comes in many different varieties</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>🌱</span>
                    <span>Arabica is the most common type for specialty coffee</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>👅</span>
                    <span>Each variety has its own special taste</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>🎯</span>
                    <span>Try different varieties to find your favorite!</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </>
  );
}
