import React from 'react';
import Header from './components/home/Header';
import Banner from './components/home/banner/Banner';
import About from './components/about/About';
import './App.css';
import Projects from './components/projects/Projects';
import ContactUs from './components/contact/ContactUs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Projects />
      <About />
      <ContactUs />
      <Footer />
      
      
    </div>
  );
}

export default App;
