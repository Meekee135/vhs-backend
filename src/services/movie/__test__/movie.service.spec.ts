import { MovieInfoNotFound } from '../../movie-info/domain/error';
import { MovieNotFound } from '../domain/error';
import { IMovieService, MovieId } from '../domain/movie';
import { getMockMovieService } from './mock/movie.service';
import { getMockMovies } from './mock/movies';

describe('MovieService', () => {
    let service: IMovieService;

    beforeEach(async () => {
        service = getMockMovieService();
    });

    describe('movie creation', () => {
        it('should create a movie', async () => {
            const title = 'Full Metal Jacket';
            const movie = await service.create({ title, year: 1987 });

            expect(movie.success).toEqual(true);
            expect(movie.value.title).toEqual(title);
        });

        it('should return movie info not found error while creation', async () => {
            const movie = await service.create({ title: 'noname', year: 1987 });

            expect(movie.success).toEqual(false);
            expect(movie.error).toBeInstanceOf(MovieInfoNotFound);
        });
    });

    describe('movie fetching', () => {
        it('should fetch all the movies', async () => {
            const movies = await service.getAll();

            expect(movies).toEqual(getMockMovies());
        });

        it('should fetch the movie by id', async () => {
            const movie = await service.getById('0' as MovieId);

            expect(movie.success).toEqual(true);
            expect(movie.value.title).toEqual('Full Metal Jacket');
        });

        it('should return not found movie error while fetching', async () => {
            const movie = await service.getById('wrongId' as MovieId);

            expect(movie.success).toEqual(false);
            expect(movie.error).toBeInstanceOf(MovieNotFound);
        });
    });
});
