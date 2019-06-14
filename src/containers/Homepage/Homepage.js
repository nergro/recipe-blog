import React, { Component } from 'react';
import Heading from '../../components/Heading/Heading';
import Slider from '../../components/Slider/Slider';
import Basilbox from '../../components/Basilbox/Basilbox';
import Footer from '../../components/Footer/Footer';
import TopRecipes from '../../components/TopRecipes/TopRecipes';
import Flags from '../../components/Flags/Flags';

class Homepage extends Component {
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

export default Homepage;
