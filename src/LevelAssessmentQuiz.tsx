import React, { useState, useMemo } from 'react';
import { assessmentQuestions, Question } from './levelAssessmentQuestions';
import { BarChart, CheckCircle, XCircle } from 'lucide-react';

interface LevelAssessmentQuizProps {
  selectedDomains: string[];
  onComplete: (summary?: {
    questions: {
      question: string;
      options: string[];
      userAnswer: string;
      correctAnswer: string;
    }[];
  }) => void;
}

const TOTAL_QUESTIONS = 10;

function getRandomItems<T>(arr: T[], n: number): T[] {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const LevelAssessmentQuiz: React.FC<LevelAssessmentQuizProps> = ({ selectedDomains, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions: Question[] = useMemo(() => {
    if (selectedDomains.length === 0) {
      return getRandomItems(assessmentQuestions.general, TOTAL_QUESTIONS);
    }
    // Distribute questions as evenly as possible
    const perDomain = Math.floor(TOTAL_QUESTIONS / selectedDomains.length);
    let remainder = TOTAL_QUESTIONS % selectedDomains.length;
    let selectedQs: Question[] = [];
    let usedQuestions = new Set<string>();

    selectedDomains.forEach((domain, idx) => {
      const domainQuestions = assessmentQuestions[domain] || [];
      let numQs = perDomain + (remainder > 0 ? 1 : 0);
      remainder = Math.max(0, remainder - 1);
      const chosen = getRandomItems(domainQuestions, Math.min(numQs, domainQuestions.length));
      chosen.forEach(q => usedQuestions.add(q.question));
      selectedQs.push(...chosen);
    });

    // Fill up with general questions if needed
    if (selectedQs.length < TOTAL_QUESTIONS) {
      const generalQs = assessmentQuestions.general.filter(q => !usedQuestions.has(q.question));
      selectedQs.push(...getRandomItems(generalQs, TOTAL_QUESTIONS - selectedQs.length));
    }
    // Shuffle final selection
    return getRandomItems(selectedQs, TOTAL_QUESTIONS);
  }, [selectedDomains]);

  const handleAnswer = (answer: string) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    const score = questions.reduce((acc, question, index) => {
      return userAnswers[index] === question.correctAnswer ? acc + 1 : acc;
    }, 0);

    let level = 'Beginner';
    let levelColor = 'text-green-500';
    if (score >= 4 && score <= 7) {
      level = 'Intermediate';
      levelColor = 'text-yellow-500';
    } else if (score >= 8) {
      level = 'Advanced';
      levelColor = 'text-red-500';
    }

    const summary = {
      questions: questions.map((q, i) => ({
        question: q.question,
        options: q.options,
        userAnswer: userAnswers[i],
        correctAnswer: q.correctAnswer,
      })),
    };

    return (
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-xl max-w-lg w-full">
          <h2 className="text-3xl font-bold mb-4">Assessment Complete!</h2>
          <p className="text-xl text-gray-700 mb-2">You answered</p>
          <p className="text-6xl font-bold text-purple-600 mb-4">{score}/{TOTAL_QUESTIONS}</p>
          <p className="text-xl text-gray-700 mb-2">Our recommendation for your level is:</p>
          <p className={`text-4xl font-bold mb-8 ${levelColor}`}>{level}</p>
          <button
            onClick={() => onComplete(summary)}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all"
          >
            Return and Select Your Level
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-gray-50 rounded-2xl shadow-xl p-8">
        <div className="mb-6">
          <p className="text-sm text-gray-500">Question {currentQuestionIndex + 1} of {TOTAL_QUESTIONS}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100}%` }}></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentQuestion?.question}</h2>
        <div className="space-y-3">
          {currentQuestion?.options.map(option => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full text-left p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelAssessmentQuiz; 