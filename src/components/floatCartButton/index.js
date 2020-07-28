import React from 'react';
import { CartButton, StyledCartIcon } from './styled'

function FloatCartButton(props){
    return(
        <CartButton onClick={props.onClickCart}>
            Carrinho
            <StyledCartIcon/>
        </CartButton>
    )
}

export default FloatCartButton;