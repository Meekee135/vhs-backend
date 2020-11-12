import { IMovieRepository, Movie } from 'services/movie';
import { MovieForCreate, MovieId } from 'services/movie/domain/movie';
import { v4 as uuid } from 'uuid';
import { getMockMovies } from './movies';

export class MockMovieRepository implements IMovieRepository {
    movies: Movie[];

    constructor() {
        this.movies = getMockMovies();
    }

    async getById(movieId: MovieId): Promise<Movie | undefined> {
        return this.movies.find(movie => movie.id === movieId);
    }

    async create(movieForCreate: MovieForCreate): Promise<Movie> {
        const movie = { id: uuid() as MovieId, ...movieForCreate };

        this.movies.push(movie);

        return movie;
    }

    async getAll(): Promise<Movie[]> {
        return this.movies;
    }
}
