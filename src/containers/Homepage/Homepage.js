import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Heading from '../../components/Heading/Heading';
import Slider from '../../components/Slider/Slider';
import Basilbox from '../../components/Basilbox/Basilbox';
import Footer from '../../components/Footer/Footer';
import TopRecipes from '../../components/TopRecipes/TopRecipes';
import Flags from '../../components/Flags/Flags';

class Homepage extends Component {
  componentDidMount() {
    this.props.fetchLatestRecipes();
  }
  render() {
    return (
      <div>
        <Heading />
        <Slider />
        <Basilbox />
        <TopRecipes />
        <Flags />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLatestRecipes: () => dispatch(actions.fetchLatestRecipes())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Homepage);
