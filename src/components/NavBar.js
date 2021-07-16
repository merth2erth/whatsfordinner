import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect, withRouter, Link, NavLink } from 'react-router-dom';
import Meals from './Meals';
import Calendar from './CalendarPage';
import Main from './Main'

class NavBar extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="info">
                <div className="container">
                    <NavbarBrand href="/"><h2>What's for Dinner?</h2></NavbarBrand>

                  
                        <ul role="nav">
                                <li><NavLink activeClassName="is-active" to="/main" style={{color:"white"}}>Dashboard</NavLink></li>
                                <li><NavLink activeClassName="is-active" to="/meals" style={{color:"white"}}>Meals</NavLink></li>
                                <li><NavLink activeClassName="is-active" to="/calendar" style={{color:"white"}}>Calendar</NavLink></li>
                            </ul>
                            
  </div>

                </Navbar>
            </div>
         ) }
}

export default NavBar;