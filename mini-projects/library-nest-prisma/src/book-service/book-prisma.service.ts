import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { BookDbPrismaService } from 'src/database-service/prisma/book-db-prisma.service';

@Injectable()
export class AuthorService {
    constructor(private book_db_prisma: BookDbPrismaService) {}

    createBook(createAuthorDto: CreateAuthorDto) {
        return this.book_db_prisma.createBook(createAuthorDto);
    }

    findAllBook() {
        return this.book_db_prisma.findAllBook();
    }

    findOneBook(id: number) {
        return this.book_db_prisma.findOneBook(id);
    }

    updateBook(id: number, updateAuthorDto: UpdateAuthorDto) {
        return this.book_db_prisma.updateBook(id, updateAuthorDto);
    }

    removeBook(id: number) {
      return this.book_db_prisma.removeBook(id);
    }
}
