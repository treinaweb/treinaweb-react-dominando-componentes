import React, { Component } from 'react';

class MeuComponente extends Component{
    render(){
        const {props} = this;
        return (
            <ul>
                <li>Nome: {props.nome}</li>
                <li>Sobrenome: {props.sobrenome}</li>
                <li>Idade: {props.idade}</li>
            </ul>
        );
    }
}

export default MeuComponente;