import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { UpdateAuthorDto, CreateAuthorDto } from './dto/authors.dto';

@Injectable()
export class AuthorsService {
    constructor(private databaseService: DatabaseService) {}

    getAllAuthors() {
        return this.databaseService.getAllAuthors();
    }

    getAuthor(id: string) {
        return this.databaseService.getAuthor(id);
    }

    createAuthor(createAuthorDto: CreateAuthorDto) {
        return this.databaseService.createAuthor(createAuthorDto);
    }

    updateAuthor(id: string, updateAuthorDto: UpdateAuthorDto) {
        return this.databaseService.updateAuthor(id, updateAuthorDto);
    }

    deleteAuthor(id: string) {
        return this.databaseService.deleteAuthor(id);
    }
}
