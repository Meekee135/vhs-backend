import { Comment, CommentId } from 'services/comment';
import { MovieId } from 'services/movie';
import { CommentEntity } from './comment.entity';

export class CommentMapper {
    static commentToEntity(comment: Comment): CommentEntity {
        return {
            id: comment.id,
            text: comment.text,
            date: comment.date,
        };
    }

    static entityToComment(entity: CommentEntity): Comment {
        return {
            id: entity.id as CommentId,
            movieId: (entity.movie?.id || '') as MovieId,
            text: entity.text,
            date: entity.date,
        };
    }
}
