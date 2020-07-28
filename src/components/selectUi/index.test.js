import React from 'react';
import renderer from 'react-test-renderer';
import SelectUI from '.';

describe('testando integridade do SelectUI Component', () => {
    it(' SelectUI snapshot', () => {
        const selectUI = renderer.create(<SelectUI/>).toJSON();
        expect(selectUI).toMatchSnapshot();
    });
}); 