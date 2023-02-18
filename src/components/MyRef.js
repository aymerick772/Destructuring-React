import React, {Component} from "react";

class MyRef extends Component{
    constructor(props){
        super(props);

        this.state = {
            valeur : ""
        }
        this.myTitle = React.createRef();
        this.myInput = React.createRef();

        console.log(this.myTitle)
    }
    // inputChange = (e) =>{
    //     this.setState({
    //         valeur : e.target.value
    //     })
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     this.myTitle.current.style.color = "red"
    // }
    // componentDidMount(){
    //     this.myInput.current.focus();
    // }
    addFocus = () => {
        this.myInput.current.focus();
    }
    // handleClick = () =>{
    //     console.log(this.myInput.current.value)
    // }
    render(){
        return(
            <div className="">
                {/* <h1 ref={this.myTitle}>Valeur :{this.state.valeur}</h1> */}
                {/* <input ref={this.myInput} onChange={this.inputChange} value={this.state.valeur} type="text" className=""/> */}

                <input type="text" ref={this.myInput}/>
                {/* <button onClick={this.handleClick}>Valider</button> */}
            </div>
        )
    }
}

//test

export default MyRef;