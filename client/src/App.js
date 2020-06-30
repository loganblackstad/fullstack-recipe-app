import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Card from './components/Card';
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';
import Dashboard from './components/Dashboard';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: ['lachlan', 'joe', 'wes', 'liz'],
      name: '',
      cards: [],
      initialDiscard: ['card4'],
      cardsPlayed: ['card1', 'card1', 'card2', 'card3']
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Dashboard player={this.state.players} />
            </Route>
            <Route path="/room">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>Back to Dashboard</Link>
              <Card />
            </Route>
            <Route path="/recipes/new" exact component={RecipeForm} />
            <Route path="/recipes/:id" component={RecipeDetails} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
