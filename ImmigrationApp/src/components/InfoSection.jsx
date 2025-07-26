// src/components/InfoSections.js
import React from 'react';
import {
  FiShield,
  FiUserCheck,
  FiPhone,
  FiTrendingUp,
  FiClock,
  FiHeart,
  FiHome,
  FiBookOpen,
  FiBriefcase,
} from 'react-icons/fi';
import SocialFooter from './SocialFooter';

export default function InfoSections() {
  return (
    <div className="space-y-16">
      {/* Emergency Medical Insurance Section (Centered) */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Emergency Medical Insurance for Super Visa Visitors
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Affordable premiums with rock‑solid coverage—so your parents, relatives
          or friends can visit Canada with peace of mind.
        </p>
        <ul>
          {[
            { icon: FiShield, title: 'No Hidden Fees', text: 'Transparent, all‑in‑one pricing.' },
            { icon: FiUserCheck, title: 'Instant Approval', text: 'Questionnaire-based—no exam required.' },
            { icon: FiClock, title: '24/7 Worldwide', text: 'Emergency support wherever they are.' },
            // { icon: FiPhone, title: 'Free Quote', text: 'Call 204‑291‑7243 for your no‑obligation quote.' },
          ].map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col items-center px-2">
              <Icon className="text-4xl text-blue-600 mb-2" />
              <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </li>
          ))}
        </ul>
        <button
          className="mt-6 bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-md"
          onClick={() => window.location.href = '/quote'}
        >
          Start Quote
        </button>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-300 my-8" />
      </div>

      {/* Our Full Suite of Services (Centered, 2 Columns) */}
      <section className="container mx-auto px-4 text-center bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Beyond Visitor Coverage: All Your Financial & Insurance Needs
        </h2>
        <p className="text-gray-600 mb-12">
          From planning for tomorrow to protecting what matters most today.
        </p>

        <div className="grid grid-cols-2 gap-x-2 gap-y-6 justify-items-center">
          {[
            { icon: FiTrendingUp, title: 'Investments Needs' },
            { icon: FiClock, title: 'Retirement Planning' },
            { icon: FiHeart, title: 'Life & Family Bundles' },
            { icon: FiShield, title: 'Critical Illness Insurance' },
            { icon: FiUserCheck, title: 'Disability Insurance' },
            { icon: FiHome, title: 'Health & Dental' },
            { icon: FiHome, title: 'Mortgages' },
            { icon: FiBookOpen, title: 'Children’s College Planning' },
            { icon: FiBriefcase, title: 'Start Your Own Business' },
            { icon: FiPhone, title: 'Free Quote', text: 'Call 204‑291‑7243 for your no‑obligation quote.' },
          ].map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <Icon className="text-4xl text-blue-600 mb-2" />
              <h3 className="font-semibold text-xl text-gray-800">{title}</h3>
            </div>
          ))}
        </div>
        <button
          className="mt-8 bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-md margin-top-8"
          onClick={() => window.location.href = '/services'}
        >
          Start Quote
        </button>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="border-t border-gray-300 my-8" />
      </div>

      {/* Social Media Footer */}
      
    </div>
  );
}
