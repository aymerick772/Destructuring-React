import React, { Component, Fragment } from 'react';


class AddHits extends Component {
    state={
        saiyan : true,
        hits: 0,
        fighters : {
            vegeta : true,
            goku : true,
        },
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
            <Fragment>
              {
                this.props.render(this.state.hits, this.addHits, this.state.fighters)
              }
            </Fragment>
        )
    }
}

export default AddHits;