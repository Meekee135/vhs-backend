import { MovieEntity } from 'database/movie';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column()
    date: Date;

    @ManyToOne('Movie', 'comments')
    movie?: MovieEntity;
}

export { Comment as CommentEntity };
