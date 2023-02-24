import React, { Component} from "react";
import handleClick from "./handleClicks";
import vegeta from "../Vegeta.png";

class Vegeta extends Component {
    render() {
        const {backGround, clickHandler } = this.props;

        return (
            <div className={`col ${backGround}`}>
                <img src={vegeta} onClick={clickHandler} width="268px" alt="" /> 
       
               
            </div>
        )
    }
}

export default  handleClick(Vegeta);