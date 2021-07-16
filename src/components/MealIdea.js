import React, { Component } from 'react';
import { Button } from 'reactstrap';
import  dinner from '../images/dinner.jpg'
import { Switch, Route, Redirect, withRouter, Link, NavLink } from 'react-router-dom';

class MealIdea extends Component {
    state={
        recipe: [],
        pic: <img src={dinner} alt="image by thelesleyshow" width='50%'/>
    };

getRecipe = () => {
    let url = `https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.REACT_APP_API}`;
    fetch(url, {
        method: "GET",
    })
    .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({
          recipe: data.recipes[0]
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

 

    render() {
        return (
            <div>
                {this.state.pic}
                
			<p></p>
               <Button onClick={this.getRecipe}>Get new idea!</Button>&nbsp;&nbsp;
               <Link to="/meals" className="btn btn-primary">Choose a favorite!</Link>
               <br /> <br />
               <a href={this.state.recipe.spoonacularSourceUrl} target="blank">{this.state.recipe.title}</a>
               <br />
               <img src={this.state.recipe.image} />
               <br /> <br />

            </div>
        );
    }
}

export default MealIdea;
