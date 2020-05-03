import React from 'react';
import PropTypes from 'prop-types';
import styles from './Events.module.scss';

const Events = (props) => {
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2>Events View</h2>
      {id}
    </div>
  );
};

Events.propTypes = {
  match: PropTypes.object,
};

export default Events;