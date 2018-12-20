import React, { Component } from 'react';

class ClickListItem extends Component{

    static defaultProps = {
        index: 0,
        handleClick: () => {}
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
        this.props.handleClick();
    }

    render(){
        const { state, props } = this;
        return (
            <li onClick={this.increment} >
                Item {props.index} - {state.counter}
            </li>  
        );
    }
        
}


export default ClickListItem;