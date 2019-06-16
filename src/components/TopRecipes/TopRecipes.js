import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

class topRecipes extends Component {
  onMealClick = (mealId, category) => {
    const path = '/categories/' + category + '/' + mealId;
    this.props.history.push(path);
  };

  render() {
    const recipes = [...this.props.recipes].reverse().slice(0, 8);
    return (
      <div className='latest-wrapper text-centered'>
        <h1>Top Rated recipes</h1>
        <h5>Meals You should try with no doubt</h5>
        <a href='/categories' className='viewall-button'>
          View All Recipes
        </a>
        <div className='recipe-wrap' id='recipe-wrap'>
          {recipes.map(recipe => (
            <div
              onClick={(mealId, category) =>
                this.onMealClick(recipe.idMeal, recipe.strCategory)
              }
              key={recipe.idMeal}
              className='top-recipe-div'
            >
              <Card className='top1'>
                <Card.Img variant='top' src={recipe.strMealThumb} />
                <Card.Body>
                  <Card.Title>
                    <i className='fas fa-star full' />
                    <i className='fas fa-star full' />
                    <i className='fas fa-star full' />
                    <i className='fas fa-star full' />
                    <i className='fas fa-star full' />
                    <br />
                    <h2>{recipe.strMeal}</h2>

                    <hr />
                  </Card.Title>
                  <Card.Text>
                    #{recipe.strArea} #{recipe.strCategory}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.latest.latestRecipes
  };
};

export default connect(mapStateToProps)(withRouter(topRecipes));
