import MovieDesc from 'components/MovieDesc';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from '../api/api-service';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();

  const backLinkToLocationRef = useRef(location.state?.from ?? '/movies');
  // console.log(backLinkToLocationRef);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(movie => {
        return movie;
      })
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
      });
  }, [movieId]);

  return (
    <>
      {movieData && (
        <MovieDesc
          backLink={backLinkToLocationRef.current}
          movieSpec={movieData}
        />
      )}
    </>
  );
};

export default MovieDetails;
