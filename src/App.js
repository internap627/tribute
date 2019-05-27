import React from 'react';
import './App.css';
import Nav from './Nav'
import Hero from './Hero'
import Stats from './Stats'
import Gallery from './Gallery'
import Event from './Event'
import Bio from './Bio'

function App() {
  
  return (
    <div className="App">
      <div id='main'>
        <Nav />
        <Hero />
        <Stats />
        <Gallery />
        <Event />
        <Bio />

      </div>
    </div>
  );
}

export default App;
