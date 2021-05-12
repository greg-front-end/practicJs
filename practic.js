// using while loop method
/*
// count movies which user looked
let numbersOfFilms = '';
// last movie which user looked
let lastSeeMovie = '';
// rating which user gives the movie
let whatRatingWillYouGive = '';

while(true) {
    // ask user how much movies looked
    numbersOfFilms = prompt('How much movies did you see?');     
    // ask user about last movie
    lastSeeMovie = prompt('What last movie did you see?', '');
    // ask user what rating will he gives
    whatRatingWillYouGive = prompt('What rating will you give?','');
        // check numbersOfFilms is number or not
    if ((isFinite(numbersOfFilms))
        // check the variebels is not an empty 
        &&(lastSeeMovie, numbersOfFilms, whatRatingWillYouGive) !== '' 
        // check the variebels is not a null
        && (lastSeeMovie, numbersOfFilms, whatRatingWillYouGive) !== null
        //check whatRatingWillYouGive is number
        && isFinite(whatRatingWillYouGive)
        // check lastSeeMovie.length more than 50 characters
        && !(lastSeeMovie.length > 50) ) break;
}

// create DB
const personalMovieDb = {
    count: +numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDb)
// lastSeeMovie assigned whatRatingWillYouGive and enter the movie object
personalMovieDb.movies[lastSeeMovie] = +whatRatingWillYouGive;

// check if count movie more or equels 10 show the message
if (personalMovieDb.count >= 10) {
    console.log('You have good expression!');
} else if (personalMovieDb.count < 10) {
    console.log('You have bad expression!');
}   else {console.log('Somthing going wrong!')}
*/
// using for loop method

// create DB
const personalMovieDb = {
    count,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const numbersOfFilms = prompt('How much movies did you look?');
    const lastSeeMovie = prompt('Which last movie did you look?');
    const whatRatingWillYouGive = prompt('What rating will did you look?');

    if ((isFinite(numbersOfFilms))
    // check the variebels is not an empty 
    &&(lastSeeMovie, numbersOfFilms, whatRatingWillYouGive) !== '' 
    // check the variebels is not a null
    && (lastSeeMovie, numbersOfFilms, whatRatingWillYouGive) !== null
    //check whatRatingWillYouGive is number
    && isFinite(whatRatingWillYouGive)
    // check lastSeeMovie.length more than 50 characters
    && !(lastSeeMovie.length > 50) ) {
        personalMovieDb.count = numbersOfFilms;
        personalMovieDb.movies[lastSeeMovie] = whatRatingWillYouGive;
    } else {i--;}
}