import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults';
import { Router } from 'react-router-dom';

const historyMock = { push: jest.fn(), location: { search: '?term=taco'}, listen: jest.fn() };
describe('SearchResults', () => {
    let component;
    beforeEach(() => {
        component = render(
            <Router navigator={historyMock} location={historyMock.location}>
                <SearchResults />
            </Router>
        ); 
    });

    test('displays the searched term', () => {
        const element = screen.getByText(/taco/i);
        expect(element).toBeInTheDocument();
    });
});
