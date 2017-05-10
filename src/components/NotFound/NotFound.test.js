import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from './';

test('Component should have h1 element with a text', () => {
  const app = shallow(<NotFound />);

  expect(app.find('h1').text()).toEqual('page not found');
});
