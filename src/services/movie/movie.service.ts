import { IMovieInfoApi, MovieInfo, MovieInfoApiError, MovieInfoNotFound } from 'services/movie-info';
import { MovieNotFound } from './domain/error';
import { Genre } from './domain/genre';
import { IMovieRepository, IMovieService, Movie, MovieCreationParams, MovieForCreate, MovieId } from './domain/movie';
import { PosterUrl } from './domain/poster';

export class MovieService implements IMovieService {
    constructor(
        private readonly movieRepository: IMovieRepository,
        private readonly externalMovieInfoApi: IMovieInfoApi,
    ) {}

    async create(creationParams: MovieCreationParams): Promise<Result<MovieInfoApiError | MovieInfoNotFound, Movie>> {
        const info = await this.externalMovieInfoApi.find(creationParams);

        if (!info.success) {
            return info;
        }

        const prepared = this.prepareForCreation(info.value);
        const created = await this.movieRepository.create(prepared);

        return { success: true, value: created };
    }

    async getAll(): Promise<Movie[]> {
        return this.movieRepository.getAll();
    }

    async getById(id: MovieId): Promise<Result<MovieNotFound, Movie>> {
        const movie = await this.movieRepository.getById(id);

        return movie ? { success: true, value: movie } : { success: false, error: new MovieNotFound() };
    }

    private prepareForCreation(info: MovieInfo): MovieForCreate {
        const genres = info.Genre.split(',').map(genre => genre.trim()) as Genre[];
        const durationMinutes = parseInt(info.Runtime);
        const imdbRating = parseFloat(info.imdbRating);
        const metascore = parseFloat(info.Metascore);

        return {
            title: info.Title,
            year: parseInt(info.Year),
            releaseDate: new Date(info.Released),
            durationMinutes: isNaN(durationMinutes) ? undefined : durationMinutes,
            plot: info.Plot,
            genres,
            imdbRating: isNaN(imdbRating) ? undefined : imdbRating,
            metascore: isNaN(metascore) ? undefined : metascore,
            poster: info.Poster as PosterUrl,
            comments: [],
        };
    }
}
