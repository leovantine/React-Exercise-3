import React, { Component } from "react";
import img from "./img/kiwi.jpg";
export default class Profile extends Component {
  state = {
    nome: "Leonardo",
    idade: 16,
    comida: "tabule",
    musicas: ["Eyes on fire", "Roslyn", "Decode"]
  };
  render() {
    return (
      <div>
        <h1>Meu nome é {this.state.nome}!</h1>
        <h2>Tenho {this.state.idade} anos.</h2>
        <h3>Minha comida favorita é {this.state.comida}.</h3>
        <p>Três das minhas músicas favoritas são:</p>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <img class="first" src={img} alt="kiwi" />
        <p>FRUTA FAVORITA</p>
      </div>
    );
  }
}
