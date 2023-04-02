import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MoviesList({ foundMovies, subpath, location }) {
  return (
    <ul>
      {foundMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`${subpath}${movie.id}`} state={{ from: location }}>
            {movie.title} | {movie.vote_average}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  foundMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
  subpath: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};
