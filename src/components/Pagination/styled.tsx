import styled from 'styled-components';

const StyledWrapper = styled.section`
  ul {
    display: flex;
    justify-content: center;
  }

  li {
    &:not(:last-of-type) {
      border-right: 1px solid #000;
    }
  }

  button {
    padding: 0 10px;
    color: blue;
  }
`;

export default StyledWrapper;
