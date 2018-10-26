import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  svg {
    margin: 50px 0;

    path {
      fill: ${(props) => props.theme.blue};
      fill-rule: nonzero;

      &:nth-of-type(2) {
        fill: ${(props) => props.theme.white};
      }
    }
  }
`;
