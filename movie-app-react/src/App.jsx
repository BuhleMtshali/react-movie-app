import { useState, useEffect } from 'react'
import searchIcon from '/search-icon.png';
import MovieCard from './Moviecard';
import './App.css'

const apiUrl = " http://www.omdbapi.com/?i=tt3896198&apikey=5f5518ae";

function App() {
  //useState
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  //useEffect hook
  useEffect(() => {
    searchMovies('The Mummy')
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
      <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <img src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
