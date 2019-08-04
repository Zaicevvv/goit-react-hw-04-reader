import React from 'react';
import PropTypes from 'prop-types';
import css from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement, number, counterMax }) => (
  <section className={css.controls}>
    <button
      type="button"
      className={css.button}
      onClick={onDecrement}
      disabled={number === 0}
    >
      Назад
    </button>
    <button
      type="button"
      className={css.button}
      onClick={onIncrement}
      disabled={number === counterMax - 1}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  counterMax: PropTypes.number.isRequired,
};

export default Controls;
