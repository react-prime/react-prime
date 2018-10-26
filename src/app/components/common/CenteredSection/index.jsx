import PT from 'prop-types';
import styled from 'styled-components';

const CenteredSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  svg {
    margin: 50px 0;

    path {
      fill: ${(props) => props.theme[props.variant]};
      fill-rule: nonzero;

      &:nth-of-type(2) {
        fill: ${(props) => props.theme.white};
      }
    }
  }
`;

CenteredSection.propTypes = {
  variant: PT.oneOf(['blue', 'green']),
};

CenteredSection.defaultProps = {
  variant: 'blue',
};

export default CenteredSection;
