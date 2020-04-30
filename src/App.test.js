import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { shallow } from 'enzyme';


test('renders learn react link', () => {
  const { getByText } = render(<BrowserRouter> <App /> </BrowserRouter>);
  const linkElement = getByText('learn React');
  expect(linkElement).toBeInTheDocument();
});
