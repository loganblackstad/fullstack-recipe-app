import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Recipes.css';

export default class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    }
  }

  componentDidMount() {
    fetch('/api/v1/recipes')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recipes: data
        })
      })
  }

  addLike = (index) => {
    // create a recplica of the new state
    var recipeGettingLiked = { ...this.state.recipes[index] };
    // find the recipe with the given id and create a copy of that
    recipeGettingLiked.likes = recipeGettingLiked.likes + 1;
    // update the likes on that copy
    // insert the newRecipes and setState
    var newRecipes = this.state.recipes.map((recipe, ndx) => {
      if (ndx === index) {
        return recipeGettingLiked;
      }
      return recipe;
    });
    this.setState({ recipes: newRecipes })
  };

  render() {
    return (
      <div>
        {this.state.recipes.map((recipe, index) => {
          return (
            <div key={recipe.id}>
              <h1>{recipe.name}<button className="btn-delete">Delete</button></h1>
              <p>Review: {recipe.review}</p>
              <p>Description: {recipe.description}</p>
              <p>Likes: {recipe.likes} </p>
              <button type="button" onClick={() => { this.addLike(index) }}>Add Like</button>
              <p>ID: {recipe.id}</p>

              <Link to={`/recipes/${recipe.id}`}>Show Details</Link>
            </div>
          )
        })}
      </div>
    )
  }
}


// <pre>{JSON.stringify(recipe, null, '\n')}</pre> */}