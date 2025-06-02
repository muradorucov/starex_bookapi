import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(bookId: string, body: {
        rating: number;
        comment: string;
    }): Promise<import("./review.entity").Review>;
}
