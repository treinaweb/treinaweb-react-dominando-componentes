import React, { Component } from 'react';

const myList = [
    {nome: "João", idade: 23},
    {nome: "Maria", idade: 25},
    {nome: "Paulo", idade: 32},
    {nome: "Bruna", idade: 20}
]


class PeopleList extends Component{
    render(){
        const elementsList = [];

        for(let i = 0; i < myList.length; i++){
            elementsList.push(
                <li>{myList[i].nome} - {myList[i].idade} anos</li>
            )
        }

        return (
            <ul>
                { elementsList }
            </ul>
        );
    }
}

export default PeopleList;