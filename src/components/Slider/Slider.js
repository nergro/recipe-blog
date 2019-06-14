import React, { Component } from 'react';
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
          <div>
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
                <Card.Text>
                  <h3>#Pasta #Curry</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant='top'
                src='https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg'
              />
              <Card.Body>
                <Card.Title>
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <br />
                  <h2>Spicy Arrabiata Penne</h2>

                  <hr />
                </Card.Title>
                <Card.Text>
                  <h3>#Pasta #Curry</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant='top'
                src='https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg'
              />
              <Card.Body>
                <Card.Title>
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <br />
                  <h2>Spicy Arrabiata Penne</h2>

                  <hr />
                </Card.Title>
                <Card.Text>
                  <h3>#Pasta #Curry</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant='top'
                src='https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg'
              />
              <Card.Body>
                <Card.Title>
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <br />
                  <h2>Spicy Arrabiata Penne</h2>

                  <hr />
                </Card.Title>
                <Card.Text>
                  <h3>#Pasta #Curry</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant='top'
                src='https://www.themealdb.com/images/media/meals/rxvxrr1511797671.jpg'
              />
              <Card.Body>
                <Card.Title>
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <i className='fas fa-star' />
                  <br />
                  <h2>Spicy Arrabiata Penne</h2>

                  <hr />
                </Card.Title>
                <Card.Text>
                  <h3>#Pasta #Curry</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Heading;
