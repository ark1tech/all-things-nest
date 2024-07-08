import { Module } from '@nestjs/common';
// import { BooksModule } from './infrastructure/books/books.module';
import { AuthorsModule } from './infrastructure/authors/authors.module';
import { BooksModule } from './infrastructure/books/books.module';
import { DatabaseModule } from './database/database.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './infrastructure/common/filters/http-exception.filter';

@Module({
    imports: [AuthorsModule, BooksModule, DatabaseModule],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter
        }
    ]
})
export class AppModule {}
