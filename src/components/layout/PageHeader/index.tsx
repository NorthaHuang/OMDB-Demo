import React from 'react';
import StyledWrapper from './styled';

const PageHeader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>OMDb DEMO</h1>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default PageHeader;
