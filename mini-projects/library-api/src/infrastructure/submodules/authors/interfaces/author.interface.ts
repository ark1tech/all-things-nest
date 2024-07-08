import { IBook } from '../../books/interfaces/book.interface';

export interface IAuthor {
    id: string;
    name: string;
    contact?: string;
    books: IBook['id'][];
}
