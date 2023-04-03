import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Desc,
  BackLink,
  List,
  Item,
  MoreDetailLink,
  Loading,
} from './MovieDesk.styled';

export default function MovieDesc({ backLink, movieSpec }) {
  return (
    <Container>
      <BackLink to={backLink}>Go back</BackLink>
      <Desc>
        {movieSpec.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${movieSpec.poster_path}`}
            alt={movieSpec.tagline}
          />
        )}
        <div>
          <h1>
            {movieSpec.title} ({movieSpec.release_date.slice(0, 4)})
          </h1>
          <p>User score: {parseInt(movieSpec.vote_average * 10, 10)}%</p>
          <h2>Overview</h2>
          <p>{movieSpec.overview}</p>
          <h2>Genres</h2>
          <p>{movieSpec.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </Desc>

      <Desc>
        <List>
          <Item>
            <MoreDetailLink to="cast">Cast</MoreDetailLink>
          </Item>
          <Item>
            <MoreDetailLink to="reviews">Reviews</MoreDetailLink>
          </Item>
        </List>
      </Desc>
      <Suspense fallback={<Loading>Loading sub-page...</Loading>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

MovieDesc.propTypes = {
  backLink: PropTypes.any.isRequired,
  movieSpec: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    tagline: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }).isRequired,
};
