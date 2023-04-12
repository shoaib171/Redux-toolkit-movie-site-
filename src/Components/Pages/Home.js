/** @format */

import React, { useEffect } from "react";
import Header from "../Header/Header";
import MovieList from "../MovieList/MovieList";
import { useDispatch } from "react-redux";
import {
  FetchAsyncMovies,
  FetchAsyncShows,
} from "../../ReduxToolkit/MovieSlice";

const Home = () => {
  const movieText = "Harry";
  const seriesText = "Friends";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAsyncMovies(movieText));
    dispatch(FetchAsyncShows(seriesText));
  });

  return (
    <>
      <Header title="Get ready for a cinematic adventure: The hottest movies now playing at your fingertips!" />
      <MovieList />
    </>
  );
};

export default Home;
