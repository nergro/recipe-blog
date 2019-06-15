import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as action from '../../store/actions';

import Heading from '../../components/Heading/Heading';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/UI/Spinner/Spinner';

class Recipe extends React.PureComponent {
  state = {
    mealId: '',
    instructions: ''
  };
  componentDidMount() {
    let curr = this.props.location.pathname
      .split('/')
      .slice(-1)
      .toString();
    curr = curr.charAt(0).toUpperCase() + curr.slice(1);
    this.setState({
      mealId: curr
    });
    this.props.fetchRecipe(curr);
  }
  render() {
    console.log('RECIPE');
    console.log(this.props.recipe);
    let ings = [];
    let meas = [];

    Object.keys(this.props.recipe).map((key, index) => {
      if (index >= 9 && index <= 28) {
        ings.push(this.props.recipe[key]);
      }
      if (index >= 29 && index <= 48) {
        meas.push(this.props.recipe[key]);
      }
      return ings;
    });

    const recipeContent = this.props.loading ? (
      <Spinner />
    ) : (
      <div className='single-recipe'>
        <div className='head'>
          <div className='category'>
            <i className='fas fa-pizza-slice fa-2x' />
            {this.props.recipe.strCategory}
          </div>
          <div className='location'>
            <i className='fas fa-globe-europe fa-2x' />
            {this.props.recipe.strArea}
          </div>
          <div className='rating'>
            <span>RATING</span>
            <div className='stars'>
              <i className='fas fa-star full fa-lg' />
              <i className='fas fa-star full fa-lg' />
              <i className='fas fa-star full fa-lg' />
              <i className='fas fa-star empty fa-lg' />
              <i className='fas fa-star empty fa-lg' />
            </div>
          </div>
          <div className='difficulty'>
            <span>DIFFICULTY</span>
            <div className='difficulty-level'>Beginner</div>
          </div>
        </div>

        <div className='flexbox-container'>
          <div className='left-col'>
            <img src={this.props.recipe.strMealThumb} alt='Meal' />
            <hr className='img-hr' />
            <div className='prep'>
              <span className='serving'>
                <i className='fas fa-users fa-2x' />{' '}
                <span>
                  <strong>8</strong> Servings
                </span>
              </span>
              <span className='time'>
                <i className='far fa-clock fa-2x' />{' '}
                <span>
                  <strong>Total time:</strong> 30 mins
                </span>
              </span>
            </div>
          </div>
          <div className='right-col'>
            <h2>Ingredients</h2>
            <div className='ingr-list'>
              {ings.map((value, index) => {
                if (value.length > 0) {
                  return (
                    <label className='container' key={index}>
                      <input type='checkbox' />
                      <span className='input-label'>
                        <span className='measure'>{meas[index]}</span> {value}
                      </span>
                      <span className='checkmark' />
                    </label>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className='instructions'>
          <h2>Instructions</h2>
          <div className='instr-text'>
            <p>{this.props.recipe.strInstructions}</p>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <Heading />
        <Jumbotron location='Somerecipe' category='Beef' />
        {recipeContent}
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
    fetchRecipe: id => dispatch(action.fetchRecipe(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Recipe));
