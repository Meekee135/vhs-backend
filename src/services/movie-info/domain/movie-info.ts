import { MovieInfoApiError, MovieInfoNotFound } from './error';

type MovieInfo = {
    Title: string;
    Year: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Plot: string;
    imdbRating: string;
    Metascore: string;
    Poster: string;
};

type FindMovieInfoParams = {
    title: string;
    year?: number;
};

type IMovieInfoApi = {
    find(p: FindMovieInfoParams): Promise<Result<MovieInfoApiError | MovieInfoNotFound, MovieInfo>>;
};

export { MovieInfo, FindMovieInfoParams, IMovieInfoApi };
