import React, { Component } from 'react';
import './App.css';
import MyRef from './components/MyRef'

class App extends Component {
  constructor(props){
    super(props);

    this.refComponent = React.createRef();
  }

  handleClick = () => {
    console.log(this.refComponent.current);
    this.refComponent.current.addFocus()
  }
  render(){
    return (
      <div className="App">
        <MyRef ref={this.refComponent}/>
        
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
}

export default App;
