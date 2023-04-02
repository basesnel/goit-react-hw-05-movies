import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from '../api/api-service';

const MovieDetails = () => {
  const [movieDls, setMovieDls] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);

  const location = useLocation();

  const backLinkToLocationRef = useRef(location.state?.from ?? '/movies');
  console.log(backLinkToLocationRef);

  useEffect(() => {
    getMovieDetails(movieId).then(movieData => {
      console.log(movieData);
      setMovieDls(movieData);
    });
  }, [movieId]);

  return (
    <>
      {movieDls && (
        <div>
          <Link to={backLinkToLocationRef.current}>Go back</Link>
          <h1>
            {movieDls.title} ({movieDls.release_date.slice(0, 4)})
          </h1>
          <p>User score: {parseInt(movieDls.vote_average * 10, 10)}%</p>
          <img
            src={`https://image.tmdb.org/t/p/w200${movieDls.poster_path}`}
            alt={movieDls.tagline}
          />
          <h2>Overview</h2>
          <p>{movieDls.overview}</p>
          <h2>Genres</h2>
          <p>{movieDls.genres.map(genre => genre.name).join(', ')}</p>

          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
