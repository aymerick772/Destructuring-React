import React, {Component} from "react";

import countHits from "./CountHits";
import goku from '../Goku.png'

import handleClick from "./handleClicks";

class Goku extends Component{

    render(){
        const {backGround, clickHandler } = this.props;
        return (
            <div className={`col ${backGround}`}>
            <img src={goku} onClick={clickHandler} width="275px" alt="Goku" /> 
            <br />


        </div>
        )
    }
}

export default  handleClick(Goku);