import React from 'react';
import Spinner from '../UI/Spinner/Spinner';

const autocomplete = props => {
  console.log('MEALS');
  console.log(props.meals);
  const autocompleteDisplay = {
    display: props.show ? 'block' : 'none'
  };
  const mealsList = props.loading ? (
    <Spinner />
  ) : props.meals.length === 0 ? (
    <li style={{ display: 'block', textAlign: 'center' }}>
      <h4>Sorry! No recipes found</h4>
    </li>
  ) : (
    props.meals.slice(0, 4).map(meal => {
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
      <ul>{mealsList}</ul>
    </div>
  );
};

export default autocomplete;
