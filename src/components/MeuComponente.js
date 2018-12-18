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
        return <h1>TreinaWeb</h1>;
    }
}

export const MeusComponentes = {
    TreinaWeb: function(){
        return <h1>Ola web developers!</h1>;
    }
};

export default MeuComponente;