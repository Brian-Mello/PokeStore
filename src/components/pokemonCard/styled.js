import styled from 'styled-components';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export const PokemonCardComponent = styled.div `
    width: 100%;
    max-width: 180px;
    min-width: 170px;
    height: 100%;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 10px 5px 10px;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px #b7b7b7;
    transition: transform 0.2s;
    :hover {
        transform: scale(1.1);
    }
    @media(max-width: 450px){
        max-width: 100%;
        min-height: 50px;
        flex-direction: row;
    }
`

export const PokemonImage = styled.img `
    width: 100%;
    height: 50%;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #c7c7c7;
    transition: transform 0.2s;
    cursor: zoom-in;
    :hover {
        transform: scale(1.5);
    }
    @media(max-width: 450px){
        max-width: 40%;
        height: 100%;
    }    
`

export const PokemonCardDetails = styled.div `
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5px 5px 0 5px;
    @media(max-width: 450px){
        height: 100%;
        width: 60%;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10px;
    }    
`


export const PokemonCardTitle = styled.div `
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-align: center;
    @media(max-width: 450px){
        justify-content: flex-start;
        height: 20%;
        width: 100%;
    }     
`

export const PokemonCardValue = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0 5px;
    @media(max-width: 450px){
        height: 40%;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        padding: 0;
    }     
`

export const PokemonCardFooter = styled.div `
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 450px){
        height: 40%;
        width: 100%;
    } 
`

export const PokemonCardButton = styled.button `
    width: 95%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    border: none;
    margin: none;
    background-color: ${props => props.color};
    color: white;
    border-radius: 5px;
    padding: 0 20px;
    transition: all 0.5s;
    box-shadow: 1px 1px 3px #111111;
    :hover {
        cursor: pointer;
        background-color: ${props => props.colorHover};
        padding: 0 45px;   
        transform: scale(1.1);   
    }
    @media(max-width: 450px){
        height: 100%;
        width: 100%;
    } 
`

export const Text = styled.p `
    max-width: 100px;
    margin: 0;
`

export const StyledAddCircleOutlineIcon = styled(AddShoppingCartIcon)`
    width: 26px;
    height: 26px;
`