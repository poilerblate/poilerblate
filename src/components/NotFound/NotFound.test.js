import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import { NotFound } from './';

describe('NotFound component', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  ).toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
