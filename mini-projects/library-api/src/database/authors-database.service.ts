import { IBook } from '../infrastructure/books/interfaces/book.interface';
import { IAuthor } from '../infrastructure/authors/interfaces/author.interface';
import { Injectable } from '@nestjs/common';
import {
    CreateAuthorDto,
    UpdateAuthorDto
} from 'src/infrastructure/authors/dto/authors.dto';

import { hashName } from 'src/utils/hashNameToID';
import { libraryData } from 'src/utils/fetchLocalData';
import { toTitleCase } from 'src/utils/makeTitleCase';

@Injectable()
export class AuthorsDatabaseService {
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
        createAuthorDto.books.forEach((authorBook) => {
            let isBookRecorded = false;
            this.books.forEach((book) => {
                if (
                    book.title.trim().toLowerCase() ===
                    authorBook.trim().toLowerCase()
                ) {
                    book.authors.push(hashName(createAuthorDto.name));
                    isBookRecorded = true;
                }
            });

            // TODO : Make this a createBook method
            if (!isBookRecorded) {
                this.books.push({
                    id: hashName(authorBook),
                    title: toTitleCase(authorBook),
                    authors: [authorId]
                });
            }
            // console.log(JSON.stringify(this.books, null, 2));
        });

        const newAuthor: IAuthor = {
            id: authorId,
            ...createAuthorDto
        };

        newAuthor.books = newAuthor.books.map((book) => hashName(book));

        this.authors.push(newAuthor);

        // For debugging
        return newAuthor;
    }

    updateAuthor(id: string, updateAuthorDto: UpdateAuthorDto) {
        const { name, contact, books } = updateAuthorDto;

        this.authors = this.authors.map((author) => {
            if (author.id === id) {
                if (name) {
                    author.name = name;
                    author.id = hashName(name);
                }
                if (contact) author.contact = contact;
                if (books) author.books = books;
            }
            // console.log(JSON.stringify(this.books, null, 2));
            return author;
        });
    }

    deleteAuthor(id: string) {
        const authorToDelete = this.getAuthor(id);
        this.authors = this.authors.filter(
            (author) => author !== authorToDelete
        );
        // Update relation
        this.books.forEach((book) => {
            book.authors = book.authors.filter(
                (author) => author !== authorToDelete.id
            );
        });

        // For debugging
        // return authorToDelete;
        return [authorToDelete, ...this.authors, ...this.books];
    }

    // * Book methods *
}
