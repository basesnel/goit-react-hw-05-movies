import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

export default function MovieDesc({ backLink, movieSpec }) {
  return (
    <div>
      <Link to={backLink}>Go back</Link>
      <h1>
        {movieSpec.title} ({movieSpec.release_date.slice(0, 4)})
      </h1>
      <p>User score: {parseInt(movieSpec.vote_average * 10, 10)}%</p>
      <img
        src={`https://image.tmdb.org/t/p/w200${movieSpec.poster_path}`}
        alt={movieSpec.tagline}
      />
      <h2>Overview</h2>
      <p>{movieSpec.overview}</p>
      <h2>Genres</h2>
      <p>{movieSpec.genres.map(genre => genre.name).join(', ')}</p>

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
  );
}

MovieDesc.propTypes = {
  backLink: PropTypes.object.isRequired,
  movieSpec: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }).isRequired,
};
