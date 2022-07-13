import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Components/quote';

it('render the Calculator Component', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
