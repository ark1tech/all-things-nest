import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AuthorDbPrismaService {
    constructor(private prisma: PrismaService) {}

    // TODO implement different relational CRUD 

}
