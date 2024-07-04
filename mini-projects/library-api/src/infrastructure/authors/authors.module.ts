import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import 

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService, ]
})
export class AuthorsModule {}
