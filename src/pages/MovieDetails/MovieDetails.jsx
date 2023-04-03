import MovieDesc from 'components/MovieDesc/MovieDesc';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container } from './MovieDetails.styled';

import { getMovieDetails } from '../../api/api-service';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const [pending, setPending] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();

  const backLinkToLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setPending(true);

    setTimeout(() => {
      getMovieDetails(movieId)
        .then(movieData => {
          const movieRes = {
            title: movieData.title,
            release_date: movieData.release_date,
            vote_average: movieData.vote_average,
            poster_path: movieData.poster_path,
            tagline: movieData.tagline,
            overview: movieData.overview,
            genres: movieData.genres,
          };
          return movieRes;
        })
        .then(movieSpec => {
          setMovieData(movieSpec);
        })
        .finally(setPending(false));
    }, 500);
  }, [movieId]);

  return (
    <Container>
      {pending ? (
        <Loader searchQuery="Loading movie data..." />
      ) : (
        movieData && (
          <MovieDesc
            backLink={backLinkToLocationRef.current}
            movieSpec={movieData}
          />
        )
      )}
    </Container>
  );
};

export default MovieDetails;
