import React from 'react';
import logo from '../../assets/orange-logo.png';

const footer = () => {
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
              <a href='https://www.themealdb.com' target='_blank'>
                themealdb.com
              </a>
            </p>
            <button className='learnmore-footer-button'>Learn More</button>
          </div>
          <div className='center'>
            <h2>Recent Recipes</h2>
            <div className='footer-recipes'>
              <div className='footer-recipe'>
                <div className='footer-recipe-img'>
                  <img src='https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg' />
                </div>
                <div className='footer-recipe-content'>
                  <div className='footer-recipe-title'>
                    <h5>
                      <a href='#'>Spanish Tortilla</a>
                    </h5>
                  </div>
                  <div className='footer-recipe-author'>
                    <p>
                      By <strong>Justin S.</strong>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className='footer-recipe'>
                <div className='footer-recipe-img'>
                  <img src='https://www.themealdb.com/images/media/meals/xqqqtu1511637379.jpg' />
                </div>
                <div className='footer-recipe-content'>
                  <div className='footer-recipe-title'>
                    <h5>
                      <a href='#'>Sticky Toffee Pudding</a>
                    </h5>
                  </div>
                  <div className='footer-recipe-author'>
                    <p>
                      By <strong>Justin S.</strong>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className='footer-recipe'>
                <div className='footer-recipe-img'>
                  <img src='https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg' />
                </div>
                <div className='footer-recipe-content'>
                  <div className='footer-recipe-title'>
                    <h5>
                      <a href='#'>Massaman Beef curry</a>
                    </h5>
                  </div>
                  <div className='footer-recipe-author'>
                    <p>
                      By <strong>Justin S.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <h2>Search by category</h2>
            <div className='right-categories'>
              <a href='#'>
                <p>Beef</p>
              </a>
              <a href='#'>
                <p>Chicken</p>
              </a>
              <a href='#'>
                <p>Desert</p>
              </a>
              <a href='#'>
                <p>Lamb</p>
              </a>
              <a href='#'>
                <p>Miscellaneous</p>
              </a>
              <a href='#'>
                <p>Pasta</p>
              </a>
              <a href='#'>
                <p>Pork</p>
              </a>
              <a href='#'>
                <p>Seafood</p>
              </a>
              <a href='#'>
                <p>Side</p>
              </a>
              <a href='#'>
                <p>Starter</p>
              </a>
              <a href='#'>
                <p>Vegan</p>
              </a>
              <a href='#'>
                <p>Vegetarian</p>
              </a>
            </div>
            <button className='viewall-footer-right-button'>View All</button>
          </div>
        </div>
      </div>

      <div className='copyright'>
        <p>
          Copyright &copy; 2019 <a href=''>nng.lt</a>
        </p>
        <div className='footer-socials'>
          <a href='#'>
            <i className='fab fa-facebook-square' />
          </a>
          <a href='#'>
            <i className='fab fa-instagram' />
          </a>
          <a href='#'>
            <i className='fab fa-twitter' />
          </a>
          <a href='#'>
            <i className='fab fa-snapchat' />
          </a>
          <a href='#'>
            <i className='fab fa-pinterest' />
          </a>
          <a href='#'>
            <i className='fab fa-linkedin' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
