import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Components/navbar'

it.only('render the Calculator Component', ()=> {
const tree = renderer.create(<Navbar/>).toJSON();
expect(tree).toMatchSnapshot()
})