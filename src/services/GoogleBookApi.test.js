import * as service from './GoogleBooksApi.js';
import axios from 'axios';
jest.mock('axios');

describe('GoogleBookApi', () => {
    describe('search', () => {
        let term;
        beforeEach(() => {
            term = 'banana';
        });
        
        test('makes a request to the correct url', async () => {
            axios.get.mockImplementationOnce(() => Promise.resolve({items: []}));
            service.search(term);
            expect(axios.get).toHaveBeenCalledWith('https://www.googleapis.com/books/v1/volumes?q=' + term);
        });

        
        test('transforms the data', async() => {
            axios.get.mockImplementationOnce(() => Promise.resolve({data: {
                items: [
                    {
                        volumeInfo: {
                            title: 'bananas myths and legends',
                            imageLinks: { thumbnail: 'a thumbnail' },
                            description: 'all about the myths and legends surrounding this exotic fruit',
                            authors: ['Jane Odysisus', 'Debra Zaringer'],
                            printType: 'BOOK'
                        }
                    }
                ]
            }}));
            await expect(service.search(term)).resolves.toEqual([{
                title: 'bananas myths and legends',
                description: 'all about the myths and legends surrounding this exotic fruit',
                thumbnail: 'a thumbnail',
                author: 'Jane Odysisus, Debra Zaringer',
                type: 'BOOK'
            }]);
        });       
    });
});
