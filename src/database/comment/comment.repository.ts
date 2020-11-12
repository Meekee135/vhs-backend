import { MovieMapper } from 'database/movie/movie.mapper';
import { Comment, CommentForCreate, CommentId, ICommentRepository } from 'services/comment';
import { Movie } from 'services/movie';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CommentEntity } from './comment.entity';
import { CommentMapper } from './comment.mapper';

export class CommentRepository implements ICommentRepository {
    constructor(private readonly commentOrmRepository: Repository<CommentEntity>) {}

    async create(commentForCreate: CommentForCreate, movie: Movie): Promise<Comment> {
        const preparedComment = { ...commentForCreate, id: uuid() as CommentId, date: new Date() };
        const movieEntity = MovieMapper.movieToEntity(movie);
        const commentEntity = CommentMapper.commentToEntity(preparedComment);
        const savedEntity = await this.commentOrmRepository.save({ ...commentEntity, movie: movieEntity });

        return CommentMapper.entityToComment(savedEntity);
    }

    async getAll(): Promise<Comment[]> {
        const entities = await this.commentOrmRepository.find({ relations: this.getRelations() });

        return entities.map(CommentMapper.entityToComment);
    }

    private getRelations(): string[] {
        return ['movie'];
    }
}
