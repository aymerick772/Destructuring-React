import React,{Component} from "react";

class Result extends Component {
    state={
        name: "Mario",
        winner: true
    }

    
    render(){
        // let result;
        // if(this.state.winner){
        //     result = <p>Bravo {this.state.name}</p>
        // }else{
        //     result = <p>Oh non ..  pauvre {this.state.name}</p>
        // }
        // return result;


        // return(this.state.winner? (
        //     <h1>Bravo {this.state.name}</h1>
        // ) : (
        //     <h1>Oh non ..  pauvre {this.state.name}</h1>
        // ))

        // return this.state.winner ? <h1>Bravo {this.state.name}</h1> : <h1>Oh non ..  pauvre {this.state.name}</h1>

        return this.state.winner && <h1>Bravo {this.state.name}</h1> 

      
    }
}
export default Result;

