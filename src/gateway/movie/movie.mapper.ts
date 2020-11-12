import { CommentMapper } from 'gateway/comment/comment.mapper';
import { Movie, MovieCreationParams } from 'services/movie';
import { CreateMovieParamsDto } from './dto/create-movie.dto';
import { PresentMovieDto } from './dto/present-movie.dto';

export class MovieMapper {
    static createToMovieCreationParams(dto: CreateMovieParamsDto): MovieCreationParams {
        return {
            title: dto.title,
            year: dto.year,
        };
    }

    static movieToPresent(movie: Movie): PresentMovieDto {
        return {
            id: movie.id,
            title: movie.title,
            year: movie.year,
            releaseDate: movie.releaseDate.toISOString(),
            durationMinutes: movie.durationMinutes,
            genres: movie.genres,
            plot: movie.plot,
            imdbRating: movie.imdbRating,
            metascore: movie.metascore,
            poster: movie.poster,
            comments: movie.comments.map(CommentMapper.commentToPresent),
        };
    }
}
