import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { Book } from '../books/book.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Review, Book])],
    providers: [ReviewService],
    controllers: [ReviewController],
})
export class ReviewModule { }
