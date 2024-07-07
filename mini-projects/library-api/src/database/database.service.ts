import { IBook } from './../infrastructure/books/interfaces/book.interface';
import { IAuthor } from './../infrastructure/authors/interfaces/author.interface';
import { Injectable } from '@nestjs/common';
import {
    CreateAuthorDto,
    UpdateAuthorDto
} from 'src/infrastructure/authors/dto/authors.dto';

import { hashName } from 'src/utils/hashNameToID';
import { libraryData } from 'src/utils/fetchLocalData';

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

    createAuthor(createAuthorDto: CreateAuthorDto) {
        const authorId = hashName(createAuthorDto.name);

        // Update relation
        createAuthorDto.books.forEach((authorBook) =>
            this.books.forEach((book) => {
                if (book.title === authorBook)
                    book.authors.push(hashName(createAuthorDto.name));
            })
        );

        const newAuthor: IAuthor = {
            id: authorId,
            ...createAuthorDto
        };

        this.authors.push(newAuthor);

        // For debugging
        return newAuthor;
    }

    updateAuthor(id: string, updateAuthorDto: UpdateAuthorDto) {
        const { nameInput, contactInput, booksInput } = updateAuthorDto;

        this.authors = this.authors.map((author) => {
            if (author.id === id) {
                nameInput ? (author.name = nameInput) : '';
                booksInput ? (author.books = booksInput) : '';
            }
        });
    }

    deleteAuthor(id: string) {
        const authorToDelete = this.getAuthor(id);
        this.authors = this.authors.filter(
            (author) => author !== authorToDelete
        );

        // For debugging
        return authorToDelete;
    }

    // * Book methods *
}
