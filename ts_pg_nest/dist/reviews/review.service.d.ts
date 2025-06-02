import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { Book } from '../books/book.entity';
export declare class ReviewService {
    private reviewRepository;
    private bookRepository;
    constructor(reviewRepository: Repository<Review>, bookRepository: Repository<Book>);
    create(bookId: number, rating: number, comment: string): Promise<Review>;
}
