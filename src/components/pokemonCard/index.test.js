import React from 'react';
import renderer from 'react-test-renderer';
import PokemonCard from '.';

describe('testando integridade do Pokemon card component', () => {
    it(' Pokemon card snapshot', () => {
        const pokemonCard = renderer.create(<PokemonCard/>).toJSON();
        expect(pokemonCard).toMatchSnapshot();
    });
}); 