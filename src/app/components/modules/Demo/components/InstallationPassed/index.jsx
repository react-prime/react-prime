import React, { Fragment } from 'react';
import styled from 'styled-components';
import confetti from 'images/confetti.png';

const Image = styled.img`
    height: 25px;
    margin-left: 5px;
`;

const InstallationPassed = () => (
    <Fragment>
        <p>
            React Prime is successfully installed, you&apos;re ready to
            start.
            <Image src={confetti} alt="confetti" />
        </p>
        <p>Good Luck!</p>
    </Fragment>
);

export default InstallationPassed;
