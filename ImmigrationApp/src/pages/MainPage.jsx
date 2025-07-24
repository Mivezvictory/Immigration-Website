import React from 'react';
import heroImg from '../assets/backgroundimage.jpg';
import '../styles/mainpageStyling.css'; // Ensure your CSS is imported for styles

export default function MainPage() {
  return (
    <section className="hero">
      <img
        src={heroImg}
        alt="Family enjoying time together"
        className="hero__img"
      />
      <div className="hero__content">
        <h1>Welcome your Family to Canada with Confidence</h1>
        <p>See how we can help you navigate the immigration process and more.</p>
        <button>Learn More</button>
      </div>
    </section>
  );
}