import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { Review } from '../reviews/review.entity';
export declare class BookService {
    private bookRepository;
    private reviewRepository;
    constructor(bookRepository: Repository<Book>, reviewRepository: Repository<Review>);
    create(title: string, author: string): Promise<Book>;
    findAllFiltered(minRating?: number): Promise<{
        averageRating: number;
        id: number;
        title: string;
        author: string;
        reviews: Review[];
    }[]>;
    findOne(id: number): Promise<{
        averageRating: number | null;
        id: number;
        title: string;
        author: string;
        reviews: Review[];
    } | null>;
}
