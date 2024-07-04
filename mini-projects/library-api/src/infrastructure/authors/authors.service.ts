import { Injectable, NotFoundException } from '@nestjs/common';
import { IAuthor, Authors } from 'src/domain/model/authors';
import * as authorData from './data/authors.json';
import { CreateAuthorDto, UpdateAuthorDto } from './authors.dto';
import { hash } from 'src/domain/utils/hasher';

@Injectable()
export class AuthorsService {
    private authors: Authors = authorData;

    getAllAuthors() {
        return this.authors;
    }

    getAuthor(id: string) {
        const author = this.authors.find((author: IAuthor) => author.id === id);
        if (!author) {
            throw new NotFoundException(`Book with id ${id} not found`);
        }
        return author;
    }

    createAuthor(createAuthorDto: CreateAuthorDto) {
        const newAuthor = {
            id: hash(createAuthorDto.name),
            ...createAuthorDto
        };
        this.authors.push(newAuthor);
        return newAuthor;
    }

    // deleteAuthor(id:string) {
    //     const newAuthor = {
    //         id: hash(createAuthorDto.name),
    //     };
    //     this.authors.push(newAuthor);
    //     return newAuthor;
    // }
}
