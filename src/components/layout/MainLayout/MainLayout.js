import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container } from '@material-ui/core';

const MainLayout = ({children}) => {
  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters='true'>
            <PageNav/>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Container maxWidth='lg'>
        {children}
      </Container>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;