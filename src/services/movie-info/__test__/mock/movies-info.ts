import { MovieInfo } from 'services/movie-info/domain/movie-info';

export const getMockMoviesInfo = (): MovieInfo[] => {
    return [
        {
            Title: 'Full Metal Jacket',
            Year: '1987',
            Released: '10 Jul 1987',
            Runtime: '116 min',
            Genre: 'Drama, War',
            Plot:
                'A two-segment look at the effect of the military mindset and war itself on Vietnam era Marines. The first half follows a group of recruits in boot camp under the command of the punishing Gunnery Sergeant Hartman. The second half shows one of those recruits, Joker, covering the war as a correspondent for Stars and Stripes, focusing on the Tet offensive.',
            Poster:
                'https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            Metascore: '76',
            imdbRating: '8.3',
        },
    ];
};
