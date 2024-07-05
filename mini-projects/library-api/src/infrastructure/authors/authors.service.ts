import { Injectable, NotFoundException } from '@nestjs/common';

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
