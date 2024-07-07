import { Injectable } from '@nestjs/common';

import { AuthorsDatabaseService } from 'src/database/authors-database.service';
import { UpdateAuthorDto, CreateAuthorDto } from './dto/authors.dto';

@Injectable()
export class AuthorsService {
    constructor(private authorsDatabaseService: AuthorsDatabaseService) {}

    getAllAuthors() {
        return this.authorsDatabaseService.getAllAuthors();
    }

    getAuthor(id: string) {
        return this.authorsDatabaseService.getAuthor(id);
    }

    createAuthor(createAuthorDto: CreateAuthorDto) {
        return this.authorsDatabaseService.createAuthor(createAuthorDto);
    }

    updateAuthor(id: string, updateAuthorDto: UpdateAuthorDto) {
        return this.authorsDatabaseService.updateAuthor(id, updateAuthorDto);
    }

    deleteAuthor(id: string) {
        return this.authorsDatabaseService.deleteAuthor(id);
    }
}
