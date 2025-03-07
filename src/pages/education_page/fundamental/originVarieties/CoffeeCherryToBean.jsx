import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Sidebar from '../../../../components/shared/Sidebar';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Processing Method Comparison Data
const processingMethods = {
  washed: {
    waterUsage: 20,
    processingTime: 36,
    qualityConsistency: 90,
    flavorProfile: ['Clean', 'Bright', 'Floral', 'Citrus'],
    regions: ['Colombia', 'Kenya', 'Guatemala', 'Costa Rica']
  },
  natural: {
    waterUsage: 5,
    processingTime: 72,
    qualityConsistency: 75,
    flavorProfile: ['Fruity', 'Wine-like', 'Heavy body', 'Sweet'],
    regions: ['Ethiopia', 'Yemen', 'Brazil', 'Indonesia']
  },
  honey: {
    waterUsage: 10,
    processingTime: 48,
    qualityConsistency: 80,
    flavorProfile: ['Balanced', 'Sweet', 'Complex', 'Smooth'],
    regions: ['Costa Rica', 'El Salvador', 'Brazil', 'Panama']
  }
};

// Fermentation Progress Simulator
const FermentationSimulator = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentHour, setCurrentHour] = useState(0);
  const [phLevel, setPhLevel] = useState(6.5);

  useEffect(() => {
    let interval;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            setIsRunning(false);
          }
          return newProgress;
        });
        setCurrentHour(prev => prev + 0.36); // 36 hours total
        setPhLevel(prev => Math.max(4.5, prev - 0.02));
      }, 100); // Speed up simulation for demo
    }
    return () => clearInterval(interval);
  }, [isRunning, progress]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Fermentation Simulator</h3>
      <div className="space-y-4">
        {/* Progress Bar */}
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="absolute h-full bg-blue-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Progress</div>
            <div className="font-bold">{progress}%</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">Hour</div>
            <div className="font-bold">{Math.floor(currentHour)}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-600">pH Level</div>
            <div className="font-bold">{phLevel.toFixed(2)}</div>
          </div>
        </div>

        {/* pH Level Visualization */}
        <div className="h-40 bg-gray-100 rounded-lg p-4">
          <div className="h-full flex items-end space-x-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-blue-500 transition-all duration-300"
                style={{
                  height: `${Math.max(0, Math.min(100, 
                    100 - (i * 5) - (progress / 2)
                  ))}%`,
                  opacity: 0.5 + (i / 40)
                }}
              />
            ))}
          </div>
        </div>

        {/* Control Button */}
        <button
          onClick={() => {
            if (!isRunning) {
              if (progress === 100) {
                setProgress(0);
                setCurrentHour(0);
                setPhLevel(6.5);
              }
              setIsRunning(true);
            } else {
              setIsRunning(false);
            }
          }}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isRunning ? 'Pause' : progress === 100 ? 'Restart' : 'Start'} Simulation
        </button>
      </div>
    </div>
  );
};

