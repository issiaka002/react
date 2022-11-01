import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import "./Home.css";

class Home extends Component {
     
      render() {
            // Initialisation
            const title =  <h1>ACCEUIL </h1>
            const tab = [ <li>mariage</li>, <li>mariage</li>, <li>mariage</li>]
            // Fonction ou comportement

            // Affichage
            return (
                  <div>
                        <Navigation/>
                        <h1>
                              Bienvenue sur <span>Add</span>Tech
                              <br></br>
                        </h1>
                       
                       <p>
                         Page quand j'etait debutant en programmation ReactJs 
                       </p>
                  </div>
            );
      }
}

export default Home;