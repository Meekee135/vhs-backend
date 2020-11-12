type Result<E, T> = { success: false; error: E } | { success: true; value: T };
type Maybe<T> = T | undefined;
