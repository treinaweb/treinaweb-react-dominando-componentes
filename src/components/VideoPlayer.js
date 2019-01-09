import React, {Component} from 'react';

class VideoPlayer extends Component{

    constructor(props){
        super(props);

        this.videoElement = React.createRef();
    }

    render(){
        const { video } = this.props;
        return (
            <div className="video-player" >
                <video
                    src={video.url}
                    controls autoPlay loop
                    ref={this.videoElement}
                 />
                 <button>[ ]</button>
            </div>
        );
    }
}

export default VideoPlayer;