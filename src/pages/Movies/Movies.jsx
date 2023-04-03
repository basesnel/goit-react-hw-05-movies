import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovie } from '../../api/api-service';
import { Container } from './Movies.styled';

import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [pending, setPending] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    setPending(true);
    setTimeout(() => {
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
        })
        .finally(setPending(false));
    }, 500);
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

      {pending ? (
        <Loader searchQuery={`Search movies on query "${query}"...`} />
      ) : (
        foundMovies && (
          <div>
            <MoviesList
              foundMovies={foundMovies}
              subpath=""
              location={location}
            />
          </div>
        )
      )}
    </Container>
  );
};

export default Movies;
