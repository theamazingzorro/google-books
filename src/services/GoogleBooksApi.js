import * as axios from 'axios';

export function search(term) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + term).then((result) => {
        const items = result.data.items;
        let books = [];
        items.map((item) => {
            books.push({
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors,
                description: item.volumeInfo.description,
                thumbnail: item.volumeInfo.imageLinks.thumbnail,
                type: item.volumeInfo.printType
            });
        });
        return books;
    });
}