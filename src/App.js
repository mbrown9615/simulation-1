import React, { Component } from 'react';
import Home from './components/Home/Home';
import Logo from './assets/logo.png';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Header'>
        <div className='Logo'>
          <img src={`${Logo}`} alt='logo'/>
          <h4>SHELFIE</h4>
          </div>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
