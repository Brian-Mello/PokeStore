import styled, { keyframes } from "styled-components";

export const Loading = styled.text `
    font-size: 7px;
    text-align: center;
    font-family: 'Manrope', sans-serif;
`

const dash = keyframes  `
    100% { stroke-dashoffset: 136; }
`

export const Triangle = styled.polygon`
    stroke-dasharray: 17;
    animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`

export const LoadingContainer = styled.div `
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`