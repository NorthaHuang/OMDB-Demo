import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StyledWrapper from './styled';
import StyledGlobal from '../styles/StyledGlobal';
import PageHeader from '../components/layout/PageHeader';
import Main from '../components/layout/Main';
import PageFooter from '../components/layout/PageFooter';

const App = () => {
  return (
    <StyledWrapper>
      {/* Global Styles Component */}
      <StyledGlobal />

      <Router>
        <PageHeader />
        <Main />
      </Router>

      <PageFooter />
    </StyledWrapper>
  );
};

export default App;
