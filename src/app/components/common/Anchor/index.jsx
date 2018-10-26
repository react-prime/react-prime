import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  border: none;
  padding: 20px;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
`;
