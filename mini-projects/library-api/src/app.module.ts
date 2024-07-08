import { Module } from '@nestjs/common';
// import { BooksModule } from './infrastructure/books/books.module';
import { AuthorsModule } from './infrastructure/authors/authors.module';
import { BooksModule } from './infrastructure/books/books.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [AuthorsModule, BooksModule, DatabaseModule]
})
export class AppModule {}
    