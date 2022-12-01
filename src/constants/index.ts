export const API_KEY: string = process.env.REACT_APP_TMDB_API_KEY || "";

export const REDIRECT_URL = (authToken: string) =>
  `https://www.themoviedb.org/authenticate/${authToken}?redirect_to=${"http://localhost:3000"}/login`;
