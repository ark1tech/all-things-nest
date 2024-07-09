import { IAuthor } from '../../infrastructure/submodules/authors/interfaces/author.interface';
import { IBook } from '../../infrastructure/submodules/books/interfaces/book.interface';

export interface ILibrary {
    authorList: IAuthor[];
    bookList: IBook[];
}
