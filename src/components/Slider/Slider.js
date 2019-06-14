import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap';
import Slider from 'react-slick';

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
    console.log('RECIPEZ');
    console.log(recipes);

    return (
      <div
        className='slider-wrap'
        style={{
          backgroundSize: 'cover'
        }}
      >
        <h1 className='text-centered'>Welcome to our recipe blog</h1>
        <h5 className='text-centered'>
          Over 5000 recipes <br /> The most delicious experience for You
        </h5>

        <Slider {...settings}>
          {/* {recipes.map(recipe => {
            return  <div>
            <Card>
              <Card.Img
                variant='top'
                src='https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'
              />
              <Card.Body>
                <Card.Title>
                  <i className='fas fa-star full' />
                  <i className='fas fa-star full' />
                  <i className='fas fa-star full' />
                  <i className='fas fa-star empty' />
                  <i className='fas fa-star empty' />
                  <br />
                  <h2>Spicy Arrabiata Penne</h2>

                  <hr />
                </Card.Title>
                <Card.Text>#Pasta #Curry</Card.Text>
              </Card.Body>
            </Card>
          </div>
          })} */}
          {recipes.map(recipe => {
            console.log(recipe);
            return (
              <div>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    latestRecipes: state.latestRecipes
  };
};

export default connect(mapStateToProps)(Heading);
