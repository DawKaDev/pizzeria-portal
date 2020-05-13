import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import { settings } from '../../../settings';

/*const demoContent = [
  {id: '1', loc: 'middle left', status: 'free', order: null},
  {id: '2', loc: 'middle', status: 'thinking', order: null},
  {id: '3', loc: 'middle right', status: 'ordered', order: 123},
  {id: '4', loc: 'middle back', status: 'prepared', order: 234},
  {id: '5', loc: 'middle front', status: 'delivered', order: 345},
  {id: '6', loc: 'front left', status: 'paid', order: 456},
];*/

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    tables: PropTypes.any,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    changeTableStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  changeStatus(action, event){
    const { changeTableStatus } = this.props;
    changeTableStatus(action, event);
  }
  
  renderActions(status, table){
    const actions = settings.status[status].actions;
    const object = settings.status[status];
    const newOrder = status => {
      if(Object.prototype.hasOwnProperty.call(object, 'order'))
        if(settings.status[status].order === true)
          return true;
    };
    return (
      <div>
        {
          actions.map(action => (
            <Button key={action} value={table} onClick={(event)=>this.changeStatus(action, event.currentTarget.value)}>{action}</Button>
          ))
        }
        { newOrder(status) ? <Button onClick={(event)=>this.createOrder(event.currentTarget.value)}>New order</Button> : ''}
      </div>
    );
    /*switch (status) {
      case 'free':
        return (
          <>
            <Button>thinking</Button>
            <Button>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button>new order</Button>
        );
      case 'ordered':
        return (
          <Button>prepared</Button>
        );
      case 'prepared':
        return (
          <Button>delivered</Button>
        );
      case 'delivered':
        return (
          <Button>paid</Button>
        );
      case 'paid':
        return (
          <Button>free</Button>
        );
      default:
        return null;
    }*/
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;