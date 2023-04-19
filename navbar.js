import React from "react";
import {Link} from 'react-router-dom';
import logo from '../images/header_logo.svg';
function Navbar()
{
    return(
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
  <div class="container">
  <img src={logo} alt="Logo" style={{width:'50px',}} className="logo1"/>
    <Link to="/" class="navbar-brand">WebApplications</Link> 

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active">Home</Link> 
        </li>
        <li class="nav-item">
        <Link to="/about" class="nav-link active">About</Link> 
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link active">Contact</Link> 
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
    );
}
export default Navbar;