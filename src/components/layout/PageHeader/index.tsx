import React from 'react';
import { Link } from 'react-router-dom';
import StyledWrapper from './styled';

const PageHeader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/">
              <h1>OMDb DEMO</h1>
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default PageHeader;
