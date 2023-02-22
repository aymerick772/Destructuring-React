import React, {Component} from "react";
import goku from '../Goku.png'

class Goku extends Component{
    state={
        hits: 0,
    };

    addHits = () =>{
        this.setState((prevState)=>{
            return{
                hits: prevState.hits + 1
            }
        });
    }
    render(){
        return (
            <div className="col">
            <img src={goku} width="477px" alt="" /> 
            <br />
            <button className="btn btn-success" onClick={this.addHits}>Frapper</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Coups</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.hits}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}

export default Goku;