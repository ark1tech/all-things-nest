import { Module } from '@nestjs/common';
import { BookService } from './book-prisma.service';
import { BookController } from './book.controller';
import { PrismaModule } from '../database-service/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [BookController],
    providers: [BookService]
})
export class BookModule {}
