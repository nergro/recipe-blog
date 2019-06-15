import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap';
import Slider from 'react-slick';
import Spinner from '../UI/Spinner/Spinner';

class Heading extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      accessibility: true,
      centerMode: true,
      draggable: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      variableWidth: true,

      adaptiveHeight: true
    };

    let recipes = this.props.latestRecipes.slice(0, 5);

    let slider = this.props.loading ? (
      <Spinner />
    ) : (
      <Slider {...settings}>
        {recipes.map(recipe => {
          return (
            <div key={recipe.idMeal}>
              <Card>
                <Card.Img variant='top' src={recipe.strMealThumb} />
                <Card.Body>
                  <Card.Title>
                    <i className='fas fa-star full' />
                    <i className='fas fa-star full' />
                    <i className='fas fa-star full' />
                    <i className='fas fa-star empty' />
                    <i className='fas fa-star empty' />
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
          );
        })}
      </Slider>
    );

    const heading =
      this.props.errorMsg.length > 0 ? (
        <h1 className='text-centered'>Sorry! Something went wrong :(</h1>
      ) : (
        <React.Fragment>
          <h1 className='text-centered'>Welcome to our recipe blog</h1>
          <h5 className='text-centered'>
            Over 5000 recipes <br /> The most delicious experience for You
          </h5>
        </React.Fragment>
      );
    return (
      <div
        className='slider-wrap'
        style={{
          backgroundSize: 'cover'
        }}
      >
        {heading}
        {slider}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    latestRecipes: state.latest.latestRecipes,
    loading: state.latest.loading,
    errorMsg: state.latest.errorMsg
  };
};

export default connect(mapStateToProps)(Heading);
