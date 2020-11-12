import { DynamicModule, Module, NestModule } from '@nestjs/common';
import { CommentEntity, CommentRepository } from 'database/comment';
import { MovieEntity, MovieRepository } from 'database/movie';
import { CommentService } from 'services/comment';
import { MovieService } from 'services/movie';
import { Connection } from 'typeorm';
import { CommentModule } from './comment/comment.module';
import { MovieModule } from './movie/movie.module';
import { MovieInfoApi } from './movieInfo/movie-info.api';

@Module({})
export class AppModule implements NestModule {
    static async forRoot(connection: Connection): Promise<DynamicModule> {
        const movieInfoApi = new MovieInfoApi();

        const movieRepository = new MovieRepository(connection.getRepository(MovieEntity));
        const movieService = new MovieService(movieRepository, movieInfoApi);
        const movieModule = MovieModule.forRoot(movieService);

        const commentRepository = new CommentRepository(connection.getRepository(CommentEntity));
        const commentService = new CommentService(commentRepository, movieService);
        const commentModule = CommentModule.forRoot(commentService);

        return { imports: [movieModule, commentModule], module: AppModule };
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    configure(): void {}
}
