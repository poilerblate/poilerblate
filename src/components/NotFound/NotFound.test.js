import React from 'react';
import { shallow } from 'enzyme';

import { NotFound } from 'components/NotFound';

describe('NotFound component', () => {
  it('should contain a wrapper div with a classname', () => {
    const node = shallow(<NotFound />);

    expect(node.props().className).toEqual('not-found');
  });

  it('should contain a header with a text', () => {
    const node = shallow(<NotFound />);

    expect(node.find('h1').length).toBe(1);
    expect(node.find('h1').text()).toEqual('page not found');
  });

  it('should contain a link to /foo', () => {
    const node = shallow(<NotFound />);

    expect(node.find('Link').length).toBe(1);
    expect(node.find('Link').props().to).toBe('/');
  });
});
