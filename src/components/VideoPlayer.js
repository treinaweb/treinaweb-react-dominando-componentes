import React, {Component} from 'react';

class VideoPlayer extends Component{
    render(){
        const { video } = this.props;
        return (
            <div className="video-player" >
                <video
                    src={video.url}
                    controls autoPlay loop
                 />
                 <button>[ ]</button>
            </div>
        );
    }
}

export default VideoPlayer;