// Method Comparison Component
const ProcessingComparison = () => {
  const [selectedMethods, setSelectedMethods] = useState(['washed', 'natural']);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Processing Method Comparison</h3>
      
      {/* Method Selection */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(processingMethods).map(method => (
          <button
            key={method}
            onClick={() => {
              if (selectedMethods.includes(method)) {
                setSelectedMethods(prev => prev.filter(m => m !== method));
              } else {
                setSelectedMethods(prev => [...prev, method]);
              }
            }}
            className={`px-3 py-1 rounded-full transition-colors ${
              selectedMethods.includes(method)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {method.charAt(0).toUpperCase() + method.slice(1)}
          </button>
        ))}
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {selectedMethods.map(method => (
          <div key={method} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-4">
              {method.charAt(0).toUpperCase() + method.slice(1)}
            </h4>
            
            {/* Metrics */}
            <div className="space-y-4">
              {/* Water Usage */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Water Usage</span>
                  <span className="text-sm font-bold">{processingMethods[method].waterUsage}L/kg</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500"
                    style={{ width: `${(processingMethods[method].waterUsage / 20) * 100}%` }}
                  />
                </div>
              </div>

              {/* Processing Time */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Processing Time</span>
                  <span className="text-sm font-bold">{processingMethods[method].processingTime}h</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500"
                    style={{ width: `${(processingMethods[method].processingTime / 72) * 100}%` }}
                  />
                </div>
              </div>

              {/* Quality Consistency */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Quality Consistency</span>
                  <span className="text-sm font-bold">{processingMethods[method].qualityConsistency}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-500"
                    style={{ width: `${processingMethods[method].qualityConsistency}%` }}
                  />
                </div>
              </div>

              {/* Flavor Profile */}
              <div>
                <span className="text-sm block mb-2">Flavor Profile</span>
                <div className="flex flex-wrap gap-2">
                  {processingMethods[method].flavorProfile.map(flavor => (
                    <span
                      key={flavor}
                      className="px-2 py-1 bg-white rounded-full text-sm shadow-sm"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Regions */}
              <div>
                <span className="text-sm block mb-2">Common Regions</span>
                <div className="flex flex-wrap gap-2">
                  {processingMethods[method].regions.map(region => (
                    <span
                      key={region}
                      className="px-2 py-1 bg-white rounded-full text-sm shadow-sm"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add new components for the remaining sections
const ExperimentalProcessing = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">Experimental Processing Methods</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Anaerobic Fermentation */}
        <div className="bg-white rounded-lg shadow p-4">
          <h4 className="text-xl font-semibold mb-3">Anaerobic Fermentation</h4>
          <p className="mb-4">
            Coffee fermented in sealed containers with limited oxygen exposure, creating unique flavor profiles.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-bold mb-2">Process Variables:</h5>
            <ul className="space-y-2">
              <li>Temperature: 20-25°C</li>
              <li>Duration: 18-72 hours</li>
              <li>pH Level: 4.5-5.5</li>
              <li>Pressure monitoring</li>
            </ul>
          </div>
        </div>

        {/* Carbonic Maceration */}
        <div className="bg-white rounded-lg shadow p-4">
          <h4 className="text-xl font-semibold mb-3">Carbonic Maceration</h4>
          <p className="mb-4">
            Whole cherries undergo fermentation in a CO₂-rich environment, similar to wine production.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h5 className="font-bold mb-2">Key Characteristics:</h5>
            <ul className="space-y-2">
              <li>Wine-like qualities</li>
              <li>Enhanced sweetness</li>
              <li>Red fruit notes</li>
              <li>Complex acidity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostProcessingSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { name: 'Hulling', description: 'Removal of parchment layer' },
    { name: 'Sorting', description: 'Separation by size and density' },
    { name: 'Grading', description: 'Quality assessment and classification' },
    { name: 'Export', description: 'Packaging and shipping preparation' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-6">Post-Processing Steps</h3>
      
      {/* Step Timeline */}
      <div className="relative mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-4">
          {steps.map((step, index) => (
            <div 
              key={step.name}
              className="text-center cursor-pointer"
              onClick={() => setCurrentStep(index)}
            >
              <div 
                className={`w-8 h-8 rounded-full mx-auto mb-2 transition-colors
                  ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-200'}`}
              />
              <p className="font-semibold">{step.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step Details */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold text-lg mb-2">{steps[currentStep].name}</h4>
        <p>{steps[currentStep].description}</p>
      </div>
    </div>
  );
};

const SustainabilitySection = () => {
  return (
    <div className="bg-green-50 rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-6">Processing and Sustainability</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Water Conservation Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Water Conservation</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>
              <div>
                <h5 className="font-bold">Traditional Washing</h5>
                <p>20L water per kg coffee</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">♻️</span>
              </div>
              <div>
                <h5 className="font-bold">Eco-Processing</h5>
                <p>4L water per kg coffee</p>
              </div>
            </div>
            {/* Add new water conservation metrics */}
            <div className="mt-4 space-y-2">
              <h5 className="font-bold">Modern Conservation Methods:</h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>Mechanical mucilage removal systems</li>
                <li>Water recycling and filtration</li>
                <li>Rainwater harvesting systems</li>
                <li>Dry fermentation techniques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Waste Utilization Section - Enhanced */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Waste Utilization</h4>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-bold mb-2">Coffee Cherry Pulp</h5>
              <ul className="space-y-2">
                <li>Cascara tea production</li>
                <li>Organic fertilizer</li>
                <li>Biogas generation</li>
                <li>Animal feed supplement</li>
              </ul>
            </div>
            {/* New Circular Economy Section */}
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-bold mb-2">Circular Economy Initiatives</h5>
              <ul className="space-y-2">
                <li>Coffee flour production</li>
                <li>Cosmetic ingredients</li>
                <li>Mushroom cultivation</li>
                <li>Textile fiber production</li>
              </ul>
            </div>
          </div>
        </div>

        {/* New Energy Usage Section */}
        <div className="md:col-span-2 mt-6">
          <h4 className="text-xl font-semibold mb-4">Energy Efficiency</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-bold mb-2">Solar Drying</h5>
              <p>Natural sun exposure reduces energy costs and carbon footprint</p>
              <div className="mt-2 text-sm text-gray-600">
                Carbon reduction: 0.5kg CO₂/kg coffee
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-bold mb-2">Biomass Usage</h5>
              <p>Converting coffee husks to fuel for mechanical dryers</p>
              <div className="mt-2 text-sm text-gray-600">
                Energy recovery: 4.5 kWh/kg waste
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-bold mb-2">Process Optimization</h5>
              <p>Smart monitoring systems for resource efficiency</p>
              <div className="mt-2 text-sm text-gray-600">
                Efficiency gain: 15-30%
              </div>
            </div>
          </div>
        </div>

        {/* New Carbon Footprint Section */}
        <div className="md:col-span-2 mt-6">
          <h4 className="text-xl font-semibold mb-4">Processing Carbon Footprint</h4>
          <div className="bg-white rounded-lg p-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-3 border-r">
                <h5 className="font-bold">Natural Process</h5>
                <p className="text-green-600 font-bold">0.8 kg CO₂e/kg</p>
                <ul className="text-sm mt-2 text-left">
                  <li>Minimal water usage</li>
                  <li>Solar drying dependent</li>
                  <li>Higher land use</li>
                </ul>
              </div>
              <div className="text-center p-3 border-r">
                <h5 className="font-bold">Washed Process</h5>
                <p className="text-yellow-600 font-bold">1.2 kg CO₂e/kg</p>
                <ul className="text-sm mt-2 text-left">
                  <li>Higher water usage</li>
                  <li>Energy for machinery</li>
                  <li>Water treatment needed</li>
                </ul>
              </div>
              <div className="text-center p-3">
                <h5 className="font-bold">Honey Process</h5>
                <p className="text-blue-600 font-bold">1.0 kg CO₂e/kg</p>
                <ul className="text-sm mt-2 text-left">
                  <li>Moderate water usage</li>
                  <li>Balanced approach</li>
                  <li>Flexible adaptation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QualityControlSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Moisture Content</h3>
          <div className="relative h-40 w-full bg-gray-100 rounded-lg">
            <div className="absolute bottom-0 w-full">
              <div className="h-24 bg-blue-400 rounded-b-lg">
                <div className="absolute top-0 left-0 w-full text-center text-white">
                  10-12% Ideal
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Defect Count</h3>
          <div className="p-4 bg-gray-100 rounded-lg">
            <ul className="space-y-2">
              <li>Primary defects: 0-5</li>
              <li>Secondary defects: 0-10</li>
              <li>Full blacks: None</li>
              <li>Ferment: None</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Cup Quality</h3>
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Aroma</span>
                <span>8.5/10</span>
              </div>
              <div className="flex justify-between">
                <span>Flavor</span>
                <span>8.0/10</span>
              </div>
              <div className="flex justify-between">
                <span>Acidity</span>
                <span>7.5/10</span>
              </div>
              <div className="flex justify-between">
                <span>Body</span>
                <span>8.0/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummarySection = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-6">From Origin to Roastery</h3>
      <div className="prose max-w-none">
        <p className="mb-4">
          The journey from cherry to exportable green bean represents only part of coffee's story. 
          Once processed, coffee typically travels thousands of miles—often crossing oceans and 
          continents—before reaching roasteries.
        </p>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Processing Impact</h4>
            <p className="text-sm">
              Processing methods fundamentally shape what flavors become possible during roasting
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Quality Preservation</h4>
            <p className="text-sm">
              Maintaining proper storage conditions remains crucial throughout transport
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Final Transformation</h4>
            <p className="text-sm">
              At roasteries, careful roasting brings out the flavors developed during processing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CoffeeCherryToBean() {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: '📚' },
    { id: 'processing', title: 'Processing Methods', icon: '⚙️' },
    { id: 'experimental', title: 'Experimental Processing', icon: '🧪' },
    { id: 'post-processing', title: 'Post-Processing', icon: '📦' },
    { id: 'sustainability', title: 'Sustainability', icon: '♻️' },
    { id: 'quality', title: 'Quality Control', icon: '✓' }
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

          {/* Main content area */}
          <div className="flex-1 space-y-12">
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <h1 className="text-4xl font-bold mb-6">From Cherry to Bean: The Coffee Processing Journey</h1>
              <p className="text-lg mb-4 leading-relaxed">
                From vibrant red cherries hanging on lush green plants to the aromatic brown beans in your grinder, 
                coffee undergoes a remarkable transformation before it reaches your cup. This journey—from fruit to 
                seed—is perhaps the most crucial yet least understood aspect of coffee production among enthusiasts.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                The decisions made during processing fundamentally shape the flavor profile of your daily brew, 
                creating the foundation upon which roasting and brewing build.
              </p>
            </section>

            {/* Anatomy Section */}
            <section id="anatomy" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Anatomy of a Coffee Cherry</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Layers of the Coffee Cherry</h3>
                  <ul className="space-y-4">
                    <li className="p-4 bg-white rounded-lg shadow">
                      <h4 className="font-bold mb-2">Exocarp (Skin)</h4>
                      <p>The protective outer layer that changes color as the fruit ripens, transforming from green to red or purple.</p>
                    </li>
                    <li className="p-4 bg-white rounded-lg shadow">
                      <h4 className="font-bold mb-2">Mesocarp (Pulp)</h4>
                      <p>Sweet, juicy layer beneath the skin containing sugars and compounds similar to stone fruits.</p>
                    </li>
                    <li className="p-4 bg-white rounded-lg shadow">
                      <h4 className="font-bold mb-2">Endocarp (Parchment)</h4>
                      <p>Protective paperlike layer that surrounds the seeds and helps regulate moisture.</p>
                    </li>
                    <li className="p-4 bg-white rounded-lg shadow">
                      <h4 className="font-bold mb-2">Silverskin</h4>
                      <p>Fine membrane clinging to the seeds, often visible as chaff during roasting.</p>
                    </li>
                    <li className="p-4 bg-white rounded-lg shadow">
                      <h4 className="font-bold mb-2">Endosperm (Bean)</h4>
                      <p>The coffee beans themselves, containing the complex compounds that create coffee's flavor.</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4">
                    {/* Placeholder for interactive anatomy diagram */}
                    <img 
                      src = "/images/CoffeeCherryAnatomy.png"
                      alt = "Coffee Cherry Anatomy"
                      className = "w-[120%] h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Processing Methods Section */}
            <section id="processing" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Processing Methods</h2>
              <div className="space-y-8">
                {/* Washed Process */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-semibold mb-4">Washed/Wet Process</h3>
                  <p className="mb-4">
                    The most common method that produces clean, bright flavors by removing all fruit material 
                    before drying.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Process Steps:</h4>
                      <ol className="list-decimal list-inside space-y-2">
                        <li className="p-2 bg-gray-50 rounded">Sorting and floating</li>
                        <li className="p-2 bg-gray-50 rounded">Depulping</li>
                        <li className="p-2 bg-gray-50 rounded">Fermentation (12-36 hours)</li>
                        <li className="p-2 bg-gray-50 rounded">Washing</li>
                        <li className="p-2 bg-gray-50 rounded">Drying (10-12% moisture)</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Characteristics:</h4>
                      <ul className="space-y-2">
                        <li>Clean, bright flavors</li>
                        <li>Enhanced acidity</li>
                        <li>Clear varietal character</li>
                        <li>Common in Central America</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Natural Process */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-semibold mb-4">Natural/Dry Process</h3>
                  <p className="mb-4">
                    The traditional method where cherries dry whole, producing fruity, full-bodied coffees.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Process Steps:</h4>
                      <ol className="list-decimal list-inside space-y-2">
                        <li className="p-2 bg-gray-50 rounded">Initial sorting</li>
                        <li className="p-2 bg-gray-50 rounded">Whole cherry drying (2-4 weeks)</li>
                        <li className="p-2 bg-gray-50 rounded">Regular turning</li>
                        <li className="p-2 bg-gray-50 rounded">Hulling</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Characteristics:</h4>
                      <ul className="space-y-2">
                        <li>Heavy body</li>
                        <li>Intense fruit notes</li>
                        <li>Wine-like qualities</li>
                        <li>Common in Ethiopia</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Honey Process */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-semibold mb-4">Honey/Pulped Natural Process</h3>
                  <p className="mb-4">
                    A hybrid method leaving varying amounts of mucilage on the beans during drying.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Types:</h4>
                      <ul className="space-y-2">
                        <li className="p-2 bg-gray-50 rounded">White Honey (80-90% mucilage removed)</li>
                        <li className="p-2 bg-gray-50 rounded">Yellow Honey (50% mucilage removed)</li>
                        <li className="p-2 bg-gray-50 rounded">Red Honey (minimal mucilage removed)</li>
                        <li className="p-2 bg-gray-50 rounded">Black Honey (no mucilage removed)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Characteristics:</h4>
                      <ul className="space-y-2">
                        <li>Balanced sweetness</li>
                        <li>Complex acidity</li>
                        <li>Varied body</li>
                        <li>Common in Costa Rica</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experimental Processing Section */}
            <section id="experimental" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Experimental Processing</h2>
              <ExperimentalProcessing />
            </section>

            {/* Post-Processing Steps */}
            <section id="post-processing" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Post-Processing Steps</h2>
              <PostProcessingSteps />
            </section>

            {/* Sustainability Section */}
            <section id="sustainability" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Processing and Sustainability</h2>
              <SustainabilitySection />
            </section>

            {/* Quality Control Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Quality Control</h2>
              <QualityControlSection />
            </section>

            {/* Summary Section */}
            <section className="mb-12">
              <SummarySection />
            </section>

            {/* Interactive Tools Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Interactive Processing Tools</h2>
              <div className="space-y-8">
                <FermentationSimulator />
                <ProcessingComparison />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
