import React from 'react';

interface QuizStepperProps {
  currentStep: number;
  totalSteps: number;
}

const QuizStepper = ({ currentStep, totalSteps }: QuizStepperProps) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;
        return (
          <React.Fragment key={stepNumber}>
            <div className="flex flex-col items-center">
              <div
                className={
                  `w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ` +
                  (isCompleted
                    ? 'bg-blue-600 text-white'
                    : isCurrent
                    ? 'bg-blue-100 text-blue-600 border-2 border-blue-600'
                    : 'bg-gray-200 text-gray-500')
                }
              >
                {isCompleted ? <span style={{fontSize: '1.5rem'}}>✓</span> : stepNumber}
              </div>
              <span className={`mt-2 text-xs font-medium ${isCurrent ? 'text-blue-600' : 'text-gray-500'}`}>
                Step {stepNumber}
              </span>
            </div>
            {stepNumber < totalSteps && (
              <div
                className={`h-0.5 w-16 mx-4 transition-all duration-300 ${isCompleted ? 'bg-blue-600' : 'bg-gray-200'}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default QuizStepper;