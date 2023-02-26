import React, {Component} from "react";
import goku from '../Goku.png'

import handleClick from "./handleClicks";

class Goku extends Component{

    render(){
        const {hits, addOne, name} = this.props;
    
        return (
            <div className="col">
                <img src={goku} alt="" /> 
                <br />
                <button className="btn btn-success m-3" onClick={addOne}>Coups de {name}:</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           
                            <td>{hits}</td>
                        </tr>
                    </tbody>
                    
                </table>
        </div>
        )
    }
}

export default  Goku;