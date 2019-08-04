import React from 'react';
import PropTypes from 'prop-types';
import css from './Publication.module.css';

const Publication = ({ item }) => (
  <section key={item.id} className={css.publication}>
    <h2>{item.title}</h2>
    <p>{item.text}</p>
  </section>
);

Publication.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
