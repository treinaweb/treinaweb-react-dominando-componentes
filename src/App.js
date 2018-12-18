import React, { Component } from 'react';
import './App.css';

import MeuComponente, { MeusComponentes } from './components/MeuComponente';

class App extends Component {
  render() {
    const nome = 'TreinaWeb';
    const MeuComponenteEscolhido  = MeusComponentes[nome];
    return (
      <div className="App">
        <MeuComponente />
        <MeuComponenteEscolhido />
      </div>
    );
  }
}

export default App;
