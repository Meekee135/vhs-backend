import { CommentService } from 'services/comment/comment.service';
import { ICommentService } from 'services/comment/domain/comment';
import { getMockMovieService } from 'services/movie/__test__/mock/movie.service';
import { MockCommentRepository } from './comment.repository';

const getMockCommentService = (): ICommentService =>
    new CommentService(new MockCommentRepository(), getMockMovieService());

export { getMockCommentService };
