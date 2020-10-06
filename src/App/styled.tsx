import styled from 'styled-components';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

export default StyledWrapper;
