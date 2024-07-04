import { Module } from '@nestjs/common';
import { BooksModule } from './infrastructure/books/books.module';
import { AuthorsModule } from './infrastructure/authors/authors.module';
import { DatabaseService } from './infrastructure/database/database.service';

@Module({
    imports: [BooksModule, AuthorsModule],
    providers: [DatabaseService]
})
export class AppModule {}
