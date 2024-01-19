import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Basket from '../components/organism/Basket';
import '@testing-library/jest-dom'

describe('<span>0</span> Exits?', () => {
  afterEach(cleanup);

  it('Should display 0 p in Basket', () => {
    const { getByText } = render(<Basket quantity={0}/>);
    const addButton = getByText(0);
    expect(addButton).toBeInTheDocument();
  });

  it('Should display any number value in Basket', () => {
  const value = Math.random();
  const { getByText } = render(<Basket quantity={value}/>);
  const addButton = getByText(value);
  expect(addButton).toBeInTheDocument();
  });
})