import { screen, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import GifRedux from './GifRedux';
import store from '../../redux/store';

test('should renders Trending', () => {
  render(
    <Provider store={store}>
      <GifRedux onChange={() => null} onSubmit={() => null} />
    </Provider>
  );

  const input = screen.getByLabelText('Gif');
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});
