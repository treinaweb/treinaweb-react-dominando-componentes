import React, { Component } from 'react';

class MyButton extends Component{

    sayHello(event){
        event.preventDefault();
        alert('Hello!');
    }

    render(){
        return (
            <button onClick={this.sayHello} >Click Me</button>
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