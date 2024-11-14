import React from 'react';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Section title="Welcome" content="This is the welcome section." />
        <Slider />
        <Section title="About" content="This is the about section." />
      </div>
      <Footer />
    </div>
  );
}

export default App;
