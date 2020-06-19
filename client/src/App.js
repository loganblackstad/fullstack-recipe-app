import React from 'react';
import './App.css';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Recipes} />
          <Route path='/recipes/:id' component={RecipeDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;