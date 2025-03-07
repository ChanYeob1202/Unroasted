import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../../../components/shared/Sidebar';

// Add interactive components
const GrowthStageSimulator = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const stages = [
    { name: 'Seed', duration: '2-3 months', description: 'Germination phase' },
    { name: 'Seedling', duration: '6-12 months', description: 'Nursery growth' },
    { name: 'Young Plant', duration: '1-2 years', description: 'Vegetative growth' },
    { name: 'Mature Plant', duration: '3-4 years', description: 'First harvest' },
    { name: 'Peak Production', duration: '7-20 years', description: 'Maximum yield' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Growth Stage Simulator</h3>
      <div className="space-y-4">
        {/* Progress Timeline */}
        <div className="relative h-2 bg-gray-200 rounded-full">
          <motion.div 
            className="absolute h-full bg-green-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStage + 1) * 20}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Stage Information */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-bold text-lg mb-2">{stages[currentStage].name}</h4>
          <p className="text-gray-700">Duration: {stages[currentStage].duration}</p>
          <p className="text-gray-700">{stages[currentStage].description}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStage(Math.max(0, currentStage - 1))}
            className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:bg-gray-300"
            disabled={currentStage === 0}
          >
            Previous Stage
          </button>
          <button
            onClick={() => setCurrentStage(Math.min(stages.length - 1, currentStage + 1))}
            className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:bg-gray-300"
            disabled={currentStage === stages.length - 1}
          >
            Next Stage
          </button>
        </div>
      </div>
    </div>
  );
};

