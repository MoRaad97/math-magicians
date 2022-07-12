import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../App'

it('render the Calculator Component', ()=> {
const tree = renderer.create(<App />).toJSON();
expect(tree).toMatchSnapshot()
})