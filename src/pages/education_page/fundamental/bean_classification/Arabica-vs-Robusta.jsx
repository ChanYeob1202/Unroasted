import { useState } from 'react';
import Sidebar from '../../../../components/shared/Sidebar';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: '☕',
    content: `In the world of coffee, two species dominate global production and consumption: 
    Coffea arabica and Coffea canephora, commonly known as Arabica and Robusta. These two varieties 
    represent approximately 99% of all coffee grown worldwide, with Arabica accounting for roughly 
    60-70% of global production and Robusta making up most of the remaining 30-40%.

    While casual coffee drinkers might recognize these names from packaging or marketing materials, 
    understanding the profound differences between these species opens the door to a deeper appreciation 
    of coffee's complexity. These distinctions go far beyond simple quality hierarchies, revealing a 
    fascinating story of evolution, agriculture, economics, and flavor science.`
  },
  {
    id: 'biological-origins',
    title: 'Biological Origins and Evolution',
    icon: '🧬',
    content: `Coffea arabica originated in the highland forests of southwestern Ethiopia, specifically 
    in regions like Kaffa and Sidamo. Genetic evidence suggests Arabica emerged approximately 1,000-1,500 
    years ago as a natural hybrid between Coffea canephora (Robusta) and Coffea eugenioides.

    Robusta evolved in lowland forests stretching across western and central Africa, from Guinea to Uganda 
    and south to Angola. Unlike Arabica, Robusta is not a hybrid but one of coffee's parent species, with 
    a much longer evolutionary history and consequently greater genetic diversity.`
  },
  {
    id: 'growing-conditions',
    title: 'Growing Conditions and Cultivation',
    icon: '🌿',
    content: `Arabica thrives at 600-2,200 meters altitude with temperatures of 15-24°C, requiring 
    1,500-2,000mm annual rainfall and well-draining, slightly acidic soils. It's particularly sensitive 
    to environmental conditions, with temperature being the most critical factor.

    Robusta grows at 0-800 meters altitude, preferring warmer climates of 24-30°C and tolerating higher 
    rainfall of 2,000-3,000mm annually. Its environmental adaptability makes it easier and less costly to 
    cultivate in a wider range of conditions.`
  },
  {
    id: 'physical-characteristics',
    title: 'Physical Characteristics',
    icon: '🫘',
    content: `Arabica plants typically grow 2.5-4.5 meters tall with oval, dark green leaves and fragrant 
    white blossoms. The beans are generally oval with an S-shaped center cut, larger (6-8mm), and have a 
    smoother surface texture.

    Robusta plants grow taller (4.5-6 meters) with larger, broader leaves. The beans are rounder with a 
    straighter center cut, smaller (4.5-6.5mm), and often have a more textured surface.`
  },
  {
    id: 'chemical-composition',
    title: 'Chemical Composition',
    icon: '🧪',
    content: `The key chemical differences include caffeine content (Arabica: 0.8-1.4%, Robusta: 1.7-4.0%), 
    sugars (Arabica: 6-9%, Robusta: 3-7%), and oils (Arabica: 15-17%, Robusta: 10-12%). These differences 
    significantly influence flavor, aroma, and physiological effects.`
  },
  {
    id: 'flavor-profiles',
    title: 'Flavor Profiles',
    icon: '👅',
    content: `Arabica typically offers bright acidity, pronounced sweetness, medium body, and complex aromatics 
    spanning fruits, florals, chocolate, and nuts. Robusta presents lower acidity, less sweetness, heavier body, 
    and stronger but less complex aromas, often described as woody, earthy, or grain-like.`
  },
  {
    id: 'economic-roles',
    title: 'Economic and Industry Roles',
    icon: '💰',
    content: `Arabica dominates the specialty coffee market and commands higher prices but has higher production 
    costs and lower yields. Robusta serves crucial roles in espresso blends, instant coffee, and commercial 
    blends, with lower production costs and higher yields.`
  },
  {
    id: 'future-trends',
    title: 'Modern Developments and Future Trends',
    icon: '🔮',
    content: `The industry is seeing emergence of specialty Robusta, advanced breeding programs combining 
    traits from both species, and adaptation strategies for climate change. Consumer awareness is evolving 
    beyond simple quality hierarchies to appreciate the complementary roles of both species.`
  }
];

// Add comparison data
const comparisonData = {
  caffeine: {
    arabica: 1.2,
    robusta: 2.2,
    unit: '%'
  },
  sugars: {
    arabica: 7.5,
    robusta: 5.0,
    unit: '%'
  },
  oils: {
    arabica: 16,
    robusta: 11,
    unit: '%'
  },
  altitude: {
    arabica: '600-2,200',
    robusta: '0-800',
    unit: 'm'
  }
};

export default function ArabicaVsRobusta() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [showComparison, setShowComparison] = useState(false);

  const ComparisonBar = ({ value, maxValue, label, color }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm">{value}%</span>
      </div>
      <motion.div 
        className="h-2.5 rounded-full bg-gray-200"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${(value/maxValue) * 100}%` }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <Sidebar 
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Interactive Comparison Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md"
            onClick={() => setShowComparison(!showComparison)}
          >
            {showComparison ? 'Hide Comparison' : 'Compare Arabica vs Robusta'}
          </motion.button>

          {/* Comparison Section */}
          {showComparison && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 grid grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-green-800">Arabica</h3>
                <ComparisonBar
                  value={comparisonData.caffeine.arabica}
                  maxValue={4}
                  label="Caffeine Content"
                  color="bg-green-500"
                />
                <ComparisonBar
                  value={comparisonData.sugars.arabica}
                  maxValue={10}
                  label="Sugars"
                  color="bg-green-500"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-blue-800">Robusta</h3>
                <ComparisonBar
                  value={comparisonData.caffeine.robusta}
                  maxValue={4}
                  label="Caffeine Content"
                  color="bg-blue-500"
                />
                <ComparisonBar
                  value={comparisonData.sugars.robusta}
                  maxValue={10}
                  label="Sugars"
                  color="bg-blue-500"
                />
              </div>
            </motion.div>
          )}

          {/* Content Sections */}
          {sections.map((section) => (
            <motion.section 
              key={section.id}
              id={section.id}
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-light mb-8 flex items-center gap-3">
                <span className="text-2xl">{section.icon}</span>
                {section.title}
              </h2>
              <div className="prose max-w-none">
                <p className="leading-relaxed">{section.content}</p>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
