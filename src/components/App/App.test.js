import React from 'react';
import { shallow } from 'enzyme';
import { App } from './';

test('Component should have h1 element with a text', () => {
  const app = shallow(<App />);

  expect(app.find('h1').text()).toEqual('poilerblate');
});
