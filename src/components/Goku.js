import React, {Component} from "react";

import countHits from "./CountHits";
import goku from '../Goku.png'

class Goku extends Component{
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
    render(){
        const {name} = this.props;
        const {addHits} = this.props;
        const {hocState} = this.props;
        const {vie} = this.props;
        
        const lifeValue = vie > 0 ? (<td>{vie} %</td>) : (<td>Il est mort</td>);
        const buttonAble = vie > 0 ? (
            <button className="btn btn-success" onClick={addHits}>{name} Frappe</button>) : (
                <button className="btn btn-danger" disabled>{name} Mort</button>
            ); 
        return (
            <div className="col">
            <img src={goku} width="477px" alt="Goku" /> 
            <br />
            {buttonAble}
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
                        {lifeValue}
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}

export default countHits(Goku, 20);