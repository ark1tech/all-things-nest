import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body
} from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
    constructor(private authorsService: AuthorsService) {}

    @Get()
    getAllAuthors() {
        return this.authorsService.getAllAuthors();
    }

    @Get(':id')
    getAuthor(@Param('id') id: string) {
        return this.authorsService.getAuthor(id);
    }

    @Post()
    createAuthor(@Body('name') name: string) {
        return this.authorsService.createAuthor({ name });
    }

    @Put()
    updateAuthor() {
        return this.authorsService.getAllAuthors();
    }

    @Delete()
    deleteAuthor() {
        return this.authorsService.getAllAuthors();
    }
}
