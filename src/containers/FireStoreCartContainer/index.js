import React from 'react';
import { connect } from 'react-redux';
import { updatePokemonInFireStoreCart } from '../../actions';
import { Text } from '../../components/pokemonCard/styled';
import CloseIcon from '@material-ui/icons/Close';
import { CartBody, StyledCheckoutButton } from './styled';
import { CartComponent, SectionTitle, CartHeader, CartItemsListSection, CartPaymentSection, CartItemComponent, CartIsEmptyMessage, CartItemDeleteButton, PaymentValueSection, PaymentButtonSection, CartItemName, CartItemValue } from './styled';
import CheckoutModal from '../../components/checkoutModal';
import ClearCartButton from '../../components/ClearCartButton';

export class FireStoreCartContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modalOpen: false
        }
    }

    removePokemonFromCart = (idToRemove) => {
        const {  updatePokemonInFireStoreCart } = this.props

        const fireCartListString = localStorage.getItem("fireStoreCartList")

        const savedFireCartList = JSON.parse(fireCartListString)

        const fireCartListCopy = [...savedFireCartList]

        fireCartListCopy.splice(idToRemove, 1)
        
        localStorage.setItem("fireStoreCartList", JSON.stringify(fireCartListCopy))

        updatePokemonInFireStoreCart()
    }

    handleCloseModal = () => {
        const { updatePokemonInFireStoreCart } = this.props;
        const fireCartListCopy = []

        localStorage.setItem("fireStoreCartList", JSON.stringify(fireCartListCopy))

        this.handleOnClickCheckOut()

        updatePokemonInFireStoreCart()
    }

    handleOnClickCheckOut = () => {
        this.setState({modalOpen: !this.state.modalOpen})
    }

    handleClearCart = () => {
        if(window.confirm("Deseja limpar o Carrinho?")){
            const fireCartListCopy = []

            localStorage.setItem("fireStoreCartList", JSON.stringify(fireCartListCopy))

            document.location.reload(true)

            updatePokemonInFireStoreCart()
        }
    }

    render(){
        const { modalOpen } = this.state

        const fireCartListString = localStorage.getItem("fireStoreCartList")

        let savedFireCartList = JSON.parse(fireCartListString)

        if(!fireCartListString){
            savedFireCartList = []
        }
        let mapCartItems;

        let buttonRender;
        
        let clearCartButtonRender;

        if(savedFireCartList.length > 0){
            clearCartButtonRender = (
                <ClearCartButton onClickClear={this.handleClearCart}/>
            )
        }

        let totalValue = savedFireCartList.reduce(getTotal, 0);

        function getTotal(total, pokemon) {
            return total + pokemon.value
        }

        let totalValueDiscount = totalValue * 0.10

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

        if(savedFireCartList.length === 0) {
            buttonRender = (
                <StyledCheckoutButton 
                    variant="contained" 
                    disabled>
                    Finalizar
                </StyledCheckoutButton>
            )
        }else if(savedFireCartList.length > 0){
            buttonRender = (
                <StyledCheckoutButton 
                    variant="contained" 
                    color="secondary" 
                    onClick={this.handleOnClickCheckOut}>
                    Finalizar
                </StyledCheckoutButton>
            )
        }

        if(savedFireCartList.length === 0) {
            mapCartItems = (<CartIsEmptyMessage>Carrinho está vazio!</CartIsEmptyMessage>)
        } else if (savedFireCartList.length > 0){
            mapCartItems = savedFireCartList.map((item) => (
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
    updatePokemonInFireStoreCart: () => dispatch(updatePokemonInFireStoreCart())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FireStoreCartContainer);