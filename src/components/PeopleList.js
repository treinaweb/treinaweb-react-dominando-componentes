import React, { Component } from 'react';

const myList = [
    {nome: "João", idade: 23},
    {nome: "Maria", idade: 25},
    {nome: "Paulo", idade: 32},
    {nome: "Bruna", idade: 20}
]


class PeopleList extends Component{
    render(){
        return (
            <ul>
                { myList.map(person => <li>{person.nome} - {person.idade} anos</li>) }
            </ul>
        );
    }
}

export default PeopleList;

