import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Meals from './components/Meals';
import CalendarPage from './components/CalendarPage';
import { Switch, Route, Redirect, withRouter, Link, NavLink } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
      return (
        <BrowserRouter>
            <div className="App">
              <NavBar />
            <Switch >
              <Route exact path='/meals' component={ Meals } />
              <Route exact path='/calendar' component={ CalendarPage } />
              <Route path='/' component={ Main } />
              </Switch>
              <Footer />
            </div>
        </BrowserRouter>
      );
  };
}

export default App;