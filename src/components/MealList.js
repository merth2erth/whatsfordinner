import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { connect, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { addMeal, deleteMeal } from '../redux/configureStore';

const MealList = (props) =>  {
    const dispatch = useDispatch()
            return (
            <div>
                <Button onClick={() => dispatch(addMeal('grilled cheese'))}>Add Meal #2</Button>
                <ul>
                {props.userMeals.map((meal) =>
                <li key={meal}>
                    {meal}
                    
                </li>)
                }
                </ul>
                <Button onClick={() => dispatch(deleteMeal())}>Delete Meal</Button>
            </div>
        );
    }

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userMeals: state.userMeals
    }
}
export default connect(mapStateToProps)(MealList);