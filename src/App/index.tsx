import React from 'react';
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

      <div>
        <PageHeader />
        <Main />
      </div>

      <PageFooter />
    </StyledWrapper>
  );
};

export default App;
