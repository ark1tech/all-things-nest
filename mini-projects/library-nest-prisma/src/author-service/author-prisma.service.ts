import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorDbPrismaService } from 'src/database-service/prisma/author-db-prisma.service';

@Injectable()
export class AuthorService {
    constructor(private author_db_prisma: AuthorDbPrismaService) {}

    async createAuthor(createAuthorDto: CreateAuthorDto) {
        return await this.author_db_prisma.createAuthor(createAuthorDto);
    }

    async findAllAuthor() {
        return await this.author_db_prisma.findAllAuthor();
    }

    async findOneAuthor(id: number) {
        return await this.author_db_prisma.findOneAuthor(id);
    }

    async updateAuthor(id: number, updateAuthorDto: UpdateAuthorDto) {
        return await this.author_db_prisma.updateAuthor(id, updateAuthorDto);
    }

    async removeAuthor(id: number) {
        return await this.author_db_prisma.removeAuthor(id);
    }


}
