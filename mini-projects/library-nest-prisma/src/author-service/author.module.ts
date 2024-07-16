import { Module } from '@nestjs/common';
import { AuthorService } from './author-prisma.service';
import { AuthorController } from './author.controller';
// import { PrismaModule } from '../database-service/prisma/prisma.module';

@Module({
    // imports: [PrismaModule],
    controllers: [AuthorController],
    providers: [AuthorService]
})
export class AuthorModule {}
