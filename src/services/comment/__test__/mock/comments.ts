import { MovieId } from 'services/movie';
import { Comment, CommentId } from '../../domain/comment';

export const getMockComments = (): Comment[] => {
    return [
        {
            id: '0' as CommentId,
            date: new Date('2020-11-11T11:53:41.667Z'),
            movieId: '0' as MovieId,
            text: 'test comment number 0',
        },
    ];
};
