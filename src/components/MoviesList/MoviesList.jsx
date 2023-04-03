import PropTypes from 'prop-types';
import { List, Item, MovieLink } from './MoviesList.styled';

export default function MoviesList({ foundMovies, subpath, location }) {
  return (
    <List>
      {foundMovies.map(movie => (
        <Item key={movie.id}>
          <MovieLink to={`${subpath}${movie.id}`} state={{ from: location }}>
            {movie.title} | {movie.vote_average}
          </MovieLink>
        </Item>
      ))}
    </List>
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
