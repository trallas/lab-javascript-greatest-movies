

//1
function getAllDirectors(moviesArray) {
    return moviesArray.map((elem)=> {
        return elem.director;
    })
}

//2
function howManyMovies(moviesArray) {
    let moviesSteven = moviesArray.filter((movie) => {
        return movie.director == 'Steven Spielberg';
    });
    let moviesStevenDrama = moviesSteven.filter((movie) => {
        return movie.genre.includes("Drama");
    })
    // console.log(moviesStevenDrama.length)
    return moviesStevenDrama.length;
  }

//3
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) return 0;
    let moviesScores = moviesArray.map((movie) => {
        return movie.score;
    });

    let moviesScoresFiltered = moviesScores.filter((score) => {
      return score;}) let sumScore = moviesScoresFiltered.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }) 

    let averageScore = sumscore / moviesArray.length;
}

//4
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama"); 
    })
    return scoresAverage(dramaMovies);
}

//5
function orderByYear(moviesArray) {
    let orderedMovies = moviesArray.map((movie) => {
        return movie;
    })
  
    orderedMovies.sort((a, b,c) => {
        if (a.title < b.title) return -1; 
        if (a.title > b.title) return 1; 
        if (a.title === 0) return 0;
        if (c.title ==c.title) return 3;
    });
  
    orderedMovies.sort((a, b) => {
        return a.year - b.year;
    });
    return orderedMovies;
  }
//6
function orderAlphabetically(moviesArray) {
    let orderedMovies = moviesArray.map((movie) => {
        return movie.title;
    });
    orderedMovies.sort();
    if (orderedMovies.length > 30) orderedMovies.splice(30);
    return orderedMovies;
}