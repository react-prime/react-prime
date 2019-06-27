import PT from 'prop-types';
import styled from 'styled-components';

const Anchor = styled.a.attrs(({ href }) => ({
  target: '_blank',
  rel: 'noopener noreferrer',
  href,
}))`
  color: ${(props) => props.theme.black};
  text-decoration: none;
  border-bottom: 2px solid ${(props) => props.theme.prime};
`;

Anchor.propTypes = {
  href: PT.string,
};

export default Anchor;
