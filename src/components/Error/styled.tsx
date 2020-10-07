import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  span {
    color: red;
    font-weight: bold;
  }
`;

export default StyledWrapper;
