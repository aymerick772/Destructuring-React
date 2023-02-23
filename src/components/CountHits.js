import React, { Component} from "react";
const countHits = (WrappedComponent, power) =>{
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

    componentDidUpdate(prevProps, prevState) {
        if(this.state !== prevState){
            const CompName = WrappedComponent.name;
            this.props.reduceHandler(CompName, power)
        }

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
