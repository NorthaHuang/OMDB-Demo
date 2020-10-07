import React from 'react';
import StyledWrapper from './styled';
import { IComponentProps } from './types';

const Error = ({ message }: IComponentProps) => {
  return (
    <StyledWrapper>
      <h2>Oops, something went wrong...</h2>

      {message && (
        <p>
          Message: <span>{message}</span>
        </p>
      )}
    </StyledWrapper>
  );
};

Error.defaultProps = {
  message: '',
};

export default Error;
