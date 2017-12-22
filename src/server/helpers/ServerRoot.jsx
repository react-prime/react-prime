import React from 'react';
import PT from 'prop-types';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import globalStyling from 'styles';
import store from 'app/store';
import theme from 'styles/theme';
import App from 'components/App';

globalStyling();

const ServerRoot = ({ location, sheet }) => (
    <Provider store={store}>
        <StyleSheetManager sheet={sheet}>
            <ThemeProvider theme={theme}>
                <StaticRouter location={location} context={{}}>
                    <App />
                </StaticRouter>
            </ThemeProvider>
        </StyleSheetManager>
    </Provider>
);

ServerRoot.propTypes = {
    location: PT.string,
    sheet: PT.object,
};

export default ServerRoot;
