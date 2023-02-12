import React, {Component} from "react";
import '../css/myCss.css';
import MyHead from "./myHeaderOne";
import styles from '../css/myCss.module.css'
const titreRed = {
    fontSize: "35px", 
    color: "red"
}

class  Form extends Component {

    //a faire que si les valeur du tableau ne sont pas dynamique

    render(){
        const myClass = this.props.head ? ("blue") : ("red");
        return (
           <div className="">
            <h1 style={titreRed}>Commentaire</h1>
            <h1 className={`${myClass} bigFont`}>il est {myClass}</h1>

            <h1 className={styles.green}>my  class</h1>

            <MyHead></MyHead>

            
            <button>Valider</button>
           </div>
        )
    }
}

export default Form;