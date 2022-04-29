import { render, screen } from '@testing-library/react';
import App from '../App';
// import Form from './PlayListForm';
import '@testing-library/jest-dom';
import PlayListForm from './PlayListForm';



test('render h3 element', () => {
  render(<PlayListForm />);

  // screen.debug();

  expect(screen.getByTestId('heading')).toBeInTheDocument();
});
