import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { Book } from '../books/book.entity';

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(Review)
        private reviewRepository: Repository<Review>,
        @InjectRepository(Book)
        private bookRepository: Repository<Book>
    ) { }

    async create(bookId: number, rating: number, comment: string) {
        const book = await this.bookRepository.findOneBy({ id: bookId });
        if (!book) throw new Error('Book not found');

        const review = this.reviewRepository.create({ rating, comment, book });
        return this.reviewRepository.save(review);
    }
}
