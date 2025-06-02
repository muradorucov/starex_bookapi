import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Review } from '../reviews/review.entity'; 
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Review])],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule { }
