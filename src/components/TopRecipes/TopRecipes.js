import React from 'react';
import { Card } from 'react-bootstrap';

const topRecipes = () => {
  return (
    <div className='latest-wrapper text-centered'>
      <h1>Top Rated recipes</h1>
      <h5>Meals You should try with no doubt</h5>
      <button className='viewall-button'>View All Recipes</button>
      <div className='recipe-wrap' id='recipe-wrap'>
        <Card className='top1'>
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
            <Card.Text>#Pasta #Curry99</Card.Text>
          </Card.Body>
        </Card>

        <Card className='top2'>
          <Card.Img
            variant='top'
            src='https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg'
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
        <Card className='top3'>
          <Card.Img
            variant='top'
            src='https://www.themealdb.com/images/media/meals/1529445434.jpg'
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
        <Card className='top4'>
          <Card.Img
            variant='top'
            src='https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg'
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
        <Card className='top5'>
          <Card.Img
            variant='top'
            src='https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg'
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
        <Card className='top6'>
          <Card.Img
            variant='top'
            src='https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg'
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
        <Card className='top7'>
          <Card.Img
            variant='top'
            src='https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg'
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
        <Card className='top8'>
          <Card.Img
            variant='top'
            src='https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg'
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
    </div>
  );
};

export default topRecipes;
