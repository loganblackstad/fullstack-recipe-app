import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


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

  render() {
    return (
      <div>
        {this.state.recipes.map(recipe => {
          return (
            <div key={recipe.id}>
              <h1>{recipe.name}</h1>
              <p>Review: {recipe.review}</p>
              <p>Description: {recipe.description}</p>
              <p>Likes: {recipe.likes}</p>
              <p>ID: {recipe.id}</p>

              <NavLink to={`/recipes/${recipe.id}`}>Show Details</NavLink>
            </div>
          )
        })}
      </div>
    )
  }
}


// <pre>{JSON.stringify(recipe, null, '\n')}</pre> */}