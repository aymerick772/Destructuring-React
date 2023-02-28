import React, { Component } from "react";
import { MySecondContext } from "./Mycontext";


//Ici nous récupéron le constext initialisé dans app pour récuperer les props
class ComposantEnfantEnfant  extends Component {
    render() {    
        return(
            <MySecondContext.Consumer>
                {
                data =>{
                   const{name, ag} = data;
                    return (
                        <div className="">
                            <h1>Composant enfant pour récupérer le context avec un paramètre directement{console.log(data) } </h1>
                            <p>Le composent contient donc : {`${name} ${ag}`} </p>
                        </div>
                    )
                } 
                }
            </MySecondContext.Consumer>
        )
    }
}

export default ComposantEnfantEnfant;