import React, { Component} from "react";
import vegeta from "../Vegeta.png";

class Vegeta extends Component {
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
    render() {
        return (
            <div className="col">
                <img src={vegeta} alt="" /> 
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

export default Vegeta;