import React, { Component } from 'react';

const myList = [
    {id: 123, nome: "João", idade: 23},
    {id: 456, nome: "Maria", idade: 25},
    {id: 789, nome: "Paulo", idade: 32},
    {id: 321, nome: "Bruna", idade: 20}
]


class PeopleList extends Component{

    sayMyName(person){
        alert(person.nome);
    }

    render(){
        return (
            <ul>
                { myList.map(person => 
                    <li onClick={this.sayMyName.bind(this, person)} key={person.id} >{person.nome} - {person.idade} anos</li>
                  ) 
                }
            </ul>
        );
    }
}

export default PeopleList;

