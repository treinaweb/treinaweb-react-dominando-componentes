import React from 'react';

function VideoCinema(props){
    const style = {
        display: (props.isActive ? 'inline-block' : 'none')
    }

    return (
        <div className="video-cinema" style={style} >
            { props.children }
        </div>
    );
}

export default VideoCinema;