import styled from 'styled-components';

export const Button = styled.button `
    width: 120px;
    height: 30px;
    position: absolute;
    font: 600 13px Manrope;
    right: 5px;
    top: 5px;
    cursor: pointer;
    border: 1px solid #ff2427;
    outline: none;
    border-radius: 8px;
    color: #ff2427;
    background-color: #FFFFFF;
    transition: all 0.2s;
    :hover {
        background-color: #ff2427;
        color: #FFFFFF;
        border: 1px solid #FFFFFF;
    }
`