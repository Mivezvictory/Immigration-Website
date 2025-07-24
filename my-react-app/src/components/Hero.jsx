import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-transparent text-white">
      <div className="container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
        {/* Text Column */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-6">Dear Friends,</h1>
          <p className="text-lg mb-6">
            Are your parents, relatives, or friends planning to visit Canada under the Super Visa program? We offer emergency medical insurance that combines rock-solid protection with budget-friendly premiums, so you can welcome your loved ones with confidence.
          </p>
          <p className="text-lg mb-6">
            For a complimentary, no-obligation quote, please call me at <a href="tel:2042917243" className="text-primary underline">204-291-7243</a>. I look forward to helping you secure the coverage you need.
          </p>
          <a
            href="tel:2042917243"
            className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition"
          >
            Get Your Quote
          </a>
        </div>
        {/* Illustration Column */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
            src="/assets/hero-illustration.svg"
            alt="Family Visiting Canada"
            className="w-96 h-auto"
          />
        </div>
      </div>
    </section>
  );
}