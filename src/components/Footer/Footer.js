import React from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/orange-logo.png';

const RANDOM_NAMES = [
  'Micheal D.',
  'Alexandra H.',
  'Rufus P.',
  'Dawn R.',
  'Angela H.',
  'Rhonda F.',
  'Darryl A.',
  'Benjamin S.',
  'Julio C.',
  'Emma G.'
];

const footer = props => {
  let latestRecipes = [];
  if (props.latest) {
    latestRecipes = props.latest.slice(0, 3);
  }

  return (
    <footer>
      <div className='wrapper'>
        <div className='footer-row'>
          <div className='left'>
            <img src={logo} alt='Recipe logo' />
            <p>
              Recipes is free recipe blog with very rich content. You will find
              the most popular and best rated meals in the world. Over 1000
              recipes are waiting for You!
            </p>
            <p>
              Recipe API source:{' '}
              <a
                href='https://www.themealdb.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                themealdb.com
              </a>
            </p>
            <a
              href='https://themealdb.com/api.php'
              target='_blank'
              rel='noopener noreferrer'
              className='learnmore-footer-button'
            >
              Learn More
            </a>
          </div>
          <div className='center'>
            <h2>Recent Recipes</h2>
            <div className='footer-recipes'>
              {latestRecipes.map(recipe => {
                const path =
                  '/categories/' + recipe.strCategory + '/' + recipe.idMeal;
                return (
                  <div className='footer-recipe' key={recipe.idMeal}>
                    <div className='footer-recipe-img'>
                      <img src={recipe.strMealThumb} alt='Footer recipe' />
                    </div>
                    <div className='footer-recipe-content'>
                      <div className='footer-recipe-title'>
                        <h5>
                          <a href={path}>{recipe.strMeal}</a>
                        </h5>
                      </div>
                      <div className='footer-recipe-author'>
                        <p>
                          By{' '}
                          <strong>
                            {
                              RANDOM_NAMES[
                                Math.floor(Math.random() * RANDOM_NAMES.length)
                              ]
                            }
                          </strong>
                        </p>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='right'>
            <h2>Search by category</h2>
            <div className='right-categories'>
              <a href='/categories/Beef'>
                <p>Beef</p>
              </a>
              <a href='/categories/Chicken'>
                <p>Chicken</p>
              </a>
              <a href='/categories/Desert'>
                <p>Desert</p>
              </a>
              <a href='/categories/Lamb'>
                <p>Lamb</p>
              </a>
              <a href='/categories/Miscellaneous'>
                <p>Miscellaneous</p>
              </a>
              <a href='/categories/Pasta'>
                <p>Pasta</p>
              </a>
              <a href='/categories/Pork'>
                <p>Pork</p>
              </a>
              <a href='/categories/Seafood'>
                <p>Seafood</p>
              </a>
              <a href='/categories/Side'>
                <p>Side</p>
              </a>
              <a href='/categories/Starter'>
                <p>Starter</p>
              </a>
              <a href='/categories/Vegan'>
                <p>Vegan</p>
              </a>
              <a href='/categories/Vegetarian'>
                <p>Vegetarian</p>
              </a>
            </div>
            {/* <button className='viewall-footer-right-button'>View All</button> */}
          </div>
        </div>
      </div>

      <div className='copyright'>
        <p>
          Copyright &copy; 2019{' '}
          <a href='https://nng.lt' target='_blank' rel='noopener noreferrer'>
            nng.lt
          </a>
        </p>
        <div className='footer-socials'>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook-square' />
          </a>
          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram' />
          </a>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter' />
          </a>
          <a
            href='https://www.snapchat.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-snapchat' />
          </a>
          <a
            href='https://www.pinterest.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-pinterest' />
          </a>
          <a
            href='https://www.linkedin.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin' />
          </a>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = state => {
  return {
    latest: state.latest.latestRecipes
  };
};

export default connect(mapStateToProps)(footer);
