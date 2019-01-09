import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Channel } from '../services/EventService';

class VideoPlayer extends Component{

    constructor(props){
        super(props);

        this.videoElement = React.createRef();
        this.currentTime = 0;

        this.toggleCinema = this.toggleCinema.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onStop = this.onStop.bind(this);

    }

    toggleCinema(){
        this.onStop();
        Channel.emit('video:toggle-cinema');
    }

    onPlay(){
        this.videoElement.current.currentTime = this.currentTime;
    }

    onStop(){
        this.currentTime = this.videoElement.current.currentTime;
    }

    componentDidUpdate(prevProps){
        if(this.props.video.url !== prevProps.video.url){
            this.currentTime = 0;
        }
    }

    render(){
        const { container, video } = this.props;
        if(!video.url){
            return '';
        }else if(!container){
            return 'carregando';
        }else{
            const element = (
                <div className="video-player" >
                    <video
                        src={video.url}
                        onPlay={this.onPlay}
                        onPause={this.onStop}
                        controls autoPlay loop
                        ref={this.videoElement}
                     />
                     <button onClick={this.toggleCinema} >[ ]</button>
                </div>
            );
            return ReactDOM.createPortal(element, container);
        }
    }
}

export default VideoPlayer;