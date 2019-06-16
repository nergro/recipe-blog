import React from 'react';
import Spinner from '../Spinner/Spinner';

const jumbotron = props => {
  const hrefpath = '/categories/' + props.category;
  const path = props.category ? (
    <div className='path'>
      <a href='/'>Home</a>&nbsp;&nbsp;
      <i className='fas fa-chevron-right' />
      &nbsp;&nbsp;<a href='/categories'>Categories</a>&nbsp;&nbsp;
      <i className='fas fa-chevron-right' />
      &nbsp;&nbsp;
      <a href={hrefpath}>{props.category}</a>
    </div>
  ) : props.setCategory ? (
    <div className='path'>
      <a href='/'>Home</a>&nbsp;&nbsp;
      <i className='fas fa-chevron-right' />
      &nbsp;&nbsp;<a href='/categories'>Categories</a>&nbsp;&nbsp;
    </div>
  ) : (
    <div className='path'>
      <a href='/'>Home</a>&nbsp;&nbsp;
      <i className='fas fa-chevron-right' />
      &nbsp;&nbsp;{props.location}
    </div>
  );

  const location = props.location ? props.location.toUpperCase() : <Spinner />;
  return (
    <div className='jumbotron'>
      {path}
      <h1>{location}</h1>
    </div>
  );
};

export default jumbotron;
