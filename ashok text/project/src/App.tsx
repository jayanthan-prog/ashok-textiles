import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/stats/Stats';
import Divisions from './components/divisions/Divisions';
import Infrastructure from './components/Infrastructure';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Divisions />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;