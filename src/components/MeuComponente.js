import React, { Component } from 'react';

/*
function MeuComponente(){
    return <h1>TreinaWeb</h1>;
}
*/

/*
const MeuComponente = () => {
    return  <h1>TreinaWeb</h1>;
}
*/

class MeuComponente extends Component{
    render(){
        const {props} = this;
        return <h1>TreinaWeb, {props.nome}</h1>;
    }
}

export const MeusComponentes = {
    TreinaWeb: function(props){
        return <h1>Ola {props.nome}!</h1>;
    }
};

export default MeuComponente;