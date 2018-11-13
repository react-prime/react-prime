import React, { lazy } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';

import { install } from 'ducks/demo';
import LogoIcon from 'vectors/logo.svg';
import PageLink from 'common/PageLink';
import Button from 'common/Button';
import CenteredSection from 'common/CenteredSection';
import InstallationPassed from './components/InstallationPassed';

class Prime extends React.Component {
  componentDidMount() {
    lazy(() => import(/* webpackChunkName: "Demo" */'modules/Demo'));
    import(/* webpackChunkName: "Demo" */'modules/Demo');
    import('modules/Demo')
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    const { installation: { passed, loading }, ...props } = this.props;

    return (
      <CenteredSection>
        <LogoIcon />
        {passed ? (
          <InstallationPassed />
        ) : (
            <Button onClick={props.install}>
              {loading ? 'Installing ...' : 'Test installation'}
            </Button>
          )}

        <PageLink to="/demo">Go to demo page</PageLink>
      </CenteredSection>
    );
  }
}

// const Prime = ({ installation: { passed, loading }, ...props }) => (
//   <CenteredSection>
//     <LogoIcon />
//     {passed ? (
//       <InstallationPassed />
//     ) : (
//       <Button onClick={props.install}>
//         {loading ? 'Installing ...' : 'Test installation'}
//       </Button>
//     )}

//     <PageLink to="/demo">Go to demo page</PageLink>
//   </CenteredSection>
// );

Prime.propTypes = {
  install: PT.func.isRequired,
  installation: PT.shape({
    loading: PT.bool,
    passed: PT.bool,
  }),
};

export default connect((state) => ({
  installation: state.demo,
}), { install })(Prime);
