type DirectorId = string & { directorId: true };

type Director = {
    id: DirectorId;
    name: string;
};

export { Director };
