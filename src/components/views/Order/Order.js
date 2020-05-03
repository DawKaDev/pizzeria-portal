import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = (props) => {
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>Order <span>{id}</span></h2>
    </div>
  );
};

Order.propTypes = {
  match: PropTypes.object,
};

export default Order;