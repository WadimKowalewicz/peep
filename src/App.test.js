import React from 'react';
import ReactDOM from 'react-dom';
import { act, render, screen } from '@testing-library/react';
import PeepApp from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<PeepApp />, div);
  });
  ReactDOM.unmountComponentAtNode(div)
});

