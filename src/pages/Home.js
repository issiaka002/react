import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class Home extends Component {
      render() {
            return (
                  <div>
                        <Navigation/>
                              <h1>
                                    ACCEUIL 
                              </h1>
                              <p>
                                     Bienvenue sur mon site ...
                              </p>
                  </div>
            );
      }
}

export default Home;