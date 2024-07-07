import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body
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
    createAuthor(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorsService.createAuthor(createAuthorDto);
    }

    @Put()
    updateAuthor(@Body() id: string, updateAuthorDto: UpdateAuthorDto) {
        return this.authorsService.updateAuthor(id, updateAuthorDto);
    }

    @Delete(':id')
    deleteAuthor(@Param('id') id: string) {
        return this.authorsService.deleteAuthor(id);
    }
}
