//? start loop methods
// todo using while loop method
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
   if (isFinite(numbersOfFilms)
        // check the variebels is not an empty 
        &&lastSeeMovie !== ''
        && numbersOfFilms !== ''
        && whatRatingWillYouGive !== '' 
        // check the variebels is not a null
        && (lastSeeMovie !== null
        && numbersOfFilms !== null
        && whatRatingWillYouGive !== null
        //check whatRatingWillYouGive is number
        && isFinite(whatRatingWillYouGive)
        // check lastSeeMovie.length more than 50 characters
        && lastSeeMovie.length < 50))break;
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

////////////////////////////////////////////////////////

//todo using do_while loop method
/* 
// count movies which user looked
let numbersOfFilms = '';
// last movie which user looked
let lastSeeMovie = '';
// rating which user gives the movie
let whatRatingWillYouGive = '';

// create DB
const personalMovieDb = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
do {
    // ask user about movies and save it on variebels
    numbersOfFilms = prompt('How much movies did you see?');
    lastSeeMovie = prompt('What last movie did you see?');
    whatRatingWillYouGive = prompt('What rating will you give?');
} while(
    // look the answers from asks if they doesn't fit our questions we ask again
    (!isFinite(numbersOfFilms) || !isFinite(whatRatingWillYouGive)
      || numbersOfFilms === null || lastSeeMovie === null || whatRatingWillYouGive === null 
      || numbersOfFilms === '' || lastSeeMovie === '' || whatRatingWillYouGive === '')

);
// add value from numbersOfFilms to personalMovieDb.count object
personalMovieDb.count = numbersOfFilms;
// add value from lastSeeMovie and whatRatingWillYouGive to personalMovieDb.movies object
personalMovieDb.movies[lastSeeMovie] = whatRatingWillYouGive;
console.log(personalMovieDb);
*/
//////////////////////////////////////

//todo did the task from for loop method
/*
// create variebles for ask user about how much he did looked movies
let numbersOfFilms = '';
// create DB
const personalMovieDb = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//we iterate the answers if they wrong we ask again
for (let i = 0; i < 2; i++) {
    // create variebles for ask user about last movie and rating the movie
    numbersOfFilms = prompt('How much movies did you see?');
    let lastSeeMovie = prompt('What last movie did you see?');
    let whatRatingWillYouGive = prompt('What rating will you give?');

    if (
        // if the numbersOfFilms and whatRatingWillYouGive are number we go next
        isFinite(numbersOfFilms) && isFinite(whatRatingWillYouGive)
        // if the numbersOfFilms, lastSeeMovie, whatRatingWillYouGive are not a null
        //(user dont click censel or esc) we go next
        && numbersOfFilms !== null && lastSeeMovie !== null && whatRatingWillYouGive !== null 
        // if the user is not enter empty value we go next
        && numbersOfFilms !== '' && lastSeeMovie !== '' && whatRatingWillYouGive !== ''
    ) {
        // if all true we add the values on object
        personalMovieDb.count = +numbersOfFilms;
        personalMovieDb.movies[lastSeeMovie] = whatRatingWillYouGive;
    } else {
        // if false we go back and ask again user about movies
        alert('You give wrong answer, please try again')
        i--;
    }
}
console.log(personalMovieDb)
*/
// ?end loops
/////////////////////////////////////////

//todo usnig functions
// create DB
const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // create method toggle for privat 
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    // create methed for ask user about count movies
    start: function() {
        this.count = +prompt('How much movies did you see?');
        while(this.count === '' || this.count === null || isNaN(this.count)) {
            this.count = +prompt('How much movies did you see?');
        }
    },
    // create method for iterate questions
    rememberMyFilms: function() {
        //we iterate the answers if they wrong we ask again
        for (let i = 0; i < 2; i++) {
        // create variebles for ask user about last movie and rating the movie
        let lastSeeMovie = prompt('What last movie did you see?');
        let whatRatingWillYouGive = prompt('What rating will you give?');
        
        if (
            // if the whatRatingWillYouGive are number we go next
            isFinite(whatRatingWillYouGive)
            // if the numbersOfFilms, lastSeeMovie, whatRatingWillYouGive are not a null
            //(user dont click censel or esc) we go next
            && lastSeeMovie !== null && whatRatingWillYouGive !== null 
            // if the user is not enter empty value we go next
            && lastSeeMovie !== '' && whatRatingWillYouGive !== ''
        ) {
            // if all true we add the values on object
            personalMovieDb.movies[lastSeeMovie] = whatRatingWillYouGive;
        } else {
            // if false we go back and ask again user about movies
            alert('You give wrong answer, please try again');
            i--;
        }
    }
},
    // create method for detect person level about movies
    detectPersonalLevel: function () {
    // check if count movie more or equels 10 show the message
        if (personalMovieDb.count >= 10) {
            console.log('You have good expression!');
        } else if (personalMovieDb.count < 10) {
            console.log('You have bad expression!');
        }   else {console.log('Somthing going wrong!');}
    },
    // create method for check privat DB of person if false we show the DB
    showMyDB: function() {
        if (!this.privat) {
        console.log(personalMovieDb);
        }
    },
// create method for ask user 3 times about genere and push it in generes of DB
    writeYourGeneres: function() {
    for (let i = 1; i < 2; i++) {
        const yourGeneres = prompt(`Write your favorite generes with commans?`);
        
        if (yourGeneres !== '' && yourGeneres !== null) {
           personalMovieDb.genres = yourGeneres.toLowerCase().split(', ');
           personalMovieDb.genres.sort();
        } else {
            alert('You give wrong answer, please try again');
            i--;
        }
        yourGeneres.forEach((item, i) => {
            console.log(`Lovely genere ${i + 1} is -> ${item}`);
        });
    }

}

};

//////////////////////////////////////



