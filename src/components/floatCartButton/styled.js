import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const StyledCartIcon = styled(ShoppingCartIcon)`

`

export const CartButton = styled.button `
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(17,17,17, 0.5);
    border: none;
    padding: none;
    outline: none;
    position: fixed;
    color: white;
    bottom: 30px;
    right: 30px;
    border-radius: 10px;
    font-family: 'Manrope', sans-serif;
    transition: all 0.2s;
    :hover{
        transform: scale(1.2);
        cursor: pointer;
        background-color: rgba(17,17,17, 0.9);
    }
`