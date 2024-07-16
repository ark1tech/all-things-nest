import { Module } from '@nestjs/common';
import { PrismaModule } from './database-service/prisma/prisma.module';
import { AuthorModule } from './author-service/author.module';
import { BookModule } from './book-service/book.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        PrismaModule,
        AuthorModule,
        BookModule
        // TypeOrmModule.forRoot({
        //     autoLoadEntities: true,
        // })
    ]
})
export class AppModule {}
