import React from 'react';

export const MovieItem = ({ movie }) => {
  const getPoster = () => {
    try {
      const { Poster } = movie;
      return Poster;
    } catch (error) {
      console.log(error);
      return ''; // Valor por defecto en caso de error
    }
  };

  const posterURL = getPoster();

  return (
    <>
      {posterURL !== '' && <img src={posterURL} alt='Poster' />}
    </>
  );
};