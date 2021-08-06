import React, { Component } from 'react';
import { Button, FormGroup, Form } from 'reactstrap';
import MealList from './MealList';

class Meals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mealName: '',
            mealType: ''
        }
    };

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type 
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    //   }

    render() {
        return (
            <div className="container">
                <p></p>
                <Form>
                    <FormGroup>
                    <label>
                        Meal Name: 
                        <input
                        name="mealName"
                        type="text"
                        value={this.state.mealName}
                        onChange={this.handleInputChange}
                        />
                    </label>
                    </FormGroup>
                                              
                    <label>Meal Type: 
                    <select id = "dropdown"
                    name="mealType"
                    value={this.state.mealType} 
                    // onChange={this.handleInputChange}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Snack">Snack</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
                </Form>
                <p></p>
                < MealList />
             </div>
        );
    }
}

export default Meals;