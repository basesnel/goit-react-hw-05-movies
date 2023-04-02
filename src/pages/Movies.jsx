import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovie } from '../api/api-service';

// const findMovies = new MoviesApiService();

const Movies = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  console.log(location);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    getSearchMovie(query).then(found => setFoundMovies(found.results));
  }, [query]);

  const onHandleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
    // getSearchMovie(searchParams.get('query')).then(found =>
    //   setFoundMovies(found.results)
    // );
  };

  // const handleInputChange = event => {
  //   if (event.target.value === '') {
  //     return setSearchParams({});
  //   }

  //   setSearchParams({ query: event.target.value });
  // };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search movies..."
        />
        <button>Search</button>
      </form>
      <ul>
        {foundMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
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
