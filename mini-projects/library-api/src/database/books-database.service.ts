import { IBook } from '../infrastructure/books/interfaces/book.interface';
import { IAuthor } from '../infrastructure/authors/interfaces/author.interface';
import { Injectable } from '@nestjs/common';
import {
    CreateBookDto,
    UpdateBookDto
} from 'src/infrastructure/books/dto/books.dto';

import { hashName, hashArrayName } from 'src/utils/hashNameToID';
import { libraryData } from 'src/utils/fetchLocalData';
import { toTitleCase } from 'src/utils/makeTitleCase';

@Injectable()
export class BooksDatabaseService {
    private authors: IAuthor[] = libraryData.authorList;
    private books: IBook[] = libraryData.bookList;

    getAllBooks(): IBook[] {
        return this.books;
    }

    getOneBookById(id: string) {
        return this.books.find((book: IBook) => book.id === id);
    }

    createBook(createBookDto: CreateBookDto) {
        const bookId = hashName(createBookDto.title);
        const bookPublishYear = createBookDto.published_year || null;

        const newBook: IBook = {
            id: bookId,
            title: toTitleCase(createBookDto.title),
            published_year: bookPublishYear,
            authors: hashArrayName(createBookDto.authors)
        };
        this.books.push(newBook);

        // Update relationship of authors and books
        createBookDto.authors.forEach((bookAuthor) => {
            let isAuthorRecorded = false;
            this.authors.forEach((author) => {
                if (author.id === hashName(bookAuthor)) {
                    author.books.push(bookId);
                    isAuthorRecorded = true;
                }
            });

            if (!isAuthorRecorded) {
                this.authors.push({
                    id: hashName(bookAuthor),
                    name: toTitleCase(bookAuthor),
                    books: [bookId]
                });
            }
        });
        // For debugging
        return newBook;
    }

    updateOneBookById(id: string, updateBookDto: UpdateBookDto) {
        const { title, published_year, authors } = updateBookDto;

        this.books = this.books.map((book) => {
            if (book.id === id) {
                if (title) {
                    book.title = toTitleCase(title);
                    book.id = hashName(title);
                }
                if (published_year) book.published_year = published_year;
                if (authors) book.authors = hashArrayName(authors);
            }
            return book;
        });
        // For debugging
        return this.getOneBookById(id);
    }

    deleteOneBookById(id: string) {
        const bookToDelete = this.getOneBookById(id);

        this.books = this.books.filter((book) => book !== bookToDelete);

        // Update relationship of authors and books
        this.authors.forEach((author) => {
            author.books = author.books.filter(
                (book) => book !== bookToDelete.id
            );
        });
        // For debugging
        return bookToDelete;
    }
}
