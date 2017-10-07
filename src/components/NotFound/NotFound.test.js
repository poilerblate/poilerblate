import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NotFound } from 'components/NotFound';

Enzyme.configure({ adapter: new Adapter() });

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
