import React from 'react';
import PropTypes from 'prop-types';
import styles from './Events.module.scss';

const Events = (props) => {
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>Event <span>{id}</span></h2>
    </div>
  );
};

Events.propTypes = {
  match: PropTypes.object,
};

export default Events;