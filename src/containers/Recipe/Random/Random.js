import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router-dom';

import Heading from '../../Heading/Heading';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Footer from '../../../components/Footer/Footer';

class Random extends Component {
  componentDidMount() {
    this.props.fetchRecipe();
  }

  render() {
    console.log(this.props.recipe);
    return (
      <div>
        <Heading />
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.history.push('/categories/random/1')
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.recipe.recipe,
    loading: state.recipe.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipe: () => dispatch(actions.fetchRandomRecipe())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Random));
