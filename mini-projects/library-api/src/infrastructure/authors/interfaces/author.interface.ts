import { IBook } from '../../books/interfaces/book.interface';

export interface IAuthor {
    id: string;
    name: string;
    books: IBook['id'][];
}

