import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(body: CreateBookDto): Promise<import("./book.entity").Book>;
    findAll(ratingMin?: string): Promise<{
        averageRating: number;
        id: number;
        title: string;
        author: string;
        reviews: import("../reviews/review.entity").Review[];
    }[]>;
    findOne(id: string): Promise<{
        averageRating: number | null;
        id: number;
        title: string;
        author: string;
        reviews: import("../reviews/review.entity").Review[];
    } | null>;
}
