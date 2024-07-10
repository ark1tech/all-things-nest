import { IAuthor } from '../../infrastructure/submodules/authors/interfaces/author.interface';
import { IBook } from '../../infrastructure/submodules/books/interfaces/book.interface';


interface IAuthorBook {
    bookId: string;
    authorId: string;
}

export interface ILibrary {
    authorList: IAuthor[];
    bookList: IBook[];
    idAuthorBook: IAuthorBook[];
}
