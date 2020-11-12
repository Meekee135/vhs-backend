import { Comment, CommentForCreate } from 'services/comment';
import { MovieId } from 'services/movie';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PresentCommentDto } from './dto/present-comment.dto';

export class CommentMapper {
    static createToCommentForCreate(dto: CreateCommentDto): CommentForCreate {
        return {
            movieId: dto.movieId as MovieId,
            text: dto.text,
        };
    }

    static commentToPresent(comment: Comment): PresentCommentDto {
        return {
            id: comment.id,
            movieId: comment.movieId,
            text: comment.text,
            date: comment.date.toISOString(),
        };
    }
}
