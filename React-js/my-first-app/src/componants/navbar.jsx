import React from 'react';
import {   NavLink} from 'react-router-dom';

const NavBar = props => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <h1 className="navbar-brand">Resturant App</h1>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                              {/* <li className="nav-item active">
                                <NavLink className="nav-link" to="/home">Home </NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Conact</NavLink>
                              </li> */}
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/admin">Admin</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">ShoppingCart</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/menu">MenuProduct</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                              </li>


                            </ul>
                                
                          </div>
                          <div className="dropdown">
                                 <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                      
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {/* <li className="nav-item active">
                                <NavLink className="nav-link" to="/home">Home </NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Conact</NavLink>
                              </li> */}
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/admin">Admin</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">ShoppingCart</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/menu">MenuProduct</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                              </li>
                                    </ul>
                                  </div>
        <span className="badge badge-pill badge-primary"><i className="fas fa-cart-plus"></i>{props.productCount}</span>
        
      </nav>
    );
};

export default NavBar;

