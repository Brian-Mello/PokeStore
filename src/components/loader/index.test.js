import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '.';

describe('testando integridade do Loader component', () => {
    it(' Loader snapshot', () => {
        const loader = renderer.create(<Loader/>).toJSON();
        expect(loader).toMatchSnapshot();
    });
}); 