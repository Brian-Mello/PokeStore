import React from 'react';
import renderer from 'react-test-renderer';
import Header from '.';

describe('testando integridade do Header component', () => {
    it(' Header snapshot', () => {
        const header = renderer.create(<Header/>).toJSON();
        expect(header).toMatchSnapshot();
    });
}); 