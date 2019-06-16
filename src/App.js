import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';

import './index.scss';
import Homepage from './containers/Homepage/Homepage';
import Categories from './containers/Categories/Categories';
import Category from './containers/Categories/Category/Category';
import Recipe from './containers/Recipe/Recipe';
import Flags from './containers/Flags/Flags';
import Random from './containers/Recipe/Random/Random';

class App extends Component {
  componentDidMount() {
    this.props.fetchLatest();
  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/categories/:name/:name' component={Recipe} />
          <Route path='/categories/:name' component={Category} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/country/:name' component={Flags} />
          <Route path='/random' component={Random} />
          <Route path='/' component={Homepage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLatest: () => dispatch(actions.fetchLatestRecipes())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
