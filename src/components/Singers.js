import React, { Component } from "react";

class Users extends Component{

    render(){
        console.log(this.props)
        const {name, age} = this.props
        return(
            <div className="">
            <p>Chanteur: {name} ,{age} ans</p>
        </div>
        )
    }
  
    

// Dans function 
    // // Avant destructuring ==>
    // // const name = props.name;
    // // const age = props.age;

    // // Après le destructuring ==>
    // const {name, age} = props;

   
}

export default Users;