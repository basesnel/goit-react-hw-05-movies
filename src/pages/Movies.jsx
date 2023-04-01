import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getSearchMovie } from '../api/api-service';

// const findMovies = new MoviesApiService();

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);

  // useEffect(() => {
  //   findMovies
  //     .getSearchMovie(searchQuery)
  //     .then(found => setFoundMovies(found.results));
  // }, [searchQuery]);

  const onHandleSubmit = event => {
    event.preventDefault();

    getSearchMovie(searchQuery).then(found => setFoundMovies(found.results));
  };

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button>Search</button>
      </form>
      <ul>
        {foundMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>
                {movie.title} | {movie.vote_average}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
