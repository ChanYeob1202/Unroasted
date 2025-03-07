import React from 'react';

const Sidebar = ({ activeSection, setActiveSection, sections }) => {
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
      <h2 className="text-xl font-bold mb-6 px-4">Learning Path</h2>
      <nav>
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg transition-colors mb-2
              ${activeSection === section.id 
                ? 'bg-green-100 text-green-800' 
                : 'hover:bg-gray-100'}`}
          >
            <span className="text-xl">{section.icon}</span>
            <span className="font-medium">{section.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 