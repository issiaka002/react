import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
      return (
            <div className='Navigation'>
                  <ul>
                        <NavLink to="/">
                              <li>Home</li>
                        </NavLink>
                        <NavLink to="/About">
                              <li>About</li>
                        </NavLink>
                        <NavLink to="/Service">
                              <li>Service</li>
                        </NavLink>
                  </ul>
                  
            </div>
      );
};

export default Navigation;