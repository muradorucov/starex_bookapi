import { Controller, Post, Get, Param, Body, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Books')
@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Post()
    create(@Body() body: CreateBookDto) {
        return this.bookService.create(body.title, body.author);
    }

    @Get()
    @ApiQuery({ name: 'ratingMin', required: false, example: 4 })
    findAll(@Query('ratingMin') ratingMin?: string) {
        return this.bookService.findAllFiltered(parseFloat(ratingMin ?? '0'));
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.bookService.findOne(+id);
    }
}
