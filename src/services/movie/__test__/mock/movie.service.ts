import { MovieService } from 'services/movie';
import { IMovieService } from 'services/movie/domain/movie';
import { MockMovieInfoApi } from 'services/movie-info/__test__/movie-info.api';
import { MockMovieRepository } from './movie.repository';

const getMockMovieService = (): IMovieService => new MovieService(new MockMovieRepository(), new MockMovieInfoApi());

export { getMockMovieService };
