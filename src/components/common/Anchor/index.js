import styled from 'styled-components';

const Anchor = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  color: ${(props) => props.theme.black};
  text-decoration: none;
  border-bottom: 2px solid ${(props) => props.theme.prime};
`;

export default Anchor;
