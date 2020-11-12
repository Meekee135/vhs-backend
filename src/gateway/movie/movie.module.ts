import { DynamicModule, Module, NestModule } from '@nestjs/common';
import { MOVIE_SERVICE } from 'gateway/ioc';
import { IMovieService } from 'services/movie';
import { MovieController } from './movie.controller';

@Module({})
export class MovieModule implements NestModule {
    static forRoot(movieService: IMovieService): DynamicModule {
        return {
            module: MovieModule,
            providers: [{ provide: MOVIE_SERVICE, useFactory: () => movieService }],
            controllers: [MovieController],
        };
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    configure(): void {}
}
