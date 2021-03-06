import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params['api_key'] = "a6d2365c60935d8d04d7c0f04ca3e6cd";
  config.params['language'] = "en-US";
  return config;
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id => 
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term => 
  api.get("search/movie", {
    params: {
      query: encodeURIComponent(term)
    }
  }) 
}

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToDay: () => api.get("tv/top_rated"),
  showDetail: id => 
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term => 
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    }) 
}


export default api;
