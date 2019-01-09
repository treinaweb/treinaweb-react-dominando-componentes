import React, { Component } from 'react';
import './App.css';

import { VideoService } from './services/VideoService';
import { Channel } from './services/EventService';

import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoInline from './components/VideoInline';
import VideoCinema from './components/VideoCinema';

class App extends Component {

  constructor(props){
    super(props);

    this.selectVideo = this.selectVideo.bind(this);
    this.toggleCinema = this.toggleCinema.bind(this);

    this.inlineVideo = React.createRef();
    this.cinemaVideo = React.createRef();

    this.state = {
      videos: [],
      selectedVideo: {},
      videoContainerElement: this.inlineVideo
    }
  }

  async componentDidMount(){
    const videos = await VideoService.list();
    this.setState({videos});
    Channel.on('video:select', this.selectVideo)
    Channel.on('video:toggle-cinema', this.toggleCinema)
  }

  componentWillUnmount(){
    Channel.removeListener('video:select', this.selectVideo);
    Channel.removeListener('video:toggle-cinema', this.toggleCinema);
  }

  toggleCinema(){
    const currentElement = this.state.videoContainerElement,
      newContainer = currentElement === this.inlineVideo ? this.cinemaVideo : this.inlineVideo;
    this.setState({
      videoContainerElement: newContainer
    })
  }

  selectVideo(video){
    this.setState({selectedVideo: video});
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
       <VideoPlayer video={state.selectedVideo} container={state.videoContainerElement.current} />
       <VideoInline>
        <div ref={this.inlineVideo} ></div>
       </VideoInline>
       <VideoList videos={state.videos} />
       <VideoCinema isActive={state.videoContainerElement === this.cinemaVideo}>
        <div ref={this.cinemaVideo} ></div>
       </VideoCinema>
      </div>
    );
  }
}

export default App;
