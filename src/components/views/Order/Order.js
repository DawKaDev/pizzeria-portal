import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

class Order extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    order: PropTypes.func,
    id: PropTypes.string,
  };
 
  componentDidMount(){
    const { order } = this.props;
    order();
  }

  render(){
    const { id } = this.props;
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>Order <span>{id}</span></h2>
      </div>
    );
  }
}

export default Order;