import { ILibrary } from '../../database/interfaces/library.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IAuthor } from 'src/domain/model/authors';
import { CreateAuthorDto, UpdateAuthorDto } from './dto/authors.dto';
import { hashName } from 'src/domain/utils/hasher';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthorsService {
    constructor(private databaseService: DatabaseService) {}

    getAllAuthors(): ILibrary {
        return this.databaseService.library;
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
            id: hashName(createAuthorDto.name),
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
