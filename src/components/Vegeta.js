import React, { Component} from "react";
import countHits from "./CountHits";
import vegeta from "../Vegeta.png";

class Vegeta extends Component {
    state  = {
        bg: ''
    }
    handleCLick = () =>{
        this.setState({
            bg: 'bg-success'
        })
    }
    render() {

        return (
            <div className={`col ${this.state.bg}`}>
                <img src={vegeta} onClick={this.handleCLick} width="268px" alt="" /> 
       
               
            </div>
        )
    }
}

export default Vegeta;