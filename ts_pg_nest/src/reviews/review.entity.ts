import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Book } from '../books/book.entity';
@Entity()
class Review {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    rating!: number;

    @Column()
    comment!: string;

    @ManyToOne(() => Book, book => book.reviews, { onDelete: 'CASCADE' })
    book!: Book;
}

export { Review };