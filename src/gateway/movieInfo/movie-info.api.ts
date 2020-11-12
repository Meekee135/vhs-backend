import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import {
    FindMovieInfoParams,
    IMovieInfoApi,
    MovieInfo,
    MovieInfoApiError,
    MovieInfoNotFound,
} from 'services/movie-info';
import { getEnvVariableValue } from 'services/util';

@Injectable()
export class MovieInfoApi implements IMovieInfoApi {
    apiKey: string;

    constructor() {
        this.apiKey = getEnvVariableValue('MOVIE_INFO_API_KEY');
    }

    async find(params: FindMovieInfoParams): Promise<Result<MovieInfoApiError | MovieInfoNotFound, MovieInfo>> {
        const { title, year } = params;
        const response = await fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&t=${title}&y=${year}`);
        const info = await response.json();
        const apiTrue = 'True';

        if (!info) {
            return { success: false, error: new MovieInfoApiError() };
        }
        if (info.Response !== apiTrue) {
            return { success: false, error: new MovieInfoNotFound() };
        }

        return { success: true, value: info };
    }
}
