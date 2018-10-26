import styled from 'styled-components';

export default styled.button`
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
`;
