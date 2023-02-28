import React, { Component } from "react";
import axios from "axios";
import goku from "../Goku.png"

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: null, 
            data: {}
        }
        this.componentDidMount = () =>{
            // //Ne fonctionne pas avec les class, utilisé plutot les hooks
            // const data = this.props.match.params.profilId;
            // this.setState({
            //     // id: data.id,
            //     id: data,
            // })
            const data = 5;

            let payload = {
                users : {
                    id : "id",
                    firstName : "firstName",
                    email : "email",
                    phone : "phone",
                    _repeat: 10
                }
            }
            axios({
                method : "GET",
                url : "https://dummyjson.com/users",
                data : payload
            }).then(resp => {
                //je fais en dure car ça marche pas
                console.log(resp.data.users[data])
                
                this.setState({
                    data: resp.data.users[data]
                })  
            })

        }
    }
    render (){
        
        const {id, email, firstName, phone} = this.state.data;
        return(
            <div className="container mt-3">
                <h1>Profile </h1>
                <img src={goku} alt="profile" />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ID: {this.state.data['id']} </li>
                    <li className="list-group-item">ID: {this.state.data.id} </li>
                    <li className="list-group-item">id: {id} </li>
                    <li className="list-group-item">Prénom {firstName} </li>
                    <li className="list-group-item">Adress email: {email} </li>
                    <li className="list-group-item">phone:  {phone} </li>
                </ul>
            </div>
        )
    }
}


export default Profile;