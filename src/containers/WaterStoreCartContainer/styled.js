import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const CartComponent = styled.div `
    width: 300px;
    min-width: 300px;
    min-height: 300px;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px #b7b7b7;
    right: 20px;
    top:80px;
    padding: 5px 10px;
    @media(max-width: 1000px){
        top: 200px;
    }
    @media(max-width: 450px){
        width: 90%;
        min-height: 80%;
        position: fixed;
        top: 10px;
    }
`

export const CartHeader = styled.div `
    width: 100%;
    height: 5%;
    min-height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-bottom: 1px solid #b7b7b7;
    position: relative;
`

export const CartItemsListSection = styled.div `
    width: 100%;
    height: 75%;
    min-height: 150px;
    max-height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    border-bottom: 1px solid #b7b7b7;
    overflow-y: auto;
    @media(max-width: 450px){
        min-height: 450px;
        max-height: 450px;
    }
`

export const CartPaymentSection = styled.div `
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 0;
    @media(max-width: 400px){
        height: 150px;
        justify-content: space-between
    }
`

export const PaymentValueSection = styled.div `
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
`

export const PaymentButtonSection = styled.div `
    width: 100%;
    height: 80%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SectionTitle = styled.h2 `
    margin: 0;
    :nth-child(2){
        font-size: 18px;
    }
`

export const CartItemComponent = styled.div `
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 18px;
    margin: 5px 0 5px 0;
    border-bottom: 1px solid #d1d1d1;
    :last-child{
        border-bottom: 0;
    }
`

export const CartItemName = styled.div `
    width: 60%;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-start;
`

export const CartItemValue = styled.div `
    width: 40%;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-start;
`

export const CartItemDeleteButton = styled.div `
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #b7b7b7;
    border-radius: 5px;
    :hover{
        cursor: pointer;
        color: white;
        background-color: #ff2427;
    }
`

export const CartIsEmptyMessage = styled.div `
    width: 100%;
    height: 100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    @media(max-width: 450px){
        height: 400px;
    }
`

export const StyledCheckoutButton = styled(Button)`
    color: white;
    width: 140px;
    height: 40px;
    font-size: 18px;
`