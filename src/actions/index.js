import axios from 'axios';

const baseUrl = "https://pokeapi.co/api/v2";

export const getPokemonByType = (typeId) => async (dispatch) => {
    try{
        const response = await axios.get(`${baseUrl}/type/${typeId}`)
        
        const pokemonMap = response.data.pokemon.map( async (pokemon)=> {
            const pokemonData = await axios.get(pokemon.pokemon.url)

            const pokemonDetails = {
                id: pokemonData.data.id,
                name: pokemon.pokemon.name,
                image: pokemonData.data.sprites.front_default,
                value: pokemonData.data.height
            }

            return pokemonDetails;
        })


        const newPokemonDetails = await Promise.all(pokemonMap)

        dispatch(setPokemonByType(newPokemonDetails))
    } catch(err) {
        alert("Erro ao pegar os pokemons")
    }
}

export const setPokemonByType = (pokemon) => ({
    type: "SET_POKEMON_BY_TYPE",
    payload: {
        pokemon
    }
})

export const updatePokemonInFireStoreCart = (firePokemon) => ({
    type: "UPDATE_POKEMON_IN_FIRE_STORE_CART",
    payload: {
        firePokemon
    }
})

export const updatePokemonInWaterStoreCart = (waterPokemon) => ({
    type: "UPDATE_POKEMON_IN_WATER_STORE_CART",
    payload: {
        waterPokemon
    }
})