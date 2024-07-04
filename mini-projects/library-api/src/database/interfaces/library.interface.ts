import { IAuthor } from '../../infrastructure/authors/interfaces/author.interface';
import { IBook } from '../../infrastructure/books/interfaces/book.interface';

export interface ILibrary {
    authorList: IAuthor[];
    bookList: IBook[];
}
