import React from 'react';
import PT from 'prop-types';

const App = ({ children }) => (
    <main>
        {children}
    </main>
);

App.propTypes = {
    children: PT.shape({}),
};

export default App;
