import React from 'react';

import LogoIcon from 'vectors/logo.svg';
import PageLink from 'common/PageLink';
import Anchor from 'common/Anchor';
import CenteredSection from 'common/CenteredSection';

class Demo extends React.Component {
  componentDidMount() {
    import(/* webpackChunkName: "Prime" */'modules/Prime');
  }

  render() {
    return (
      <CenteredSection variant="green">
        <LogoIcon />
        <p>Created by <Anchor href="https://github.com/JBostelaar/react-prime">@JBostelaar</Anchor>, maintained by <Anchor href="https://labela.nl/">LabelA</Anchor> with <Anchor href="https://github.com/JBostelaar/react-prime/graphs/contributors">contributors</Anchor>.</p>
        <PageLink to="/" variant="green">Go to home page</PageLink>
      </CenteredSection>
    );
  }
}

export default Demo;
