import { DynamicModule, Module, NestModule } from '@nestjs/common';
import { COMMENT_SERVICE } from 'gateway/ioc';
import { ICommentService } from 'services/comment';
import { CommentController } from './comment.controller';

@Module({})
export class CommentModule implements NestModule {
    static forRoot(commentService: ICommentService): DynamicModule {
        return {
            module: CommentModule,
            providers: [{ provide: COMMENT_SERVICE, useFactory: () => commentService }],
            controllers: [CommentController],
        };
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    configure(): void {}
}
