import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import Heading from '../../../components/Heading/Heading';
import Jumbotron from '../../../components/UI/Jumbotron/Jumbotron';
import Footer from '../../../components/Footer/Footer';
import { Card } from 'react-bootstrap';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Category extends Component {
  state = {
    currentPage: ''
  };
  componentDidMount() {
    let curr = this.props.location.pathname
      .split('/')
      .slice(-1)
      .toString();
    curr = curr.charAt(0).toUpperCase() + curr.slice(1);
    this.setState({
      currentPage: curr
    });

    this.props.fetchCategoryMeals(curr);
  }

  onMealClick = mealId => {
    this.props.history.push(
      '/categories/' + this.state.currentPage + '/' + mealId
    );
  };

  render() {
    const meals = this.props.loading ? (
      <Spinner />
    ) : this.props.meals ? (
      this.props.meals.map(meal => (
        <div key={meal.idMeal} onClick={id => this.onMealClick(meal.idMeal)}>
          <Card>
            <Card.Img variant='top' src={meal.strMealThumb} />
            <Card.Body>
              <Card.Title>
                <br />
                <h2>{meal.strMeal}</h2>
                <hr />
              </Card.Title>
              {/* <Card.Text>{excerpt}</Card.Text> */}
            </Card.Body>
          </Card>
        </div>
      ))
    ) : (
      <h1 style={{ textAlign: 'center' }}>No meals found in this category</h1>
    );
    const wrapperStyle = {
      display: this.props.loading
        ? 'block'
        : this.props.meals
        ? 'grid'
        : 'block'
    };

    return (
      <div>
        <Heading />
        <Jumbotron location={this.state.currentPage} setCategory={true} />
        <div className='categories-wrapper' style={wrapperStyle}>
          {meals}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meals: state.category.meals,
    // catNames: state.categories.categoriesNames,
    errorMsg: state.category.errorMsg,
    loading: state.category.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategoryMeals: category => dispatch(actions.fetchCategory(category))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Category));
