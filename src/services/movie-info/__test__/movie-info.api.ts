import { MovieInfoApiError, MovieInfoNotFound } from '../domain/error';
import { FindMovieInfoParams, IMovieInfoApi, MovieInfo } from '../domain/movie-info';
import { getMockMoviesInfo } from './mock/movies-info';

export class MockMovieInfoApi implements IMovieInfoApi {
    moviesInfo: MovieInfo[];

    constructor() {
        this.moviesInfo = getMockMoviesInfo();
    }

    async find({
        title,
        year,
    }: FindMovieInfoParams): Promise<Result<MovieInfoApiError | MovieInfoNotFound, MovieInfo>> {
        const movieInfo = this.moviesInfo.find(info => info.Title === title && info.Year === year?.toString());

        return movieInfo ? { success: true, value: movieInfo } : { success: false, error: new MovieInfoNotFound() };
    }
}
