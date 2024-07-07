import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ValidationPipe
} from '@nestjs/common';
import { UpdateAuthorDto, CreateAuthorDto } from './dto/authors.dto';
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
    createAuthor(@Body(new ValidationPipe()) createAuthorDto: CreateAuthorDto) {
        return this.authorsService.createAuthor(createAuthorDto);
    }

    @Put(':id')
    updateAuthor(
        @Param('id') id: string,
        @Body(new ValidationPipe()) updateAuthorDto: UpdateAuthorDto
    ) {
        return this.authorsService.updateAuthor(id, updateAuthorDto);
    }

    @Delete(':id')
    deleteAuthor(@Param('id') id: string) {
        return this.authorsService.deleteAuthor(id);
    }
}
