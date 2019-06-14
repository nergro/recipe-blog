import React from 'react';

const autocomplete = () => {
  return (
    <div className='autocomplete'>
      <ul>
        <li>
          <div className='auto-left'>
            <img src='https://www.themealdb.com/images/media/meals/1550442508.jpg' />
          </div>
          <div className='auto-right'>
            <h4>Chocolate Caramel Crispy</h4>
            <div className='categ-loc'>
              <span className='categ'>
                <i className='fas fa-pizza-slice fa-lg' />
                Desert
              </span>
              <span className='locat'>
                <i className='fas fa-globe-europe fa-lg' />
                Canadian
              </span>
            </div>
          </div>
        </li>
        <hr />
        <li>
          <div className='auto-left'>
            <img src='https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg' />
          </div>
          <div className='auto-right'>
            <h4>Duck Confit</h4>
            <div className='categ-loc'>
              <span className='categ'>
                <i className='fas fa-pizza-slice fa-lg' />
                Miscellaneous
              </span>
              <span className='locat'>
                <i className='fas fa-globe-europe fa-lg' />
                French
              </span>
            </div>
          </div>
        </li>
        <hr />
        <li>
          <div className='auto-left'>
            <img src='https://www.themealdb.com/images/media/meals/1520083578.jpg' />
          </div>
          <div className='auto-right'>
            <h4>Oxtail with broad beans</h4>
            <div className='categ-loc'>
              <span className='categ'>
                <i className='fas fa-pizza-slice fa-lg' />
                Beef
              </span>
              <span className='locat'>
                <i className='fas fa-globe-europe fa-lg' />
                Jamaican
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default autocomplete;
