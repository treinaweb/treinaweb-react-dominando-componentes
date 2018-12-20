import React, { Component } from 'react';
import './App.css';

import ClickList from './components/ClickList';
import ClickListItem from './components/ClickListItem';
import MyVideo from './components/MyVideo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyVideo src="https://app.coverr.co/s3/mp4/Albert-Dock.mp4" />
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
