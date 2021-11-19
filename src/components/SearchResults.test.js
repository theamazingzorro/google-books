import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
    let component;
    beforeEach(() => {
        component = render(<SearchResults />);
    });
    
    test('renders', () => {
        const element = screen.getByText(/Search Results Works[!]/i);
        expect(element).toBeInTheDocument();
    });
});
