declare const movieNotFoundTag: unique symbol;

class MovieNotFound extends Error {
    [movieNotFoundTag]: true;

    constructor(message = 'movie not found') {
        super(message);
    }
}

export { MovieNotFound };
