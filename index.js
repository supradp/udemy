const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из проследних просмотреных фильмов?", "");
const b = prompt("На сколько вы его оцените?", "");
const c = prompt("Один из проследних просмотреных фильмов?", "");
const d = prompt("На сколько вы его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
