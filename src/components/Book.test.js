import { render, screen } from '@testing-library/react';
import { fireEvent } from "@testing-library/react";
import { act } from 'react-dom/test-utils';

import Book from './Book';

describe('Book', () => {
    let component;
    const example_book = {
        title: "some title",
        author: "some author",
        description: "some description",
        thumbnail: "url",
        type: "book"
    };
    
    describe('general book', ()=> {
        beforeEach(() => { 
            component = render(<Book {...example_book}/>);
        });
        
        describe('title', () => {
            test('renders the label', () => {
                const element = screen.getByText(/Title[:]/i);
                expect(element).toBeInTheDocument();
            });
            
            test('renders the value', () => {
                const element = screen.getByText(/some title/i);
                expect(element).toBeInTheDocument();
            });
        });
    
        describe('author', () => {
            test('renders the label', () => {
                const element = screen.getByText(/Author[:]/i);
                expect(element).toBeInTheDocument();
            });
            
            test('renders the value', () => {
                const element = screen.getByText(/some author/i);
                expect(element).toBeInTheDocument();
            });
        });
    
        describe('description', () => {
            test('renders the label', () => {
                const element = screen.getByText(/Description[:]/i);
                expect(element).toBeInTheDocument();
            });
            
            test('renders the value', () => {
                const element = screen.getByText(/some description/i);
                expect(element).toBeInTheDocument();
            });
        });
    
        describe('type', () => {
            test('renders the label', () => {
                const element = screen.getByText(/Type[:]/i);
                expect(element).toBeInTheDocument();
            });
            
            test('renders the value', () => {
                const element = screen.getByText(/book/i);
                expect(element).toBeInTheDocument();
            });
        });
        
        test('thumbnail', () => {
            const element = screen.getByTestId('thumbnail');
            expect(element.getAttribute('src')).toBe("url");
        });
    })

    describe('when the book is favorite', () => {
        beforeEach(() => {
            render(<Book isFavorite={true} {...example_book}/>)
        });

        test('it does not show the favorite button', ()=> {
            const favoriteButton = screen.queryByText(/Favorite/);
            expect(favoriteButton).not.toBeInTheDocument();
        });
    });

    describe('when the book is not favorite', () => {
        let favoriteSpy;
        beforeEach(() => {
            favoriteSpy = jest.fn();
            render(<Book isFavorite={false} favorite={favoriteSpy} {...example_book}/>)
        });

        test('it shows the favorite button', ()=> {
            const favoriteButton = screen.queryByText(/Favorite/);
            expect(favoriteButton).toBeInTheDocument();
        });

        test('clicking the favorite button calls the props.favorite function', () => {
            const favoriteButton = screen.queryByText(/Favorite/);
            act(() => {
                fireEvent.click(favoriteButton);
            });

            expect(favoriteSpy).toHaveBeenCalledWith(example_book);
        });
    });
});