import React, { Component } from 'react';
import './App.css';
// import MyComponent from './components/MyComponent';
import Modal from './components/Modal';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal:  false,
    }
  }
  
  handleShow = () =>{
    this.setState({
      showModal: true,
      }
    )
  }

  handleHight = () =>{
    this.setState({
      showModal: false,
    })
  }

  render(){
    // const modal = this.state.showModal ? ( <Modal/>) : null;
    //autre méthode
    const modal = this.state.showModal && ( <Modal closeModal={this.handleHight}/>);
    return (
      <div className="App">
        {/* <MyComponent/> */}
        <button onClick={this.handleShow} > afficher modal</button>
       {modal}
      </div>
    );
  }
}
//
export default App;
