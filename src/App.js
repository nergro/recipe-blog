import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import Homepage from './containers/Homepage/Homepage';
import Categories from './containers/Categories/Categories';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/categories' component={Categories} />
          <Route path='/' component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
