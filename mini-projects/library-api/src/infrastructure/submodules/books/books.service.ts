import { hashName } from 'src/utils/hashNameToID';
import {
    Injectable,
    NotFoundException,
    UnprocessableEntityException
} from '@nestjs/common';

import { BooksDatabaseService } from 'src/database/books-database.service';
import { UpdateBookDto, CreateBookDto } from './dto/books.dto';

@Injectable()
export class BooksService {
    constructor(private booksDatabaseService: BooksDatabaseService) {}

    getAllBooks() {
        return this.booksDatabaseService.getAllBooks();
    }
\
    getOneBookById(id: string) {
        const author = this.booksDatabaseService.getOneBookById(id);
        if (!author) {
            throw new NotFoundException(`Book ID ${id} was not found!`);
        }
        return author;
    }

    createBook(createBookDto: CreateBookDto) {
        const bookIdToCreate = hashName(createBookDto.title);
        const author = this.booksDatabaseService.getOneBookById(bookIdToCreate);
        if (author) {
            throw new UnprocessableEntityException(
                `Book ${createBookDto.title} already exists!`
            );
        }
        return this.booksDatabaseService.createBook(createBookDto);
    }

    updateOneBookById(id: string, updateBookDto: UpdateBookDto) {
        this.getOneBookById(id);
        return this.booksDatabaseService.updateOneBookById(id, updateBookDto);
    }

    deleteOneBookById(id: string) {
        this.getOneBookById(id);
        return this.booksDatabaseService.deleteOneBookById(id);
    }
}
