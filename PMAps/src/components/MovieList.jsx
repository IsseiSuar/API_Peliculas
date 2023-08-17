import React from 'react';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movieData }) => {
  return (
    <div className="row">
      {movieData.map((movie) => (
        <div key={movie.imdbID} className="col-md-4">
          <div className="card mb-4">
            <MovieItem movie={movie} />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">{movie.Year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};