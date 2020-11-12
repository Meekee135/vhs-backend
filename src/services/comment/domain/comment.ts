import { Movie, MovieId, MovieNotFound } from 'services/movie';

type CommentId = string & { commentId: true };

type Comment = {
    id: CommentId;
    movieId: MovieId;
    date: Date;
    text: string;
};

type CommentForCreate = Omit<Comment, 'id' | 'date'>;

type CommentForUpdate = Pick<Comment, 'text'>;

type ICommentService = {
    create(c: CommentForCreate): Promise<Result<MovieNotFound, Comment>>;
    getAll(): Promise<Comment[]>;
};

type ICommentRepository = {
    create(c: CommentForCreate, m: Movie): Promise<Comment>;
    getAll(): Promise<Comment[]>;
};

export { CommentId, Comment, CommentForCreate, CommentForUpdate, ICommentService, ICommentRepository };
