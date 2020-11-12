import { PosterUrl } from 'services/movie/domain/poster';
import { Movie, MovieId } from '../../domain/movie';

export const getMockMovies = (): Movie[] => {
    return [
        {
            id: '0' as MovieId,
            title: 'Full Metal Jacket',
            durationMinutes: 116,
            genres: ['Drama', 'War'],
            year: 1987,
            imdbRating: 8.3,
            metascore: 76,
            plot:
                'A two-segment look at the effect of the military mindset and war itself on Vietnam era Marines. The first half follows a group of recruits in boot camp under the command of the punishing Gunnery Sergeant Hartman. The second half shows one of those recruits, Joker, covering the war as a correspondent for Stars and Stripes, focusing on the Tet offensive.',
            poster: 'https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg' as PosterUrl,
            releaseDate: new Date('10 Jul 1987'),
            comments: [],
        },
    ];
};
