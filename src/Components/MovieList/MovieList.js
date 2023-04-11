/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { GetAllMovies, GetAllShows } from "../../ReduxToolkit/MovieSlice";
import { Link } from "react-router-dom";

const MovieList = () => {
  const movies = useSelector(GetAllMovies);
  const shows = useSelector(GetAllShows);

  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies?.Search?.map((movie, index) => {
        return (
          <>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-5">
              <Link to={`/movie/${movie.imdbID}`}>
                <div className="card h-100   bg-dark" key={index}>
                  <img
                    src={movie.Poster}
                    className="d-block w-100 h-75"
                    alt={movie.title}
                  />

                  <div className="card-body  text-light">
                    <h5 className=" card-title  ">
                      <span>Title</span> {movie.Title.substring(0, 25)}
                    </h5>
                    <p className="card-text">
                      <span className="fs-5">Year</span> {movie.Year}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </>
        );
      })
    ) : (
      <div className="col-12">
        <h3 className=" fs-2 text-light bg-dark text-center py-5">
          {movies.Error}
        </h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows?.Search?.map((movie) => {
        return (
          <>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-5">
              <Link to={`/movie/${movie.imdbID}`}>
                <div className="card h-100 bg-dark">
                  <img
                    key={movie.imdbID}
                    src={movie.Poster}
                    className="d-block w-100 h-75"
                    alt={movie.title}
                  />

                  <div className="card-body  text-light">
                    <h5 className=" card-title  ">
                      <span>Title</span> {movie.Title.substring(0, 25)}
                    </h5>
                    <p className="card-text">
                      <span className="fs-5">Year</span> {movie.Year}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </>
        );
      })
    ) : (
      <div className="col-12">
        <h3 className=" fs-2 text-light bg-dark text-center py-5">
          {movies.Error}
        </h3>
      </div>
    );

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h2 className=" fs-1 fw-bold text-light ">Movies</h2>
          <hr />
          {renderMovies}
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <h2 className=" fs-1 fw-bold text-light ">Shows</h2>
          <hr />
          {renderShows}
        </div>
      </div>
    </>
  );
};

export default MovieList;
