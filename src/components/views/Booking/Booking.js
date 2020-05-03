import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = (props) => {
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>Booking <span>{id}</span></h2>
    </div>
  );
};

Booking.propTypes = {
  match: PropTypes.object,
};

export default Booking;