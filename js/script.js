const numberOfFilms = prompt('сколько фильвом вы уже посмотрели?', ' ');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
console.log(personalMovieDB.count, 'фильмов ');

const askQuestion = prompt('какой последний фильм вы посмотрели? ', ' ');
const askQuestion2 = prompt('на сколько вы его оцениваете? ', ' ');
personalMovieDB.movies[askQuestion] = askQuestion2;
console.log(personalMovieDB);

console.table(personalMovieDB.movies);
