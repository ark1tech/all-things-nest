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
import { EnhancedParseUUIDPipe } from '../../error-handling/pipes/EnhancedParseUUIDPipe';
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
    getOneAuthorById(
        @Param('id', new EnhancedParseUUIDPipe({ version: '5' })) id: string
    ) {
        return this.authorsService.getOneAuthorById(id);
    }

    @Post()
    createAuthor(@Body(ValidationPipe) createAuthorDto: CreateAuthorDto) {
        return this.authorsService.createAuthor(createAuthorDto);
    }

    @Put(':id')
    updateOneAuthorById(
        @Param('id', new EnhancedParseUUIDPipe({ version: '5' })) id: string,
        @Body(ValidationPipe) updateAuthorDto: UpdateAuthorDto
    ) {
        return this.authorsService.updateOneAuthorById(id, updateAuthorDto);
    }

    @Delete(':id')
    deleteOneAuthorById(
        @Param('id', new EnhancedParseUUIDPipe({ version: '5' })) id: string
    ) {
        return this.authorsService.deleteOneAuthorById(id);
    }
}
