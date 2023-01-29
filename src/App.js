import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
