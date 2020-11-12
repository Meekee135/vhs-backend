import { IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
    @IsUUID()
    readonly movieId: string;

    @IsString()
    readonly text: string;
}
