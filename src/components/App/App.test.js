import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import { App } from 'components/App';

describe('App component', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ).toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
