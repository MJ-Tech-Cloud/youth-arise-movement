'use client';

import { useState } from 'react';

export default function Join() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    interests: '',
    whyJoin: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form);
  };

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Join Youth Arise Movement</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Why Join Us?</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                By joining Youth Arise Movement, you become part of a vibrant community dedicated to creating positive change. Here&apos;s what you&apos;ll get:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access to leadership development programs</li>
                <li>Opportunities to participate in community projects</li>
                <li>Networking with like-minded youth</li>
                <li>Skill-building workshops and training</li>
                <li>Mentorship and guidance</li>
                <li>Platform to voice your ideas and concerns</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                required
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={form.age}
                onChange={handleChange}
                min="13"
                max="35"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                required
              />
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                Areas of Interest
              </label>
              <textarea
                id="interests"
                name="interests"
                value={form.interests}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                placeholder="Tell us about your interests and skills..."
                required
              />
            </div>

            <div>
              <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-700 mb-1">
                Why do you want to join?
              </label>
              <textarea
                id="whyJoin"
                name="whyJoin"
                value={form.whyJoin}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                placeholder="Share your motivation for joining..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </main>
  );
} 