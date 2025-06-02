import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(bookId: string, body: CreateReviewDto): Promise<import("./review.entity").Review>;
}
