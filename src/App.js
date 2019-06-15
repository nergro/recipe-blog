import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import Homepage from './containers/Homepage/Homepage';
import Categories from './containers/Categories/Categories';
import Category from './containers/Categories/Category/Category';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/categories/:id' component={Category} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/' component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
