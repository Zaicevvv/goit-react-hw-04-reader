import React from 'react';
import PropTypes from 'prop-types';
import css from './Counter.module.css';

const Counter = ({ number, counterMax }) => (
  <p className={css.counter}>
    {number + 1}/{counterMax}
  </p>
);

export default Counter;

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  counterMax: PropTypes.number.isRequired,
};
