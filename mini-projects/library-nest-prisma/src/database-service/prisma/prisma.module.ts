import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthorDbPrismaService } from './author-db-prisma.service';
import { BookDbPrismaService } from './book-db-prisma.service';

@Module({
    providers: [PrismaService, AuthorDbPrismaService, BookDbPrismaService],
    exports: [PrismaService, AuthorDbPrismaService, BookDbPrismaService]
})
export class PrismaModule {}
