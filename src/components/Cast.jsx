import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'api/api-service';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(credit => {
      console.log(credit.cast);
      setMovieCast(credit.cast);
    });
  }, [movieId]);
  return (
    <>
      {/* {movieCast && ( */}
      {/* <div> */}
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
      {/* </div> */}
      {/* )} */}
    </>
  );
};
