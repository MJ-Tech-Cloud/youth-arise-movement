'use client';

import { useState } from 'react';

export default function Join() {
  const [form, setForm] = useState({ name: '', email: '', age: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend or email service
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Become a member or volunteer and help us empower youth and create positive change in our communities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Benefits */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Benefits of Joining</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access to mentorship and counselling programs</li>
            <li>Opportunities to participate in youth forums and workshops</li>
            <li>Networking with like-minded changemakers</li>
            <li>Personal and professional development</li>
            <li>Be part of impactful community projects</li>
            <li>Exclusive updates and resources</li>
          </ul>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-8">
            <span className="font-semibold text-yellow-700">Together, we empower and impact!</span>
          </div>
        </div>
        {/* Join Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              min={12}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="interest" className="block text-gray-700 font-semibold mb-2">Interest Area</label>
            <select
              id="interest"
              name="interest"
              value={form.interest}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select an area</option>
              <option value="volunteer">Volunteer</option>
              <option value="member">Member</option>
              <option value="mentor">Mentor</option>
              <option value="entrepreneurship">Entrepreneurship</option>
              <option value="mental_health">Mental Health</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Why do you want to join?</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Submit Application
          </button>
          {submitted && (
            <div className="text-green-600 font-semibold text-center mt-4">
              Thank you for joining! We will contact you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 