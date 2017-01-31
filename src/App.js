import React, { Component } from 'react';
import './App.css';

// Components
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Contact/>
        <Footer/>
        <Portfolio/>
        <Resume/>
      </div>
    );
  }
}

export default App;
