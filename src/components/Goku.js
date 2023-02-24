import React, {Component} from "react";

import countHits from "./CountHits";
import goku from '../Goku.png'

class Goku extends Component{
    state  = {
        bg: ''
    }
    handleCLick = () =>{
        this.setState({
            bg: 'bg-success'
        })
    }
    render(){

        return (
            <div className={`col ${this.state.bg}`}>
            <img src={goku} onClick={this.handleCLick} width="275px" alt="Goku" /> 
            <br />


        </div>
        )
    }
}

export default Goku;