import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class MealList extends Component {
    state={
        ideas: [
            {id: 0,
            name: "spaghetti",
            meal: "Dinner"},

            {id: 1,
            name: "tacos",
            meal: "Dinner"}
        ]
    }

    render() {
        return (
            <div>
                <ul>
                {this.state.ideas.map((idea) =>
                <li key={idea.id}>
                    {idea.name} - {idea.meal}
                    
                </li>)
                }
                </ul>
            </div>
        );
    }
}

export default MealList;