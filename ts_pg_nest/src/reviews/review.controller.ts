import { Controller, Post, Param, Body } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reviews')
@Controller('books/:bookId/reviews')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) { }

    @Post()
    create(
        @Param('bookId') bookId: string,
        @Body() body: CreateReviewDto,
    ) {
        return this.reviewService.create(+bookId, body.rating, body.comment);
    }
}
