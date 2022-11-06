export const API_KEY: string = process.env.REACT_APP_TMDB_API_KEY || "";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_TMDB_REDIRECT_URL
    : "http://localhost:3000";

export const REDIRECT_URL = (authToken: string) =>
  `https://www.themoviedb.org/authenticate/${authToken}?redirect_to=${BASE_URL}/login`;
