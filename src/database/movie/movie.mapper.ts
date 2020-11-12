import { CommentMapper } from 'database/comment/comment.mapper';
import { Genre, Movie, MovieId, PosterUrl } from 'services/movie';
import { MovieEntity } from './movie.entity';

export class MovieMapper {
    static movieToEntity(movie: Movie): MovieEntity {
        return {
            id: movie.id,
            title: movie.title,
            year: movie.year,
            releaseDate: movie.releaseDate,
            durationMinutes: movie.durationMinutes,
            genres: movie.genres,
            plot: movie.plot,
            imdbRating: movie.imdbRating,
            metascore: movie.metascore,
            poster: movie.poster,
            comments: movie.comments.map(CommentMapper.commentToEntity),
        };
    }

    static entityToMovie(entity: MovieEntity): Movie {
        return {
            id: entity.id as MovieId,
            title: entity.title,
            year: entity.year,
            releaseDate: entity.releaseDate,
            durationMinutes: entity.durationMinutes,
            genres: entity.genres as Genre[],
            plot: entity.plot,
            imdbRating: entity.imdbRating,
            metascore: entity.metascore,
            poster: entity.poster as PosterUrl,
            comments: entity.comments.map(CommentMapper.entityToComment),
        };
    }
}
