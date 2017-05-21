import React from 'react';
import PT from 'prop-types';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const Button = ({ children, type = 'button', disabled, onClick }) => (
    <button
        styleName="button"
        disabled={disabled}
        type={type}
        onClick={onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PT.string,
    type: PT.string,
    disabled: PT.bool,
    onClick: PT.func,
};

export default cssModules(styles)(Button);
