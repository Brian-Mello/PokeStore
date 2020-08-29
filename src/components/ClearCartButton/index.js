import React from 'react';
import { Button } from './styled'

export default function ClearCartButton(props) {
    return(
        <Button onClick={props.onClickClear}>Limpar Carrinho</Button>
    )
}