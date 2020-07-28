import React from 'react';
import { connect } from 'react-redux';
import {updatePokemonInWaterStoreCart } from '../../actions';
import { Text } from '../../components/pokemonCard/styled';
import CloseIcon from '@material-ui/icons/Close';
import { StyledCheckoutButton } from './styled'
import { CartComponent, SectionTitle, CartHeader, CartItemsListSection, CartPaymentSection, CartItemComponent, CartIsEmptyMessage, CartItemDeleteButton, PaymentValueSection, PaymentButtonSection, CartItemName, CartItemValue } from './styled';
import CheckoutModal from '../../components/checkoutModal';

export class WaterStoreCartContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modalOpen: false
        }
    }

    handleCloseModal = () => {
        const { updatePokemonInWaterStoreCart } = this.props;
        const pokemonCartListCopy = []

        this.setState({modalOpen: false})
        updatePokemonInWaterStoreCart(pokemonCartListCopy)
    }

    removePokemonFromCart = (idToRemove) => {
        const { waterStoreCartList, updatePokemonInWaterStoreCart } = this.props
        const pokemonCartListCopy = [...waterStoreCartList]

        pokemonCartListCopy.splice(idToRemove, 1)
        updatePokemonInWaterStoreCart(pokemonCartListCopy)
    }

    handleOnClickCheckOut = () => {
        this.setState({modalOpen: true})
    }

    render(){

        const { waterStoreCartList } = this.props;
        const { modalOpen } = this.state

        let mapCartItems;
        let buttonRender;

        let totalValue = waterStoreCartList.reduce(getTotal, 0);

        function getTotal(total, pokemon) {
            return total + pokemon.value
        }


        let totalValueDiscount = totalValue * 0.10

        let modalRender;
        if(modalOpen === true){
            modalRender = (<CheckoutModal cartTotalValue={totalValueDiscount.toFixed(2)} open={modalOpen} onClose={this.handleCloseModal}/>)
        } else {
            modalRender = (<></>)
        }

        if(waterStoreCartList.length === 0) {
            buttonRender = (
                <StyledCheckoutButton 
                    variant="contained" 
                    disabled>
                    Finalizar
                </StyledCheckoutButton>
            )
        }else if(waterStoreCartList.length > 0){
            buttonRender = (
                <StyledCheckoutButton 
                    variant="contained" 
                    color="primary" 
                    onClick={this.handleOnClickCheckOut}>
                    Finalizar
                </StyledCheckoutButton>
            )
        }

        if(waterStoreCartList.length === 0) {
            mapCartItems = (<CartIsEmptyMessage>Carrinho está vazio!</CartIsEmptyMessage>)
        } else if (waterStoreCartList.length > 0){
            mapCartItems = waterStoreCartList.map((item) => (
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