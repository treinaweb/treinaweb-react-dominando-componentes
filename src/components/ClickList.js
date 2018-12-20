import React, { Component } from 'react';

class ClickList extends Component{

    render(){
        return (
            <div>
                abc
                <ul>
                    {this.props.children.map(item => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
        );
    }
        
}


export default ClickList;