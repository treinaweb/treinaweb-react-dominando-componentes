import React, { Component } from 'react';

class MyButton extends Component{

    constructor(props){
        super(props);

        this.state = {
            isOn: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick(){
        this.setState((state, props) => {
            return {isOn: !state.isOn};
        })
    }

    render(){
        const {state} = this;
        return (
            <button onClick={this.handleClick} >{state.isOn ? 'Desligar' : 'Ligar'}</button>
        )
    }
}


/*function MyButton(props){
    function sayHello(){
        alert('Hello!');
    }

    return <button onClick={sayHello} >Click Me</button>;
}*/

export default MyButton;