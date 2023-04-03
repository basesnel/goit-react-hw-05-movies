import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/api-service';
import { List, Item, Title, Text } from './Reviews.styled';

const Reviews = () => {
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
          <List>
            {movieReviews.map(review => {
              return (
                <Item key={review.id}>
                  <Title>{review.author}</Title>
                  <Text>{review.content}</Text>
                </Item>
              );
            })}
          </List>
        </>
      ) : (
        <p>No reviews for the movie.</p>
      )}
    </>
  );
};

export default Reviews;
