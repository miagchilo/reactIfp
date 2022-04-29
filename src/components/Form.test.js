import { render, screen } from '@testing-library/react';
import App from '../App';
import Form from './PlayListForm';
import '@testing-library/jest-dom';
import Header from './Header';

test('render h3 element', () => {
  render(<Form />);

  // screen.debug();

  expect(screen.getByTestId('heading')).toBeInTheDocument();
});
