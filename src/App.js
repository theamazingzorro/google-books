import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import SearchResults from "./components/SearchResults";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={ <SearchResults /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
