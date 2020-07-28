import styled from 'styled-components';

export const FooterComponent = styled.header `
    width: 100%;
    height: 5%;
    min-height: 40px;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CopyrightText = styled.p `
    margin: 0;
    padding: 0;
    font-size: 12px;
`