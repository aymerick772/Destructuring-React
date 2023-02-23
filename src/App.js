import React, { Component } from 'react';
import './App.css';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      vegeta: 100, // Point de vie
      goku: 100
    }
  }
  render(){
    
    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <hr />

        <div className="row">
            <Vegeta name="Vegeta" vie={this.state.vegeta}/>
            <Goku name="Goku" vie={this.state.goku}/>
        </div>
      </div>
    );
  }
}
//
export default App;
