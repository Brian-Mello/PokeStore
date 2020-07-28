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
            const newFirePokemon = action.payload.firePokemon;
            return{ ...state, fireStoreCartList: newFirePokemon}

        case "UPDATE_POKEMON_IN_WATER_STORE_CART":
            const newWaterPokemon = action.payload.waterPokemon;
            return { ...state, waterStoreCartList: newWaterPokemon}
        default:
            return state
    }
}

export default pokemon;  