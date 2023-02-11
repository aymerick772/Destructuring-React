import React, { Component } from 'react';
import Users from './Singers'

class Display extends Component {
    state = {

    }

    render(){
        return(
            <div className="">
                <p>Musiciens</p>
                <Users name="Eric Clapton" age="58"/>
                <Users name="Jimi Hendrix" age="27"/>
                <Users name="David Guetta" age="46"/>
                <Users name="Carlos Santana" age="71"/>
            </div>
        )
    }
}

export default Display;