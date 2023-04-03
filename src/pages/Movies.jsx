import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovie } from '../api/api-service';
import { Container } from './Home.styled';

// const findMovies = new MoviesApiService();
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';

const Movies = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    getSearchMovie(query)
      .then(found => {
        return found.results;
      })
      .then(movies => {
        const moviesCollection = movies.map(({ id, title, vote_average }) => {
          const item = {};

          item.id = id;
          item.title = title;
          item.vote_average = vote_average;

          return item;
        });
        return moviesCollection;
      })
      .then(moviesCollection => {
        setFoundMovies(moviesCollection);
      });
  }, [query]);

  const onHandleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <Container>
      <SearchForm handleSubmit={onHandleSubmit} />

      {foundMovies && (
        <div>
          <MoviesList
            foundMovies={foundMovies}
            subpath=""
            location={location}
          />
        </div>
      )}
    </Container>
  );
};

export default Movies;
