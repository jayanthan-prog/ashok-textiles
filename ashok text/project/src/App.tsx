import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/stats/Stats';
import Divisions from './components/divisions/Divisions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Products from './components/Products';
import Infrastructure from './components/Infrastructure';
 function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stats />
          <Divisions />
          <Infrastructure />
          <Products />
          <Contact />
           
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
