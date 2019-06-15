import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import Homepage from './containers/Homepage/Homepage';
import Categories from './containers/Categories/Categories';
import Category from './containers/Categories/Category/Category';
import Recipe from './containers/Recipe/Recipe';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/categories/:name/:name' component={Recipe} />
          <Route path='/categories/:name' component={Category} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/' component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
