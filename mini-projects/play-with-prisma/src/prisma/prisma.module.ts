import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';
import { PostService } from './post.service';

@Module({
  providers: [PrismaService, UserService, PostService],
  exports: [PrismaService, UserService, PostService],
})
export class PrismaModule {}
