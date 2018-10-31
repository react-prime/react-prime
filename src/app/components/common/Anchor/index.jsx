import PT from 'prop-types';
import styled from 'styled-components';

const PageLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
  href: (props) => props.href,
})`
  color: ${(props) => props.theme[props.variant]};
`;

PageLink.propTypes = {
  variant: PT.oneOf(['blue', 'green']),
};

PageLink.defaultProps = {
  variant: 'green',
};

export default PageLink;
