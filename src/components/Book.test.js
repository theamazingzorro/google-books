import { render, screen } from '@testing-library/react';
import Book from './Book';
describe('Book', () => {
    let component;
    
    beforeEach(() => { 
        component = render(<Book />);
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
        expect(element.getAttribute('src')).toBe("https://th.bing.com/th/id/OIP.28sgzedFu7LhRiGkAMUBBgHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7");
    });
});