import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'api/api-service';
import { List, Item, Person, Attribute, Blank } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);

    setTimeout(() => {
      getMovieCredits(movieId)
        .then(credit => {
          return credit.cast;
        })
        .then(cast => {
          const actorsCollection = cast.map(
            ({ id, profile_path, name, character }) => {
              const actor = {};

              actor.id = id;
              actor.profile_path = profile_path;
              actor.name = name;
              actor.character = character;

              return actor;
            }
          );
          return actorsCollection;
        })
        .then(actorsCollection => {
          setMovieCast(actorsCollection);
        })
        .finally(setPending(false));
    }, 500);
  }, [movieId]);
  return (
    <>
      {pending ? (
        <Loader searchQuery="Search for trending movies..." />
      ) : movieCast.length ? (
        <>
          <h2>Cast detail content: {movieId}</h2>
          <List>
            {movieCast.map(actor => {
              return (
                <Item key={actor.id}>
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={actor.name}
                    />
                  ) : (
                    <Blank>No foto</Blank>
                  )}
                  <Attribute>Person:</Attribute>
                  <Person>{actor.name}</Person>
                  <Attribute>Character:</Attribute>
                  <Person>{actor.character}</Person>
                </Item>
              );
            })}
          </List>
        </>
      ) : (
        <p>No cast data for the movie.</p>
      )}
    </>
  );
};

export default Cast;
