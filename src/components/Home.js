import { useState } from 'react';

import Book from './Book.js';
import Search from './Search.js';

function Home() {
  const [favoriteBook, setFavoriteBook] = useState ({
    title: "favorite title",
    author: "favorite author",
    description: "some description",
    thumbnail: "https://th.bing.com/th/id/OIP.28sgzedFu7LhRiGkAMUBBgHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    type: "book"
  });

  const booksToRead = [
    {
      title: "to read 1",
      author: "an author",
      description: "some description",
      thumbnail: "https://th.bing.com/th/id/OIP.28sgzedFu7LhRiGkAMUBBgHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      type: "book"
    }, 
    {
      title: "to read 2",
      author: "an author",
      description: "some description",
      thumbnail: "https://th.bing.com/th/id/OIP.28sgzedFu7LhRiGkAMUBBgHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      type: "book"
    },
    {
      title: "to read 3",
      author: "an author",
      description: "some description",
      thumbnail: "https://th.bing.com/th/id/OIP.28sgzedFu7LhRiGkAMUBBgHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      type: "book"
    }
  ];

  return (
    <div className="Home">
      <Search />
      <header className="App-header">Favorite Book</header>
      <Book testid="favoriteBook" isFavorite={true} favorite={setFavoriteBook} {...favoriteBook} />

      <header className="ToRead-header">Books to Read</header>
      <div data-testid="booksToRead">
        {booksToRead.map( (book, index) => <Book key={index} testid={"toRead"+index} isFavorite={false} favorite={setFavoriteBook}  {...book}/> )}
      </div>
    </div>
  );
}

export default Home;