import { allGenresFilterName } from './const';
import { FilmsType } from './types/types';

export const getRatingCountToName = (rating: number) => {
  if (rating > 0 && rating < 3) {
    return 'Bad';
  } if (rating >= 3 && rating < 5) {
    return 'Normal';
  }
  if (rating >= 5 && rating < 8) {
    return 'Good';
  }
  if (rating >= 8 && rating < 10) {
    return 'Very good';
  }
  if (rating === 10) {
    return 'Awesome';
  }
};

// AppSelector functions

export const getMovieListByGenre = (films: FilmsType[], genre: string) => {
  if (genre === allGenresFilterName) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const getGenres = (films: FilmsType[]): string[] => {
  const genres = new Set(films.map((film) => film.genre));
  return [allGenresFilterName, ...genres];
};

export const getCurrentGenre = (state: {genre: string}) => state.genre;

export const getSelectedFilms = (state: {films: FilmsType[]}, currentGenre: string) => getMovieListByGenre(state.films, currentGenre);
