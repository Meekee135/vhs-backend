import { CommentEntity } from 'database/comment';
import { MovieEntity } from 'database/movie';
import { getEnvVariableValue } from 'services/util';
import { ConnectionOptions } from 'typeorm';

const getConnectionConfig = (): ConnectionOptions => {
    return {
        type: 'postgres',
        host: getEnvVariableValue('POSTGRES_HOST'),
        port: parseInt(getEnvVariableValue('POSTGRES_PORT')),
        username: getEnvVariableValue('POSTGRES_USER'),
        password: getEnvVariableValue('POSTGRES_PASSWORD'),
        database: getEnvVariableValue('POSTGRES_DATABASE'),
        entities: [MovieEntity, CommentEntity],
        synchronize: true,
        ssl: { rejectUnauthorized: false },
    };
};

export { getConnectionConfig };
