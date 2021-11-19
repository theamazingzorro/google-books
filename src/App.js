import Book from './components/Book.js'
import './App.css'

function App() {
  const favorite_book = {
    title: "favorite title",
    author: "favorite author",
    description: "some description",
    thumbnail: "https://th.bing.com/th/id/OIP.28sgzedFu7LhRiGkAMUBBgHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    type: "book"
  };

  return (
    <div className="App">
      <header className="App-header">Favorite Book</header>
      <Book testid="favoriteBook" isFavorite={true} {...favorite_book}></Book>
    </div>
  );
}

export default App;
