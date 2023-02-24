import React, { Component } from 'react';
import frieza from '../frieza.png'; 

class Frieza extends Component {
    state  = {
        bg: ''
    }
    handleCLick = () =>{
        this.setState({
            bg: 'bg-danger'
        })
    }
    render() {

        if(this.state.bg === 'bg-danger'){
            throw new Error();
        }
        return(
            <div className={`col ${this.state.bg}`}>
                <img src={frieza} onClick={this.handleCLick} alt="frieza" width="277px"/><br />
            </div>
        )
    }
}


export default Frieza;