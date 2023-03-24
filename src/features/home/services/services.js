import axios from 'axios';

const callApiMovieDB = async () => {
    let response = '';
    try {
        response = await axios.get(
            'https://api.themoviedb.org/3/movie/550?api_key=bf59697a3e467db135c80fcece32fa61',
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

const callApiMovieDBPopular = async () => {
    let response = '';
    try {
        response = await axios.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=bf59697a3e467db135c80fcece32fa61&page=1',
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export {callApiMovieDB, callApiMovieDBPopular};
