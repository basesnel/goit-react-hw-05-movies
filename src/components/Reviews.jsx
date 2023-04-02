import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/api-service';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(reviews => {
        return reviews.results;
      })
      .then(reviews => {
        const reviewsCollection = reviews.map(({ id, author, content }) => {
          const review = {};

          review.id = id;
          review.author = author;
          review.content = content;

          return review;
        });
        return reviewsCollection;
      })
      .then(reviewsCollection => {
        setMovieReviews(reviewsCollection);
      });
  }, [movieId]);

  return (
    <>
      {movieReviews.length ? (
        <>
          <h2>Reviews detail content: {movieId}</h2>
          <ul>
            {movieReviews.map(review => {
              return (
                <li key={review.id}>
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>No reviews for the movie.</p>
      )}
    </>
  );
};
