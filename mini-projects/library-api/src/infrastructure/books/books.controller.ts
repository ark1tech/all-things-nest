import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ValidationPipe
} from '@nestjs/common';
import { EnhancedParseUUIDPipe } from './../../utils/custom-pipes/custom-uuid.pipe';
import { UpdateBookDto, CreateBookDto } from './dto/books.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get()
    getAllBooks() {
        return this.booksService.getAllBooks();
    }

    @Get(':id')
    getOneBookById(
        @Param('id', new EnhancedParseUUIDPipe({ version: '5' })) id: string
    ) {
        return this.booksService.getOneBookById(id);
    }

    @Post()
    createBook(@Body(new ValidationPipe()) createBookDto: CreateBookDto) {
        return this.booksService.createBook(createBookDto);
    }

    @Put(':id')
    updateOneBookById(
        @Param('id', new EnhancedParseUUIDPipe({ version: '5' })) id: string,
        @Body(new ValidationPipe()) updateBookDto: UpdateBookDto
    ) {
        return this.booksService.updateOneBookById(id, updateBookDto);
    }

    @Delete(':id')
    deleteOneBookById(
        @Param('id', new EnhancedParseUUIDPipe({ version: '5' })) id: string
    ) {
        return this.booksService.deleteOneBookById(id);
    }
}
