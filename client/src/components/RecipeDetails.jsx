import React, { Component } from 'react'

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      details: {},
      loading: true,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/v1/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ details: data, loading: false })
      })
  }

  render() {
    const { details, loading } = this.state;

    console.log(details)

    if (loading) {
      return <div>Loading...</div>
    }


    return (
      <div className="RecipeDetails">
        <h1>{details.name}</h1>
      </div>
    )
  }
}