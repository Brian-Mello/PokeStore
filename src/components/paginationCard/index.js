import React from 'react';
import { PaginationComponent, PreviousPageButton, NextPageButton, PageComponent, PageComponentTop, PageComponentBottom, PageComponentCenter, StyledNavigateBeforeIcon, StyledNavigateNextIcon } from './styled';

function PaginationCard(props){
    return (
        <PaginationComponent>
            {props.onClickPrevious && <PreviousPageButton onClick={props.onClickPrevious}>
                <StyledNavigateBeforeIcon/>
            </PreviousPageButton>}
            <PageComponent>
                <PageComponentTop color={props.color}/>
                <PageComponentCenter><b>{props.page}</b></PageComponentCenter>
                <PageComponentBottom/>
            </PageComponent>
            {props.onClickNext && <NextPageButton onClick={props.onClickNext}>
                <StyledNavigateNextIcon/>
            </NextPageButton>}
        </PaginationComponent>
    )
}

export default PaginationCard;