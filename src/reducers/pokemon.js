const initialState = {
    allPokemonByType: [],
    fireStoreCartList: [],
    waterStoreCartList: []
}

const pokemon = (state = initialState, action) => {
    switch(action.type){
        case "SET_POKEMON_BY_TYPE":
            const pokemon = action.payload.pokemon;
            return{ ...state, allPokemonByType: pokemon}

        case "UPDATE_POKEMON_IN_FIRE_STORE_CART":
            const pokemonCartListString = localStorage.getItem("fireStoreCartList");
            const savedPokemonCartList = JSON.parse(pokemonCartListString)
            return{ ...state, fireStoreCartList: savedPokemonCartList}

        case "UPDATE_POKEMON_IN_WATER_STORE_CART":
            const waterCartListString = localStorage.getItem("waterStoreCartList");
            const savedWaterPokemonCartList = JSON.parse(waterCartListString)
            return { ...state, waterStoreCartList: savedWaterPokemonCartList}
        default:
            return state
    }
}

export default pokemon;  