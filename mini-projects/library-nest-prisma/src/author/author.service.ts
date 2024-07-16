import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorService {
    constructor(private prisma: PrismaService) {}

    create(createAuthorDto: CreateAuthorDto) {
        return 'This action adds a new author';
    }

    findAll() {
        return this.prisma.author.findMany({ where: { published: true } });
    }

    findOne(id: number) {
        return `This action returns a #${id} author`;
    }

    update(id: number, updateAuthorDto: UpdateAuthorDto) {
        return `This action updates a #${id} author`;
    }

    remove(id: number) {
        return `This action removes a #${id} author`;
    }
}
