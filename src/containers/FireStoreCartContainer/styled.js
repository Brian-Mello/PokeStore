import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const CartComponent = styled.div `
    width: 19%;
    min-width: 250px;
    height: 100%;
    min-height: 900px;
    background-color: #ffffff;
    box-shadow: 1px 1px 4px #b7b7b7;
    padding: 5px 10px;
    @media(max-width: 1100px){
        width: 80%;
        min-height: 200px;
        margin-top: 20px;
    }
    @media(max-width: 600px){
        flex-direction: column;   
        width: 60%;
        min-width: 300px;  
    }
`

export const CartHeader = styled.div `
    width: 100%;
    height: 20%;
    min-height: 75px;
    display: flex;
    font-size: 20px;
    justify-content: flex-start;
    align-items: flex-end;
    border-bottom: 1px solid #b7b7b7;
    position: relative;
    padding: 0 5px;
    @media(max-width: 1100px){
        min-height: 50px;
    }
`

export const CartBody = styled.div `
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media(max-width: 1100px){
        flex-direction: row;
        align-items: flex-start;
        padding: 15px 0;
    }
    @media(max-width: 600px){
        flex-direction: column;   
    }
`
export const CartItemsListSection = styled.div `
    width: 100%;
    height: 80%;
    min-height: 700px;
    max-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 0;
    border-bottom: 1px solid #b7b7b7;
    overflow-y: auto;
    @media(max-width: 1100px){
        min-height: 100%;
        height: 180px;
        border-bottom: none;
        border-right: 1px solid #b7b7b7;
        padding: 10px;
    }
    @media(max-width: 600px){
        border-right: none;
        border-bottom: 1px solid #b7b7b7;
    }
`

export const CartPaymentSection = styled.div `
    width: 100%;
    height: 20%;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 0;
    @media(max-width: 1100px){
        height: 180px;
        padding: 0 10px;
    }
    @media(max-width: 600px){
        height: 80px;
        min-height: 120px;
    }
`

export const PaymentValueSection = styled.div `
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    @media(max-width: 1100px){
        height: 40%;
    }
    @media(max-width: 600px){
        height: 40%;
    }
`

export const PaymentButtonSection = styled.div `
    width: 100%;
    height: 80%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 1100px){
        height: 60%;
    }    
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
        height: 180px;
    }
`

export const StyledCheckoutButton = styled(Button)`
    color: white;
    width: 140px;
    height: 40px;
    font-size: 18px;
`