import React from 'react';
import renderer from 'react-test-renderer';
import FloatCartButton from '.';

describe('testando integridade do Float cart button component', () => {
    it(' Float card button snapshot', () => {
        const floatCartButton = renderer.create(<FloatCartButton/>).toJSON();
        expect(floatCartButton).toMatchSnapshot();
    });
}); 