import React, {Component} from 'react';

class VideoPlayer extends Component{
    render(){
        return (
            <div className="video-player" >
                <video
                    src={'https://app.coverr.co/s3/mp4/Albert-Dock.mp4'}
                    controls autoPlay loop
                 />
                 <button>[ ]</button>
            </div>
        );
    }
}

export default VideoPlayer;