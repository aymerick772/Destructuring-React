import React, { Component} from "react";
const countHits = (WrappedComponent) =>{
    class CountHits extends Component {
    state={
        hits: 0,
    };

    addHits = () =>{
        this.setState((prevState)=>{
            return{
                hits: prevState.hits + 1
            }
        });
    }
        render() {
            return(
                <WrappedComponent addHits={this.addHits} hocState={this.state} {...this.props}></WrappedComponent>
            )    
        }
    }

    return CountHits
}



export default countHits;
