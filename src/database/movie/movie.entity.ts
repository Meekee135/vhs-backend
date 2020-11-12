import { CommentEntity } from 'database/comment';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Movie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    year: number;

    @Column()
    releaseDate: Date;

    @Column({ nullable: true })
    durationMinutes?: number;

    @Column('simple-array')
    genres: string[];

    @Column({ default: '' })
    plot: string;

    @Column({ nullable: true, type: 'float' })
    imdbRating?: number;

    @Column({ nullable: true, type: 'float' })
    metascore?: number;

    @Column({ default: '' })
    poster: string;

    @OneToMany('Comment', 'movie')
    comments: CommentEntity[];
}

export { Movie as MovieEntity };
