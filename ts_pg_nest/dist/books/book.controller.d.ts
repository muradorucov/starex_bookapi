import { BookService } from './book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(body: {
        title: string;
        author: string;
    }): Promise<import("./book.entity").Book>;
    findAll(): Promise<import("./book.entity").Book[]>;
    findOne(id: string): Promise<{
        averageRating: number | null;
        id: number;
        title: string;
        author: string;
        reviews: import("../reviews/review.entity").Review[];
    } | null>;
}
