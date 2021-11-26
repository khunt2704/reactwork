import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
 const Navbar = () => {
     return (
     <>
     <div className="container-fluid nav_bg">
     <div className="row">
         <div className="col">
     
         <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand" >ParthKhunt</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/service" className="nav-link" >Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" >About</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" >Contact</NavLink>
        </li>        
      </ul>
      
    </div>
  </div>
</nav>
</div>
</div>
</div>

     </>
     );
 }

export default Navbar;