import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignupProps {
  onSignup?: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Signup failed');
      } else {
        if (onSignup) onSignup();
        navigate('/login');
      }
    } catch {
      setError('Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-10 rounded-3xl shadow-2xl border-2 border-purple-400"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-600">Create Your Account</h2>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
            className="w-full px-5 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            name="password"
            placeholder="Choose a password"
            value={form.password}
            onChange={handleChange}
            type="password"
            required
            className="w-full px-5 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition"
        >
          Sign Up
        </button>

        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
