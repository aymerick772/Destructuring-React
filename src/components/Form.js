import React, {Component} from "react";
import Car from './Car';
class  Form extends Component {
    state={

    }
    render(){
        return (
            <div className="">
                <Car color="red" height="400px" ></Car>
                <h1>Commentaire</h1>
                Formulaire
            </div>
        )
    }
}

export default Form;