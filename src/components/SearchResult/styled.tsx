import styled from 'styled-components';

const StyledWrapper = styled.div`
  .meta {
    border-bottom: 1px solid #000;
    background-color: #eee;

    p {
      margin: 0;
    }
  }

  .pagination {
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
      text-decoration: underline;
    }
  }
`;

export default StyledWrapper;
