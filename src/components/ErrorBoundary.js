import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  

    static getDerivedStateFromError(error) 
        { 
            return { 
                hasError: true
            }
        } 
    
    // componentDidCatch(error, info) {
    //   // Affiche une UI de repli
    //   this.setState({ hasError: true });
    //   // Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.
    //   logErrorToMyService(error, info);
    // }

    render() {
      if (this.state.hasError) {
        // Vous pouvez afficher n'importe quelle UI de repli.
        // return <h1>Quelque chose s'est mal passé.</h1>;
        return (
            <div className={`col bg-danger`}>
            
            <p style={{color: '#ffffff'}}>Oups nous rencontrons un porblème</p>
        </div>
        )
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;