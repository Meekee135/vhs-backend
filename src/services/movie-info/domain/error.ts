declare const movieInfoApiErrorTag: unique symbol;

class MovieInfoApiError extends Error {
    [movieInfoApiErrorTag]: true;

    constructor(message = 'unexpected movie info api error') {
        super(message);
    }
}

declare const movieInfoNotFoundTag: unique symbol;

class MovieInfoNotFound extends Error {
    [movieInfoNotFoundTag]: true;

    constructor(message = 'movie info not found') {
        super(message);
    }
}

export { MovieInfoApiError, MovieInfoNotFound };
