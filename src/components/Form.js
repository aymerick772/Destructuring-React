import React, {Component} from "react";
import Car from './Car';
class  Form extends Component {

    //a faire que si les valeur du tableau ne sont pas dynamique
    state={
        username: '',
        color : "",
        colors:["", "red","blue", "green", "black", "pink"],
        comment:"",

    }
    handlePseudo= (e) =>{
        // console.log(e.target.value)
        this.setState({
            username: e.target.value,
        })
    }
    handleColor= (e) =>{
        // console.log(e.target.value)
        this.setState({
            color: e.target.value,
        })
    }
    handlerComment= (e) =>{
        // console.log(e.target.value)
        this.setState({
            comment: e.target.value,
        })
    }
    handlerSubmit= (e) =>{
        e.preventDefault();
        console.log(`Username :  ${this.state.username}, 
        color: ${this.state.color}, 
        comment: ${this.state.comment}`)

        // this.setState({
            
        // })
    }
    render(){
        return (
            <div className="">
                <Car color={this.state.color} height="400px" ></Car>
                <h1>Commentaire</h1>
                <form onSubmit={this.handlerSubmit}>
                    <div className="">
                        <label htmlFor="">Pseudo</label>
                        <input type="text"  value={this.state.name} onChange={this.handlePseudo} />
                    </div>
                    <div className="">
                        <label htmlFor="">Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor} name="" id="">
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="">Commentaire</label>
                        <textarea onChange={this.handlerComment} name="" value={this.state.comment} id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="">
                        <button type="submit">Valider</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;