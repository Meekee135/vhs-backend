import { IMovieRepository, Movie, MovieForCreate, MovieId } from 'services/movie';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { MovieEntity } from './movie.entity';
import { MovieMapper } from './movie.mapper';

export class MovieRepository implements IMovieRepository {
    constructor(private readonly ormMovieRepository: Repository<MovieEntity>) {}

    async create(movieForCreate: MovieForCreate): Promise<Movie> {
        const entity = MovieMapper.movieToEntity({ ...movieForCreate, id: uuid() as MovieId });
        const savedEntity = await this.ormMovieRepository.save(entity);

        return MovieMapper.entityToMovie(savedEntity);
    }

    async getAll(): Promise<Movie[]> {
        const entities = await this.ormMovieRepository.find({ relations: this.getRelations() });

        return entities.map(MovieMapper.entityToMovie);
    }

    async getById(id: MovieId): Promise<Movie | undefined> {
        const entity = await this.ormMovieRepository.findOne(id, { relations: this.getRelations() });

        return entity && MovieMapper.entityToMovie(entity);
    }

    private getRelations(): string[] {
        return ['comments'];
    }
}
