import React, { Component } from 'react';
import { Button, FormGroup } from 'reactstrap';
import MealList from './MealList';

class Meals extends Component {
    render() {
        return (
            <div className="container">
                <p></p>
                <FormGroup>
                    <p>Meal Name:</p>
                        <input
                        type="text"
                        />
                        </FormGroup>
                        <FormGroup>
                    <p>Meal Type:</p>
                    <select id = "dropdown">
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Snack">Snack</option>
                    </select>
                </FormGroup>
                <p></p>
                < MealList />
             </div>
        );
    }
}

export default Meals;