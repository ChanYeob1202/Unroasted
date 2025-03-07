import React, { useState } from 'react';
import Sidebar from '../../../../components/shared/Sidebar';

export default function Grades() {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: '📚'
    },
    {
      id: 'physical-characteristics',
      title: 'Physical Characteristics',
      icon: '📏'
    },
    {
      id: 'origin-specific',
      title: 'Origin-Specific Systems',
      icon: '🌍'
    },
    {
      id: 'international-standards',
      title: 'International Standards',
      icon: '🌟'
    },
    {
      id: 'cup-quality',
      title: 'Cup Quality Connection',
      icon: '☕'
    },
    {
      id: 'practical-applications',
      title: 'Practical Applications',
      icon: '⚙️'
    },
    {
      id: 'future-trends',
      title: 'Future Trends',
      icon: '🔮'
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      icon: '🎯'
    }
  ];

  return (
    <div className="flex gap-6 max-w-7xl mx-auto px-4 py-8">
      <aside className="w-64 flex-shrink-0">
        <Sidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sections={sections}
        />
      </aside>
      
      <main className="flex-1 prose max-w-none">
        <section id="introduction" className="mb-16">
          <h1 className="text-4xl font-bold mb-6">Understanding Coffee Grades: A Beginner's Guide</h1>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">🤔 Why Should You Care About Coffee Grades?</h3>
            <p className="text-lg mb-4">
              Ever wondered why some coffees cost more than others? Or why certain coffees taste so different? 
              The answer lies in coffee grading! Think of it like a report card for coffee beans - it tells us 
              everything about their quality, size, and potential flavor.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">👉 What We'll Cover</h3>
            <p className="mb-4">In this guide, you'll learn:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>How coffee beans are measured and sorted</li>
              <li>Why some beans are considered "better" than others</li>
              <li>How different countries grade their coffee</li>
              <li>What makes specialty coffee "special"</li>
              <li>How grading affects the coffee in your cup</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">💡 Quick Tip</h3>
            <p>
              Don't feel overwhelmed! While coffee grading can seem complex, we'll break everything down into 
              easy-to-understand pieces. By the end, you'll be able to read coffee labels like a pro!
            </p>
          </div>
        </section>

        <section id="physical-characteristics" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Basics: How Coffee Beans Are Measured</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">📏 Size Matters: Understanding Bean Sizes</h3>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
              <div className="p-6">
                <p className="mb-4">
                  Imagine sorting marbles by size - that's basically how coffee beans are sorted! 
                  They're passed through special screens with different-sized holes:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3">Screen Size</th>
                        <th className="px-4 py-3">Size in mm</th>
                        <th className="px-4 py-3">What it Means</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3">Screen 20</td>
                        <td className="px-4 py-3">8.0 mm</td>
                        <td className="px-4 py-3">Extra Large - Premium Grade</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Screen 18</td>
                        <td className="px-4 py-3">7.1 mm</td>
                        <td className="px-4 py-3">Large - Often Used in Specialty Coffee</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Screen 16</td>
                        <td className="px-4 py-3">6.3 mm</td>
                        <td className="px-4 py-3">Medium - Common Commercial Grade</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">🌟 Why Size Matters:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Larger beans often (but not always) mean better quality</li>
                <li>Even-sized beans roast more consistently</li>
                <li>Different brewing methods work better with different sizes</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">⚖️ Density: The Hidden Quality Indicator</h3>
            
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
              <p className="mb-4">
                Think of density like this: if you drop a raw potato and a ripe tomato, which one bounces? 
                Coffee beans work similarly - denser beans often mean better quality!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">High-Density Beans:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Usually grown at high altitudes</li>
                    <li>Develop flavors more slowly</li>
                    <li>Often have more complex flavors</li>
                    <li>Generally command higher prices</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Low-Density Beans:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Usually grown at lower altitudes</li>
                    <li>Develop flavors more quickly</li>
                    <li>Often have simpler flavor profiles</li>
                    <li>Generally less expensive</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">🔍 Defects: The Quality Checklist</h3>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="mb-4">
                Just like how you check fruits for bruises at the grocery store, coffee beans are checked for defects. 
                Here's what experts look for:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">Major Defects:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Black beans (fully black color)</li>
                    <li>Sour beans (yellowish color)</li>
                    <li>Fungus damage</li>
                    <li>Large insect damage</li>
                    <li>Foreign materials (stones, sticks)</li>
                  </ul>
                </div>

                <div className="border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-2">Minor Defects:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Slightly discolored beans</li>
                    <li>Small chips or breaks</li>
                    <li>Partial insect damage</li>
                    <li>Wrinkled beans</li>
                    <li>Faded color</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="origin-specific" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Coffee Around the World: How Different Countries Grade Their Coffee</h2>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">🌍 Why Different Countries Have Different Systems</h3>
            <p className="mb-4">
              Just like how different countries have different grading systems for their students, coffee-producing 
              countries have developed their own ways to grade coffee. This is because:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Each region grows different types of coffee</li>
              <li>Growing conditions vary dramatically between countries</li>
              <li>Historical trading relationships influence standards</li>
              <li>Local processing methods affect quality differently</li>
            </ul>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-semibold">Colombia's Coffee Grades 🇨🇴</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Colombia, famous for its coffee, uses a straightforward system that's easy to understand:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Supremo (Top Grade)</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Largest bean size (Screen 17+)</li>
                      <li>Most expensive</li>
                      <li>Often used in specialty coffee</li>
                      <li>Very few defects allowed</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Excelso (Second Grade)</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Medium bean size (Screen 15-16)</li>
                      <li>Good quality for commercial use</li>
                      <li>Slightly more defects allowed</li>
                      <li>Great value for money</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-purple-600 text-white p-4">
                <h3 className="text-xl font-semibold">Kenya's ABC System 🇰🇪</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Kenya uses a letter-based system that's become famous worldwide. Think of it like 
                  grades in school, but for coffee:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Kenya AA</h4>
                    <p className="text-sm mb-2">The "Straight A Student" of Coffee</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Largest beans (Screen 17/18)</li>
                      <li>Premium quality</li>
                      <li>Highly sought after</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Kenya AB</h4>
                    <p className="text-sm mb-2">The "Solid Performer"</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Mixed large/medium beans</li>
                      <li>Great quality</li>
                      <li>Better value</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Kenya PB</h4>
                    <p className="text-sm mb-2">The "Special Student"</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Round "peaberry" beans</li>
                      <li>Unique flavor profile</li>
                      <li>Limited availability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-green-600 text-white p-4">
                <h3 className="text-xl font-semibold">Central American Height-Based Grades 🌄</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  In Central America, it's all about altitude! The higher the coffee is grown, 
                  the better it's usually considered:
                </p>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3">Grade</th>
                        <th className="px-4 py-3">Altitude</th>
                        <th className="px-4 py-3">What It Means</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">SHG/SHB</td>
                        <td className="px-4 py-3">1,350m+</td>
                        <td className="px-4 py-3">Strictly High Grown - Top quality</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">HG/HB</td>
                        <td className="px-4 py-3">1,200-1,350m</td>
                        <td className="px-4 py-3">High Grown - Very good quality</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">MHG</td>
                        <td className="px-4 py-3">1,000-1,200m</td>
                        <td className="px-4 py-3">Medium High Grown - Good quality</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">🤔 Why Height Matters:</h4>
                  <p>
                    Higher altitude means cooler temperatures, which makes the coffee cherries develop more slowly. 
                    This slower growth usually results in more complex flavors - kind of like how slow-cooking 
                    food often tastes better than quick-cooking!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="international-standards" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Specialty Coffee: The Gold Standard</h2>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">✨ What Makes Coffee "Specialty"?</h3>
            <p className="mb-4">
              Think of specialty coffee like a top-rated restaurant versus a regular café. Both serve food, 
              but one goes above and beyond in quality, preparation, and attention to detail.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">The 100-Point System Explained</h3>
              <p className="mb-4">
                Coffee experts grade specialty coffee on a 100-point scale, similar to wine ratings. 
                Here's what the scores mean:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">90-100: Outstanding</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Exceptional quality</li>
                    <li>Rare and unique characteristics</li>
                    <li>Perfect processing</li>
                    <li>Complex flavor profile</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">85-89: Excellent</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Superior quality</li>
                    <li>Distinctive characteristics</li>
                    <li>Very few defects</li>
                    <li>Well-balanced flavors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Continue with more sections... */}
          </div>
        </section>

        <section id="cup-quality" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">From Bean to Cup: How Grades Affect Taste</h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">🫖 The Connection Between Grades and Flavor</h3>
            <p className="mb-4">
              Think of coffee grading like a recipe - each characteristic contributes to the final taste 
              in your cup. Let's explore how different aspects affect what you taste!
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Size and Flavor Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Large Beans</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Typical Flavors:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>More complex</li>
                        <li>Fuller body</li>
                        <li>Rich chocolate notes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Best For:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Espresso</li>
                        <li>French Press</li>
                        <li>Cold Brew</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Medium Beans</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Typical Flavors:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Well-balanced</li>
                        <li>Medium body</li>
                        <li>Caramel notes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Best For:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Pour Over</li>
                        <li>Drip Coffee</li>
                        <li>Aeropress</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Small Beans</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Typical Flavors:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Bright acidity</li>
                        <li>Light body</li>
                        <li>Floral notes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Best For:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Filter Coffee</li>
                        <li>Light Roasts</li>
                        <li>Single Origin</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Density and Flavor Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">High-Density Beans</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Flavor Characteristics:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Brighter acidity</li>
                          <li>More complex flavors</li>
                          <li>Better sweetness</li>
                          <li>Longer aftertaste</li>
                        </ul>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-sm italic">
                          "Think of high-density beans like a perfectly ripe apple - 
                          crisp, sweet, and full of flavor!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Low-Density Beans</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Flavor Characteristics:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Milder flavors</li>
                          <li>Less acidity</li>
                          <li>Simpler taste profile</li>
                          <li>Shorter aftertaste</li>
                        </ul>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-sm italic">
                          "Low-density beans are like a mild cheese - 
                          pleasant but less complex in flavor."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Processing Methods and Taste</h3>
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Washed Process</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Typical Flavors:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Clean, bright taste</li>
                        <li>Citrus notes</li>
                        <li>Tea-like body</li>
                        <li>Crisp acidity</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Common Origins:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Colombia</li>
                        <li>Kenya</li>
                        <li>Guatemala</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Natural Process</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Typical Flavors:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Berry-like sweetness</li>
                        <li>Wine-like notes</li>
                        <li>Full body</li>
                        <li>Complex sweetness</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Common Origins:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Ethiopia</li>
                        <li>Brazil</li>
                        <li>Yemen</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="practical-applications" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Making It Work: Practical Guide to Using Coffee Grades</h2>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">🎯 Using Grade Knowledge in Real Life</h3>
            <p className="mb-4">
              Now that you understand coffee grades, let's see how to use this knowledge in practical situations - 
              whether you're buying coffee, brewing at home, or just want to appreciate your cup better!
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Shopping Guide: Reading Coffee Labels</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What to Look For:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Origin country and region</li>
                    <li>Processing method</li>
                    <li>Grade or classification</li>
                    <li>Altitude (if listed)</li>
                    <li>Roast date</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Red Flags:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>No origin information</li>
                    <li>No roast date</li>
                    <li>Vague descriptions</li>
                    <li>Unusually low prices for claimed quality</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">💡 Pro Tip:</h4>
                <p>
                  Don't be afraid to ask your local roaster about their coffee grades! Most are happy to 
                  share information and help you learn more about their selections.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Brewing Recommendations by Grade</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">High-Grade Specialty</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Best Brewing Methods:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Pour Over</li>
                        <li>AeroPress</li>
                        <li>Light Roast Espresso</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Why:</p>
                      <p className="text-sm">
                        These methods highlight the complex flavors and subtle notes present in high-grade beans.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mid-Grade Commercial</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Best Brewing Methods:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Drip Coffee</li>
                        <li>French Press</li>
                        <li>Cold Brew</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Why:</p>
                      <p className="text-sm">
                        These methods work well with the straightforward flavors of mid-grade beans.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Lower Grades</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Best Brewing Methods:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Dark Roast Espresso</li>
                        <li>Milk-Based Drinks</li>
                        <li>Flavored Coffee</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Why:</p>
                      <p className="text-sm">
                        These methods can help mask potential defects while highlighting stronger flavors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="future-trends" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Future of Coffee Grading</h2>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">🚀 Where Coffee Grading Is Heading</h3>
            <p className="mb-4">
              The coffee industry is constantly evolving, with new technologies and approaches changing how 
              we evaluate and grade coffee. Here's what's coming next!
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Technology in Grading</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">AI and Machine Learning</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Computer vision for defect detection</li>
                    <li>Flavor profile prediction</li>
                    <li>Automated quality scoring</li>
                    <li>Real-time monitoring during processing</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">New Testing Methods</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>DNA testing for variety verification</li>
                    <li>Chemical composition analysis</li>
                    <li>Moisture content sensors</li>
                    <li>Spectral analysis for ripeness</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Sustainability Focus</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Environmental Impact</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Carbon footprint scoring</li>
                    <li>Water usage metrics</li>
                    <li>Biodiversity impact</li>
                    <li>Soil health measures</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Social Responsibility</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fair labor practices</li>
                    <li>Community impact scores</li>
                    <li>Gender equity metrics</li>
                    <li>Worker welfare standards</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Economic Transparency</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Farm gate pricing</li>
                    <li>Cost of production data</li>
                    <li>Value chain tracking</li>
                    <li>Producer income metrics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="conclusion" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Wrapping It Up</h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">🎓 Your Coffee Grading Journey</h3>
            <p className="mb-4">
              You've now learned the essentials of coffee grading - from basic size measurements to complex 
              quality evaluations. Here's how to keep learning and applying this knowledge:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Next Steps:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visit local roasters and ask about their grading</li>
                  <li>Try comparing different grades of the same origin</li>
                  <li>Experiment with brewing methods for different grades</li>
                  <li>Join coffee cupping sessions to train your palate</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Remember:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Grades are guidelines, not absolute rules</li>
                  <li>Personal taste preferences matter most</li>
                  <li>Quality can exist at many price points</li>
                  <li>Keep exploring and learning!</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
