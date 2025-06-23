import React from 'react';
import { Briefcase, User, Star, Award } from 'lucide-react';

interface ExperienceLevel {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
}

interface ExperienceSelectionProps {
  selectedExperience: string;
  onExperienceSelect: (experienceId: string) => void;
  onKnowYourLevel: () => void;
}

const experienceLevels: ExperienceLevel[] = [
  {
    id: 'beginner',
    name: 'Beginner',
    description: 'Just starting out, little to no professional experience.',
    icon: User,
    details: [
      'New to programming',
      'Learning basic concepts',
      'Want guided learning paths'
    ]
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    description: 'Some experience, comfortable with core concepts.',
    icon: Star,
    details: [
      'Completed some projects',
      'Understanding core concepts',
      'Ready for advanced topics'
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced',
    description: 'Confident with complex projects and technologies.',
    icon: Award,
    details: [
      'Years of experience',
      'Building complex systems',
      'Want cutting-edge technologies'
    ]
  }
];

const ExperienceSelection: React.FC<ExperienceSelectionProps> = ({ selectedExperience, onExperienceSelect, onKnowYourLevel }) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">What is your experience level?</h2>
        <p className="text-lg text-gray-500">This helps us tailor recommendations to your skill set.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experienceLevels.map(level => {
          const isSelected = selectedExperience === level.id;
          return (
            <button
              key={level.id}
              type="button"
              onClick={() => onExperienceSelect(level.id)}
              className={`rounded-2xl p-6 text-center transition-all duration-300 ease-in-out transform shadow-md border-2
                ${isSelected
                  ? 'bg-purple-100 border-purple-500 scale-105'
                  : 'bg-white hover:scale-[1.04] border-gray-200 hover:border-purple-300'
                }`}
            >
              <level.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">{level.name}</h3>
              <p className="text-gray-500 mt-2">{level.description}</p>
            </button>
          );
        })}
      </div>
      
      <div className="text-center mt-12 p-6 bg-purple-50 rounded-2xl border-2 border-purple-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Not sure about your level?</h3>
        <p className="text-gray-600 mb-4">Take a quick 10-question quiz to get a personalized suggestion.</p>
        <button
          onClick={onKnowYourLevel}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105"
        >
          Know Your Level
        </button>
      </div>
    </div>
  );
};

export default ExperienceSelection;