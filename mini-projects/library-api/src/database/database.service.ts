import { IBook } from './../infrastructure/books/interfaces/book.interface';
import { IAuthor } from './../infrastructure/authors/interfaces/author.interface';
import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from 'src/infrastructure/authors/dto/authors.dto';
import { CreateBookDto } from 'src/infrastructure/books/dto/books.dto';
import { hashName } from 'src/utils/hasher';

import * as libraryData from './data/data.json';

@Injectable()
export class DatabaseService {
    private authors: IAuthor[] = libraryData.authorList;
    private books: IBook[] = libraryData.bookList;

    getAllAuthors(): IAuthor[] {
        return this.authors;
    }

    getAuthor(id: string) {
        return this.authors.find((author: IAuthor) => author.id === id);
    }

    // Updates Books memories
    // Books input should be separated by commas
    createAuthor(createAuthorDto: CreateAuthorDto) {
        const { nameInput, bookInput } = createAuthorDto;

        const newAuthor = {
            id: hashName(createAuthorDto.name),
            ...createAuthorDto
        };
        this.authors.push(newAuthor);
        return newAuthor;
    }
}
