import React, {useEffect} from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactME';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false,  // Allow animations to happen every time the component comes into view
      mirror: true  // Allows elements to animate when scrolling back up
    });
  }, []);
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
