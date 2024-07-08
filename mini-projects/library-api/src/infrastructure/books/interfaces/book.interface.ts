import { IAuthor } from '../../authors/interfaces/author.interface';

export interface IBook {
    id: string;
    title: string;
    published_year?: number;
    authors: IAuthor['id'][];
}

// export type Books = IBook[]
