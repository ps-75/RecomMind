import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin?: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || 'Login failed');
      } else {
        localStorage.setItem('token', data.token);
        if (onLogin) onLogin();
        navigate('/');
      }
    } catch {
      setError('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-10 rounded-3xl shadow-2xl border-2 border-purple-400"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-600">Welcome Back</h2>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition"
        >
          Login
        </button>

        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
