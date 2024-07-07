import { Module } from '@nestjs/common';
// import { BooksModule } from './infrastructure/books/books.module';
import { AuthorsModule } from './infrastructure/authors/authors.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [AuthorsModule, DatabaseModule]
})
export class AppModule {}
    