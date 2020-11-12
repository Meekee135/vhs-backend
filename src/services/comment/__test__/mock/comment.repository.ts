import { Comment, CommentForCreate, CommentId, ICommentRepository } from 'services/comment';
import { Movie } from 'services/movie';
import { getMockMovies } from 'services/movie/__test__/mock/movies';
import { v4 as uuid } from 'uuid';
import { getMockComments } from './comments';

export class MockCommentRepository implements ICommentRepository {
    comments: Comment[];
    movies: Movie[];

    constructor() {
        this.comments = getMockComments();
        this.movies = getMockMovies();
    }

    async create(commentForCreate: CommentForCreate, movie: Movie): Promise<Comment> {
        const comment = { id: uuid() as CommentId, ...commentForCreate, date: new Date(), movieId: movie.id };

        this.comments.push(comment);

        return comment;
    }

    async getAll(): Promise<Comment[]> {
        return this.comments;
    }
}
