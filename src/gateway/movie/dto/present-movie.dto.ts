import { PresentCommentDto } from 'gateway/comment/dto/present-comment.dto';

export class PresentMovieDto {
    readonly id: string;
    readonly title: string;
    readonly year: number;
    readonly releaseDate: string;
    readonly durationMinutes?: number;
    readonly genres: string[];
    readonly plot: string;
    readonly imdbRating?: number;
    readonly metascore?: number;
    readonly poster: string;
    readonly comments: PresentCommentDto[];
}
