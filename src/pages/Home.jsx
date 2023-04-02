// import { nanoid } from 'nanoid';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from '../api/api-service';

// const moviesTrending = new MoviesApiService();

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending(1).then(trends => {
      setTrending(trends.results);
    });
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      <ul>
        {trending.map(trend => {
          return (
            <li key={trend.id}>
              <Link to={`/movies/${trend.id}`} state={{ from: location }}>
                {trend.title} | {trend.vote_average}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
