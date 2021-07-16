import React, { Component } from 'react';
import { Button, FormGroup } from 'reactstrap';

class Meals extends Component {
    render() {
        return (
            <div className="container">
                <p></p>
                <form>
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
                    <Button>
                        Add Meal
                    </Button>
                </form>
             </div>
        );
    }
}

export default Meals;