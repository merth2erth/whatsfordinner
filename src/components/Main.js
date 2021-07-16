import React, { Component } from 'react';
import { TodayIs } from './Date';
import MealIdea from './MealIdea';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <p></p>
        <h5><TodayIs /></h5>
        <MealIdea />
      </div>
    );
  }
}

export default Main;