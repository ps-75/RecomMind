import React from 'react';

interface Domain {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface DomainSelectionProps {
  selectedDomains: string[];
  onDomainToggle: (domainId: string) => void;
}

const domains: Domain[] = [
  { id: 'software-engineering', name: 'Software Engineering', description: 'DSA, CP, System Design & Architecture', icon: '💻' },
  { id: 'ai-ml', name: 'AI/ML', description: 'Artificial Intelligence & Machine Learning', icon: '🤖' },
  { id: 'web-dev', name: 'Web Development', description: 'Frontend & Backend Web Technologies', icon: '🌐' },
  { id: 'mobile-dev', name: 'Mobile Development', description: 'iOS, Android & Cross-platform Apps', icon: '📱' },
  { id: 'cybersecurity', name: 'Cybersecurity', description: 'Security, Penetration Testing & Privacy', icon: '🔒' },
  { id: 'data-science', name: 'Data Science', description: 'Analytics, Visualization & Big Data', icon: '📊' },
  { id: 'cloud-computing', name: 'Cloud Computing', description: 'AWS, Azure, GCP & DevOps', icon: '☁️' },
  { id: 'blockchain', name: 'Blockchain', description: 'Cryptocurrency & Distributed Systems', icon: '⛓️' },
  { id: 'game-dev', name: 'Game Development', description: 'Unity, Unreal Engine & Game Design', icon: '🎮' },
  { id: 'ui-ux-design', name: 'UI/UX Design', description: 'User Interface & User Experience Design', icon: '🎨' }
];

const DomainSelection = ({ selectedDomains, onDomainToggle }: DomainSelectionProps) => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center py-3 px-3">
      <div className="bg-gray-50 rounded-3xl shadow-xl border-4 border-purple-500 w-full max-w-[2000px] px-24 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">What domains interest you?</h2>
          <p className="text-xl text-gray-500">Select one or more areas you'd like to explore</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {domains.map((domain) => {
            const isSelected = selectedDomains.includes(domain.id);
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => onDomainToggle(domain.id)}
                className={`rounded-2xl transition-all duration-300 ease-in-out transform
          p-6 w-full h-[220px] text-center shadow-md border-2 flex flex-col items-center justify-start
          ${isSelected
                    ? 'bg-gradient-to-br from-purple-100 to-purple-200 border-purple-500 scale-105'
                    : 'bg-white hover:scale-[1.04] border-purple-300 hover:border-purple-400'
                  }`}
              >
                <div className="text-5xl mb-3">{domain.icon}</div>
                <div className="text-lg font-semibold text-gray-800">{domain.name}</div>
                <div className="text-sm text-gray-500 mt-1">{domain.description}</div>
              </button>
            );
          })}
        </div>

        <div className="mt-14 text-lg text-gray-600 text-center">
          {selectedDomains.length} domain{selectedDomains.length !== 1 ? 's' : ''} selected
        </div>
      </div>
    </div>
  );
};

export default DomainSelection;
