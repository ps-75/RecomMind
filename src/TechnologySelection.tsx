import React, { useState } from 'react';
import { technologiesByDomain } from './technologyData';
import { ChevronDown } from 'lucide-react';

interface TechnologySelectionProps {
  selectedDomains: string[];
  selectedTechnologies: string[];
  onTechnologyToggle: (technology: string) => void;
}

const TechnologySelection: React.FC<TechnologySelectionProps> = ({
  selectedDomains,
  selectedTechnologies,
  onTechnologyToggle,
}) => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryKey: string) => {
    setOpenCategories(prev => ({ ...prev, [categoryKey]: !prev[categoryKey] }));
  };

  const relevantDomains = Object.entries(technologiesByDomain)
    .filter(([domainId]) => selectedDomains.includes(domainId));

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Select Your Technologies</h2>
        <p className="text-lg text-gray-500">Choose the tools and languages you know or want to learn.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {relevantDomains.map(([domainId, domainData]) => (
          <div key={domainId} className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 h-fit">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">{domainData.name}</h3>
            <div className="space-y-4">
              {Object.entries(domainData.categories).map(([categoryName, technologies]) => {
                const categoryKey = `${domainId}-${categoryName}`;
                const isOpen = openCategories[categoryKey];
                return (
                  <div key={categoryKey} className="border-t border-gray-200 pt-4">
                    <button
                      type="button"
                      onClick={() => toggleCategory(categoryKey)}
                      className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-700"
                    >
                      <span>{categoryName}</span>
                      <ChevronDown
                        className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {technologies.map(tech => (
                          <button
                            key={tech}
                            type="button"
                            onClick={() => onTechnologyToggle(tech)}
                            className={`px-4 py-2 text-sm font-medium rounded-full border-2 transition-colors
                            ${selectedTechnologies.includes(tech)
                              ? 'bg-purple-500 border-purple-500 text-white'
                              : 'bg-white border-gray-300 hover:border-purple-400'
                            }`}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologySelection;