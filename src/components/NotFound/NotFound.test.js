import React from 'react';
import renderer from 'react-test-renderer';
import { NotFound } from './';

describe('NotFound component', () => {
  const tree = renderer.create(<NotFound />).toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
