import React, { Component } from 'react';

class Time extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: 0
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            console.log(this.state.time);
            this.setState((state, props) => {
                return {
                    time: state.time + 1
                }
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const { state } = this;
        return <div>{state.time}</div>;
    }
}


export default Time;