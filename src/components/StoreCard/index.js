import React from 'react';
import { Container, StoreName } from './styled';

export default function StoreCard(props) {
    return (
        <Container background={props.background} backgroundHover={props.backgroundHover} color={props.color} onClick={props.onClick}>
            <StoreName>{props.name}</StoreName>
        </Container>
    )
};