import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import QuizStepper from './QuizStepper';
import DomainSelection from './DomainSelection';
import TechnologySelection from './TechnologySelection';
import ExperienceSelection from './ExperienceSelection';
import LevelAssessmentQuiz from './LevelAssessmentQuiz';
// These interfaces can be defined locally or imported if shared.
export interface QuizResults {
  domains: string[];
  technologies: string[];
  experience: string;
}

interface QuizSummary {
  questions: {
    question: string;
    options: string[];
    userAnswer: string;
    correctAnswer: string;
  }[];
}

const TechRecommendationQuiz: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // --- State Management ---
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState('');
  const [quizSummary, setQuizSummary] = useState<QuizSummary | undefined>(undefined);
  
  // UI State driven by URL or user action
  const [isAssessingLevel, setIsAssessingLevel] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  // Determine current step from URL path
  const path = location.pathname;
  let currentStep = 1;
  if (path.includes('/technology')) currentStep = 2;
  if (path.includes('/experience')) currentStep = 3;

  // --- Event Handlers ---
  const handleDomainToggle = (domainId: string) => {
    setSelectedDomains(prev => prev.includes(domainId) ? prev.filter(id => id !== domainId) : [...prev, domainId]);
  };

  const handleTechnologyToggle = (technologyId: string) => {
    setSelectedTechnologies(prev => prev.includes(technologyId) ? prev.filter(id => id !== technologyId) : [...prev, technologyId]);
  };

  const handleExperienceSelect = (experienceId: string) => {
    setSelectedExperience(experienceId);
  };
  
  const handleCompleteLevelAssessment = (summary?: QuizSummary) => {
    setIsAssessingLevel(false);
    if (summary) setQuizSummary(summary);
  };

  const handleNavigateToResults = () => {
    const quizResults: QuizResults = { domains: selectedDomains, technologies: selectedTechnologies, experience: selectedExperience };
    navigate('/results', { state: { quizResults, quizSummary } });
  };

  // --- Render Logic ---
  if (isAssessingLevel) {
    return <LevelAssessmentQuiz selectedDomains={selectedDomains} onComplete={handleCompleteLevelAssessment} />;
  }

  if (showSummary) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8 px-4">
            <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 p-10 max-w-4xl w-full">
                <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Your Selections</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Domains</h3>
                        <p className="text-purple-600 font-medium">{selectedDomains.join(", ") || 'None'}</p>
                    </div>
                     <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Technologies</h3>
                        <p className="text-purple-600 font-medium">{selectedTechnologies.join(", ") || 'None'}</p>
                    </div>
                     <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Experience</h3>
                        <p className="text-purple-600 font-medium">{selectedExperience || 'None'}</p>
                    </div>
                </div>

                {quizSummary && (
                     <div className="bg-white rounded-2xl border border-purple-200 shadow-md p-6">
                         <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">Level Assessment Results</h3>
                         <ol className="space-y-6">
                             {quizSummary.questions.map((q, idx) => {
                                 const isCorrect = q.userAnswer === q.correctAnswer;
                                 return (
                                     <li key={idx} className="border-b border-gray-200 pb-4 last:border-b-0">
                                         <div className="font-semibold mb-2 text-gray-800">{idx + 1}. {q.question}</div>
                                         <div className="text-sm">
                                            <p>Your Answer: <span className={`font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>{q.userAnswer}</span></p>
                                             {!isCorrect && (
                                                 <p>Correct Answer: <span className="font-bold text-green-600">{q.correctAnswer}</span></p>
                                             )}
                                         </div>
                                     </li>
                                 );
                             })}
                         </ol>
                     </div>
                 )}
                <div className="text-center mt-8">
                    <button onClick={handleNavigateToResults} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg">Proceed to Recommendations</button>
                </div>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <QuizStepper currentStep={currentStep} totalSteps={3} />

        <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <Routes>
            <Route index element={<Navigate to="domain" replace />} />
            <Route path="domain" element={<DomainSelection selectedDomains={selectedDomains} onDomainToggle={handleDomainToggle} />} />
            <Route path="technology" element={<TechnologySelection selectedDomains={selectedDomains} selectedTechnologies={selectedTechnologies} onTechnologyToggle={handleTechnologyToggle} />} />
            <Route path="experience" element={
              <>
                <ExperienceSelection selectedExperience={selectedExperience} onExperienceSelect={handleExperienceSelect} onKnowYourLevel={() => setIsAssessingLevel(true)} />
                <div className="text-center mt-8">
                  <button onClick={() => setShowSummary(true)} disabled={!selectedExperience} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg">Know Your Summary</button>
                </div>
              </>
            } />
          </Routes>
        </div>

        <div className="flex justify-between items-center">
            {/* Back Button */}
            <button onClick={() => currentStep > 1 && navigate(`/quiz/${currentStep === 3 ? 'technology' : 'domain'}`)}
                className={`px-6 py-3 border-2 rounded-lg ${currentStep === 1 ? 'invisible' : 'visible'}`}>Back</button>

            {/* Next / Get Recommendations Button */}
            {currentStep < 3 ? (
                <button onClick={() => navigate(`/quiz/${currentStep === 1 ? 'technology' : 'experience'}`)}
                    disabled={(currentStep === 1 && selectedDomains.length === 0) || (currentStep === 2 && selectedTechnologies.length === 0)}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg">Next</button>
            ) : (
                <button onClick={handleNavigateToResults} disabled={!selectedExperience}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">Get Recommendations ✨</button>
            )}
        </div>
      </div>
    </div>
  );
};

export default TechRecommendationQuiz;