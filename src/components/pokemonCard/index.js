import React from 'react';
import { PokemonCardButton, PokemonCardComponent, PokemonCardDetails, PokemonCardFooter, PokemonImage, Text, StyledAddCircleOutlineIcon, PokemonCardTitle, PokemonCardValue } from './styled';

function PokemonCard(props){

    return (
        <PokemonCardComponent>
            <PokemonImage alt={props.alt} src={props.image}/>
            <PokemonCardDetails>
                <PokemonCardTitle>
                    <Text><b>{props.name}</b></Text>
                </PokemonCardTitle>
                <PokemonCardValue>
                    <Text><b>R$</b> <b>{props.value},00</b></Text>
                </PokemonCardValue>
                <PokemonCardFooter>
                    <PokemonCardButton color={props.color} colorHover={props.colorHover} onClick={props.onClickAddButton}>ADD<StyledAddCircleOutlineIcon/></PokemonCardButton>
                </PokemonCardFooter>
            </PokemonCardDetails>
        </PokemonCardComponent>
    )
}

export default PokemonCard;