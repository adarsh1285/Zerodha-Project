import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'



function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container">
    <NavLink className="navbar-brand" to={"/"}>
      <img src='media/images/logo.svg' style={{width: "20%"}}/>
    </NavLink>
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav gap-5">
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"red": "adarsh"}} to={"/signup"}>Signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"red": "adarsh"}} to={"/about"}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"red": "adarsh"}} to={"/products"}>Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"red": "adarsh"}} to={"/pricing"}>Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(e)=>{return e.isActive?"red": "adarsh"}} to={"/support"}>Support</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )

}

export default Navbar
