import { Review } from '../reviews/review.entity';
export declare class Book {
    id: number;
    title: string;
    author: string;
    reviews: Review[];
}
