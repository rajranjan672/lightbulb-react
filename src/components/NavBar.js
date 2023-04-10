// import React from 'react'
// import {NavLink} from "react-router-dom"
import { NavLink } from 'react-router-dom';
import "../components/navBar.css";
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';

const NavBar = ({ name, ...props }) => {
  return (


    
      <div className='navbar'>

         <ul >
             <li><NavLink to="/" className="nav-item">Home</NavLink></li>

             <li><NavLink to="/profile" className="nav-item">Profile</NavLink></li>
             <li><NavLink to="/product" className="nav-item">Product</NavLink></li>
             <li><NavLink to="/community" className="nav-item">Community</NavLink></li>
             <li><NavLink to="/explore" className="nav-item">Explore</NavLink></li>
             <li><NavLink to="/help" className="nav-item">Help</NavLink></li>
             <li><NavLink to="/upload" className="nav-item">Upload</NavLink></li>

           

         </ul>
     </div> 
    

  );
}



    

  
  


export default NavBar