import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovie } from '../../api/api-service';
import { Container } from './Movies.styled';

import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    getSearchMovie(query)
      .then(found => {
        const moviesCollection = found.results.map(
          ({ id, title, vote_average }) => {
            const item = {};

            item.id = id;
            item.title = title;
            item.vote_average = vote_average;

            return item;
          }
        );
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
