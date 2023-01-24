// API Key (v3 auth)
// 3255c7a0ccf3136c397f01b4d2226c6a
// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=3255c7a0ccf3136c397f01b4d2226c6a
// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjU1YzdhMGNjZjMxMzZjMzk3ZjAxYjRkMjIyNmM2YSIsInN1YiI6IjYzY2ZhNjcyY2Y5YmEzMDA3YmVjOWI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uYnUHLKTey1ED_gjNYMY-ksqZlYBPs1pY-BVhC_alNM

const API_KEY = "3255c7a0ccf3136c397f01b4d2226c6a";
const request={
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchKidsMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
}
export default request;