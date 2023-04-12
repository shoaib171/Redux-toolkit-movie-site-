/** @format */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../Common/Api/Api";
import { ApiKey } from "../Common/Api/ApiKey";
export const FetchAsyncMovies = createAsyncThunk(
  "movies/FetchAsyncMovies",
  async (SearchText) => {
    const response = await MovieApi.get(
      `?apiKey=${ApiKey}&s=${SearchText}&type=movie`
    );
    return response.data;
  }
);
export const FetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (SearchText) => {
    const response = await MovieApi.get(
      `?apiKey=${ApiKey}&s=${SearchText}&type=series`
    );
    return response.data;
  }
);

export const FetchAsyncMoviesShowsDetail = createAsyncThunk(
  "movies/fetchAsyncMoviesShowsDetail",
  async (id) => {
    const response = await MovieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};
export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    RemoveAsyncFetchMovieShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [FetchAsyncMovies.pending]: () => {},
    [FetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [FetchAsyncMovies.rejected]: () => {},
    [FetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [FetchAsyncMoviesShowsDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectMovieOrShow: payload };
    },
  },
});
export const { RemoveAsyncFetchMovieShow } = MovieSlice.actions;
export const GetAllMovies = (state) => state.movies.movies;
export const GetAllShows = (state) => state.movies.shows;
export const GetSelectMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default MovieSlice.reducer;
