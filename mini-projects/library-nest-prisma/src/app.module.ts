import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

@Module({
    imports: [PrismaModule, AuthorModule, BookModule]
})
export class AppModule {}
