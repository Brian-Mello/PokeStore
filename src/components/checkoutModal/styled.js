import styled from 'styled-components';

export const ModalComponent = styled.div `
    width: 320px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ModalHeader = styled.header `
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalBody = styled.header `
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalTitle = styled.h2 `
    font-family: 'Manrope', sans-serif;
`

export const ModalDescription = styled.p `
    margin: 0;
    font-family: 'Manrope', sans-serif;
`