import { MovieNotFound } from '../../movie/domain/error';
import { ICommentService } from '../domain/comment';
import { getMockCommentService } from './mock/comment.service';

describe('CommentService', () => {
    let service: ICommentService;

    beforeEach(async () => {
        service = getMockCommentService();
    });

    describe('comment creation', () => {
        it('should create comment for movie', async () => {
            const text = 'my text comment';
            const comment = await service.create({ movieId: '0', text });

            expect(comment.success).toEqual(true);
            expect(comment.value.text).toEqual(text);
        });

        it('should return movie not found error', async () => {
            const comment = await service.create({ movieId: 'wrongId', text: 'text' });

            expect(comment.success).toEqual(false);
            expect(comment.error).toBeInstanceOf(MovieNotFound);
        });
    });

    describe('comment fetching', () => {
        it('should fetch all comments', async () => {
            const comments = await service.getAll();

            expect(comments[0].text).toEqual('test comment number 0');
        });
    });
});
