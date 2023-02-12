import React, {Component} from "react";
import styled from "styled-components";

const Title  = styled.h1`
color: red;
font-size: 80px;
`
const Button = styled.button`
    background : black;
    color : #ffffff;
    padding: 12px 13px;
    margin: 8px;
    font-size: 15px;
`
class  Form2 extends Component {

    //a faire que si les valeur du tableau ne sont pas dynamique

    render(){
        return (
           <div className="">
                <Title className="">Commentaire</Title>
                <button>Valider</button>
                <Button>Valider</Button>
           </div>
        )
    }
}

export default Form2;