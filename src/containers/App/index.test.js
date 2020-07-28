import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';

describe('testando integridade do App Container', () => {
    it(' App snapshot', () => {
        const app = renderer.create(<App/>).toJSON();
        expect(app).toMatchSnapshot();
    });
}); 