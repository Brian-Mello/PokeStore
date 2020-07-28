import React from 'react';
import { connect } from 'react-redux';
import { updatePokemonInFireStoreCart } from '../../actions';
import { Text } from '../../components/pokemonCard/styled';
import CloseIcon from '@material-ui/icons/Close';
import { CartBody, StyledCheckoutButton } from './styled'
import { CartComponent, SectionTitle, CartHeader, CartItemsListSection, CartPaymentSection, CartItemComponent, CartIsEmptyMessage, CartItemDeleteButton, PaymentValueSection, PaymentButtonSection, CartItemName, CartItemValue } from './styled';
import CheckoutModal from '../../components/checkoutModal';

export class FireStoreCartContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modalOpen: false
        }
    }

    removePokemonFromCart = (idToRemove) => {
        const { fireStoreCartList, updatePokemonInFireStoreCart } = this.props
        const pokemonCartListCopy = [...fireStoreCartList]

        pokemonCartListCopy.splice(idToRemove, 1)
        updatePokemonInFireStoreCart(pokemonCartListCopy)
    }

    handleCloseModal = () => {
        const { updatePokemonInFireStoreCart } = this.props;
        const pokemonCartListCopy = []

        this.setState({modalOpen: false})
        updatePokemonInFireStoreCart(pokemonCartListCopy)
    }

    handleOnClickCheckOut = () => {

        this.setState({modalOpen: true})
    }

    render(){

        const { fireStoreCartList } = this.props
        const { modalOpen } = this.state

        let mapCartItems;
        let buttonRender;
        
        let totalValue = fireStoreCartList.reduce(getTotal, 0);

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

        if(fireStoreCartList.length === 0) {
            buttonRender = (
                <StyledCheckoutButton 
                    variant="contained" 
                    disabled>
                    Finalizar
                </StyledCheckoutButton>
            )
        }else if(fireStoreCartList.length > 0){
            buttonRender = (
                <StyledCheckoutButton 
                    variant="contained" 
                    color="secondary" 
                    onClick={this.handleOnClickCheckOut}>
                    Finalizar
                </StyledCheckoutButton>
            )
        }

        if(fireStoreCartList.length === 0) {
            mapCartItems = (<CartIsEmptyMessage>Carrinho está vazio!</CartIsEmptyMessage>)
        } else if (fireStoreCartList.length > 0){
            mapCartItems = fireStoreCartList.map((item) => (
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
                <CartBody>
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
                </CartBody>
            </CartComponent>
        )
    }
}

const mapStateToProps = state => ({
    fireStoreCartList: state.pokemon.fireStoreCartList
})

const mapDispatchToProps = dispatch => ({
    updatePokemonInFireStoreCart: (firePokemon) => dispatch(updatePokemonInFireStoreCart(firePokemon))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FireStoreCartContainer);