/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ title }) {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((newValue) => (newValue + 1));
  };
  return (
    <div>
      <h3>{ title }</h3>
      <div> {value}</div>
      <button onClick={handleClick}>Add</button>
      <button onClick={() => setValue((newValue) => newValue - 1)}>Subtract</button>
      <button onClick={() => setValue(0)}>Reset</button>
    </div>
  );
}

Counter.propTypes = {
  title: PropTypes.string.isRequired,
};
