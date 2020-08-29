import React from 'react';
import { connect } from 'react-redux';
import {updatePokemonInWaterStoreCart } from '../../actions';
import CloseIcon from '@material-ui/icons/Close';
import { StyledCheckoutButton } from './styled';
import { Text } from '../../style/globalStyled'
import { CartComponent, SectionTitle, CartHeader, CartItemsListSection, CartPaymentSection, CartItemComponent, CartIsEmptyMessage, CartItemDeleteButton, PaymentValueSection, PaymentButtonSection, CartItemName, CartItemValue } from './styled';
import CheckoutModal from '../../components/checkoutModal';
import ClearCartButton from '../../components/ClearCartButton';

export class WaterStoreCartContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modalOpen: false
        }
    }

    removePokemonFromCart = (idToRemove) => {
        const {  updatePokemonInWaterStoreCart } = this.props

        const waterCartListString = localStorage.getItem("waterStoreCartList")

        const savedWaterCartList = JSON.parse(waterCartListString)

        const waterCartListCopy = [...savedWaterCartList]

        waterCartListCopy.splice(idToRemove, 1)
        
        localStorage.setItem("waterStoreCartList", JSON.stringify(waterCartListCopy))

        updatePokemonInWaterStoreCart()
    }

    handleOnClickCheckOut = () => {
        this.setState({modalOpen: !this.state.modalOpen})
    }

    handleCloseModal = () => {
        const { updatePokemonInWaterStoreCart } = this.props;
        const waterCartListCopy = []

        localStorage.setItem("waterStoreCartList", JSON.stringify(waterCartListCopy))

        this.handleOnClickCheckOut()

        updatePokemonInWaterStoreCart()
    }
    
    handleClearCart = () => {
        if(window.confirm("Deseja limpar o Carrinho?")){
            const fireCartListCopy = []

            localStorage.setItem("waterStoreCartList", JSON.stringify(fireCartListCopy))

            document.location.reload(true)

            updatePokemonInWaterStoreCart()
        }
    }

    render(){
        const { modalOpen } = this.state

        const waterCartListString = localStorage.getItem("waterStoreCartList")

        let savedWaterCartList = JSON.parse(waterCartListString)

        if(!waterCartListString){
            savedWaterCartList = []
        }

        let totalValue = savedWaterCartList.reduce(getTotal, 0);

        function getTotal(total, pokemon) {
            return total + pokemon.value
        }

        let mapCartItems;

        let buttonRender;

        let totalValueDiscount = totalValue * 0.10

        let clearCartButtonRender;

        if(savedWaterCartList.length > 0){
            clearCartButtonRender = (
                <ClearCartButton onClickClear={this.handleClearCart}/>
            )
        }

        let modalRender;
        if(modalOpen === true){
            modalRender = (
                <CheckoutModal 
                    cartTotalValue={totalValueDiscount.toFixed(2)} 
                    open={modalOpen} 
                    onClose={this.handleCloseModal}
                />)
        } else {
            modalRender = (<></>)
        }

        if(savedWaterCartList.length === 0) {
            buttonRender = (
                <StyledCheckoutButton 
                    variant="contained" 
                    disabled>
                    Finalizar
                </StyledCheckoutButton>
            )
        }else if(savedWaterCartList.length > 0){
            buttonRender = (
                <StyledCheckoutButton 
                    variant="contained" 
                    color="primary" 
                    onClick={this.handleOnClickCheckOut}>
                    Finalizar
                </StyledCheckoutButton>
            )
        }

        if(savedWaterCartList.length === 0) {
            mapCartItems = (<CartIsEmptyMessage>Carrinho está vazio!</CartIsEmptyMessage>)
        } else if (savedWaterCartList.length > 0){
            mapCartItems = savedWaterCartList.map((item) => (
                <CartItemComponent key={item.id}>
                    <CartItemName>
                        <Text>{item.name}</Text>
                    </CartItemName>
                    <CartItemValue>
                        <Text>R$ {item.value},00</Text>
                    </CartItemValue>
                    <CartItemDeleteButton onClick={() => this.removePokemonFromCart(item.id)}>
                        <CloseIcon/>
                    </CartItemDeleteButton>
                </CartItemComponent>
            ))
        }

        return(
            <CartComponent>
                <CartHeader>
                    <SectionTitle>Carrinho</SectionTitle>
                    {clearCartButtonRender}
                </CartHeader>
                <CartItemsListSection>
                    {mapCartItems}
                </CartItemsListSection>
                <CartPaymentSection>
                    {modalRender}
                    <PaymentValueSection>
                        <SectionTitle>Valor Total</SectionTitle>
                        <SectionTitle>R$ {totalValue},00</SectionTitle>
                    </PaymentValueSection>
                    <PaymentButtonSection>
                        {buttonRender}
                    </PaymentButtonSection>
                </CartPaymentSection>
            </CartComponent>
        )
    }
}

const mapStateToProps = state => ({
    waterStoreCartList: state.pokemon.waterStoreCartList
})

const mapDispatchToProps = dispatch => ({
    updatePokemonInWaterStoreCart: (pokemon) => dispatch(updatePokemonInWaterStoreCart(pokemon))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaterStoreCartContainer);