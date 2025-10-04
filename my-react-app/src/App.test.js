import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the welcome text', () => {
  render(<App />);
  const textElement = screen.getByText(/jskefhssdjkfhksdjhfsdkjfhekyuiwefhkewjfkwjefiwehkfjhwekjfhewkj/i);
  expect(textElement).toBeInTheDocument();
});
