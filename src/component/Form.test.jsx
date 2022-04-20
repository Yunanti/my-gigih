import { screen, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Form from './Form';

test('should test action input', () => {
  render(<Form onChange={() => null} onSubmit={() => null} />);

  const input = screen.getByTestId('inputGif');
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});
