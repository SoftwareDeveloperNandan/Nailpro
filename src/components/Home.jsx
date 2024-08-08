import React from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Testimonials from './Testimonials.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Card />
        <Testimonials />
        <Footer />
    </>
  )
}

export default Home;