import React from "react";

import { useNavigate } from "react-router-dom";

const Tutorials = (props) =>{
    
    // ça ne fonctionne bien évidement pas avec la version 6, le  moyen pour la version 6 plus bas
    // setTimeout (() =>{
        //     props.history.push('/')
        // }, 5000)


        let navigate = useNavigate();
        console.log(props)
        setTimeout (() =>{
            navigate('/')
        }, 5000)

        return (
        <div className="container mt-3">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Oups!</strong> La page est en construction
                vous allez être rediriger vers la page d'acceuil  dans 5 seconde 
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <h1 className="h1111">Tutorial: Intro to React</h1>
        </div>
    )
}

export default Tutorials;