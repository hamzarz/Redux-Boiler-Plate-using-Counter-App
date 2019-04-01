import React, { Component } from 'react';
import Counter from './counter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter count={0}/>
      </div>
    );
  }
}

export default App;
