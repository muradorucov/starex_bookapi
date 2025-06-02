import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { Review } from '../reviews/review.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  create(title: string, author: string) {
    const book = this.bookRepository.create({ title, author });
    return this.bookRepository.save(book);
  }

  // Yeni filterlənə bilən list metodu
  async findAllFiltered(minRating: number = 0) {
    const books = await this.bookRepository.find({ relations: ['reviews'] });

    return books
      .map(book => {
        const ratings = book.reviews.map(r => r.rating);
        const averageRating =
          ratings.length > 0
            ? ratings.reduce((a, b) => a + b, 0) / ratings.length
            : 0;

        return { ...book, averageRating };
      })
      .filter(book => book.averageRating >= minRating);
  }

  async findOne(id: number) {
    const book = await this.bookRepository.findOne({
      where: { id },
      relations: ['reviews'],
    });

    if (book) {
      const ratings = book.reviews.map(r => r.rating);
      const averageRating =
        ratings.length > 0
          ? ratings.reduce((a, b) => a + b, 0) / ratings.length
          : null;

      return { ...book, averageRating };
    }

    return null;
  }
}
