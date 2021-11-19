import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';
import { Router } from 'react-router-dom';

const historyMock = { 
    push: jest.fn(), 
    location: {}, 
    listen: jest.fn() 
};

describe('Search', () => {
    let component;
    beforeEach(() => {
        component = render(
            <Router navigator={historyMock} location={historyMock.location}>
                <Search />
            </Router>
        );
    });


    test('renders', () => {
        const element = screen.getByText(/Search/i);
        expect(element).toBeInTheDocument();
    });

    test('there is a input for term', () => {
        const element = screen.getByPlaceholderText(/Term/i);
        expect(element).toBeInTheDocument();
    });

    test('there is a search button', () => {
        const element = screen.getByText(/Search/i);
        expect(element).toBeInTheDocument();
    });

    test('clicking the search button navigates the user with the term', () => {
        const input = screen.getByPlaceholderText(/Term/i);
        fireEvent.change(input, { target: {value: 'banana'}});
        const searchButton = screen.getByText(/Search/i);
        fireEvent.click(searchButton);
        expect(historyMock.push.mock.calls[0][0]).toEqual({"hash": "", "pathname": "/search", "search": "?term=banana"});
    });
});