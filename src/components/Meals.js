import React, { Component } from 'react';
import { FormGroup, Form } from 'reactstrap';
import MealList from './MealList';

class Meals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mealName: '',
            mealType: ''
        }
    };

    //add a post call to the handle change to make the meal contents do something???
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value; 
        const name = target.name;
    
        this.setState({
          [name]: value
        },
        ()=>console.log(this.state) );
      }

    render() {
        return (
            <div className="container">
                <p></p>
                <Form>
                    <FormGroup>
                    <label style={{margin:10}}>
                        Meal Name: </label>
                        <input
                        name="mealName"
                        type="text"
                        value={this.state.mealName}
                        onChange={this.handleInputChange}
                        />
                    
                    </FormGroup>
                                              
                    <label style={{margin:10}}>Meal Type: </label>
                    <select id = "dropdown"
                    name="mealType"
                    value={this.state.mealType} 
                    onChange={this.handleInputChange}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Snack">Snack</option>
                    </select>
                    
                    {/* <input type="submit" value="Submit" onClick={() => console.log('submit')} /> */}
                </Form>
                <p></p>
                < MealList />
             </div>
        );
    }
}

export default Meals;