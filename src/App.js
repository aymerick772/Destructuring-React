import React, { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Docs from './components/Docs';
import Community from './components/Community';
import Tutorials from './components/Tutorials';
import Menu from './components/Menu';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      underConst: {
        Docs: false,
        Tutorials : false,
        Community: false,
      }
    }

  }


  render(){
    return (
      <Router>       
          <Menu/>
          <Routes>
            {/* Exact ou Strict */}
            <Route strict path="/" element={<Docs/>}/>
            <Route exact path="/tutorial" element={<Tutorials/>} />


            {/* Rectification pour version 6, ne fonctionne pas non plus car : useNavigate ne peux pas être appeler dans une class */}
            {/* <Route exact path="/tutorial" render={() =>{
              this.state.underConst.Tutorials ? (navigate("/community")
                ) : (<Tutorials/>)
            }}/> */}

            {/* Navigate ne fonctionne pas dans ce cas, voir les hooks */}
            {/* <Route exact path="/tutorial" render={() =>{
              this.state.underConst.Tutorials ? (<Navigate to="/community" replace={true}/>
                ) : (<Tutorials/>)
            }}/> */}
          
            <Route exact path="/community" element={<Community/>} />
            
            <Route path="*" element={<ErrorPage />}/>
          </Routes>
      </Router>
    );
  }
}
//
export default App;
     
         