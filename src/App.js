import React, { Component } from 'react';
import './App.css';

import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: {
        img: 'https://storage.googleapis.com/coverr-public/thumbnails/Albert-Dock.jpg',
        name: 'Albert-Dock',
        url: 'https://app.coverr.co/s3/mp4/Albert-Dock.mp4'
      }
    }
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
       <VideoPlayer video={state.selectedVideo} />
       <VideoList videos={state.videos} />
       <VideoCinema isActive={false} />
      </div>
    );
  }
}

export default App;
