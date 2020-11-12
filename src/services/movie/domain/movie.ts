import { Comment } from 'services/comment';
import { MovieInfoApiError, MovieInfoNotFound } from 'services/movie-info';
import { MovieNotFound } from './error';
import { Genre } from './genre';
import { PosterUrl } from './poster';

type MovieId = string & { movieId: true };

type Movie = {
    id: MovieId;
    title: string;
    year: number;
    releaseDate: Date;
    durationMinutes?: number;
    genres: Genre[];
    plot: string;
    imdbRating?: number;
    metascore?: number;
    poster: PosterUrl;
    comments: Comment[];
};

type MovieCreationParams = {
    title: string;
    year?: number;
};

type MovieForCreate = Omit<Movie, 'id'>;

type MovieForUpdate = Partial<Omit<Movie, 'id'>>;

type IMovieService = {
    create(p: MovieCreationParams): Promise<Result<MovieInfoApiError | MovieInfoNotFound, Movie>>;
    getAll(): Promise<Movie[]>;
    getById(mId: MovieId): Promise<Result<MovieNotFound, Movie>>;
};

type IMovieRepository = {
    create(m: MovieForCreate): Promise<Movie>;
    getAll(): Promise<Movie[]>;
    getById(mId: MovieId): Promise<Movie | undefined>;
};

export { MovieId, Movie, MovieCreationParams, MovieForCreate, MovieForUpdate, IMovieService, IMovieRepository };
