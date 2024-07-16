import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class BookDbPrismaService {
    constructor(private prisma: PrismaService) {}

    

}
