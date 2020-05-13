import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Booking from '../src/components/views/Booking/Booking';
import Events from '../src/components/views/Events/Events';
import Waiter from '../src/components/views/Waiter/WaiterContainer';
import Order from '../src/components/views/Order/OrderContainer';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#19a540',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`}/>
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Events}/>
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter}/>
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Order}/>
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen}/>
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
