import React from 'react';
import StyledWrapper from './styled';

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Loading;
