import React from 'react';
import StyledWrapper from './styled';

const Error = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Oops, something went wrong...</h2>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Error;
