import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
    @ApiProperty({ example: 5, minimum: 1, maximum: 5 })
    rating!: number;

    @ApiProperty({ example: 'Möhtəşəm əsər!' })
    comment!: string;
}
