/** @format */
import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./ReduxToolkit/MovieSlice";
export const store = configureStore({
  reducer: {
    movies: MovieSlice,
  },
});
