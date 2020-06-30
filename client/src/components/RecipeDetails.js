import React, { Component } from 'react'
import styles from './RecipeDetails.module.css';

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
        this.setState({
          details: data,
          loading: false,
        })
      })
  }

  /*
  increaseLikes = () => {
    // desctructuring
    const { id } = this.state.details;

    fetch('/api/v1/recipes/${id}/likes', {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          props.onLike(data)
        })
      });
  }
  */
  handleLike(newLikes) {
    this.setState({
      details: {
        ...this.state.details,
        like: newLikes
      }
    })
  }

  render() {
    const { loading, details } = this.state;

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <div className={styles.RecipeDetails} >
        <h1>{details.name}</h1>
        <p>Review:  {details.review}</p>
        {/* <p>Likes:  {details.likes} <button onClick={() => this.increaseLikes(props.id) > <span role="img" aria-label="Likes: ">👍</span></button></p> */}
      </div>
    )
  }
}
