import React from 'react';
import './App.css';
import Nav from './Nav'
import Hero from './Hero'
import Stats from './Stats'
import Gallery from './Gallery'


function App() {
  
  return (
    <div className="App">
      <div id='main'>
        <Nav />
        <Hero />
        <Stats />
        <Gallery />



      </div>
    </div>
  );
}

export default App;
