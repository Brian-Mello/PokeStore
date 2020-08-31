import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px #111111;
    border-radius: 8px;
    cursor: pointer;
    background-image: ${props => props.background};
    color: ${props => props.color};
    transition: all 0.2s;
    :hover{
        transform: scale(1.1);
        box-shadow: 2px 2px 6px #111111;
        background-image: ${props => props.backgroundHover};
    }
`;

export const StoreName = styled.h2 `
    font: 700 28px;
`