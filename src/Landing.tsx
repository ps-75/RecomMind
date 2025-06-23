import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Users } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStartAssessment = () => {
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8">
            <span className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">Welcome to</span>
            <span className="block text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">RecomMind</span>
          </div>
          <span className="block mt-4 relative">
            
            <Sparkles className="absolute -top-4 -right-12 text-yellow-400 w-12 h-12 animate-pulse" />
          </span>
        </div>

        {/* Illustration */}
        <div className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative mx-auto mb-12 w-96 h-96 md:w-[500px] md:h-[500px]">
            <div className="absolute inset-0 bg-gray-50 rounded-3xl shadow-lg border-4 border-purple-500 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: '</>', from: '#7c3aed', to: '#9333ea' },
                  { icon: '🤖', from: '#10b981', to: '#059669' },
                  { icon: '📱', from: '#f59e0b', to: '#ef4444' },
                  { icon: '🔒', from: '#3b82f6', to: '#6366f1' },
                  { icon: '📊', from: '#8b5cf6', to: '#a855f7' },
                  { icon: '☁️', from: '#06b6d4', to: '#0ea5e9' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-white text-3xl md:text-4xl font-bold rounded-2xl animate-bounce shadow-lg"
                    style={{
                      background: `linear-gradient(to bottom right, ${item.from}, ${item.to})`,
                      animationDelay: `${0.5 + i * 0.5}s`
                    }}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 font-medium">
            Unsure about your next career move? This tool helps you discover the best tech roles for you based on your interests, skills, and experience. Get personalized recommendations and resources to kickstart your journey!
          </p>
        </div>

        {/* Auth Buttons */}
        {/* Removed center-aligned Sign Up and Login buttons. Only header will show them. */}

        {/* Start Button */}
        <div className={`transition-all duration-1000 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={handleStartAssessment}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-16 py-5 text-xl md:text-2xl font-semibold rounded-2xl shadow-lg transform transition-all hover:scale-105"
          >
            Start Assessment <ArrowRight className="ml-3 inline-block w-6 h-6" />
          </button>
        </div>

        {/* Feature Highlights */}
        <div className={`transition-all duration-1000 ease-out delay-900 mt-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Personalized Recommendations', Icon: Target },
              { label: 'AI-Powered Insights', Icon: Sparkles },
              { label: 'Career Guidance', Icon: Users }
            ].map(({ label, Icon }, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-full px-8 py-4 border-2 border-purple-200 shadow-md flex items-center text-gray-700 text-base font-medium hover:border-purple-300 transition-colors"
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
