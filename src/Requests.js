const key = "32b35a28d4d82d34584f147a9ecb560e";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestPopularTv: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  requestJustForYOu: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=the&page=1&include_adult=true`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestRomance: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=love&page=1&include_adult=true`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
export default requests;
