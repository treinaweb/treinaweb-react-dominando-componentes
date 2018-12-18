import React, { Component } from 'react';
import './App.css';

import MeuComponente from './components/MeuComponente';
import Time from './components/Time';

class App extends Component {
  render() {
    const dados = {
      nome: "Maria",
      sobrenome: "Souza",
      idade: 20
    }
    return (
      <div className="App">
        <Time />
        <MeuComponente {...dados} />
      </div>
    );
  }
}

export default App;
