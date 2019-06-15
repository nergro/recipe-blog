import React from 'react';

const jumbotron = props => {
  console.log('PROPS');
  console.log(props);
  return (
    <div className='jumbotron'>
      <div className='path'>
        <a href='/'>Home</a>&nbsp;
        <i className='fas fa-chevron-right' />
        &nbsp; {props.location}
      </div>
      <h1>{props.location.toUpperCase()}</h1>
    </div>
  );
};

export default jumbotron;
