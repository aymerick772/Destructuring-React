import React, { Component } from 'react';
import './App.css';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';
import ErrorBoundary from './components/ErrorBoundary';
import AddHits from './components/AddHits';
class App extends Component {
  constructor(props){
    super(props);

  }


  render(){
    
    return (
      <div className="container text-center">
        <h1>Vegeta VS Goku</h1>
        <div className="row">
       <ErrorBoundary>
        
          <AddHits render={(hits, addOne, saiyan) =>
          // si saiyan.goku
            saiyan.vegeta && <Vegeta hits={hits} addOne={addOne} name="Vegeta"/>
          } />
        </ErrorBoundary>
       <ErrorBoundary>
          <AddHits render={(hits, addOne, saiyan) =>
           saiyan.goku && <Goku hits={hits} addOne={addOne} name="Goku"/>
          } />
        </ErrorBoundary>
       {/* <ErrorBoundary>
            <Vegeta render={(saiyan)=> saiyan && "vegeta"} />
          </ErrorBoundary>
          <ErrorBoundary>
            <Goku name="Goku" />
          </ErrorBoundary> */}
        </div>
      </div>
    );
  }
}
//
export default App;
     
         