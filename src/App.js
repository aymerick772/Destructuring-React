import React, { Component } from 'react';
import './App.css';
// import MyRef from './components/MyRef'
import MyRefFunc from './components/MyRefFunc'

class App extends Component {
  constructor(props){
    super(props);

    this.refComponent = React.createRef();
  }

  handleClick = () => {
    console.log(this.refComponent.current);
    // this.refComponent.current.addFocus();
    this.refComponent.current.focus();
    // console.log('okoke')
  }
  render(){
    return (
      <div className="App">
        {/* <MyRef ref={this.refComponent}/> */}
        <MyRefFunc name="okok" ref={this.refComponent}/>
        
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
}

export default App;
