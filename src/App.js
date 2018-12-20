import React, { Component } from 'react';
import './App.css';

import ClickList from './components/ClickList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickList number="123" >
          <h1>TreinaWeb</h1>
          <div>Ola web developers!</div>
        </ClickList>
      </div>
    );
  }
}

export default App;
