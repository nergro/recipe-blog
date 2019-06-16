import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';

class Autocomplete extends Component {
  render() {
    const autocompleteDisplay = {
      display: this.props.isOpen ? 'block' : 'none'
    };
    const mealsList = this.props.loading ? (
      <Spinner />
    ) : (
      this.props.meals.slice(0, 4).map(meal => {
        const path = '/categories/search/' + meal.idMeal;
        return (
          <li key={meal.idMeal} className='search-meal-list-item'>
            <a href={path} className='search-meal-wrapper'>
              <div className='auto-left'>
                <img src={meal.strMealThumb} alt='Recipe' />
              </div>
              <div className='auto-right'>
                <h4>{meal.strMeal}</h4>
                <div className='categ-loc'>
                  <span className='categ'>
                    <i className='fas fa-pizza-slice fa-lg' />
                    {meal.strCategory === 'Miscellaneous'
                      ? 'Misc'
                      : meal.strCategory}
                  </span>
                  <span className='locat'>
                    <i className='fas fa-globe-europe fa-lg' />
                    {meal.strArea}
                  </span>
                </div>
              </div>
            </a>
          </li>
        );
      })
    );

    return (
      <div className='autocomplete' style={autocompleteDisplay}>
        <h4 style={{ display: 'block', textAlign: 'center' }}>
          {this.props.noFound}
        </h4>
        <ul>{mealsList}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    noFound: state.search.noFound
  };
};

export default connect(mapStateToProps)(Autocomplete);
