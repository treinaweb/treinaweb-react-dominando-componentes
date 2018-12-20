import React, { Component } from 'react';

import { MyContext } from '../services/MyContext';


class MyVideo extends Component{

    static contextType = MyContext;

    constructor(props){
        super(props);
        
        this.myVideo = React.createRef();
        this.start = this.start.bind(this);

    }

    start(){
        this.myVideo.current.play();
    }

    render(){
        return (
            <div>
                <strong>{ this.context.username }</strong>
                <video ref={this.myVideo} width="100" src={this.props.src} />
                <button onClick={this.start} >Play</button>
            </div>
        )
    }
}


export default MyVideo;