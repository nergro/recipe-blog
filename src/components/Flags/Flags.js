import React from 'react';

/* Importing all files from ./Images */
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('../../assets/flags', false, /\.(png|jpe?g|svg)$/)
);

const flags = () => {
  return (
    <div className='flags-wrap'>
      <a href='#'>
        <img src={images['canada.png']} />
      </a>
      <a href='#'>
        <img src={images['china.png']} />
      </a>
      <a href='#'>
        <img src={images['egypt.png']} />
      </a>
      <a href='#'>
        <img src={images['france.png']} />
      </a>
      <a href='#'>
        <img src={images['germany.png']} />
      </a>
      <a href='#'>
        <img src={images['india.png']} />
      </a>
      <a href='#'>
        <img src={images['ireland.png']} />
      </a>
      <a href='#'>
        <img src={images['jamaica.png']} />
      </a>
      <a href='#'>
        <img src={images['japan.png']} />
      </a>
      <a href='#'>
        <img src={images['malaysia.png']} />
      </a>
      <a href='#'>
        <img src={images['mexico.png']} />
      </a>
      <a href='#'>
        <img src={images['morocco.png']} />
      </a>
      <a href='#'>
        <img src={images['russia.png']} />
      </a>
      <a href='#'>
        <img src={images['spain.png']} />
      </a>
      <a href='#'>
        <img src={images['thailand.png']} />
      </a>
      <a href='#'>
        <img src={images['united-kingdom.png']} />
      </a>
      <a href='#'>
        <img src={images['united-states-of-america.png']} />
      </a>
      <a href='#'>
        <img src={images['vietnam.png']} />
      </a>
    </div>
  );
};

export default flags;
