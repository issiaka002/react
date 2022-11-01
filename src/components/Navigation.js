import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
      return (
            <div className='Navigation'>
                  <ul className='menu flex'>
                        <NavLink to="/">
                              <li>Accueil</li>
                        </NavLink>
                        <NavLink to="/Service">
                              <li>Add tech</li>
                        </NavLink>
                        <NavLink to="/About">
                              <li>Lste tech</li>
                        </NavLink>

                  </ul>
                  
            </div>
      );
};

export default Navigation;