let movies = [
    {
        id:0,
        name: "Ford v Ferrari",
        score: 9 
    },
    {
        id:1,
        name: "Knives Out",
        score: 8
    },
    {
        id:2,
        name: "Frozen2",
        score: 9
    },
    {
        id:3,
        name: "Cats",
        score: 4
    }
];
export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanMovies.length){
        movies = cleanMovies;
        return true;
    }else{
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};