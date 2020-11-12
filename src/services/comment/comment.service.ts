import { IMovieService, MovieNotFound } from 'services/movie';
import { Comment, CommentForCreate, ICommentRepository, ICommentService } from './domain/comment';

export class CommentService implements ICommentService {
    constructor(private readonly commentRepository: ICommentRepository, private readonly movieService: IMovieService) {}

    async create(commentForCreate: CommentForCreate): Promise<Result<MovieNotFound, Comment>> {
        const movie = await this.movieService.getById(commentForCreate.movieId);

        if (!movie.success) {
            return { success: false, error: new MovieNotFound() };
        }

        const comment = await this.commentRepository.create(commentForCreate, movie.value);

        return { success: true, value: comment };
    }

    async getAll(): Promise<Comment[]> {
        return this.commentRepository.getAll();
    }
}
