import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class About extends Component {
      render() {
            return (
                  <div>
                        <Navigation/>
                        <h1 className='"text-gray-100 '>
                              About 
                        </h1>
                  </div>
            );
      }
}

export default About;