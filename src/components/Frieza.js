import React, { Component } from 'react';
import frieza from '../frieza.png'; 

import handleClick from "./handleClicks";

class Frieza extends Component {

    render() {
 const {backGround, clickHandler } = this.props;

       
        return(
            
            <div className={`col ${backGround}`}>
                <img src={frieza} onClick={clickHandler} alt="frieza" width="277px"/><br />
            </div>
        )
    }
}


export default handleClick(Frieza);