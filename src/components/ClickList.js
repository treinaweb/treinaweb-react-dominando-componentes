import React, { Component } from 'react';

class ClickList extends Component{

    render(){
        return (
            <div>
                abc
                <ul>
                    {this.props.children.map(item => {
                        return <li>
                            <item.type prop2={this.props.number} >
                                {item.props.children}
                            </item.type>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
        
}


export default ClickList;