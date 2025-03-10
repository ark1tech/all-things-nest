import { IBook } from '../infrastructure/submodules/books/interfaces/book.interface';
import { IAuthor } from '../infrastructure/submodules/authors/interfaces/author.interface';
import { Injectable } from '@nestjs/common';
import {
    CreateAuthorDto,
    UpdateAuthorDto
} from 'src/infrastructure/submodules/authors/dto/authors.dto';

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
            if (!isBookRecorded) {
                this.books.push({
                    id: hashName(authorBook),
                    title: toTitleCase(authorBook),
                    authors: [authorId]
                });
            } else {
                this.books.forEach((book) => {
                    if (book.id === hashName(authorBook)) {
                        book.authors.push(authorId);
                        isBookRecorded = true;
                    }
                });
            }
            // console.log(JSON.stringify(this.books, null, 2));
        });
        // For debugging
        return newAuthor;
    }

    updateOneAuthorById(id: string, updateAuthorDto: UpdateAuthorDto) {
        const { name, contact, books } = updateAuthorDto;

        this.authors = this.authors.map((author) => {
            if (author.id !== id) {
                return author;
            }
            return {
                ...author,
                name: name ? toTitleCase(name) : author.name,
                id: name ? hashName(name) : author.name,
                contact: contact ?? author.contact,
                books: books ? hashArrayName(books) : author.books
            };
        });
        // For debugging
        return this.getOneAuthorById(id);
    }

    async deleteOneAuthorById(id: string) {
        const authorToDelete = this.getOneAuthorById(id);

        this.authors = this.authors.filter(
            (author) => author !== authorToDelete
        );

        // Update relationship of authors and books
        // this.books.forEach((book) => {
        //     book.authors = book.authors.filter(
        //         (author) => author !== authorToDelete.id
        //     );
        // });

        const promises = this.books.map((book) => {
            book.authors = book.authors.filter(
                (author) => author !== authorToDelete.id
            );
        });
        await Promise.all(promises);

        // For debugging
        return authorToDelete;
    }
}
