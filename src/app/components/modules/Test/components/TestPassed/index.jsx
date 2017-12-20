import React from 'react';
import confetti from 'images/confetti.png';

const TestPassed = () => (
    <div>
        <p>
            The boilerplate is successfully installed, you&apos;re ready to
            start.
            <img src={confetti} alt="confetti" />
        </p>
        <p>Good Luck!</p>
    </div>
);

export default TestPassed;
