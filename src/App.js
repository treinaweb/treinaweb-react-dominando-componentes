import React, { Component } from 'react';
import './App.css';

import MeuComponente from './components/MeuComponente';
import Time from './components/Time';
import MyButton from './components/MyButton';

class App extends Component {
  render() {
    const dados = {
      nome: "Maria",
      sobrenome: "Souza",
      idade: 20
    }
    return (
      <div className="App">
        <MyButton />
      </div>
    );
  }
}

export default App;
