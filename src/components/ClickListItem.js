import React, { Component } from 'react';

import { Channel } from '../services/EventEmitter';

class ClickListItem extends Component{

    static defaultProps = {
        index: 0
    }

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState(state => {
            return {
                counter: state.counter + 1
            }
        })
      
        Channel.emit('listItem:click');
    }

    render(){
        const { state, props } = this;
        if(state.counter > 4){
            throw new Error('!!!!!!');
        }
        return (
            <li onClick={this.increment} >
                Item {props.index} - {state.counter}
            </li>  
        );
    }
        
}


export default ClickListItem;