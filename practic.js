let numbersOfFilms = '';

const personalMovieDb = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

while(true) {
    numbersOfFilms = +prompt('How much movies did you see?');     

    let lastSeeMovie = prompt('What last movie did you see?', '');
    let whatRaitng = prompt('What raiting do you give?','');

    if ((lastSeeMovie, numbersOfFilms, whatRaitng) !== '' 
        && (lastSeeMovie, numbersOfFilms, whatRaitng) !== null
        && !(lastSeeMovie.length > 50) ) break;

    personalMovieDb.movies[lastSeeMovie] = whatRaitng;
}

if (personalMovieDb.count.length > )
