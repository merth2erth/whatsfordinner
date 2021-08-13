import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="info">
                <div className="container">
                    <NavbarBrand href="/"><h2>What's for Dinner?</h2></NavbarBrand>

                  
                        <ul role="nav">
                                <li style={{color:"aquamarine"}}><NavLink activeClassName="is-active" to="/main" style={{color:"white"}}>Dashboard</NavLink></li>
                                <li style={{color:"aquamarine"}}><NavLink activeClassName="is-active" to="/meals" style={{color:"white"}}>Meals</NavLink></li>
                                <li style={{color:"aquamarine"}}><NavLink activeClassName="is-active" to="/calendar" style={{color:"white"}}>Calendar</NavLink></li>
                            </ul>
                            
  </div>

                </Navbar>
            </div>
         ) }
}

export default NavBar;