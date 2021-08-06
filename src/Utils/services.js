import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL, API_KEY } from "../Config/index";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: (name) =>
        `movie/popular?api_key=${API_KEY}&language=en-US&page=${name || 1}`,
    }),
  }),
});

export const { useGetMovieQuery } = movieApi;
export const tvShowApi = createApi({
  reducerPath: "tvShowApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTvShow: builder.query({
      query: (name) =>
        `tv/popular?api_key=${API_KEY}&language=en-US&page=${name || 1}`,
    }),
  }),
});
export const { useGetTvShowQuery } = tvShowApi;
