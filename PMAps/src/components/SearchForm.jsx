import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
const URL = "http://www.omdbapi.com/?apikey=e971c799";
import { MovieList } from './MovieList';

export const SearchForm = () => {
  const [nameMovie, setNameMovie] = useState(''); // Estado para almacenar el nombre de la película buscada
  const [movieData, setMovieData] = useState([]); // Estado para almacenar los datos de la película encontrada

  const buscar = async () => {
    try {
      const result = await axios.get(`${URL}&s=${nameMovie}`); // Realiza una solicitud a la API con el nombre de la película
      const { Search } = result.data; 
      if (Search && Array.isArray(Search)) { // Verifica si los resultados existen y son un array
        setMovieData(Search); 
      } else {
        setMovieData([]); // Si no hay resultados o no es un array, se establece un array vacío
      }
    } catch (error) {
      console.error(error);
      setMovieData([]); // Se establece un array vacío en caso de error
    }
  };
  console.log(movieData); 

  useEffect(() => {
    buscar(); 
  }, [nameMovie]);

  return (
    <div className='container'>
      <h1 className='text-center mt-5'>Busca una película</h1>
      <form id="searchForm" autoComplete='off'>
        <div className='form-group'>
          <label htmlFor="Movie">Escribe el nombre</label>
          <input
            value={nameMovie}
            className='form-control'
            type="text"
            id='movie'
            placeholder='Película...'
            onChange={e => {
              setNameMovie(e.target.value); 
            }}
          />
        </div>
        <div className='form-group'></div>
      </form>
      {movieData.length > 0 && <MovieList movieData={movieData} />} {/*Renderiza el componente MovieList si hay datos de películas encontradas*/}
    </div>
  );
};