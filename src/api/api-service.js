const apiKey = '5a20241834eb9a6674dc92f9938aafbf';

export const getTrending = page => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=${page}`
  ).then(data => {
    return data.json();
  });
};

export const getSearchMovie = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  ).then(data => {
    return data.json();
  });
};

export const getMovieDetails = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  ).then(data => {
    return data.json();
  });
};

export const getMovieCredits = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
  ).then(data => {
    return data.json();
  });
};

export const getMovieReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`
  ).then(data => {
    return data.json();
  });
};
