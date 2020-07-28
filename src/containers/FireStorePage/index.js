import React from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { v4 } from "uuid";
import { getPokemonByType, updatePokemonInFireStoreCart } from "../../actions";
import { ProductsComponent, StoreComponent, Main, PagesComponent, PokemonFireCatalog, ProductsComponentHeader, SectionName, OrdernationSection, EmptyCatalogMessage } from "../../style/globalStyled";
import { orderByList, orderTypeList} from '../ordenationObjects';
import Footer from "../../components/footer";
import Header from "../../components/header";
import PaginationCard from "../../components/paginationCard";
import PokemonCard from "../../components/pokemonCard/";
import MenuItem from '@material-ui/core/MenuItem';
import SelectUI from "../../components/selectUi";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FireStoreCartContainer from "../FireStoreCartContainer";


export class FireStore extends React.Component {
    constructor(props){
      super(props);
      this.state={
        typeId: 10,
        page: 1,
        search: "",
        orderBy: "Selecione",
        orderType: "Selecione",
        cartStatus: false
      };
    }

    componentDidMount = () => {
      const { typeId } = this.state
      this.props.getFirePokemon(typeId)
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
      let { page} = this.state
      this.setState({page: page - 1})
    }

    addPokemonInCart = ( name, value) => {
      const { updatePokemonInFireStoreCart, fireStoreCartList } = this.props

      const newPokemon = {
        id: v4(),
        name: name,
        value: value
      }

      const pokemonCartListCopy = [...fireStoreCartList, newPokemon];

      updatePokemonInFireStoreCart(pokemonCartListCopy)
    }

    render(){
      const { page, orderBy, orderType, search } = this.state
      const { allFirePokemon, goToWaterStore } = this.props

      const numberOfPages = allFirePokemon.length / 12;

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

      let filterPokemon = allFirePokemon.filter((pokemon) => {
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

      let buttonRender;

      if(page <= 1) {
        buttonRender = (
          <PaginationCard
            page={page}
            onClickNext={this.handleNextPage}
            color="#ba501e"
          />
        )
      } else if (page >= numberOfPages){
        buttonRender = (
          <PaginationCard
            onClickPrevious={this.handlePreviousPage}
            page={page}
            color="#ba501e"
          />
        )
      } else {
        buttonRender = (
          <PaginationCard
            onClickPrevious={this.handlePreviousPage}
            page={page}
            onClickNext={this.handleNextPage}
            color="#ba501e"
          />
        )
      }

      let fireStoreCatalogRender;

      const pokemonMap = paginatedFirePokemonMap.map((pokemon) =>
        <PokemonCard
          key={pokemon.id}
          alt={pokemon.name}
          image={pokemon.image}
          name={pokemon.name}
          value={pokemon.value}
          color="#d1643b"
          colorHover="#b25533"
          onClickAddButton={() => this.addPokemonInCart(pokemon.name, pokemon.value)}
        />
      )
      
      if(filterPokemon.length === 0){
        fireStoreCatalogRender = (<EmptyCatalogMessage>Pokémon não encontrado!</EmptyCatalogMessage>)
      } else if(filterPokemon.length > 0){
        fireStoreCatalogRender = ( 
          <> 
            <PokemonFireCatalog>
              {pokemonMap}
            </PokemonFireCatalog>
            <PagesComponent>
              {buttonRender}
            </PagesComponent>          
          </>

        )
      }

      return(
        <StoreComponent>
          <Header 
            buttonText="Water Store" 
            pageName="FIRE STORE"
            color="rgba(186, 80, 30, 0.7)"
            value={search}
            onChange={this.handleOnChangeSearch}
            buttonColor="primary"
            onClick={goToWaterStore}
            placeholder="Charizard, Charmander..."
            fontFamily="'Permanent Marker', cursive"
            inputStyle="outlined"
            icon={<WhatshotIcon/>}
            position='sticky'
          />
          <Main>
            <ProductsComponent
              widthSize="80%"
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
                {fireStoreCatalogRender}
            </ProductsComponent>
            <FireStoreCartContainer/>
          </Main>
          <Footer color={"rgba(186, 80, 30, 0.8)"}/>
        </StoreComponent>
      )
    }
}

const mapStateToProps = state => ({
  allFirePokemon: state.pokemon.allPokemonByType,
  fireStoreCartList: state.pokemon.fireStoreCartList
})

const mapDispatchToProps = dispatch => ({
  getFirePokemon: (typeId) => dispatch(getPokemonByType(typeId)),
  updatePokemonInFireStoreCart: (pokemon) => dispatch(updatePokemonInFireStoreCart(pokemon)),
  goToWaterStore: () => dispatch(push(routes.waterStore))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FireStore);