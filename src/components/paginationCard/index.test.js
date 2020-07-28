import React from 'react';
import renderer from 'react-test-renderer';
import PaginationCard from '.';

describe('testando integridade da Pagination card component', () => {
    it(' Pagination card snapshot', () => {
        const paginationCard = renderer.create(<PaginationCard/>).toJSON();
        expect(paginationCard).toMatchSnapshot();
    });
}); 