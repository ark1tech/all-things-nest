import { Module } from '@nestjs/common';
import { AuthorsDatabaseService } from './authors-database.service';
import { BooksDatabaseService } from './books-database.service';

@Module({
    providers: [BooksDatabaseService, AuthorsDatabaseService],
    exports: [BooksDatabaseService, AuthorsDatabaseService]
})
export class DatabaseModule {}
