import { connect } from 'react-redux';
import Order from './Order';
import { getOrderFromAPI } from '../../../redux/OrderRedux';

const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
});

const mapDispatchToProps = (dispatch) => ({
  order: () => getOrderFromAPI(234),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);