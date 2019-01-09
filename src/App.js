import React, { Component } from 'react';
import './App.css';

import { VideoService } from './services/VideoService';

import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';

class App extends Component {

  constructor(props){
    super(props);

    this.selectVideo = this.selectVideo.bind(this);

    this.state = {
      videos: [],
      selectedVideo: {}
    }
  }

  async componentDidMount(){
    const videos = await VideoService.list();
    this.setState({videos});

    this.selectVideo(videos[0]);
  }

  selectVideo(video){
    this.setState({selectedVideo: video});
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
