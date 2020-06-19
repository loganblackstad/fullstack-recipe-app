import React, { Component } from 'react'

export default class Recipes extends Component {
  constructor() {
    super();

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
            <div>
              <h1>{recipe.name}</h1>
              <pre>{JSON.stringify(recipe, null, '\n')}</pre>
            </div>
          )
        })}
      </div>
    )
  }
}