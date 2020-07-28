import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';

describe('testando integridade do Footer component', () => {
    it(' Footer snapshot', () => {
        const footer = renderer.create(<Footer/>).toJSON();
        expect(footer).toMatchSnapshot();
    });
}); 