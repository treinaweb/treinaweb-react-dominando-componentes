import React, { Component } from 'react';

class ClickList extends Component{

    constructor(props){
        super(props);
        this.state = {
            total: 0
        }

        this.setTotal = this.setTotal.bind(this);
    }

    setTotal(){
        this.setState(state => {
            return {
                total: state.total + 1
            }
        })
    }

    render(){
        const { state } = this;
        return (
            <div>
                Total: {state.total}
                <ul>
                    {this.props.children.map((item, index) => {
                        return  <item.type index={index} handleClick={this.setTotal} >
                                {item.props.children}
                        </item.type>
                    })}
                </ul>
            </div>
        );
    }
        
}


export default ClickList;