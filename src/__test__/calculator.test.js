import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Components/calculator'

it.only('render the Calculator Component', ()=> {
const tree = renderer.create(<Calculator/>).toJSON();
expect(tree).toMatchSnapshot()
})