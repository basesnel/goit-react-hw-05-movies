import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'api/api-service';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
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
      });
  }, [movieId]);
  return (
    <>
      {movieCast.length ? (
        <>
          <h2>Cast detail content: {movieId}</h2>
          <ul>
            {movieCast.map(actor => {
              return (
                <li key={actor.id}>
                  <p>
                    {actor.profile_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                        alt={actor.name}
                      />
                    )}
                    {actor.name} | {actor.character}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>No cast data for the movie.</p>
      )}
    </>
  );
};

export default Cast;
