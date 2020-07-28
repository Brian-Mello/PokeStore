import styled from 'styled-components';

export const StoreComponent = styled.div `
    width: 100%;
    min-height: 100vh;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    
    font-family: 'Manrope', sans-serif;
`
export const Main = styled.div `
    width: 100%;
    min-height: 85%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;   
    padding: 20px 0 0 0;
    background-color: #ebebeb;
    @media(max-width: 1100px){
        flex-direction: column;
        align-items: center; 
        padding: 20px 0; 
    }
`

export const ProductsComponent = styled.div `
    width: ${props => props.widthSize};
    min-height: 100vh;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media(max-width: 1100px){
        width: 100%;
    }
`

export const ProductsComponentHeader = styled.div `
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #bfbfb9;
    padding: 10px 0;
    @media(max-width: 500px){
        min-height: 150px;
        flex-direction: column;
        border-bottom: none;
    }
`

export const OrdernationSection = styled.div `
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width: 500px){
    width: 100%;
    }
`

export const PokemonFireCatalog = styled.div `
    width: 100%;
    min-height: 75%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
    align-content: center;
    padding: 20px;
    @media(max-width: 1280px){
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    @media(max-width: 1050px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
    @media(max-width: 660px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }
    @media(max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(12, 1fr);
    }
`

export const PokemonWaterCatalog = styled.div `
    width: 100%;
    min-height: 80%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    justify-items: center;
    align-content: center;
    padding: 20px;
    @media(max-width: 1200px){
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    @media(max-width: 1000px){
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    @media(max-width: 800px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
    @media(max-width: 700px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }
    @media(max-width: 450px){
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(12, 1fr);
    }
`

export const PagesComponent = styled.div `
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SectionName = styled.h1 `
    margin: 0;
    @media(max-width: 500px){
    border-bottom: 1px solid #bfbfb9;
    width: 100%;
    }
`

export const Icon = styled.img `
    width: 24px;
    height: 24px;
`