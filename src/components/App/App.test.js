import { App } from 'components/App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should contain a wrapper div with a classname', () => {
    const node = shallow(<App />);

    expect(node.props().className).toEqual('boilerplate');
  });

  it('should contain a header with a text', () => {
    const node = shallow(<App />);

    expect(node.find('h1').length).toBe(1);
    expect(node.find('h1').text()).toEqual('poilerblate');
  });

  it('should contain a link to /foo', () => {
    const node = shallow(<App />);

    expect(node.find('Link').length).toBe(1);
    expect(node.find('Link').props().to).toBe('/foo');
  });
});
