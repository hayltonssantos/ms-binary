import React from 'react';
import Hero from '../components/landing/Hero/Hero';
import Features from '../components/landing/Features/Features';
import Stats from '../components/landing/Stats/Stats';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Stats />
    </div>
  );
};

export default Home;
