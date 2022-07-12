import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Components/home'

it.only('render the Calculator Component', ()=> {
const tree = renderer.create(<Home/>).toJSON();
expect(tree).toMatchSnapshot()
})