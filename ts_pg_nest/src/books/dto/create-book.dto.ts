import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Cinayət və Cəza' })
  title!: string;

  @ApiProperty({ example: 'Fyodor Dostoyevski' })
  author!: string;
}
