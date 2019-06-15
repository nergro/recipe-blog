import React from 'react';

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
  return (
    <div className='jumbotron'>
      {path}
      <h1>{props.location.toUpperCase()}</h1>
    </div>
  );
};

export default jumbotron;
