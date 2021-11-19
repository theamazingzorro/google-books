import { render, screen, within } from '@testing-library/react';

import App from './App';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = render(<App />);
  });

  test('renders the home component', () => {
    const headerElement = screen.getByText(/Favorite Book/i);
    expect(headerElement).toBeInTheDocument();
  });
});
  
