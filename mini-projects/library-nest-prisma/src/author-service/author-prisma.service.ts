import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorDbPrismaService } from 'src/database-service/prisma/author-db-prisma.service';

@Injectable()
export class AuthorService {
    constructor(private author_db_prisma: AuthorDbPrismaService) {}

    createAuthor(createAuthorDto: CreateAuthorDto) {
        return this.author_db_prisma.createAuthor(createAuthorDto);
    }

    findAllAuthor() {
        return this.author_db_prisma.findAllAuthor();
    }

    findOneAuthor(id: number) {
        return this.author_db_prisma.findOneAuthor();
    }

    updateAuthor(id: number, updateAuthorDto: UpdateAuthorDto) {
        return this.author_db_prisma.updateAuthor(id, updateAuthorDto);
    }

    removeAuthor(id: number) {
        return this.author_db_prisma.removeAuthor(id);
    }
}
