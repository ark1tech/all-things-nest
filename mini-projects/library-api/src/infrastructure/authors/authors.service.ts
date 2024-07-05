import { Injectable, NotFoundException } from '@nestjs/common';

import { ILibrary } from '../../database/interfaces/library.interface';
import { IAuthor } from './interfaces/author.interface';

import { CreateAuthorDto, UpdateAuthorDto } from './dto/authors.dto';

import { hashName } from 'src/domain/utils/hasher';

import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthorsService {
    constructor(private databaseService: DatabaseService) {}


    // deleteAuthor(id:string) {
    //     const newAuthor = {
    //         id: hash(createAuthorDto.name),
    //     };
    //     this.authors.push(newAuthor);
    //     return newAuthor;
    // }
}
