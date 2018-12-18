import React, { Component } from 'react';
import './App.css';

import MeuComponente, { MeusComponentes } from './components/MeuComponente';

class App extends Component {
  render() {
    const dados = {
      nome: "Maria",
      sobrenome: "Souza",
      idade: 20
    }
    return (
      <div className="App">
        <MeuComponente {...dados} />
      </div>
    );
  }
}

export default App;
