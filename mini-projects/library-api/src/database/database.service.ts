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


    // * Author methods *

    getAllAuthors(): IAuthor[] {
        return this.authors;
    }

    getAuthor(id: string) {
        return this.authors.find((author: IAuthor) => author.id === id);
    }

    // Updates Books memories
    // Books input should be separated by ;;
    createAuthor(createAuthorDto: CreateAuthorDto) {
        const { nameInput, booksInput } = createAuthorDto;

        // Create a UUID
        const authorId = hashName(nameInput);

        // Update the authors array in books
        const authorBookArray = booksInput
            .split(';;')
            .map((book) => book.trim());
        authorBookArray.forEach((authorBook) =>
            this.books.forEach((book) => {
                if (book.title === authorBook)
                    book.authors.push(hashName(nameInput));
            })
        );

        const newAuthor = {
            id: authorId,
            name: nameInput,
            books: authorBookArray
        };

        this.authors.push(newAuthor);

        // For debugging
        return newAuthor;
    }

    deleteAuthor(id: string) {
        const authorToDelete = this.authors.find((author) => author.id === id);
        this.authors = this.authors.filter(
            (author) => author !== authorToDelete
        );

        // For debugging
        return authorToDelete;
    }

    // * Book methods *


}
