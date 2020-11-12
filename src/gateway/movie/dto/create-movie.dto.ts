import { IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateMovieParamsDto {
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;
}
