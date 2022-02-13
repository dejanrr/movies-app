import axios from "axios";

export default {
  getPopularMovies: () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&page=1`;
    return axios.get(url).then((info) => info.data);
  },
  getTopRatedMovies: () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`;
    return axios.get(url).then((info) => info.data);
  },
  getSearchData: (searchQuery) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=22255a1d03be2922b50e977230a4adaa&query=`;
    return axios.get(url + searchQuery).then((info) => info.data);
  },
};
