import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC<{ isLoggedIn: boolean; onLogout: () => void }> = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="w-full flex justify-between items-center p-4 bg-white shadow-sm fixed top-0 left-0 z-50">
      <span
        className="text-2xl font-extrabold text-purple-700 tracking-tight cursor-pointer select-none"
        onClick={() => navigate('/')}
      >
        RecomMind
      </span>
      {!isLoggedIn ? (
        <div>
          {location.pathname !== '/login' && (
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold mr-3"
            >
              Login
            </button>
          )}
          {location.pathname !== '/signup' && (
            <button
              onClick={() => navigate('/signup')}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Sign Up
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header; 