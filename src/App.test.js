import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Component', () => {
  test('App Renders', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists('.App')).toBe(true);
  });
})

