import React from 'react';
import renderer from 'react-test-renderer';
import { App } from './';

describe('App component', () => {
  const tree = renderer.create(<App />).toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
