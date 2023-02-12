import React from "react";

const MyHead = () =>{
    return <h1 className="red"> Commentaire avec component</h1> // Work
    // return <h1 className={styles.green}> Commentaire avec component</h1> == No work..
}

export default MyHead;


//la différence entre > 
// import '../css/myCss.css'; == Tous les éléments enfants ont accès 
// et
// import styles from '../css/myCss.module.css'== seulement le fichier dans lequel il est importé a accès.