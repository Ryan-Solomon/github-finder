import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <React.Fragment>
      <img
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        src={spinner}
        alt='Spinner'
      />
    </React.Fragment>
  );
};

export default Spinner;
