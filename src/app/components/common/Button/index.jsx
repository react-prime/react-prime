import styled from 'styled-components';

export default styled.button`
    color: ${props => props.theme.white};
    background: ${props => props.theme.blue};
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
`;
