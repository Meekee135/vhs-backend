import { BadRequestException, Body, Controller, Get, Inject, NotFoundException, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { MOVIE_SERVICE } from 'gateway/ioc';
import { IMovieService, MovieNotFound } from 'services/movie';
import { CreateMovieParamsDto } from './dto/create-movie.dto';
import { PresentMovieDto } from './dto/present-movie.dto';
import { MovieMapper } from './movie.mapper';

@ApiTags('movie')
@Controller('movie')
export class MovieController {
    constructor(@Inject(MOVIE_SERVICE) private readonly movieService: IMovieService) {}

    @ApiNotFoundResponse()
    @ApiBadRequestResponse()
    @Post()
    async createMovie(@Body() createMovieParamsDto: CreateMovieParamsDto): Promise<PresentMovieDto> {
        const movieCreationParams = MovieMapper.createToMovieCreationParams(createMovieParamsDto);
        const comment = await this.movieService.create(movieCreationParams);

        if (!comment.success && comment.error instanceof MovieNotFound)
            throw new NotFoundException(comment.error.message);
        if (!comment.success) throw new BadRequestException(comment.error.message);

        return MovieMapper.movieToPresent(comment.value);
    }

    @Get()
    async getAllMovies(): Promise<PresentMovieDto[]> {
        const comments = await this.movieService.getAll();

        return comments.map(MovieMapper.movieToPresent);
    }
}
