import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

    constructor(props){
        super(props);
        this.popupContainer = document.createElement('div');
        
        console.log('%c je passe dans le constructor', 'color: red; background-color: white');
        }

        //J'ai rajouter ça car il  y a un beug, sans  componentDidUmnount() ça crée 2 div au lieux d'une seul
        componentDidMount(){
            document.body.appendChild(this.popupContainer);
        }

    componentWillUnmount(){
        console.log('%c je passe dans le componenent will unmount', 'color: blue; background-color: white');
        document.body.removeChild(this.popupContainer);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal" onClick={this.props.closeModal}>

                <div className="">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eligendi, 
                        labore impedit quam neque, ut asperiores quos doloribus facilis minima, 
                        cupiditate libero. Dolore voluptates suscipit itaque ex tempore, inventore neque!</p>
                <button onClick={this.props.closeModal}>Fermer</button>
                </div>
            </div>,
        // document.getElementById('second-root')
        this.popupContainer
        )
    }
}
export default Modal;