// import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from '../api/api-service';
import { Container } from './Home.styled';

// const moviesTrending = new MoviesApiService();
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending(1)
      .then(trends => {
        return trends.results;
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
        setTrending(moviesCollection);
      });
  }, []);

  return (
    <>
      {trending && (
        <Container>
          <h1>Tranding today</h1>
          <MoviesList
            foundMovies={trending}
            subpath="/movies/"
            location={location}
          />
        </Container>
      )}
    </>
  );
};

export default Home;
