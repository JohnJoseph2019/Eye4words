import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


test('App Componentw', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.exists('.App')).toBe(true);
});
