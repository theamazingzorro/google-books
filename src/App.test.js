import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = render(<App />);
  });

  test('renders the favorite book header', () => {
    const headerElement = screen.getByText(/Favorite Book/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the favorite book', () => {
    const favoriteBookElement = screen.getByTestId('favoriteBook');
    expect(favoriteBookElement).toBeInTheDocument();
    expect(within(favoriteBookElement).getByText(/favorite title/i)).toBeInTheDocument();
    expect(within(favoriteBookElement).getByText(/favorite author/i)).toBeInTheDocument();
    expect(within(favoriteBookElement).getByText(/some description/i)).toBeInTheDocument();
    expect(within(favoriteBookElement).getByText(/book/i)).toBeInTheDocument();

    expect(within(favoriteBookElement).queryByText(/Favorite/)).not.toBeInTheDocument();
  });

  test('renders the books to read header', () => {
    const headerElement = screen.getByText(/Books to Read/i);
    expect(headerElement).toBeInTheDocument();
  });
  
  test('the books to read section has 3 books', () => {
    const booksToReadElement = screen.getByTestId('booksToRead');
    const books = within(booksToReadElement).getAllByText(/Title[:]/);
    expect(books.length).toBe(3);
  });
    
});
  
