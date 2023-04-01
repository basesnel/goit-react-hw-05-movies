export default class MoviesApiService {
  constructor() {
    this.apiKey = '5a20241834eb9a6674dc92f9938aafbf';
    this.page = 1;
  }

  getTrending(page) {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}&page=${page}`
    ).then(data => {
      return data.json();
    });
  }

  getSearchMovie(query) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`
    ).then(data => {
      return data.json();
    });
  }

  getMovieDetails(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`
    ).then(data => {
      return data.json();
    });
  }
}
