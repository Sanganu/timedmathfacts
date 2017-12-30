import React, { Component } from 'react';
import HeaderSection from './HeaderSection';
import MainSection from './MainSection';
import Timer from './timedcomp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Math Facts</h1>
        </header>
        <div className="App-intro">
                <HeaderSection />
                  <MainSection />
                  <Timer />
        </div>
      </div>
    );
  }
}

export default App;
