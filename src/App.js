import React, { Component } from 'react';
import './App.css';

import ClickList from './components/ClickList';
import ClickListItem from './components/ClickListItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickList>
          <ClickListItem></ClickListItem>
          <ClickListItem></ClickListItem>
          <ClickListItem></ClickListItem>
        </ClickList>
      </div>
    );
  }
}

export default App;
