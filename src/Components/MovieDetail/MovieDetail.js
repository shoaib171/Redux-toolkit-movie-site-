/** @format */

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  FetchAsyncMoviesShowsDetail,
  GetSelectMovieOrShow,
  RemoveAsyncFetchMovieShow,
} from "../../ReduxToolkit/MovieSlice";
const MovieDetail = () => {
  const { imdbID } = useParams();

  const dispatch = useDispatch();
  const data = useSelector(GetSelectMovieOrShow);

  useEffect(() => {
    dispatch(FetchAsyncMoviesShowsDetail(imdbID));
    return () => {
      dispatch(RemoveAsyncFetchMovieShow());
    };
  }, [dispatch, imdbID]);
  return (
    <>
      <div className="container mt-3 mb-5 bg-dark shadow-lg text-light py-5 ">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h3 className="ms-4 fw-bolder">{data.Title}</h3>
            <span className="text-warning ms-4">
              IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
            </span>
            <div className="text-warning ms-4">
              IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
            </div>
            <div className="text-warning ms-4">
              Runtime <i className="fa fa-film"></i> : {data.Runtime}
            </div>
            <div className="text-warning ms-4">
              Year <i className="fa fa-calendar"></i> : {data.Year}
            </div>
            <p className="text-justify ms-4 mt-2">{data.Plot}</p>
            <span className="text-warning ms-4">Director:{data.Director}</span>
            <div className="text-warning ms-4">Stars:{data.Actors}</div>
            <span className="text-warning ms-4">Generes:{data.Genre}</span>
            <div className="text-warning ms-4">Languages:{data.Language}</div>
            <span className="text-warning ms-4 text-center">
              Awards:{data.Awards}
            </span>
            <div className="mt-2">
              <NavLink to="/">
                <button className="btn btn-outline-light ms-4">
                  Back to Home
                </button>
              </NavLink>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 py-5 text-center">
            <img
              className="d-block w-100"
              height="500px"
              src={data.Poster}
              alt={data.Title}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
