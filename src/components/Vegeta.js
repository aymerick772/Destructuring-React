import React, { Component} from "react";
import countHits from "./CountHits";
import vegeta from "../Vegeta.png";

class Vegeta extends Component {
    // state={
    //     hits: 0,
    // };

    // addHits = () =>{
    //     this.setState((prevState)=>{
    //         return{
    //             hits: prevState.hits + 1
    //         }
    //     });
    // }
    render() {
        const {name,addHits, hocState, vie } = this.props;
 
        return (
            <div className="col">
                <img src={vegeta} alt="" /> 
                <br />
                <button className="btn btn-success" onClick={addHits}>{name} Frappe</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                            <th scope="col">Vie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                            <td>{vie}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default countHits(Vegeta);