import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.css';
import './main';
import Landing from './pages/landing';
import AboutUs from './pages/aboutus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import OurServices from './pages/ourServices';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route exact path="/services" element={<OurServices />} />
      </Routes>
    </Router>
  );
}

export default App;
