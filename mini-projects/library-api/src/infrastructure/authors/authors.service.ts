import { hashName } from 'src/utils/hashNameToID';
import { Injectable, NotFoundException } from '@nestjs/common';

import { AuthorsDatabaseService } from 'src/database/authors-database.service';
import { UpdateAuthorDto, CreateAuthorDto } from './dto/authors.dto';

@Injectable()
export class AuthorsService {
    constructor(private authorsDatabaseService: AuthorsDatabaseService) {}

    getAllAuthors() {
        return this.authorsDatabaseService.getAllAuthors();
    }

    getOneAuthorById(id: string) {
        const author = this.authorsDatabaseService.getOneAuthorById(id);
        if (!author) {
            throw new NotFoundException(`Author ID ${id} was not found!`);
        }
        return author;
    }

    createAuthor(createAuthorDto: CreateAuthorDto) {
        const authorIdToCreate = hashName(createAuthorDto.name);
        const author = this.authorsDatabaseService.getOneAuthorById(authorIdToCreate);
        if (author) {
            throw new NotFoundException(
                `Author ${createAuthorDto.name} already exists!`
            );
        }
        return this.authorsDatabaseService.createAuthor(createAuthorDto);
    }

    updateOneAuthorById(id: string, updateAuthorDto: UpdateAuthorDto) {
        this.getOneAuthorById(id);
        return this.authorsDatabaseService.updateOneAuthorById(id, updateAuthorDto);
    }

    deleteOneAuthorById(id: string) {
        this.getOneAuthorById(id);
        return this.authorsDatabaseService.deleteOneAuthorById(id);
    }
}
