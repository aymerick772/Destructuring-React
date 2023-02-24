import React, { Component } from 'react';
import './App.css';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';
import Frieza from './components/Frieza';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  constructor(props){
    super(props);

  }


  render(){
    
    return (
      <div className="container text-center">
        <h1>Cliquer sur les gentils</h1>
        <hr />

        <div className="row">
          <ErrorBoundary>
          </ErrorBoundary>
            <Vegeta />
          <ErrorBoundary>
            <Frieza />
          </ErrorBoundary>
          <ErrorBoundary>
            <Goku />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
//
export default App;
