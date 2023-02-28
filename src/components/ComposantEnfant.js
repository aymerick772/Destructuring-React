import React, { Component } from "react";
import { MyContext } from "./Mycontext";
import ComposantEnfantEnfant from './ComposantEnfantEnfant';

//Ici nous récupéron le constext initialisé dans app pour récuperer les props
class ComposantEnfant  extends Component {
    render() {    
        return(
            <MyContext.Consumer>
                {
                data =>{
                   const{Tutorials, Docs, Community, chaise} = data;
                    return (
                        <div className="">
                            <h1>Composant enfant pour récupérer le context{console.log(data) } </h1>
                            <p>Donc le state de chaise : {chaise}</p>
                            <ComposantEnfantEnfant/>
                        </div>
                    )
                } 
                }
            </MyContext.Consumer>
        )
    }
}

export default ComposantEnfant;