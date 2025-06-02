import { Book } from '../books/book.entity';
declare class Review {
    id: number;
    rating: number;
    comment: string;
    book: Book;
}
export { Review };
