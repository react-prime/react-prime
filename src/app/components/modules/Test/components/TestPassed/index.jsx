import React from 'react';
import cssModules from 'react-css-modules';
import confetti from 'images/confetti.png';
import styles from './styles.css';

const TestPassed = () => (
    <div>
        <p styleName="message">
            The boilerplate is successfully installed, you&apos;re ready to
            start.
            <img src={confetti} styleName="confetti" alt="confetti" />
        </p>
        <p styleName="message">Good Luck!</p>
    </div>
);

export default cssModules(styles)(TestPassed);
