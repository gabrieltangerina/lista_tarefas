import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  inputMudou = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form>
          <input type="text" onChange={this.inputMudou} />
          <button type="submit">Enviar</button>
        </form>

        <div className="divTarefas">
          <p>{ novaTarefa }</p>
        </div>
      </div>
    );
  }
}
