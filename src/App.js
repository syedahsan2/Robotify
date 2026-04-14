import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ElectricCursor from './components/ElectricCursor';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About-Us';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ServiceDetail from './pages/Services';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        {/* Electric Effects - Full Site */}
        <ElectricCursor />
        
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;