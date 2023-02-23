import React from 'react';
import Header from './components/home/Header';
import Banner from './components/home/banner/Banner';
import About from './components/about/About';
import './App.css';
import Projects from './components/projects/Projects';
import ContactUs from './components/contact/ContactUs';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='Banner'>
         <Banner/>
      </div>
      
     
      <div id="Projects">
        <Projects />
      </div>
      <div id='Services'>
        <Services/>
        
      </div>

      
      <div id="About">
         <About />
      </div>
      <div id='Contact'>
        <ContactUs/>
        
      </div>
      
      <Footer />
      
      
    </div>
  );
}

export default App;