const AltitudeEffectVisualizer = () => {
  const [altitude, setAltitude] = useState(3000);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Altitude Effect Visualizer</h3>
      <div className="space-y-4">
        <input
          type="range"
          min="0"
          max="6500"
          value={altitude}
          onChange={(e) => setAltitude(parseInt(e.target.value))}
          className="w-full"
        />
        <p className="text-center font-bold">{altitude} ft</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${altitude < 3000 ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50'}`}>
            <h4 className="font-bold">Low Altitude</h4>
            <p className="text-sm">Below 3,000 ft</p>
          </div>
          <div className={`p-4 rounded-lg ${altitude >= 3000 && altitude < 4500 ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50'}`}>
            <h4 className="font-bold">Medium Altitude</h4>
            <p className="text-sm">3,000-4,500 ft</p>
          </div>
          <div className={`p-4 rounded-lg ${altitude >= 4500 ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-50'}`}>
            <h4 className="font-bold">High Altitude</h4>
            <p className="text-sm">Above 4,500 ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add new interactive components
const ClimateFactorSimulator = () => {
  const [temperature, setTemperature] = useState(20);
  const [rainfall, setRainfall] = useState(1800);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Climate Factor Simulator</h3>
      <div className="space-y-6">
        {/* Temperature Control */}
        <div>
          <label className="block mb-2">Temperature (°C)</label>
          <input
            type="range"
            min="10"
            max="30"
            value={temperature}
            onChange={(e) => setTemperature(parseInt(e.target.value))}
            className="w-full"
          />
          <p className="text-center font-bold mt-2">{temperature}°C</p>
          <div className={`mt-2 p-3 rounded-lg ${
            temperature >= 15 && temperature <= 24 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {temperature >= 15 && temperature <= 24 
              ? 'Optimal growing temperature' 
              : 'Sub-optimal temperature'}
          </div>
        </div>

        {/* Rainfall Control */}
        <div>
          <label className="block mb-2">Annual Rainfall (mm)</label>
          <input
            type="range"
            min="500"
            max="3000"
            value={rainfall}
            onChange={(e) => setRainfall(parseInt(e.target.value))}
            className="w-full"
          />
          <p className="text-center font-bold mt-2">{rainfall}mm</p>
          <div className={`mt-2 p-3 rounded-lg ${
            rainfall >= 1500 && rainfall <= 2200 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {rainfall >= 1500 && rainfall <= 2200 
              ? 'Optimal rainfall range' 
              : 'Sub-optimal rainfall'}
          </div>
        </div>
      </div>
    </div>
  );
};

const SoilConditionVisualizer = () => {
  const [pH, setPH] = useState(6.0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Soil pH Visualizer</h3>
      <div className="space-y-4">
        <input
          type="range"
          min="40"
          max="80"
          value={pH * 10}
          onChange={(e) => setPH(parseInt(e.target.value) / 10)}
          className="w-full"
        />
        <p className="text-center font-bold">pH {pH.toFixed(1)}</p>
        
        <div className="h-4 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full relative">
          <div 
            className="absolute w-4 h-8 bg-black rounded-full -top-2"
            style={{ left: `${((pH - 4) / 4) * 100}%` }}
          />
        </div>
        
        <div className={`mt-2 p-3 rounded-lg text-center ${
          pH >= 5.5 && pH <= 6.5 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {pH >= 5.5 && pH <= 6.5 
            ? 'Optimal pH range for coffee growth' 
            : 'Sub-optimal pH level'}
        </div>
      </div>
    </div>
  );
};

// Add new navigation component
// const NavigationTabs = ({ activeSection, setActiveSection }) => {
//   const sections = [
//     { id: 'growth', label: 'Growth & Development' },
//     { id: 'environment', label: 'Environmental Factors' },
//     { id: 'varieties', label: 'Coffee Varieties' },
//     { id: 'cultivation', label: 'Cultivation Practices' }
//   ];

//   return (
//     <div className="flex space-x-4 mb-8 overflow-x-auto">
//       {sections.map(section => (
//         <button
//           key={section.id}
//           onClick={() => setActiveSection(section.id)}
//           className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
//             activeSection === section.id
//               ? 'bg-green-500 text-white'
//               : 'bg-gray-100 hover:bg-gray-200'
//           }`}
//         >
//           {section.label}
//         </button>
//       ))}
//     </div>
//   );
// };

// Add variety comparison component
const VarietyComparison = () => {
  const varieties = [
    {
      name: 'Typica',
      characteristics: ['Traditional variety', 'Excellent cup quality', 'Low yield', 'Disease susceptible'],
      regions: ['Central America', 'Jamaica', 'India'],
      flavor: ['Sweet', 'Clean', 'Floral']
    },
    {
      name: 'Bourbon',
      characteristics: ['Higher yield than Typica', 'Sweet flavor', 'Disease susceptible', 'Good at high altitudes'],
      regions: ['Rwanda', 'Burundi', 'Latin America'],
      flavor: ['Caramel', 'Fruit', 'Chocolate']
    },
    {
      name: 'Caturra',
      characteristics: ['Compact size', 'High yield', 'Good quality', 'Less shade tolerant'],
      regions: ['Colombia', 'Brazil', 'Central America'],
      flavor: ['Bright', 'Citrus', 'Medium body']
    }
  ];

  const [selectedVariety, setSelectedVariety] = useState(varieties[0].name);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Coffee Variety Explorer</h3>
      <div className="space-y-4">
        <div className="flex space-x-2">
          {varieties.map(variety => (
            <button
              key={variety.name}
              onClick={() => setSelectedVariety(variety.name)}
              className={`px-3 py-1 rounded-full ${
                selectedVariety === variety.name
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {variety.name}
            </button>
          ))}
        </div>
        
        {varieties.map(variety => (
          variety.name === selectedVariety && (
            <motion.div
              key={variety.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Characteristics</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {variety.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Growing Regions</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {variety.regions.map((region, idx) => (
                      <li key={idx}>{region}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Flavor Profile</h4>
                <div className="flex space-x-2">
                  {variety.flavor.map((note, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white rounded-full text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        ))}
      </div>
    </div>
  );
};

// Add Cultivation Practices Simulator
const CultivationPracticesSimulator = () => {
  const [selectedPractice, setSelectedPractice] = useState('pruning');
  const practices = {
    pruning: {
      title: 'Pruning Techniques',
      methods: [
        { name: 'Selective Pruning', impact: 'Moderate yield, high quality' },
        { name: 'Full Stumping', impact: 'High yield after recovery' },
        { name: 'Rejuvenation', impact: 'Complete plant renewal' }
      ],
      benefits: ['Better air circulation', 'Disease prevention', 'Improved yield'],
      timing: 'Post-harvest season'
    },
    shading: {
      title: 'Shade Management',
      methods: [
        { name: 'Full Sun', impact: 'Maximum yield, higher stress' },
        { name: 'Partial Shade', impact: 'Balanced growth and quality' },
        { name: 'Full Shade', impact: 'Lower yield, better quality' }
      ],
      benefits: ['Temperature regulation', 'Soil moisture retention', 'Biodiversity'],
      timing: 'Year-round management'
    },
    fertilization: {
      title: 'Fertilization Program',
      methods: [
        { name: 'Organic', impact: 'Sustainable, slower release' },
        { name: 'Chemical', impact: 'Fast-acting, precise control' },
        { name: 'Hybrid', impact: 'Balanced approach' }
      ],
      benefits: ['Nutrient balance', 'Improved yield', 'Plant health'],
      timing: 'Seasonal application'
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Cultivation Practices Simulator</h3>
      <div className="space-y-4">
        <div className="flex space-x-2">
          {Object.keys(practices).map(practice => (
            <button
              key={practice}
              onClick={() => setSelectedPractice(practice)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedPractice === practice
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {practice.charAt(0).toUpperCase() + practice.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedPractice}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-4"
        >
          <h4 className="text-lg font-semibold">{practices[selectedPractice].title}</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-bold mb-2">Methods</h5>
              <ul className="space-y-2">
                {practices[selectedPractice].methods.map((method, idx) => (
                  <li key={idx} className="p-2 bg-white rounded">
                    <div className="font-semibold">{method.name}</div>
                    <div className="text-sm text-gray-600">{method.impact}</div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-bold mb-2">Benefits</h5>
              <ul className="list-disc list-inside space-y-2">
                {practices[selectedPractice].benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
              <div className="mt-4">
                <h5 className="font-bold mb-1">Timing</h5>
                <p>{practices[selectedPractice].timing}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Add Disease Management Simulator
const DiseaseManagementSimulator = () => {
  const [selectedDisease, setSelectedDisease] = useState('leafRust');
  const diseases = {
    leafRust: {
      name: 'Coffee Leaf Rust',
      symptoms: ['Orange-yellow spots', 'Leaf drop', 'Reduced yield'],
      prevention: ['Resistant varieties', 'Proper spacing', 'Fungicide application'],
      riskLevel: 'High'
    },
    berryBorer: {
      name: 'Coffee Berry Borer',
      symptoms: ['Small holes in berries', 'Berry damage', 'Quality loss'],
      prevention: ['Biological control', 'Regular monitoring', 'Field sanitation'],
      riskLevel: 'Medium'
    },
    rootRot: {
      name: 'Root Rot',
      symptoms: ['Wilting', 'Yellowing leaves', 'Root decay'],
      prevention: ['Good drainage', 'Soil management', 'Clean tools'],
      riskLevel: 'Medium'
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Disease Management Guide</h3>
      <div className="space-y-4">
        <div className="flex space-x-2">
          {Object.keys(diseases).map(disease => (
            <button
              key={disease}
              onClick={() => setSelectedDisease(disease)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedDisease === disease
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {diseases[disease].name}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedDisease}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Symptoms</h4>
            <ul className="list-disc list-inside space-y-2">
              {diseases[selectedDisease].symptoms.map((symptom, idx) => (
                <li key={idx}>{symptom}</li>
              ))}
            </ul>
            <div className="mt-4">
              <span className="font-bold">Risk Level: </span>
              <span className={`px-2 py-1 rounded ${
                diseases[selectedDisease].riskLevel === 'High' 
                  ? 'bg-red-200' 
                  : 'bg-yellow-200'
              }`}>
                {diseases[selectedDisease].riskLevel}
              </span>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Prevention & Control</h4>
            <ul className="list-disc list-inside space-y-2">
              {diseases[selectedDisease].prevention.map((method, idx) => (
                <li key={idx}>{method}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function CoffeePlanBiologyCultivation() {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: '📚' },
    { id: 'growth', title: 'Growth & Development', icon: '🌱' },
    { id: 'environment', title: 'Environmental Factors', icon: '🌡️' },
    { id: 'varieties', title: 'Coffee Varieties', icon: '☕' },
    { id: 'cultivation', title: 'Cultivation Practices', icon: '🌿' },
    { id: 'diseases', title: 'Disease Management', icon: '🔬' },
    { id: 'sustainability', title: 'Sustainability', icon: '♻️' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Sidebar 
              activeSection={activeSection} 
              setActiveSection={setActiveSection}
              sections={sections}
            />
          </div>

          {/* Main content area with enhanced text explanations */}
          <div className="flex-1 space-y-12">
            {/* Introduction Section */}
            <section id="introduction">
              <h1 className="text-4xl font-bold mb-8">Coffee Plant Biology & Cultivation</h1>
              <div className="prose prose-lg max-w-none mb-8 space-y-6">
                <p>
                  The journey of coffee from seed to cup is a fascinating tale that spans continents, 
                  cultures, and centuries. Coffee plants, scientifically known as Coffea, belong to a genus 
                  of flowering plants whose seeds, commonly called coffee beans, are used to make various 
                  coffee beverages and products.
                </p>
                <p>
                  Understanding coffee plant biology and cultivation is crucial for both producers and 
                  enthusiasts. The quality of your morning brew is directly influenced by how the coffee 
                  plant was grown, the environmental conditions it experienced, and the care it received 
                  throughout its development.
                </p>
                <p>
                  In this comprehensive guide, we'll explore the fascinating life cycle of coffee plants, 
                  their specific environmental requirements, various coffee varieties, and the best 
                  practices for cultivation. Whether you're a farmer, researcher, or coffee enthusiast, 
                  this knowledge will deepen your appreciation for this remarkable plant.
                </p>
              </div>
            </section>

            {/* Growth & Development Section */}
            <section id="growth">
              <h2 className="text-3xl font-bold mb-8">Growth & Development</h2>
              <div className="prose prose-lg max-w-none mb-8 space-y-6">
                <p>
                  Coffee plants undergo a remarkable transformation from seed to mature plant. This journey 
                  typically takes 3-4 years before the first harvest, and plants can remain productive for 
                  decades with proper care. Understanding each growth stage is crucial for successful 
                  cultivation.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Key Development Phases</h3>
                <ul className="space-y-4">
                  <li>
                    <strong>Germination (2-3 months):</strong> Seeds require specific conditions including 
                    consistent moisture and temperatures between 73-86°F (23-30°C).
                  </li>
                  <li>
                    <strong>Nursery Phase (6-12 months):</strong> Young plants need careful attention, 
                    protection from direct sunlight, and regular watering.
                  </li>
                  <li>
                    <strong>Field Development (1-2 years):</strong> Plants establish their root systems 
                    and develop their characteristic branching pattern.
                  </li>
                </ul>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <GrowthStageSimulator />
                <AltitudeEffectVisualizer />
              </div>
            </section>

            {/* Environmental Factors Section */}
            <section id="environment">
              <h2 className="text-3xl font-bold mb-6">Environmental Factors</h2>
              <div className="prose prose-lg max-w-none mb-8 sp">
                <p>
                  Coffee plants are particularly sensitive to environmental conditions. The perfect balance 
                  of temperature, rainfall, altitude, and soil composition determines not only the plant's 
                  survival but also the quality and flavor of the beans it produces.
                </p>
                <h3>Critical Environmental Factors</h3>
                <ul>
                  <li>
                    <strong>Temperature:</strong> Coffee thrives in temperatures between 15-24°C (59-75°F). 
                    Extreme temperatures can stress the plant and affect bean development.
                  </li>
                  <li>
                    <strong>Rainfall:</strong> Annual rainfall of 1,500-2,200mm is ideal, with proper 
                    distribution throughout the year being crucial.
                  </li>
                  <li>
                    <strong>Altitude:</strong> Different varieties perform best at specific altitudes, 
                    generally between 3,000-6,500 feet above sea level.
                  </li>
                </ul>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <ClimateFactorSimulator />
                <SoilConditionVisualizer />
              </div>
            </section>

            {/* Coffee Varieties Section */}
            <section id="varieties">
              <h2 className="text-3xl font-bold mb-6">Coffee Varieties</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  Coffee varieties represent centuries of natural selection and careful breeding. Each variety 
                  has unique characteristics that influence both cultivation requirements and cup quality. 
                  Understanding these differences is crucial for successful coffee farming and production.
                </p>
                <h3>Major Coffee Species</h3>
                <p>
                  While there are over 120 species of coffee plants, two species dominate global production:
                </p>
                <ul>
                  <li>
                    <strong>Arabica (Coffea arabica):</strong> Known for superior cup quality, accounting 
                    for approximately 60-70% of global production. More delicate and disease-susceptible 
                    than Robusta.
                  </li>
                  <li>
                    <strong>Robusta (Coffea canephora):</strong> Hardier and more disease-resistant, with 
                    higher caffeine content but generally considered less refined in flavor.
                  </li>
                </ul>
                <p>
                  Within these species, particularly Arabica, numerous varieties have been developed to 
                  optimize for different growing conditions, disease resistance, and flavor profiles.
                </p>
              </div>
              <VarietyComparison />
            </section>

            {/* Cultivation Practices Section */}
            <section id="cultivation">
              <h2 className="text-3xl font-bold mb-6">Cultivation Practices</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  Successful coffee cultivation requires a combination of traditional knowledge and modern 
                  agricultural practices. The methods chosen can significantly impact both yield and quality.
                </p>
                <h3>Essential Cultivation Techniques</h3>
                <p>
                  Modern coffee farming involves several key practices:
                </p>
                <ul>
                  <li>
                    <strong>Pruning:</strong> Regular pruning maintains plant health, facilitates harvesting, 
                    and optimizes yield. Different pruning techniques serve various purposes, from 
                    maintenance to rejuvenation.
                  </li>
                  <li>
                    <strong>Shade Management:</strong> Shade trees protect coffee plants from extreme 
                    temperatures and provide additional benefits like soil improvement and biodiversity.
                  </li>
                  <li>
                    <strong>Fertilization:</strong> Proper nutrient management is crucial for plant health 
                    and bean quality, whether through organic or conventional methods.
                  </li>
                </ul>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <CultivationPracticesSimulator />
                <DiseaseManagementSimulator />
              </div>
            </section>

            {/* Disease Management Section */}
            <section id="diseases">
              <h2 className="text-3xl font-bold mb-6">Disease Management</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  Plant diseases and pests pose significant challenges to coffee production worldwide. 
                  Understanding common threats and their management is essential for maintaining healthy 
                  coffee plantations.
                </p>
                <h3>Common Challenges</h3>
                <p>
                  Coffee plants face various biological threats:
                </p>
                <ul>
                  <li>
                    <strong>Fungal Diseases:</strong> Coffee leaf rust (Hemileia vastatrix) is the most 
                    notorious, capable of devastating entire plantations if left unchecked.
                  </li>
                  <li>
                    <strong>Insect Pests:</strong> The coffee berry borer is particularly destructive, 
                    directly affecting bean quality and yield.
                  </li>
                  <li>
                    <strong>Systemic Issues:</strong> Root diseases and nutritional deficiencies can cause 
                    long-term damage if not properly managed.
                  </li>
                </ul>
                <p>
                  Integrated Pest Management (IPM) approaches combine preventive measures, monitoring, 
                  and targeted interventions to maintain plant health while minimizing environmental impact.
                </p>
              </div>
              <DiseaseManagementSimulator />
            </section>

            {/* Sustainability Section */}
            <section id="sustainability">
              <h2 className="text-3xl font-bold mb-6">Sustainable Coffee Cultivation</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  Sustainable coffee production is increasingly important as the industry faces challenges 
                  from climate change, environmental degradation, and social inequality. Modern cultivation 
                  must balance productivity with environmental and social responsibility.
                </p>
                <h3>Key Sustainability Aspects</h3>
                <ul>
                  <li>
                    <strong>Environmental Stewardship:</strong> Protecting biodiversity, maintaining soil 
                    health, and implementing water conservation measures.
                  </li>
                  <li>
                    <strong>Economic Viability:</strong> Ensuring fair prices and sustainable livelihoods 
                    for coffee farmers and workers.
                  </li>
                  <li>
                    <strong>Social Responsibility:</strong> Promoting fair labor practices, community 
                    development, and gender equality in coffee-producing regions.
                  </li>
                </ul>
                <p>
                  Certification programs like Organic, Fair Trade, and Rainforest Alliance help promote 
                  and verify sustainable practices throughout the coffee supply chain.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Water Conservation</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl">💧</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Water Management</h4>
                          <p>Efficient irrigation systems and water recycling</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Biodiversity</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-bold mb-2">Ecosystem Benefits</h4>
                        <ul className="space-y-2">
                          <li>Shade-grown coffee</li>
                          <li>Native plant integration</li>
                          <li>Wildlife corridors</li>
                          <li>Natural pest control</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
