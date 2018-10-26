import styled from 'styled-components';

export default styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.blue};
  background: ${(props) => props.theme.white};
`;
