import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders the landing page', () => {
  render(<App />);

  //const linkElement = screen.getByText(/target text/i);
  //expect(linkElement).toBeInTheDocument();
});