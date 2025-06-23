import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing from './Landing';
import TechRecommendationQuiz from './TechRecommendationQuiz';
import NewRecommendations from './NewRecommendations';
import Signup from './Signup';
import Login from './Login';
import Header from './Header';
import "./App.css";

export interface QuizResults {
  domains: string[];
  technologies: string[];
  experience: string;
}

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="pt-20"> {/* padding for fixed header */}
        <Routes>
          {/* The landing page will be at the root path */}
          <Route path="/" element={<Landing />} />

          {/* The signup page will be at the /signup path */}
          <Route path="/signup" element={<Signup onSignup={() => setIsLoggedIn(false)} />} />

          {/* The login page will be at the /login path */}
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

          {/* The entire quiz flow will be under the /quiz path */}
          <Route path="/quiz/*" element={<TechRecommendationQuiz />} />
          
          {/* The results page will be at the /results path */}
          <Route path="/results" element={<NewRecommendations />} />
        </Routes>
      </div>
    </div>
  );
};

export default App; 