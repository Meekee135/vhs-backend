import { BadRequestException, Body, Controller, Get, Inject, NotFoundException, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { COMMENT_SERVICE } from 'gateway/ioc';
import { ICommentService } from 'services/comment';
import { MovieNotFound } from 'services/movie';
import { CommentMapper } from './comment.mapper';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PresentCommentDto } from './dto/present-comment.dto';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
    constructor(@Inject(COMMENT_SERVICE) private readonly commentService: ICommentService) {}

    @ApiNotFoundResponse()
    @ApiBadRequestResponse()
    @Post()
    async createComment(@Body() createCommentDto: CreateCommentDto): Promise<PresentCommentDto> {
        const commentForCreate = CommentMapper.createToCommentForCreate(createCommentDto);
        const comment = await this.commentService.create(commentForCreate);

        if (!comment.success && comment.error instanceof MovieNotFound)
            throw new NotFoundException(comment.error.message);
        if (!comment.success) throw new BadRequestException(comment.error.message);

        return CommentMapper.commentToPresent(comment.value);
    }

    @Get()
    async getAllComments(): Promise<PresentCommentDto[]> {
        const comments = await this.commentService.getAll();

        return comments.map(CommentMapper.commentToPresent);
    }
}
