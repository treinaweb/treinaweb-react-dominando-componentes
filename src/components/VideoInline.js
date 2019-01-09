import React from 'react';

function VideoInline(props){
    return (
        <div className="video-inline" >
            { props.children }
        </div>
    );
}

export default VideoInline;