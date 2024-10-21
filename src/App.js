import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Dancers from './Pages/Dancers';
import Students from './Pages/Students';
import Judges from './Pages/Judges';
import Sponsors from './Pages/Sponsors';
import './App.css'; 

function App() {
  return (
    <Router>
    <div className="app">
    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add routes for dropdown submenu if needed */}
        <Route path="/dancers" element={<Dancers/>}/>
        <Route path="/sponsors" element={<Sponsors/>}/>
        <Route path="/judges" element={<Judges/>}/>
        <Route path="/students" element={<Students/>}/>
        
      </Routes>
    
      
      </div>
      <Footer />
    </Router>
  );
}

export default App;