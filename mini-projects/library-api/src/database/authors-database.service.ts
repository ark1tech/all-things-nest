import { IBook } from '../infrastructure/books/interfaces/book.interface';
import { IAuthor } from '../infrastructure/authors/interfaces/author.interface';
import { Injectable } from '@nestjs/common';
import {
    CreateAuthorDto,
    UpdateAuthorDto
} from 'src/infrastructure/authors/dto/authors.dto';

import { hashName, hashArrayName } from 'src/utils/hashNameToID';
import { libraryData } from 'src/utils/fetchLocalData';
import { toTitleCase } from 'src/utils/makeTitleCase';

@Injectable()
export class AuthorsDatabaseService {
    private authors: IAuthor[] = libraryData.authorList;
    private books: IBook[] = libraryData.bookList;

    getAllAuthors(): IAuthor[] {
        return this.authors;
    }

    getOneAuthorById(id: string) {
        return this.authors.find((author: IAuthor) => author.id === id);
    }

    createAuthor(createAuthorDto: CreateAuthorDto) {
        const authorId = hashName(createAuthorDto.name);
        const authorContact = createAuthorDto.contact || null;

        const newAuthor: IAuthor = {
            id: authorId,
            contact: authorContact,
            name: toTitleCase(createAuthorDto.name),
            books: hashArrayName(createAuthorDto.books)
        };
        this.authors.push(newAuthor);

        // Update relationship of authors and books
        createAuthorDto.books.forEach((authorBook) => {
            let isBookRecorded = false;
            this.books.forEach((book) => {
                if (book.id === hashName(authorBook)) {
                    book.authors.push(authorId);
                    isBookRecorded = true;
                }
            });
            if (!isBookRecorded) {
                this.books.push({
                    id: hashName(authorBook),
                    title: toTitleCase(authorBook),
                    authors: [authorId]
                });
            }
            // console.log(JSON.stringify(this.books, null, 2));
        });

        return newAuthor;
    }

    updateOneAuthorById(id: string, updateAuthorDto: UpdateAuthorDto) {
        const { name, contact, books } = updateAuthorDto;

        this.authors = this.authors.map((author) => {
            if (author.id === id) {
                if (name) {
                    author.name = toTitleCase(name);
                    author.id = hashName(name);
                }
                if (contact) author.contact = contact;
                if (books) author.books = hashArrayName(books);
            }
            return author;
        });

        return this.getOneAuthorById(id);
    }

    deleteOneAuthorById(id: string) {
        const authorToDelete = this.getOneAuthorById(id);

        this.authors = this.authors.filter(
            (author) => author !== authorToDelete
        );

        // Update relationship of authors and books
        this.books.forEach((book) => {
            book.authors = book.authors.filter(
                (author) => author !== authorToDelete.id
            );
        });

        return authorToDelete;
    }
}
