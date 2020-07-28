import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const HeaderComponent = styled.header `
    width: 100%;
    height: 10%;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};  
    padding: 0 20px;
    @media(max-width: 1000px){
        flex-direction: column;
        min-height: 200px;
        justify-content: space-evenly;
    }
`

export const HeaderLogoComponent = styled.div `
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px){
        padding: 0;
        justify-content: center;
        width: 100%;
    }
`

export const HeaderSearchComponent = styled.div `
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px){
        padding: 0;
        justify-content: center;
        width: 100%;
    }
`

export const HeaderMenuComponent = styled.div `
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    @media (max-width: 1000px){
        padding: 0 30px;
        justify-content: flex-end;
        width: 100%;
    }
`

export const StyledTextfield = styled(TextField)`
    background-color: white;
    border-radius: 5px;
    width: 90%;
    text-decoration: none;
    border: none;
    color: white;
`

export const Logo = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 25px;
    font-family: ${props => props.fontFamily};
    :hover {
        cursor: pointer;
    }
`

export const HeaderMenu = styled.div `
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 600px){
        width: 100%;
        height: 50%;
    }
`

export const Title = styled.h1 `
    font-weight: bold;
    margin: 0;
    font-size: 25px;
`

export const MaterialButton = styled(Button)`
    color: white;
    height: 50px;
    padding: 0 10px;
`