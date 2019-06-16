import React from 'react';

/* Importing all files from ./Images */
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return item;
  });
  return images;
}

const images = importAll(
  require.context('../../assets/flags', false, /\.(png|jpe?g|svg)$/)
);

const flags = () => {
  return (
    <div className='flags-wrap'>
      <a href='/country/Canadian'>
        <img src={images['canada.png']} alt='canada' />
      </a>
      <a href='/country/Chinese'>
        <img src={images['china.png']} alt='china' />
      </a>
      <a href='/country/Egyptian'>
        <img src={images['egypt.png']} alt='egypt' />
      </a>
      <a href='/country/French'>
        <img src={images['france.png']} alt='france' />
      </a>
      <a href='/country/Dutch'>
        <img src={images['germany.png']} alt='germany' />
      </a>
      <a href='/country/Indian'>
        <img src={images['india.png']} alt='india' />
      </a>
      <a href='/country/Irish'>
        <img src={images['ireland.png']} alt='ireland' />
      </a>
      <a href='/country/Jamaican'>
        <img src={images['jamaica.png']} alt='jamaica' />
      </a>
      <a href='/country/Japanese'>
        <img src={images['japan.png']} alt='japan' />
      </a>
      <a href='/country/Malaysian'>
        <img src={images['malaysia.png']} alt='malaysia' />
      </a>
      <a href='/country/Mexican'>
        <img src={images['mexico.png']} alt='mexico' />
      </a>
      <a href='/country/Moroccan'>
        <img src={images['morocco.png']} alt='morocco' />
      </a>
      <a href='/country/Russian'>
        <img src={images['russia.png']} alt='russia' />
      </a>
      <a href='/country/Spanish'>
        <img src={images['spain.png']} alt='spain' />
      </a>
      <a href='/country/Thai'>
        <img src={images['thailand.png']} alt='thailand' />
      </a>
      <a href='/country/British'>
        <img src={images['united-kingdom.png']} alt='uk' />
      </a>
      <a href='/country/American'>
        <img src={images['united-states-of-america.png']} alt='usa' />
      </a>
      <a href='/country/Vietnamese'>
        <img src={images['vietnam.png']} alt='vietnam' />
      </a>
    </div>
  );
};

export default flags;
