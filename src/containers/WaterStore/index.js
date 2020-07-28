import React from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { v4 } from "uuid";
import { getPokemonByType, updatePokemonInWaterStoreCart } from "../../actions";
import { ProductsComponent, StoreComponent, Main, PagesComponent, PokemonWaterCatalog, ProductsComponentHeader, SectionName, OrdernationSection, EmptyCatalogMessage, Icon } from "../../style/globalStyled";
import { orderByList, orderTypeList} from '../ordenationObjects';
import Footer from "../../components/footer";
import Header from "../../components/header";
import PaginationCard from "../../components/paginationCard";
import PokemonCard from "../../components/pokemonCard/";
import MenuItem from '@material-ui/core/MenuItem';
import SelectUI from "../../components/selectUi";
import FloatCartButton from "../../components/floatCartButton";
import CartContainer from '../WaterStoreCartContainer';
import waterLogo from '../../images/waterLogo.png'

export class WaterStore extends React.Component {
    constructor(props){
        super(props);
        this.state={
            typeId: 11,
            page: 1,
            search: "",
            orderBy: "Selecione",
            orderType: "Selecione",
            cartStatus: false
        }
    }

    componentDidMount = () => {
        const { typeId } = this.state
        this.props.getWaterPokemon(typeId)
    }

    handleOnClickCart = () => {
        const { cartStatus } = this.state;
        this.setState({ cartStatus: !cartStatus})
    }

    handleOnChangeSearch = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        this.setState({ search: event.target.value })
    };
    
    handleOnChangeOrderBy = (event) => {
        const { value } = event.target;
        this.setState({ orderBy: value})
    }

    handleOnChangeOrderType = (event) => {
        const { value } = event.target;
        this.setState({ orderType: value})
    }

    handleNextPage = () => {
        let { page } = this.state
        this.setState({page: page + 1})
    }
    
    handlePreviousPage = () => {
        let { page } = this.state
        this.setState({page: page - 1})
    }

    addPokemonInCart = ( name, value) => {
        const { updatePokemonInWaterStoreCart, waterStoreCartList } = this.props

        const newPokemon = {
            id: v4(),
            name: name,
            value: value
        }

        const pokemonCartListCopy = [...waterStoreCartList, newPokemon];

        updatePokemonInWaterStoreCart(pokemonCartListCopy)
    }

    handleOnChangeSearch = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        this.setState({ search: event.target.value })
    };

    render(){
        const { search, orderBy, orderType, page, cartStatus } = this.state;
        const { goToFireStore, allWaterPokemon } = this.props

        const numberOfPages = allWaterPokemon.length / 12;

        const start = (page -1) * 12 
        const end = start + 12
        
        const orderBySelectItem = (orderByList.map((by) => (
            <MenuItem
                key={by} 
                value={by}
                >{by}
            </MenuItem>
        )))
        const orderTypeSelectItem = (orderTypeList.map((type) => (
            <MenuItem 
                key={type} 
                value={type}
                >{type}
            </MenuItem>
        )))

        let filterPokemon = allWaterPokemon.filter((pokemon) => {
            return pokemon.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        let orderedPokemon;

        if(orderType === "Crescente"){
            orderedPokemon = filterPokemon.sort((a,b) => (a[orderBy] > b[orderBy] ? 1 : -1))
        } else if(orderType === "Decrescente"){
            orderedPokemon = filterPokemon.sort((a,b) => (b[orderBy] > a[orderBy] ? 1 : -1))    
        } else {
            orderedPokemon = filterPokemon.sort((a,b) => (a[orderBy] === b[orderBy]  ? 0 : 1))
        }

        const paginatedFirePokemonMap = orderedPokemon.slice(start, end);

        let cartRender = cartStatus === true ? (<CartContainer>Carrinho</CartContainer> ) : (<></>)
        
        let buttonRender;

        if(page <= 1) {
            buttonRender = (
                <PaginationCard
                    page={page}
                    onClickNext={this.handleNextPage}
                    color="#73abc7"
                />
            )
        } else if (page >= numberOfPages){
            buttonRender = (
                <PaginationCard
                    onClickPrevious={this.handlePreviousPage}
                    page={page}
                    color="#73abc7"
                />
            )
        } else {
            buttonRender = (
                <PaginationCard
                    onClickPrevious={this.handlePreviousPage}
                    page={page}
                    onClickNext={this.handleNextPage}
                    color="#73abc7"
                />
            )
        }

        let waterStoreCatalogRender;

        const pokemonMap = paginatedFirePokemonMap.map((pokemon) =>
                <PokemonCard
                    key={pokemon.id}
                    alt={pokemon.name}
                    image={pokemon.image}
                    name={pokemon.name}
                    value={pokemon.value}
                    color="#73abc7"
                    colorHover="#5e8ca3"
                    onClickAddButton={() => this.addPokemonInCart(pokemon.name, pokemon.value)}
                />
        )

        if(filterPokemon.length === 0){
            waterStoreCatalogRender = (<EmptyCatalogMessage>Pokémon não encontrado!</EmptyCatalogMessage>)
        } else if(filterPokemon.length > 0){
            waterStoreCatalogRender = ( 
            <> 
                <PokemonWaterCatalog>
                {pokemonMap}
                </PokemonWaterCatalog>
                <PagesComponent>
                {buttonRender}
                </PagesComponent>          
            </>

            )
        }
        return(
            <StoreComponent>
                <Header
                    buttonText="FireStore"
                    pageName="WATER STORE"
                    color="rgba(115, 171, 199, 0.8)"
                    value={search}
                    onChange={this.handleOnChangeSearch}
                    buttonColor="secondary"
                    onClick={goToFireStore}
                    placeholder="Wartortle, Blastoise..."
                    fontFamily="'Ranchers', cursive"
                    inputStyle="standard"
                    icon={<Icon src={waterLogo}/>}
                />
                <Main>
                    <ProductsComponent 
                        widthSize="100%"
                    >
                        <ProductsComponentHeader>
                            <SectionName>Catálogo</SectionName>
                            <OrdernationSection>
                                <SelectUI 
                                    label="Order by" 
                                    value={orderBy} 
                                    onChange={this.handleOnChangeOrderBy} 
                                    menuItemsMap={orderBySelectItem}
                                />
                                <SelectUI 
                                    label="Order type" 
                                    value={orderType} 
                                    onChange={this.handleOnChangeOrderType} 
                                    menuItemsMap={orderTypeSelectItem}
                                />
                            </OrdernationSection>
                        </ProductsComponentHeader>
                        {waterStoreCatalogRender}
                        {cartRender}
                        <FloatCartButton onClickCart={this.handleOnClickCart}/>
                    </ProductsComponent>
                </Main>
                <Footer color="rgba(115, 171, 199, 0.8)"/>
            </StoreComponent>
        )
    }
}

const mapStateToProps = state => ({
    allWaterPokemon: state.pokemon.allPokemonByType,
    pages: state.pokemon.count,
    waterStoreCartList: state.pokemon.waterStoreCartList
})

const mapDispatchToProps = dispatch => ({
    getWaterPokemon: (typeId) => dispatch(getPokemonByType(typeId)),
    updatePokemonInWaterStoreCart: (waterPokemon) => dispatch(updatePokemonInWaterStoreCart(waterPokemon)),
    goToFireStore: () => dispatch(push(routes.home))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaterStore);